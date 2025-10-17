// security.js
(function () {
  // --- CONFIG (عدل النص هنا لو أردت) ---
  const WARNING_TEXT = "تحذير: لا تقم بالتقاط الشاشة. إذا كررت ذلك سيتم غلق حسابك.";
  const MORE_TEXT = "تم تسجيل محاولة أخذ لقطة شاشة. هذا السلوك مخالف لشروط الاستخدام.";
  const STORAGE_KEY = "__qcms_screenshot_attempts";
  const SHOW_DURATION_MS = 12000; // مدة ظهور التنبيه (مللي ثانية)

  // --- helper: create modal & styles ---
  function injectStylesAndModal() {
    if (document.getElementById("qcms-secure-modal")) return;
    const style = document.createElement("style");
    style.textContent = `
      #qcms-secure-modal {
        position: fixed; inset: 0;
        display: flex; align-items: center; justify-content: center;
        background: rgba(4,8,12,0.65);
        z-index: 99999;
        visibility: hidden;
        opacity: 0;
        transition: opacity .25s ease, visibility .25s;
        font-family: 'Cairo', system-ui, Arial, sans-serif;
      }
      #qcms-secure-modal.visible { visibility: visible; opacity: 1; }
      #qcms-secure-card {
        max-width: 720px; width: 94%;
        background: linear-gradient(180deg, rgba(12,14,18,0.98), rgba(20,22,26,0.98));
        color: #fff;
        border-radius: 14px;
        box-shadow: 0 8px 28px rgba(0,0,0,0.6);
        padding: 22px;
        display: flex;
        gap: 18px;
        align-items: flex-start;
      }
      #qcms-secure-icon {
        flex: 0 0 64px;
        height: 64px;
        border-radius: 12px;
        background: linear-gradient(135deg,#ff7e5f,#feb47b);
        display:flex; align-items:center; justify-content:center;
        font-weight:700; font-size:24px; color:#111;
      }
      #qcms-secure-content h3 { margin:0 0 6px 0; font-size:18px; color:#ffd; font-weight:800; }
      #qcms-secure-content p { margin:0; color:#ccc; line-height:1.45; }
      #qcms-secure-actions { margin-top:12px; display:flex; gap:10px; flex-wrap:wrap; }
      .qcms-secure-btn {
        background: linear-gradient(90deg,#007b9e,#48cae4);
        border:none; color:#fff; padding:8px 12px; border-radius:10px;
        cursor:pointer; font-weight:700;
      }
      .qcms-secure-btn.warn { background: linear-gradient(90deg,#ff5f6d,#ffc371); color:#111; }
      @media (max-width:520px){
        #qcms-secure-card { flex-direction: column; align-items: stretch; padding:16px; }
        #qcms-secure-icon { width:54px; height:54px; }
      }
    `;
    document.head.appendChild(style);

    const modal = document.createElement("div");
    modal.id = "qcms-secure-modal";
    modal.innerHTML = `
      <div id="qcms-secure-card" role="alert" aria-live="assertive">
        <div id="qcms-secure-icon">!</div>
        <div id="qcms-secure-content">
          <h3>تنبيه أمني</h3>
          <p id="qcms-secure-msg">${WARNING_TEXT}</p>
          <div id="qcms-secure-sub" style="margin-top:8px;color:#bfbfc2;font-size:13px">${MORE_TEXT}</div>
          <div id="qcms-secure-actions">
            <button class="qcms-secure-btn" id="qcms-secure-ok">حسنًا</button>
            <button class="qcms-secure-btn warn" id="qcms-secure-report">أرسل تقريرًا</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("qcms-secure-ok").onclick = hideModal;
    document.getElementById("qcms-secure-report").onclick = () => {
      // مكان لإرسال تقرير إلى الخادم (مثال مسيطر عليه: فقط سجل في localStorage الآن)
      saveAttempt({ reason: "user_report_clicked", ts: Date.now() });
      hideModal();
      alert("تم إرسال بلاغ (محليًا). لإرسال بلاغ فعليًا قم بربط fetch لخادمك.");
    };
  }

  // --- modal show/hide ---
  let hideTimeout = null;
  function showModal() {
    injectStylesAndModal();
    const modal = document.getElementById("qcms-secure-modal");
    const msg = document.getElementById("qcms-secure-msg");
    if (modal.classList.contains("visible")) {
      // إذا كان مرئيًا بالفعل, قم بتحديث الوقت
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(hideModal, SHOW_DURATION_MS);
      return;
    }
    modal.classList.add("visible");
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideModal, SHOW_DURATION_MS);
  }
  function hideModal() {
    const modal = document.getElementById("qcms-secure-modal");
    if (!modal) return;
    modal.classList.remove("visible");
    clearTimeout(hideTimeout);
  }

  // --- logging attempts ---
  function loadAttempts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (e) { return []; }
  }
  function saveAttempt(entry) {
    const list = loadAttempts();
    list.push(entry);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  // --- detection heuristics ---
  let lastVisibilityHiddenAt = 0;
  function onVisibilityChange() {
    if (document.hidden) {
      // صفحة أصبحت مخفية → ممكن أداة قص / Alt-Tab
      lastVisibilityHiddenAt = Date.now();
      saveAttempt({ type: "visibility_hidden", ts: lastVisibilityHiddenAt });
      showModal();
    } else {
      // عادت الصفحة للعرض
      const t = Date.now();
      const dt = t - lastVisibilityHiddenAt;
      if (lastVisibilityHiddenAt && dt < 15000) {
        // إذا الاختفاء والعودة خلال 15s → مشبوه
        saveAttempt({ type: "visibility_return", dt, ts: t });
        showModal();
      }
      lastVisibilityHiddenAt = 0;
    }
  }

  function onBlur() {
    // فقدان التركيز على النافذة (قد يكون فتح أداة القص)
    saveAttempt({ type: "blur", ts: Date.now() });
    // ننتظر لحظة ونرى إن عاد المستخدم
    setTimeout(() => {
      showModal();
    }, 400);
  }

  function onKeyDown(e) {
    try {
      // PrintScreen detection (غير مضمون في كل المتصفحات) + بعض اختصارات اللقطات الشائعة
      const key = e.key || e.keyCode || "";
      const isPrint = key === "PrintScreen" || key === "Print" || key === "PrintScr" || key === "PrintScreen";
      const ctrlShiftS = e.ctrlKey && e.shiftKey && (key === 'S' || key === 's' || e.keyCode === 83);
      const metaShiftS = e.metaKey && e.shiftKey && (key === 'S' || key === 's');

      if (isPrint || ctrlShiftS || metaShiftS) {
        saveAttempt({ type: "key_suspected", key: key, ts: Date.now() });
        showModal();
        // حاول منع السلوك داخل المتصفح (يمكن للمستخدم تجاوزه)
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
      }
    } catch (err) { console.error(err); }
  }

  function onBeforePrint() {
    // محاولة حفظ/طباعة الصفحة
    saveAttempt({ type: "before_print", ts: Date.now() });
    showModal();
  }
  function onAfterPrint() {
    saveAttempt({ type: "after_print", ts: Date.now() });
    showModal();
  }

  function onContextMenu(e) {
    // منع/التنبيه عند فتح قائمة السياق لنسخ/حفظ الصورة
    saveAttempt({ type: "contextmenu", ts: Date.now() });
    // اختيارياً يمكن إظهار تحذير:
    // showModal();
    // لمنع القائمة: e.preventDefault();
  }

  // --- init listeners (invoke once DOM ready) ---
  function init() {
    injectStylesAndModal();

    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });
    window.addEventListener("blur", onBlur, { passive: true });
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    document.addEventListener("contextmenu", onContextMenu, true);

    // سجل تهيئة المراقبة
    saveAttempt({ type: "secure_monitor_inited", ts: Date.now(), ua: navigator.userAgent });
  }

  // Start when DOM ready or immediately.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // --- اختيار: وظيفة لإرسال السجلات للخادم (مثال) ---
  window.qcmsSendSecurityLogs = function (endpointUrl) {
    const logs = loadAttempts();
    if (!endpointUrl) return Promise.reject("Provide endpoint URL");
    return fetch(endpointUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ logs, site: location.pathname, ts: Date.now() })
    }).then(r => r.json());
  };
})();

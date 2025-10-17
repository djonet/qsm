// 🛡️ security.js — رسالة تحذير تظهر مرة واحدة فقط عند أول دخول للموقع

(function () {
  const shownKey = "__warning_shown_once";

  // إذا شاهد المستخدم الرسالة من قبل فلا تظهر مجددًا
  if (localStorage.getItem(shownKey)) {
    console.log("✅ التحذير عُرض مسبقًا، لن يظهر مجددًا.");
    return;
  }

  // إنشاء نافذة التحذير
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.92)";
  modal.style.display = "flex";
  modal.style.flexDirection = "column";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = 99999;
  modal.style.color = "#fff";
  modal.style.textAlign = "center";
  modal.style.fontFamily = "'Cairo', sans-serif";
  modal.style.padding = "20px";

  modal.innerHTML = `
    <h2 style="color:#ff6666;font-size:24px;">🚫 تحذير أمني مهم</h2>
    <p style="font-size:16px;line-height:1.6;max-width:600px;margin:15px 0;">
      يمنع <strong>مشاركة الحساب</strong> أو <strong>التقاط الشاشة</strong> أو نشر محتوى الموقع بأي وسيلة.<br>
      أي مخالفة لذلك ستؤدي إلى <strong>إغلاق الحساب نهائيًا</strong>.
    </p>
    <button id="okBtn" style="
      margin-top:20px;
      background:linear-gradient(90deg,#00b4d8,#48cae4);
      border:none;
      color:white;
      font-weight:bold;
      font-size:16px;
      padding:10px 25px;
      border-radius:25px;
      cursor:pointer;
      transition:0.3s;">✅ فهمت</button>
  `;

  document.body.appendChild(modal);

  // عند الضغط على "فهمت" تُغلق وتُحفظ في localStorage
  document.getElementById("okBtn").onclick = () => {
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.5s ease";
    setTimeout(() => modal.remove(), 500);
    localStorage.setItem(shownKey, "true");
  };
})();

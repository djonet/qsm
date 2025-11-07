// mask_parentheses_in_options.js
// يخفي أي شيء بين قوسين ( ... ) داخل خيارات الأجوبة فقط.
// لا يشتغل إلا إذا كانت الصفحة تحتوي: <body data-qcm-clean="1">

(function () {
  // اشتغل فقط في الصفحات المفعّلة
  if (!document.body || document.body.getAttribute("data-qcm-clean") !== "1") return;

  // CSS لإخفاء الجزء المغلّف
  (function ensureStyle() {
    if (document.getElementById("qcm-paren-style")) return;
    const style = document.createElement("style");
    style.id = "qcm-paren-style";
    // اختر display:none لإزالة القوسين وما بينهما بدون ترك فراغ
    // لو حابب تترك المساحة بدون نص، بدّلها إلى: .qcm-paren-hide{ visibility:hidden; }
    style.textContent = ".qcm-paren-hide{ display:none !important; }";
    document.head.appendChild(style);
  })();

  // العناصر المحتملة لخيارات الأجوبة (عدّل أو زد إن احتجت)
  const OPTION_SELECTOR = [
    ".answer", ".answers .option", ".answer-option", ".qcm-option",
    ".choice", ".proposition", "li", "button"
  ].join(",");

  // نطابق أي قوسين دائريين ومحتواهما، بدون تعمّق (أبسط شيء ويكفي)
  const reParen = /\([^)]*\)/g;

  const SKIP = new Set(["script","style","textarea","code","pre","noscript"]);

  function wrapMatchesInTextNode(node) {
    const parent = node.parentNode;
    if (!parent || SKIP.has(parent.nodeName.toLowerCase())) return;

    const text = node.nodeValue;
    let m, last = 0, touched = false;
    reParen.lastIndex = 0;

    const frag = document.createDocumentFragment();

    while ((m = reParen.exec(text)) !== null) {
      // الجزء قبل المطابقة
      if (m.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      }
      // لفّ القوسين وما بينهما داخل span مخفي
      const span = document.createElement("span");
      span.className = "qcm-paren-hide";
      span.textContent = m[0];   // نترك النص كما هو لكن مخفي بصريًا
      frag.appendChild(span);

      last = m.index + m[0].length;
      touched = true;
      if (reParen.lastIndex === m.index) reParen.lastIndex++; // أمان ضد الدورات
    }

    if (!touched) return;

    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    parent.replaceChild(frag, node);
  }

  function processOptionEl(el) {
    // نمشي على النصوص داخل عنصر الخيار فقط
    const walker = document.createTreeWalker(
      el,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(n) {
          const p = n.parentNode?.nodeName?.toLowerCase?.() || "";
          return SKIP.has(p) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    let n;
    while ((n = walker.nextNode())) wrapMatchesInTextNode(n);
  }

  function runOnce() {
    document.querySelectorAll(OPTION_SELECTOR).forEach(processOptionEl);
  }

  // شغّل بعد اكتمال بناء الخيارات
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runOnce);
  } else {
    runOnce();
  }

  // لو أُضيفت خيارات لاحقًا (ديناميكيًا) نعيد الإخفاء تلقائيًا
  let t;
  const obs = new MutationObserver(() => {
    clearTimeout(t);
    t = setTimeout(runOnce, 80);
  });
  obs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["class"] });
})();

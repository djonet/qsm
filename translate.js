// translate.js — النسخة النهائية الشاملة 🔥
window.addEventListener("DOMContentLoaded", () => {
  const lang =
    (localStorage.getItem("language") ||
      document.documentElement.lang ||
      "ar").toLowerCase();

  // ✅ الترجمة الأساسية
  const translations = {
    ar: {
      "هذه هي إجابتي": "هذه هي إجابتي",
      "🔁 إعادة المحاولة": "🔁 إعادة المحاولة",
      "إعادة المحاولة": "إعادة المحاولة",
      "💡 عرض الإجابة الصحيحة": "💡 عرض الإجابة الصحيحة",
      "عرض الإجابة الصحيحة": "عرض الإجابة الصحيحة",
      "الرجوع للدروس": "الرجوع للدروس",
      "✅ إجابتك صحيحة!": "✅ إجابتك صحيحة!",
      "❌ إجابتك خاطئة": "❌ إجابتك خاطئة",
      "❗ لم تختر أي إجابة": "❗ لم تختر أي إجابة",
      "الدرس": "الدرس",
    },
    fr: {
      "هذه هي إجابتي": "C’est ma réponse",
      "🔁 إعادة المحاولة": "🔁 Réessayer",
      "إعادة المحاولة": "Réessayer",
      "💡 عرض الإجابة الصحيحة": "💡 Voir la bonne réponse",
      "عرض الإجابة الصحيحة": "Voir la bonne réponse",
      "الرجوع للدروس": "Retour aux leçons",
      "✅ إجابتك صحيحة!": "✅ Bonne réponse !",
      "❌ إجابتك خاطئة": "❌ Mauvaise réponse",
      "❗ لم تختر أي إجابة": "❗ Vous n’avez rien sélectionné",
      "الدرس": "Leçon",
    },
  };

  const t = translations[lang] || translations.ar;

  // ✅ ضبط الاتجاه تلقائيًا
  document.body.dir = lang === "fr" ? "ltr" : "rtl";
  document.body.style.textAlign = lang === "fr" ? "left" : "right";

  // ✅ دالة الترجمة العامة (تعمل على النصوص الحالية والمستقبلية)
  function translateElements(root = document) {
    root.querySelectorAll("button, div, span, h2, h3, p").forEach((el) => {
      const txt = el.textContent.trim();
      if (t[txt]) el.textContent = t[txt];
    });

    // ترجمة كلمة "الدرس" داخل العنوان
    const lesson = document.getElementById("lessonTitle");
    if (lesson && lesson.textContent.includes("الدرس"))
      lesson.textContent = lesson.textContent.replace("الدرس", t["الدرس"]);
  }

  // ✅ ترجمة النصوص عند التحميل
  translateElements(document);

  // ✅ مراقبة أي عناصر جديدة تُضاف لاحقًا (مثل الأزرار بعد الضغط)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1) translateElements(node);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

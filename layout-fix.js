// layout-fix.js
window.addEventListener('DOMContentLoaded', () => {
  const htmlLang = document.documentElement.lang || 'ar';

  // إذا كانت الصفحة فرنسية، اجعل الاتجاه LTR
  if (htmlLang === 'fr' || htmlLang.startsWith('fr')) {
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';

    // تأكد أن كل العناصر النصية تتبع الاتجاه الصحيح
    document.querySelectorAll('.question-block, .answer, h2, h3, p, .container')
      .forEach(el => {
        el.style.direction = 'ltr';
        el.style.textAlign = 'left';
      });
  }
});

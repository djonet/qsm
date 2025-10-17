// qcms-data.js
// بنية مبسطة: السنة → رقم EMD → المقياس → [أسئلة]

const QCMS = {
  2024: {
    1: {
      "Pathologie": [
        {
          question: "QCM 1 : La dent joue un rôle dans :",
          answers: [
            { text: "A. La mastication", correct: true },
            { text: "B. La respiration", correct: false },
            { text: "C. La phonation", correct: true },
            { text: "D. L’esthétique", correct: true }
          ]
        },
        {
          question: "QCM 2 : Les tissus durs de la dent sont :",
          answers: [
            { text: "A. L’émail", correct: true },
            { text: "B. La dentine", correct: true },
            { text: "C. Le cément", correct: true },
            { text: "D. La pulpe", correct: false }
          ]
        },
        {
          question: "QCM 3 : La pulpe dentaire contient :",
          answers: [
            { text: "A. Des nerfs", correct: true },
            { text: "B. Des vaisseaux sanguins", correct: true },
            { text: "C. De l’émail", correct: false },
            { text: "D. Des odontoblastes", correct: true }
          ]
        },
        {
          question: "QCM 4 : La dent est composée de :",
          answers: [
            { text: "A. Couronne", correct: true },
            { text: "B. Racine", correct: true },
            { text: "C. Pulpe", correct: true },
            { text: "D. Langue", correct: false }
          ]
        }
      ]
    }
  }, 2023:{
   1:{"Pathologie": [
        {
          question: "QCM 1 : La dent joue un rôle dans :",
          answers: [
            { text: "A. La mastication", correct: true },
            { text: "B. La respiration", correct: false },
            { text: "C. La phonation", correct: true },
            { text: "D. L’esthétique", correct: true }
          ]
        },
        {
          question: "QCM 2 : Les tissus durs de la dent sont :",
          answers: [
            { text: "A. L’émail", correct: true },
            { text: "B. La dentine", correct: true },
            { text: "C. Le cément", correct: true },
            { text: "D. La pulpe", correct: false }
          ]
        },
        {
          question: "QCM 3 : La pulpe dentaire contient :",
          answers: [
            { text: "A. Des nerfs", correct: true },
            { text: "B. Des vaisseaux sanguins", correct: true },
            { text: "C. De l’émail", correct: false },
            { text: "D. Des odontoblastes", correct: true }
          ]
        },
        {
          question: "QCM 4 : La dent est composée de :",
          answers: [
            { text: "A. Couronne", correct: true },
            { text: "B. Racine", correct: true },
            { text: "C. Pulpe", correct: true },
            { text: "D. Langue", correct: false }
          ]
        }
      ]
    }
  }
};

console.log("✅ QCMS (sans lesson) chargé !");

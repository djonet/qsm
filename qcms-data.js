// qcms-data.js
// بنية مبسطة: السنة → رقم EMD → المقياس → [أسئلة]

const QCMS = {

2025: {
  1: {
    "Parodontologie": [
      {
        question: "Quel terme désigne une maladie du parodonte ?",
        answers: [
          { text: "A. Parodontite", correct: false },
          { text: "B. Gingivite", correct: false },
          { text: "C. Parodontopathie", correct: true },
          { text: "D. Parodontolyse", correct: false }
        ]
      },
      {
        question: "Quel outil les Sumériens ont-ils utilisé pour l’hygiène buccale ?",
        answers: [
          { text: "A. Brosse à dents", correct: false },
          { text: "B. Cure-dents en or", correct: true },
          { text: "C. Siwak", correct: false },
          { text: "D. Pâte dentifrice", correct: false }
        ]
      },
      {
        question: "Quel est le terme pour désigner la lyse progressive des tissus de soutien du parodonte ?",
        answers: [
          { text: "A. Parodontite", correct: false },
          { text: "B. Gingivite", correct: false },
          { text: "C. Parodontolyse", correct: true },
          { text: "D. Gingivopathie", correct: false }
        ]
      },
      {
        question: "La gencive marginale :",
        answers: [
          { text: "A. Elle est démarquée par la crête gingivale libre.", correct: false },
          { text: "B. Elle constitue la paroi molle du sulcus.", correct: true },
          { text: "C. Elle entoure la zone cervicale de dent.", correct: true },
          { text: "D. Elle s’étend du sillon gingival libre jusqu’à la ligne muco-gingivale.", correct: false }
        ]
      },
      {
        question: "Le sillon gingival libre :",
        answers: [
          { text: "A. C’est une dépression située entre la gencive marginale et la gencive attachée.", correct: false },
          { text: "B. Il est parallèle à la ligne mucogingivale.", correct: false },
          { text: "C. Il est distant du rebord gingival de 0,4 – 4 mm.", correct: false },
          { text: "D. Les réponses A et B sont justes.", correct: true }
        ]
      },
      {
        question: "La couleur physiologique de la muqueuse gingivale est influencée par :",
        answers: [
          { text: "A. Le degré de kératinisation et vascularisation", correct: true },
          { text: "B. Les mitoses et migration cellulaire", correct: false },
          { text: "C. Desquamation et homéostasie", correct: false },
          { text: "D. Turn over cellulaire", correct: false }
        ]
      },
      {
        question: "Zonula Occludens :",
        answers: [
          { text: "A. Ce sont des jonctions intermédiaires", correct: false },
          { text: "B. Ce sont des jonctions serrées", correct: true },
          { text: "C. Ce sont des desmosomes", correct: false },
          { text: "D. Ce sont des jonctions serrées courtes au niveau de la couche basale", correct: false }
        ]
      },
      {
        question: "L’épithélium de jonction :",
        answers: [
          { text: "A. Il est la partie apicale de l’épithélium oral sulculaire", correct: true },
          { text: "B. Il est mince kératinisé non stratifié", correct: false },
          { text: "C. Il représente 10% de l’épithélium gingival", correct: true },
          { text: "D. Il est perméable grâce au pourcentage de 12% d’espace intercellulaire", correct: false }
        ]
      },
      {
        question: "Les caractéristiques de l’épithélium jonctionnel gingival sont :",
        answers: [
          { text: "A. Il fournit l’attache épithéliale", correct: true },
          { text: "B. Il présente la partie apicale du sillon gingival libre", correct: false },
          { text: "C. Perméable", correct: true },
          { text: "D. Kératinisé", correct: false }
        ]
      },
      {
        question: "Le turn over (renouvellement) de l’épithélium oral sulculaire (EOS) est :",
        answers: [
          { text: "A. 7–15 jours", correct: false },
          { text: "B. 4–6 jours", correct: false },
          { text: "C. 6–10 jours", correct: false },
          { text: "D. 4–10 jours", correct: true }
        ]
      },
      {
        question: "L’attache épithéliale assure un :",
        answers: [
          { text: "A. Contact intercellulaire entre deux tissus embryologiquement et histologiquement différents.", correct: false },
          { text: "B. … entre deux tissus embryologiquement différents, histologiquement identiques.", correct: false },
          { text: "C. … entre deux tissus embryologiquement identiques.", correct: true },
          { text: "D. … entre deux tissus embryologiquement et histologiquement identiques.", correct: false }
        ]
      },
      {
        question: "Phase passive de l’éruption (25–45 ans) : migration apicale de l’attache épithéliale",
        answers: [
          { text: "A. Au niveau du JAC et le fond du SGD est à l’émail.", correct: false },
          { text: "B. Au niveau du cément et le fond du SGD est au niveau de la JAC.", correct: true },
          { text: "C. JGO et SGD sont au niveau du cément.", correct: false },
          { text: "D. … au niveau de l’émail.", correct: false }
        ]
      },
      {
        question: "La largeur de l’espace desmodontal entre 30–50 ans est :",
        answers: [
          { text: "A. 0,18 mm", correct: true },
          { text: "B. 0,15 mm", correct: false },
          { text: "C. 0,25 mm", correct: false },
          { text: "D. 0,20 mm", correct: false }
        ]
      },
      {
        question: "Les fibres de collagène du ligament alvéolo-dentaire sont :",
        answers: [
          { text: "A. 20% de type I et majoritairement de type III", correct: false },
          { text: "B. 20% de type III et majoritairement de type II", correct: false },
          { text: "C. 20% de type II et majoritairement de type I", correct: false },
          { text: "D. 20% de type III et majoritairement de type I", correct: true }
        ]
      },
      {
        question: "Les fibres obliques du desmodonte :",
        answers: [
          { text: "A. Sont situées parallèlement aux fibres supracrestales", correct: false },
          { text: "B. Sont les plus abondantes", correct: true },
          { text: "C. Sont orientées de la paroi osseuse à la racine en direction coronaire", correct: false },
          { text: "D. Sont de nature fibres d’élastine", correct: false }
        ]
      },
      {
        question: "Dans le desmodonte, les cellules d’origine épithéliale sont :",
        answers: [
          { text: "A. Restes de Malassez", correct: true },
          { text: "B. Fibroblastes", correct: false },
          { text: "C. Cémentoblastes", correct: false },
          { text: "D. Ostéoblastes", correct: false }
        ]
      },
      {
        question: "Embryologie du cément :",
        answers: [
          { text: "A. Feuillet interne de l’ectomésenchyme… pendant la couronne puis après la racine.", correct: false },
          { text: "B. Feuillet moyen…", correct: false },
          { text: "C. Feuillet interne de l’ectomésenchyme ; formation débute pendant la couronne et pendant la racine.", correct: true },
          { text: "D. Feuillet externe…", correct: false }
        ]
      },
      {
        question: "Le cément acellulaire :",
        answers: [
          { text: "A. Il est initialement formé et recouvre les deux tiers apicaux.", correct: false },
          { text: "B. Il est constitué des fibres extrinsèques et intrinsèques.", correct: true },
          { text: "C. Il recouvre le cément cellulaire et toute la racine radiculaire au niveau apical.", correct: false },
          { text: "D. Sa biochimie contient 12% d’eau et une fraction organique uniquement protéique.", correct: false }
        ]
      },
      {
        question: "Le cément cellulaire :",
        answers: [
          { text: "A. Plus calcifié que le cément fibrillaire.", correct: false },
          { text: "B. Son épaisseur augmente au niveau de la furcation.", correct: false },
          { text: "C. Il recouvre le cément acellulaire et toute la racine radiculaire au niveau de l’apex.", correct: true },
          { text: "D. Les réponses B et C sont justes.", correct: false }
        ]
      },
      {
        question: "L’épaisseur du cément :",
        answers: [
          { text: "A. Augmente avec l’âge", correct: true },
          { text: "B. Diminue avec l’âge", correct: false },
          { text: "C. N’est pas influencée par l’âge", correct: false },
          { text: "D. Dépend de la position de la dent sur l’arcade", correct: false }
        ]
      }
    ]
  }
},

  2024: {
    1: {
      "Parodontologie": [
        {
          question: "L’aspect macroscopique de la gencive libre est caractérisé par",
          answers: [
            { text: "a. sa couleur rose corail et son contour festonné.", correct: false },
            { text: "b. le bord marginal qui détermine sa limite apicale.", correct: false },
            { text: "c. son adhérence à la surface dentaire au niveau du collet.", correct: false },
            { text: "d. le sillon gingival qui forme la paroi tissulaire molle.", correct: true }
          ]
        },
        {
          question: "La hauteur de la gencive attachée",
          answers: [
            { text: "a. varie seulement d’un individu à un autre.", correct: false },
            { text: "b. est de valeur inconstante durant toute la vie.", correct: false },
            { text: "c. peut-être calculer à l’aide d’un instrument parodontal de manière directe ou indirecte.", correct: true },
            { text: "d. toutes les réponses sont correctes.", correct: false }
          ]
        },
        {
          question: "Parmi les caractéristiques cliniques d’une gencive saine",
          answers: [
            { text: "a. la présence du piqueté est un signe indispensable de la gencive sub-papillaire.", correct: false },
            { text: "b. la couleur rouge foncé est un signe d’une hyperpigmentation de la mélanine.", correct: false },
            { text: "c. la consistance ferme de muqueuse alvéolaire permet un excellent attachement à l’os sous-jacent.", correct: false },
            { text: "d. l’absence de saignement est un signe de santé de la muqueuse gingivale.", correct: true }
          ]
        },
        {
          question: "L’épithélium oral gingival",
          answers: [
            { text: "a. est composé de quatre couches de cellules non kératinocytes qui représente 10 % de la population cellulaire.", correct: true },
            { text: "b. représente la partie de l’épithélium en regard du milieu buccal.", correct: false },
            { text: "c. forme avec l’épithélium oral jonctionnel ; l’attache épithéliale.", correct: false },
            { text: "d. est pluristratifié et kératinisé.", correct: true }
          ]
        },
        {
          question: "Parmi les rôles de la gencive",
          answers: [
            { text: "a. le turn over de l’épithélium oral gingival est plus long que celui de l’épithélium jonctionnel.", correct: true },
            { text: "b. la desquamation est le temps nécessaire pour la rupture des jonctions inter-cellulaires de la couche superficielle.", correct: false },
            { text: "c. la kératinisation permet la résistance de la muqueuse gingivale contre les agressions externes.", correct: true },
            { text: "d. l’organisation des cellules en strates renforce l’adhésion de la lamina propria.", correct: false }
          ]
        },
        {
          question: "La membrane basale",
          answers: [
            { text: "a. est interposée entre l’épithélium oral gingival, l’épithélium oral sulculaire, l’épithélium jonctionnel et le tissu conjonctif.", correct: true },
            { text: "b. est qualifiée de membrane basale externe qui la sépare de la surface dentaire.", correct: false },
            { text: "c. sépare le compartiment épithélial de la lamina propria.", correct: true },
            { text: "d. seule la réponse (a) est correcte.", correct: false }
          ]
        },
        {
          question: "Le ligament parodontal assure la fonction d’ancrage de la dent dans son alvéole",
          answers: [
            { text: "a. par l’intermédiaire de deux groupes annexes et trois groupes principaux de fibres collagènes.", correct: true },
            { text: "b. au niveau du plexus intermédiaire.", correct: false },
            { text: "c. grâce aux fibres du ligament gingival qui absorbent partiellement les forces occlusales, excessives.", correct: false },
            { text: "d. toutes les réponses sont correctes.", correct: false }
          ]
        },
        {
          question: "Après destruction du desmodonte par le processus inflammatoire",
          answers: [
            { text: "a. sa cicatrisation se fait normalement après éviction totale des toxines et bactéries qui ont pénétrés son épaisseur.", correct: true },
            { text: "b. les cellules mésenchymateuses indifférenciées sont chargées de le reconstruire.", correct: true },
            { text: "c. les fibroblastes mobiles interviennent dans la cicatrisation des structures détruites.", correct: true },
            { text: "d. seule la réponse (c) est correcte.", correct: false }
          ]
        },
        {
          question: "Les ostéoblastes dérivés des CMI peuvent",
          answers: [
            { text: "a. se diviser au niveau des cellules bordantes seulement une fois dans la vie de la cellule.", correct: false },
            { text: "b. s’enfoncer dans la matrice extracellulaire minéralisée pour donner des ostéocytes.", correct: true },
            { text: "c. migrer par apoptose cellulaire.", correct: false },
            { text: "d. synthétiser la matrice extracellulaire qui ne minéralise qu’à distance de la cellule.", correct: false }
          ]
        },
        {
          question: "La synthèse de la matrice organique se fait par",
          answers: [
            { text: "a. activation des cellules bordantes (au repos) qui se transforment en ostéoblastes.", correct: false },
            { text: "b. la minéralisation des fibres de collagènes par le magnésium tricalcique.", correct: true },
            { text: "c. des ostéoblastes dont le noyau est situé au pôle opposé à celui où est élaborée la matrice extracellulaire.", correct: true },
            { text: "d. seules les réponses (a) et (b) sont correctes.", correct: true }
          ]
        },
        {
          question: "Les ostéocytes",
          answers: [
            { text: "a. communiquent entre elles et avec les ostéoblastes par des jonctions communicantes.", correct: true },
            { text: "b. sont des cellules bordantes qui une fois incluses dans leurs produits de sécrétion deviennent des ostéoplastes.", correct: false },
            { text: "c. sont incapables de se différencier et doivent être renouvelées régulièrement.", correct: true },
            { text: "d. sont éliminées par apoptose cellulaire.", correct: false }
          ]
        },
        {
          question: "Le ciment intermédiaire est tissu minéralisé qui",
          answers: [
            { text: "a. recouvre les surfaces radiculaires des prémolaires et molaires.", correct: true },
            { text: "b. est très fréquent au niveau apical des incisives et des dents temporaires.", correct: false },
            { text: "c. se localise entre la dentine radiculaire et le ciment acellulaire.", correct: true },
            { text: "d. se caractérise par sa localisation au niveau apical des racines dentaires des prémolaires et molaires.", correct: false }
          ]
        },
        {
          question: "La formation du ciment",
          answers: [
            { text: "a. se fait en parallèle avec la formation de la couronne.", correct: true },
            { text: "b. est assurée par les améloblastes qui sécrètent la matrice cémentoïde.", correct: true },
            { text: "c. commence une fois que la couronne dentaire est achevée.", correct: true },
            { text: "d. toutes les réponses sont correctes.", correct: true }
          ]
        },
        {
          question: "La formation du cément",
          answers: [
            { text: "a. se fait en parallèle avec la formation de la couronne.", correct: false },
            { text: "b. est induites par les améloblastes qui sécrètent la matrice cémentoïde.", correct: false },
            { text: "c. commence une fois que la couronne dentaire est achevée.", correct: true },
            { text: "d. toutes les réponses sont correctes.", correct: false }
          ]
        },
        {
          question: "L’aspect microscopique du ciment",
          answers: [
            { text: "a. se caractérise par les fibres intrinsèques et extrinsèques synthétisées par les cémentoblastes.", correct: false },
            { text: "b. nous renseigne sur l’âge de la dernière couche de ciment déposée sur la surface radiculaire.", correct: true },
            { text: "c. est représenté par une structure fibrillaire avec une origine et une minéralisation variable.", correct: true },
            { text: "d. nous renseigne sur le rythme lent de la cémentogenèse.", correct: false }
          ]
        },
        {
          question: "La résorption du ciment est un phénomène",
          answers: [
            { text: "a. physiologique qui touche les deux dentures temporaire et permanente.", correct: false },
            { text: "b. qui permet l’exfoliation des dents temporaires et la mise en place des dents permanentes.", correct: true },
            { text: "c. qui se fait rarement en denture mixte.", correct: false },
            { text: "d. seule la réponse (a) est correcte.", correct: false }
          ]
        },
        {
          question: "Le ciment cellulaire",
          answers: [
            { text: "a. se forme après l’éruption dentaire sur une dent afonctionnelle.", correct: false },
            { text: "b. augmente en épaisseur avec l’âge de l’individu.", correct: true },
            { text: "c. peut se retrouver entre deux couches de ciment acellulaire.", correct: false },
            { text: "d. ou secondaire se forme après que la dent ait atteint le plan d’occlusion sur les deux tiers apicaux de la racine.", correct: true }
          ]
        },
        {
          question: "Le ciment acellulaire afibrillaire se situe",
          answers: [
            { text: "a. au niveau du tiers moyen de la racine.", correct: false },
            { text: "b. dans la zone du collet de la dent et de la jonction émail / ciment.", correct: true },
            { text: "c. au-dessus de l’émail et éventuellement au-dessus des parties marginales de la racine.", correct: true },
            { text: "d. seule la réponse (c) est correcte.", correct: false }
          ]
        },
        {
          question: "Le remodelage du tissu osseux se fait",
          answers: [
            { text: "a. par apposition ostéoclastique suivi d’une résorption ostéoblastique.", correct: false },
            { text: "b. par déplacement cellulaire ostéoclaste en avant et ostéoblaste en arrière.", correct: true },
            { text: "c. avec une alternance de phases de résorption, de quiescence et d’apposition.", correct: true },
            { text: "d. grâce à une unité fonctionnelle de remodelage composée d’ostéoblastes / ostéoclastes.", correct: true }
          ]
        },
        {
          question: "Au niveau du ligament parodontal",
          answers: [
            { text: "a. les myofibroblastes jouent un rôle important dans la cicatrisation.", correct: true },
            { text: "b. les CMI se différencient seulement en fibroblastes.", correct: false },
            { text: "c. les débris de Malassez sont observés à proximité du cément surtout au niveau du 1/3 cervical de la racine.", correct: false },
            { text: "d. des fibroblastes mobiles assurent le remodelage permanent des fibres de collagènes.", correct: true }
          ]
        },
        {
          question: "Selon Gottlieb, le phénomène d’éruption dentaire",
          answers: [
            { text: "a. est interrompu par l’éruption passive des dents.", correct: false },
            { text: "b. détermine la position de l’attache épithéliale et le fond du sillon gingivo-dentaire en fonction de l’âge.", correct: true },
            { text: "c. représente deux formes simultanées d’éruption passive et active.", correct: true },
            { text: "d. explique la migration de l’attache épithéliale en denture mixte.", correct: false }
          ]
        },
        {
          question: "La résorption de la matrice osseuse",
          answers: [
            { text: "a. fait intervenir des ostéoclastes enchâssés dans des lacunes de Howship.", correct: false },
            { text: "b. se déroule avec une vacuole de lacune par les ostéoclastes qui se déplacent pour une nouvelle phase de résorption ou meurent par apoptose.", correct: true },
            { text: "c. est inhibée par la calcitonine.", correct: true },
            { text: "d. débute toujours par la phase minérale suivie par la phase organique.", correct: true }
          ]
        },
        {
          question: "Au sein du stratum spinosum de l’épithélium oral gingival, les cellules",
          answers: [
            { text: "a. kératinocytes sont reliées entre elles par des hémidesmosomes.", correct: false },
            { text: "b. mélanocytes permettent de délivrer la mélanine aux kératinocytes nouvellement formées.", correct: true },
            { text: "c. de Merkel sont associées aux fibres nerveuses.", correct: true },
            { text: "d. de Langerhans jouent un rôle important dans la desquamation cellulaire.", correct: false }
          ]
        },
        {
          question: "Le tissu osseux Haversien",
          answers: [
            { text: "a. est formé de lamelles osseuses excentrées.", correct: false },
            { text: "b. est un canal longitudinal qui renferme du tissu conjonctif lâche, des capillaires sanguins et lymphatiques et une fibre nerveuse.", correct: true },
            { text: "c. permet la communication des divers ostéones par les canaux transversaux de Volkmann.", correct: true },
            { text: "d. toutes les réponses sont correctes.", correct: false }
           ]
      }
    ]
  }
},


2025: {
  1: {
    "hygiene": [
      {
        question: "QCM 1 : Parmi les affirmations suivantes concernant le fluor ; laquelle est fausse :",
        answers: [
          { text: "A. Le fluor est un gaz de couleur jaune verdâtre", correct: false },
          { text: "B. Le fluor est l’élément le plus électronégatif", correct: false },
          { text: "C. Le fluor est situé dans le septième groupe de la classification périodique", correct: false },
          { text: "D. Le fluor est essentiel pour prévenir la carie dentaire, mais un excès peut provoquer la fluorose", correct: false },
          { text: "E. Le fluor est un métal alcalin", correct: true }
        ]
      },
      {
        question: "QCM 2 : Quelle est la principale source du fluorure pour la reminéralisation de l’émail :",
        answers: [
          { text: "A. L’eau potable fluorée", correct: false },
          { text: "B. Les aliments riches en fluorure", correct: false },
          { text: "C. Le fluorure de calcium déposé sur la surface de l’émail", correct: true },
          { text: "D. Les compléments alimentaires en fluorure", correct: false },
          { text: "E. Les dentifrices fluorés uniquement", correct: false }
        ]
      },
      {
        question: "QCM 3 : Quel est le rôle de pH dans la déminéralisation de l’émail :",
        answers: [
          { text: "A. Un pH bas favorise la déminéralisation", correct: true },
          { text: "B. Un pH élevé favorise la déminéralisation", correct: false },
          { text: "C. Le pH n’a pas d’influence", correct: false },
          { text: "D. Un pH neutre est toujours optimal", correct: false },
          { text: "E. Un pH bas favorise la reminéralisation", correct: false }
        ]
      },
      {
        question: "QCM 4 : Selon le modèle de Leavell et Clark la prévention peut être définie comme :",
        answers: [
          { text: "A. Un traitement curatif des pathologies", correct: false },
          { text: "B. Un ensemble d’interventions pour maintenir ou améliorer la santé", correct: true },
          { text: "C. Une approche exclusivement individuelle de la santé bucco-dentaire", correct: false },
          { text: "D. Un concept uniquement applicable aux maladies chroniques", correct: false },
          { text: "E. Une méthode pour accélérer la guérison d’une maladie", correct: false }
        ]
      },
      {
        question: "QCM 5 : La dentisterie communautaire s’inspire particulièrement du concept de :",
        answers: [
          { text: "A. Traitement curatif de la carie", correct: false },
          { text: "B. Santé individuelle centrée sur le patient", correct: false },
          { text: "C. Prévention primaire", correct: false },
          { text: "D. Santé communautaire et approche préventive", correct: true },
          { text: "E. Surmédicalisation et iatrogénie", correct: false }
        ]
      },
      {
        question: "QCM 6 : Les niveaux de prévention selon Leavell et Clark comprennent :",
        answers: [
          { text: "A. Primaire ; secondaire et tertiaire", correct: false },
          { text: "B. Primaire, secondaire, tertiaire, primordiale et quaternaire", correct: true },
          { text: "C. Seule la prévention primaire et secondaire", correct: false },
          { text: "D. Uniquement la prévention secondaire et tertiaire", correct: false },
          { text: "E. Aucune de ces réponses n’est correcte", correct: false }
        ]
      },
      {
        question: "QCM 7 : La dentisterie communautaire selon l’ADA peut être caractérisée comme :",
        answers: [
          { text: "A. Une pratique dentaire centrée exclusivement sur le traitement des caries", correct: false },
          { text: "B. Une approche individuelle de la santé bucco-dentaire", correct: false },
          { text: "C. Un ensemble d’actions visant à améliorer la santé bucco-dentaire au niveau de la communauté", correct: true },
          { text: "D. Une discipline médicale ne nécessitant pas de formation spécifique", correct: false },
          { text: "E. Une approche uniquement axée sur la recherche scientifique", correct: false }
        ]
      },
      {
        question: "QCM 8 : La dentisterie communautaire utilise les outils suivants pour atteindre ses objectifs :",
        answers: [
          { text: "A. Uniquement le traitement des maladies bucco-dentaires", correct: false },
          { text: "B. La recherche, la promotion de la santé, l’éducation à la santé et des programmes de prévention", correct: true },
          { text: "C. Des soins isolés", correct: false },
          { text: "D. Des approches centrées sur l’individu", correct: false },
          { text: "E. Des méthodes basées sur des essais cliniques", correct: false }
        ]
      },
      {
        question: "QCM 9 : Selon les objectifs d’éducation sanitaire ; un enfant bien formé doit être capable de :",
        answers: [
          { text: "A. Connaître les maladies de sa cavité buccale", correct: false },
          { text: "B. Identifier les facteurs de risque de la carie", correct: false },
          { text: "C. Se brosser les dents avant et après avoir mangé", correct: false },
          { text: "D. Éviter les substances cariogènes", correct: true },
          { text: "E. Toutes les réponses sont justes", correct: false }
        ]
      },
      {
        question: "QCM 10 : Les objectifs d’éducation sanitaire visent principalement à :",
        answers: [
          { text: "A. Responsabiliser l’enfant de la santé de ses dents", correct: true },
          { text: "B. Motiver l’enfant à éviter l’alimentation cariogène", correct: true },
          { text: "C. Motiver l’enfant à coopérer aux soins dentaires", correct: true },
          { text: "D. Isoler les enfants ayant des problèmes de santé bucco-dentaire", correct: false },
          { text: "E. Toutes les réponses sont justes", correct: false }
        ]
      },
      {
        question: "QCM 11 : Dans une main, les régions les plus riches en germes sont :",
        answers: [
          { text: "A. Les ongles", correct: true },
          { text: "B. Les espaces interdigitaux", correct: true },
          { text: "C. Les plis cutanés", correct: true },
          { text: "D. Les poignets", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "QCM 12 : Les règles de base à l’hygiène des mains consistent à :",
        answers: [
          { text: "A. Enlever les bijoux", correct: true },
          { text: "B. Enlever les montres", correct: true },
          { text: "C. Avoir les ongles courts sans vernis", correct: true },
          { text: "D. Remonter les vêtements vers l’avant-bras", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "QCM 13 : L’habillement adéquat :",
        answers: [
          { text: "A. Permet d’éviter d’amener sur la place du travail des germes venant de l’extérieur", correct: true },
          { text: "B. Permet d’éviter d’amener à son domicile les germes qui viennent du cabinet", correct: true },
          { text: "C. Porter un masque permet seulement de ne pas inspirer les bactéries du patient", correct: false },
          { text: "D. Porter des gants diminue le risque de contaminer et de se faire contaminer", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]}
      ,
      {
        question: "QCM 14 : La désinfection des surfaces :",
        answers: [
          { text: "A. A pour but d’éliminer les micro-organismes présents dans la salle de traitement", correct: true },
          { text: "B. A pour but d’éliminer les micro-organismes présents dans le fauteuil dentaire uniquement", correct: false },
          { text: "C. A pour principe d’aller du haut vers le bas", correct: true },
          { text: "D. A pour principe d’aller du plus propre au plus sale", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "QCM 15 : Les déchets d’activité de soin à risque infectieux (DASRI) :",
        answers: [
          { text: "A. De couleur jaune", correct: true },
          { text: "B. Remplis aux deux tiers (2/3)", correct: true },
          { text: "C. Fermés par un double nœud", correct: true },
          { text: "D. Une fois remplis, doivent être incinérés (brûlés)", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "QCM 16 : Les objets piquants coupants et tranchants (PCT) doivent être mis dans un collecteur :",
        answers: [
          { text: "A. Il s’agit d’un sachet en plastique fin", correct: false },
          { text: "B. Il doit être à usage unique", correct: true },
          { text: "C. Une fois rempli et fermé, le collecteur PCT peut être réouvert sans risque de contamination", correct: false },
          { text: "D. Une fois rempli, le collecteur PCT doit être incinéré (brûlé)", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "QCM 17 : À propos de la loi relative à la santé :",
        answers: [
          { text: "A. La dernière version du code a été publiée en 02 juillet 2018", correct: true },
          { text: "B. La dernière version de la loi remonte au 16 février 1985", correct: false },
          { text: "C. Elle compte au total 450 articles", correct: true },
          { text: "D. C’est l’ensemble des textes régissant, cadrant et réglementant tout ce qui concerne le secteur de la santé dans notre pays", correct: true },
          { text: "E. C’est un code de santé international", correct: false }
        ]
      },
      {
        question: "QCM 18 : Parmi les principes édictés par le code de santé publique :",
        answers: [
          { text: "A. L’accès équitable aux soins de santé", correct: true },
          { text: "B. L’accès universel aux soins de santé", correct: true },
          { text: "C. La gratuité des soins", correct: true },
          { text: "D. La prévention et la promotion de la santé", correct: true },
          { text: "E. La réhabilitation", correct: true }
        ]
      },
      {
        question: "QCM 19 : Selon la loi de santé, l’exercice des professions de santé est soumis aux conditions suivantes :",
        answers: [
          { text: "A. Être titulaire d’un diplôme algérien requis ou d’un titre reconnu", correct: true },
          { text: "B. Jouir de ses droits civiques", correct: true },
          { text: "C. Avoir passé le service militaire", correct: false },
          { text: "D. Ne pas avoir fait l’objet d’une condamnation pénale incompatible avec l’exercice de la profession", correct: true },
          { text: "E. Avoir les capacités physiques et mentales compatibles avec la profession", correct: true }
        ]
      },
      {
        question: "QCM 20 : Selon le code de santé publique, tout professionnel de santé doit respecter les règles déontologiques suivantes :",
        answers: [
          { text: "A. Aucun acte médical, aucun traitement ne peut être pratiqué sans le consentement libre et éclairé du patient", correct: true },
          { text: "B. Même dans l’extrême urgence, le professionnel ne peut passer outre le consentement", correct: false },
          { text: "C. Le médecin doit respecter la volonté du patient après l’avoir informé des conséquences de ses choix", correct: true },
          { text: "D. L’information donnée au patient porte uniquement sur le traitement", correct: false },
          { text: "E. Les droits des mineurs ou incapables sont exercés par les parents ou représentants légaux", correct: true }
        ]
      }
    ]
  }
}, 2024: {
  1: {
    "hygiene": [
      {
        question: "Dans une main, les régions les plus riches en germes sont :",
        answers: [
          { text: "A. Les ongles", correct: true },
          { text: "B. Les espaces interdigitaux", correct:true },
          { text: "C. Les plis cutanés", correct: true },
          { text: "D. Les poignets", correct: true },
          { text: "E. Toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "La stérilisation à l’autoclave :",
        answers: [
          { text: "A. Consiste à éliminer du matériel la totalité des micro-organismes", correct: true },
          { text: "B. Consiste à éliminer du matériel une partie des micro-organismes", correct: false },
          { text: "C. Permet de disposer de matériel stérile", correct: true },
          { text: "D. Est la meilleure méthode de stérilisation des instruments en acier inoxydable", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Les sachets pour DASRI :",
        answers: [
          { text: "A. Sont de couleur jaune", correct: true },
          { text: "B. Doivent être remplis aux deux-tiers (2/3)", correct: true },
          { text: "C. Une fois remplis, fermés avec un double nœud", correct: true },
          { text: "D. Doivent être incinérés (brûlés)", correct: true },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Les conteneurs pour PCT :",
        answers: [
          { text: "A. Sont destinés à contenir des éléments comme des aiguilles", correct: true },
          { text: "B. Une fois remplis, peuvent être vidés et réutilisés", correct: false },
          { text: "C. Une fois remplis doivent être fermés et incinérés (brûlés)", correct: true },
          { text: "D. Une fois remplis doivent être jetés avec les ordures ménagères", correct: false },
          { text: "E. Toutes les propositions précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Après projection de liquide biologique dans les yeux, il faut :",
        answers: [
          { text: "A. Laver abondamment avec du savon", correct: false },
          { text: "B. Rincer abondamment avec de l’eau", correct: true },
          { text: "C. Rincer abondamment avec du sérum physiologique", correct: true },
          { text: "D. Rincer avec de l’eau de Javel", correct: false },
          { text: "E. Toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "La consommation de soins et de biens médicaux comprend :",
        answers: [
          { text: "A. Les soins hospitaliers publics ou privés", correct: true },
          { text: "B. Les soins en médecine ambulatoire", correct: true },
          { text: "C. Le transport des malades", correct: true },
          { text: "D. Les médicaments et prothèses", correct: true },
          { text: "E. Toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Sources de données en épidémiologie :",
        answers: [
          { text: "A. Déclarations obligatoires des maladies transmissibles", correct: true },
          { text: "B. Registres de morbidité (ex : registre du cancer)", correct: true },
          { text: "C. Enquêtes descriptives transversales", correct: true },
          { text: "D. Enquêtes étiologiques", correct: true },
          { text: "E. Toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Un système de santé :",
        answers: [
          { text: "A. A besoin de personnel et de moyens financiers", correct: true },
          { text: "B. N’a pas besoin d’orientations générales pour fonctionner", correct: false },
          { text: "C. Doit être global et acceptable", correct: true },
          { text: "D. Ne doit pas s’adapter à une situation nouvelle", correct: false },
          { text: "E. Toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "L’état de santé générale ↔ santé bucco-dentaire :",
        answers: [
          { text: "A. Souvent", correct: true },
          { text: "B. Rarement", correct: false },
          { text: "C. Toujours", correct: false },
          { text: "D. Uniquement dans certaines situations", correct: false },
          { text: "E. Uniquement dans le cas du diabète", correct: false }
        ]
      },
      {
        question: "Populations à risques bucco-dentaires :",
        answers: [
          { text: "A. Personnes âgées / déficiences motrices ou intellectuelles", correct: true },
          { text: "B. Maladies chroniques (diabète, maladies cardiaques)", correct: true },
          { text: "C. Femmes en fin de grossesse", correct: true },
          { text: "D. Personnes jeunes et en bonne santé", correct: false },
          { text: "E. Pauvreté et ignorance", correct: true }
        ]
      },
      {
        question: "Indications des bains de bouche fluorés :",
        answers: [
          { text: "A. Sujets avec caries actives", correct: true },
          { text: "B. Sujets à haut risque de carie", correct: true },
          { text: "C. Enfants âgés de 3 ans au moins", correct: false },
          { text: "D. Parodontites chroniques", correct: false },
          { text: "E. Parodontites agressives", correct: false }
        ]
      },
      {
        question: "L’antisepsie consiste en :",
        answers: [
          { text: "A. Empêcher tout apport exogène de micro-organismes", correct: false },
          { text: "B. Désinfection sur tissu vivant", correct: true },
          { text: "C. Tuer/éliminer/inactiver les micro-organismes", correct: true },
          { text: "D. Élimination du matériel de la totalité des micro-organismes", correct: false },
          { text: "E. Aucune réponse juste", correct: false }
        ]
      },
      {
        question: "Prévention des Accidents Exposant au Sang :",
        answers: [
          { text: "A. Toute exposition percutanée…", correct: false },
          { text: "B. Contact peau lésée/muqueuses avec sang…", correct: false },
          { text: "C. Port de la tenue professionnelle", correct: true },
          { text: "D. Hygiène des mains", correct: true },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "Lavage chirurgical des mains :",
        answers: [
          { text: "A. Diminue la flore commensale", correct: true },
          { text: "B. Dure 5 à 6 minutes", correct: true },
          { text: "C. Dure 6 à 10 minutes", correct: false },
          { text: "D. Solution moussante antiseptique à large spectre", correct: true },
          { text: "E. Avant chaque acte dentaire", correct: false }
        ]
      },
      {
        question: "Le lavage des mains se divise :",
        answers: [
          { text: "A. En 2 catégories", correct: false },
          { text: "B. En 3 catégories", correct: true },
          { text: "C. En 4 catégories", correct: false },
          { text: "D. En 6 catégories", correct: false },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "Troubles du comportement alimentaire (TCA) :",
        answers: [
          { text: "A. Deux formes : anorexie restrictive et anorexie boulimie", correct: false },
          { text: "B. Augmentation du volume gingival", correct: false },
          { text: "C. Fréquemment associés au reflux gastro-œsophagien", correct: true },
          { text: "D. Nécessitent des thérapeutiques parodontales", correct: false },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "La fluorose dentaire est :",
        answers: [
          { text: "A. Une lésion des tissus durs dentaires", correct: true },
          { text: "B. Retrouvée chez patients à risque carieux élevé (faux)", correct: false },
          { text: "C. 1ʳᵉ manifestation de l’intoxication", correct: true },
          { text: "D. Liée à une utilisation de sel fluoruré", correct: false },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "Au cabinet dentaire, la transmission aéroportée :",
        answers: [
          { text: "A. Le contact manuel avec le patient", correct: false },
          { text: "B. Le sang", correct: false },
          { text: "C. Le tartre", correct: false },
          { text: "D. Les projections de salive", correct: true },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "Au cabinet dentaire, la prévention technique consiste en :",
        answers: [
          { text: "A. Respect des mesures d’hygiène de soins", correct: true },
          { text: "B. Port d’un masque et des gants", correct: true },
          { text: "C. Programmation des patients", correct: true },
          { text: "D. Respect des indications de l’acte", correct: true },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      },
      {
        question: "Le recapuchonnage des aiguilles :",
        answers: [
          { text: "A. Doit être proscrit", correct: true },
          { text: "B. Doit être remplacé", correct: false },
          { text: "C. Doit être interdit", correct: true },
          { text: "D. Doit être permis", correct: false },
          { text: "E. Aucune réponse correcte", correct: false }
        ]
      }
    ]
  }
},


2022: {
  1: {
    "hygiene": [
      {
        question: "L’hygiène est un ensemble de mesures destinées à prévenir les infections et l’apparition de maladies infectieuses. Elle se base sur :",
        answers: [
          { text: "A. le nettoyage (la détersion) uniquement", correct: false },
          { text: "B. la désinfection seulement", correct: false },
          { text: "C. la stérilisation seulement", correct: false },
          { text: "D. trois actions : le nettoyage (la détersion), la désinfection et la stérilisation", correct: true },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "La stérilisation consiste à :",
        answers: [
          { text: "A. éliminer du matériel la totalité des micro-organismes", correct: true },
          { text: "B. tuer une partie des parasites", correct: false },
          { text: "C. éliminer un certain nombre de virus", correct: false },
          { text: "D. inactiver la moitié des bactéries", correct: false },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Dans une main, les régions les plus riches en germes sont :",
        answers: [
          { text: "A. les ongles et les espaces interdigitaux", correct: true },
          { text: "B. les espaces interdigitaux", correct: false },
          { text: "C. les plis cutanés et les poignets", correct: false },
          { text: "D. les ongles, les espaces interdigitaux, les plis cutanés et les poignets", correct: false },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Les sachets jaunes destinés au DASRI (déchets d’activité de soin à risque infectieux) doivent être :",
        answers: [
          { text: "A. fermés par un seul nœud", correct: false },
          { text: "B. remplis aux 3/3", correct: false },
          { text: "C. remplis aux 2/3", correct: true },
          { text: "D. contenir des aiguilles", correct: false },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Lors de la projection d’un liquide biologique dans les yeux :",
        answers: [
          { text: "A. il ne faut jamais déclarer l’accident à la médecine du travail", correct: false },
          { text: "B. il faut rincer abondamment (+ d’1 litre) avec de l’eau ou du sérum physiologique", correct: true },
          { text: "C. il faut rincer avec de l’eau de javel à 12° diluée au 1/10", correct: false },
          { text: "D. il faut faire un lavage immédiat et abondant avec du savon", correct: false },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "L’offre de soins est représentée par :",
        answers: [
          { text: "A. Les enfants scolarisés (les écoliers)", correct: false },
          { text: "B. Les mères et les jeunes enfants", correct: false },
          { text: "C. Les professionnels de la santé", correct: true },
          { text: "D. Les patients âgés", correct: false },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Le NHS : National Health Service est le système de santé :",
        answers: [
          { text: "A. Français", correct: false },
          { text: "B. Allemand", correct: false },
          { text: "C. Américain", correct: false },
          { text: "D. Britannique", correct: true },
          { text: "E. toutes les réponses précédentes sont fausses", correct: false }
        ]
      },
      {
        question: "Concernant les dispositions générales de la loi de santé du 02/07/2018, elle a pour objet :",
        answers: [
          { text: "A. d’assurer uniquement la prévention sans la protection de la santé des personnes", correct: false },
          { text: "B. d’assurer l’accès limité aux soins", correct: false },
          { text: "C. de concrétiser les droits et devoirs de la population en matière de santé", correct: true },
          { text: "D. de promouvoir la santé sans obligation de respect de la dignité de la personne", correct: false },
          { text: "E. de protéger la santé des personnes sans prendre en considération leur intégrité et leur vie privée", correct: false }
        ]
      },
      {
        question: "Dans la loi sanitaire du 02/07/2018, l’État s’oblige en matière de santé à :",
        answers: [
          { text: "A. assurer la gratuité de soins", correct: true },
          { text: "B. restreindre la communication et l’information", correct: false },
          { text: "C. limiter les activités de formation et de recherche", correct: false },
          { text: "D. protéger et promouvoir le droit des citoyens à l’éducation", correct: true },
          { text: "E. limiter l’extension du secteur public", correct: false }
        ]
      },
      {
        question: "A propos des droits et obligations des patients, selon la loi sanitaire du 02/07/2018, quelle est la réponse juste :",
        answers: [
          { text: "A. l’information du patient sur son état de santé n’est pas une nécessité", correct: false },
          { text: "B. les droits des personnes mineures ou incapables sont exercés par eux-mêmes", correct: false },
          { text: "C. tout patient ne peut pas accéder aux prestations des services spécialisés de santé sauf en cas d’urgence", correct: false },
          { text: "D. toute personne a droit à la protection, à la prévention, aux soins", correct: true },
          { text: "E. l’intégrité physique des patients n’est pas primordiale", correct: false }
        ]
      },
      {
        question: "La protection de la santé, selon la loi sanitaire de 02/07/2018, consiste à :",
        answers: [
          { text: "A. la protection de l’environnement uniquement", correct: false },
          { text: "B. la protection sanitaire non prioritaire des personnes à risque", correct: false },
          { text: "C. des mesures sanitaires, économiques, sociales, éducatives et écologiques visant à réduire ou à éliminer les risques", correct: true },
          { text: "D. menacer la santé de la personne et de la collectivité", correct: false },
          { text: "E. protéger les risques liés à l’hérédité", correct: false }
        ]
      },
      {
        question: "La prévention de la santé est basée sur :",
        answers: [
          { text: "A. la promotion de tabagismes et l’alcoolisme", correct: false },
          { text: "B. l’augmentation de la propagation des maladies transmissibles", correct: false },
          { text: "C. la lutte contre la dépendance (tabac/alcool/drogues)", correct: true },
          { text: "D. la réduction de l’impact des déterminants des maladies", correct: true },
          { text: "E. la lutte contre l’apparition des maladies rares", correct: false }
        ]
      },
      {
        question: "Selon la loi 83/13 du 02 juillet 1983, quel est le certificat médical délivré par le médecin à la victime, lors d’un accident du travail ?",
        answers: [
          { text: "A. Certificat de guérison", correct: false },
          { text: "B. Certificat de consolidation", correct: false },
          { text: "C. Certificat de malade générale", correct: false },
          { text: "D. Certificat de phtisiologie", correct: false },
          { text: "E. Certificat médical initial", correct: true }
        ]
      },
      {
        question: "Selon la réglementation algérienne, le délai de déclaration d’une maladie professionnelle à la caisse de sécurité sociale varie de :",
        answers: [
          { text: "A. 20–60 jours", correct: false },
          { text: "B. 1–60 jours", correct: false },
          { text: "C. 15 jours à 90 jours", correct: false },
          { text: "D. 2–4 jours", correct: true },
          { text: "E. 40–50 jours", correct: false }
        ]
      },
      {
        question: "En cas d’accident du travail, la victime doit déclarer son accident à l’employeur dans un délai de :",
        answers: [
          { text: "A. 24 heures", correct: true },
          { text: "B. 30 heures", correct: false },
          { text: "C. 48 heures", correct: false },
          { text: "D. 60 heures", correct: false },
          { text: "E. 72 heures", correct: false }
        ]
      }
    ]
  }
},





2023:{
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

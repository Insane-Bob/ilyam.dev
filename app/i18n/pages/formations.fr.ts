const formationsFr = {
  heroTag: "[02] — Formations",
  heroTitle1: "Parcours",
  heroTitle2: "Académique",
  heroDesc:
    "Bac+5 en ingénierie du web. Un parcours construit sur la pratique, l'alternance et des projets réels — des fondamentaux aux architectures avancées.",
  cvCta: "Voir le CV complet →",
  sectionModules: "Expériences",
  sectionProjects: "Projets académiques",
  items: [
    {
      diploma: "Mastère Ingénierie du Web",
      desc: "Formation en ingénierie du web avancée. Spécialisation en architecture logicielle, cloud computing, management de projet tech et entrepreneuriat.",
      modules: [
        "Architecture logicielle & Design Patterns",
        "Cloud & DevOps (AWS, Docker, CI/CD)",
        "Management de projet & Product Management",
        "APIs avancées : GraphQL, WebSockets, microservices",
        "Sécurité applicative & RGPD",
        "Entrepreneuriat & création de startup",
      ],
      highlights: [
        { label: "Alternance", value: "Mixijob (Startup HR Tech) — Développeur Fullstack Unique", url: "https://mixijob.com/" },
        { label: "Compétences développées", value: "Concevoir, sécuriser et piloter des systèmes d'information complets, de l'infrastructure aux applications, avec un focus sur la performance et la gestion des données." },
        { label: "Validation", value: "Juin 2025" },
      ],
      projects: [
        { desc: "Plateforme de génération de recettes assistée par IA. Intégration de Gemini pour la génération de recettes personnalisées, gestion des données via Airtable, tests unitaires." },
        { desc: "Plateforme de révision assistée par IA. Architecture microservices avec Kubernetes, LLM pour générer des quiz depuis PDF/images, intégration Tesseract OCR, déploiement et administration serveur. Clean Architecture & Clean Code." },
      ],
    },
    {
      diploma: "Bachelor Ingénierie du Web",
      desc: "Spécialisation en ingénierie du web — développement fullstack, conception applicative, méthodes Agile et gestion de projets techniques.",
      modules: [
        "Développement fullstack (Laravel, Vue.js, React, Node.js...)",
        "Bases de données SQL & NoSQL",
        "Architecture MVC & API REST",
        "Méthodes Agile & Scrum",
        "UX/UI & intégration responsive",
        "Gestion de version & travail en équipe (Git, Agile, CI/CD...)",
      ],
      highlights: [
        { label: "Alternance", value: "Lynx Business — Développeur Fullstack", url: "https://lynx-business.com/" },
        { label: "Compétences développées", value: "Définir, concevoir, conduire et optimiser une solution logicielle ou applicative responsable." },
        { label: "Validation", value: "Juin 2023" },
      ],
      projects: [
        { desc: "Site e-commerce de vente de nains de jardins de luxe. Backend JS/TypeScript avec développement d'un framework from scratch, SSE pour la gestion des stocks en temps réel, gestion des factures/devis/remboursements, frontend Vue.js." },
        { desc: "Application de gestion client avec génération automatisée de factures et devis, signature sécurisée des devis, suivi de projets. Déploiement conteneurisé avec Docker." },
      ],
    },
    {
      diploma: "Baccalauréat Littéraire",
      desc: "Baccalauréat Littéraire avec options Langue Étrangère & Européenne. Solides bases en culture générale, langues et argumentation.",
      modules: [
        "Littérature française & internationale",
        "Philosophie",
        "Langue Étrangère & Européenne (Anglais)",
        "Histoire-Géographie",
      ],
      highlights: [
        { label: "Option principale", value: "Langue Étrangère & Européenne — Anglais renforcé" },
        { label: "Mention", value: "Obtenu avec mention BIEN" },
        { label: "Validation", value: "Décembre 2020" },
      ],
      projects: [],
    },
  ],
};

export default formationsFr;

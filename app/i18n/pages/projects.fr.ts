const projectsFr = {
  heroTag: "[03] — Projets",
  heroTitle1: "Mes",
  heroTitle2: "Projets",
  heroDesc:
    "Projets professionnels, scolaires et personnels — du e-commerce à l'IA, en passant par les CRM et les cartes interactives.",
  cvCta: "Voir le CV complet →",
  categories: [
    { id: "all", label: "Tous" },
    { id: "pro", label: "Pro" },
    { id: "freelance", label: "Freelance" },
    { id: "scolaire", label: "Scolaire" },
    { id: "perso", label: "Perso" },
  ],
  visitSite: "↗ Voir le site",
  projectCount: (n: number) => `${n} projet${n > 1 ? "s" : ""}`,
  backLink: "← Retour aux projets",
  slugSections: {
    context: "[Contexte]",
    roleStack: "[Rôle & stack]",
    keyPoints: "[Points clés]",
    features: "[Fonctionnalités]",
    challenge: "Problématique",
    solution: "Réponse apportée",
    visitShort: "↗ Voir",
  },
};

export default projectsFr;

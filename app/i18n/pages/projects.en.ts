const projectsEn = {
  heroTag: "[03] — Projects",
  heroTitle1: "My",
  heroTitle2: "Projects",
  heroDesc:
    "Professional, academic and personal projects — from e-commerce to AI, CRM tools and interactive maps.",
  cvCta: "View full resume →",
  categories: [
    { id: "all", label: "All" },
    { id: "pro", label: "Pro" },
    { id: "freelance", label: "Freelance" },
    { id: "scolaire", label: "Academic" },
    { id: "perso", label: "Personal" },
  ],
  visitSite: "↗ Visit site",
  projectCount: (n: number) => `${n} project${n > 1 ? "s" : ""}`,
  backLink: "← Back to projects",
  slugSections: {
    context: "[Context]",
    roleStack: "[Role & stack]",
    keyPoints: "[Key points]",
    features: "[Features]",
    challenge: "Challenge",
    solution: "Solution",
    visitShort: "↗ Visit",
  },
};

export default projectsEn;

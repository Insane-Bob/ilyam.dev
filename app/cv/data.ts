/* ── Types ──────────────────────────────────────────────────── */

export type LogoImg = { type: "img"; src: string; alt: string };
export type LogoComponent = { type: "component" };
export type Logo = LogoImg | LogoComponent;

export interface Experience {
    period: string;
    role: string;
    company: string;
    companyDesc?: string;
    url?: string;
    type: string;
    logo: Logo;
    stack: string[];
    bullets: string[];
}

export interface Formation {
    period: string;
    diploma: string;
    school: string;
    level: string;
    logo: { src: string; alt: string };
    desc: string;
}

export interface SkillGroup {
    cat: string;
    desc?: string;
    items: string[];
}

export const TABS = [
    { id: "intro", label: "Présentation" },
    { id: "exp", label: "Expériences" },
    { id: "form", label: "Formations" },
    { id: "skills", label: "Compétences" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

/* ── Personal ───────────────────────────────────────────────── */

export const PERSONAL = {
    firstName: "Ilyam",
    lastName: "DUPUIS",
    email: "ilyamdupuis0903@gmail.com",
    location: "Île-de-France — Normandie",
    site: "ilyam.dev",
    github: "github.com/Insane-Bob",
    permis: "Permis B",
    roles: ["Développeur Fullstack", "Chef de Projet"],
    targetRoles: ["Lead Dev", "CTO", "CPO"],
};

/* ── Experiences ────────────────────────────────────────────── */

export const EXPERIENCES: Experience[] = [
    {
        period: "Nov. 2024 — Nov. 2025",
        role: "Développeur Fullstack",
        company: "Mixijob — Startup HR Tech, Bezons (95)",
        type: "Alternance",
        companyDesc: "Startup HR Tech développant une plateforme de recrutement innovante en pleine croissance. Unique développeur de l'équipe fondatrice (3 personnes), j'ai piloté le développement produit et les décisions techniques, de l'architecture à la mise en production, tout en optimisant performances, SEO et expérience utilisateur.",
        url: "https://mixijob.com/",
        logo: { type: "img", src: "/logos/mixijob-logo.webp", alt: "Mixijob" },
        stack: ["Vue.js", "Laravel", "Tailwind CSS", "Stripe", "MySQL", "Redis", "SEO", "SCRUM", "Figma"],
        bullets: [
            "Intégration Stripe (prorata, facturation automatisée, synchronisation) et sécurisation des flux financiers — 20 paiements récurrents mensuels fiabilisés.",
            "Optimisation du cycle offres/candidatures (SmartApply) et création d'une candidathèque de 10 000+ profils anonymisés avec CV IA dynamiques — taux de matching +70%.",
            "Intégrations ATS (France Travail, Eiffage, Sopra Steria) et pilotage data-driven des KPI : +20% de trafic mensuel, +20% d'inscriptions candidats.",
            "Refactoring des processus critiques : réduction de 2 000 requêtes sur les pages stratégiques, amélioration SEO et sécurisation avancée des données partenaires.",
            "Refonte mobile-first avec +10% d'accessibilité mesurable. Organisation SCRUM, priorisation stratégique des sprints.",
        ],
    },
    {
        period: "Nov. 2023 — Sep. 2024",
        role: "Développeur Fullstack",
        company: "Lynx Business — Agence Web, Cergy (95)",
        type: "Alternance",
        companyDesc: "Agence web accompagnant des clients variés (immobilier, notariat, santé, social, recrutement) sur des projets sur-mesure et SaaS. Au sein d'une équipe de 5 développeurs, j'ai développé des solutions à forte logique métier, piloté plusieurs projets en parallèle en méthodologie Agile, et contribué à la qualité du code, l'architecture et l'optimisation front-end et back-end.",
        url: "https://lynx-business.com/",
        logo: { type: "component" },
        stack: ["Vue.js", "Laravel", "Tailwind CSS", "PostgreSQL", "Docker", "Figma", "SCRUM"],
        bullets: [
            "Conception de fonctionnalités complexes (calculs, suivi de biens, processus administratifs), IA pour descriptions d'offres et alertes géolocalisées déployées pour 15 clients.",
            "Supervision back-end : gestion centralisée des partenaires, biens et travaux, administration multi-rôles, permissions et intégration ATS.",
            "Pilotage Agile SCRUM : code review, suivi des sprints et livraison de 6 projets complets.",
        ],
    },
    {
        period: "Jan. 2021 — Juil. 2023",
        role: "Développeur Web & Mobile",
        company: "Cultur'easy — Entreprise culturelle, Haute-Savoie",
        type: "Alternance",
        companyDesc: "Entreprise culturelle développant des solutions web et mobiles pour la gestion d'événements. Rôle transversal combinant développement, design et communication digitale — création d'applications et sites sur-mesure, optimisation UX, SEO et diffusion des contenus.",
        url: "https://pro.cultureasy.com/",
        logo: { type: "img", src: "/logos/cultureasy.webp", alt: "Cultur'easy" },
        stack: ["React Native", "Laravel", "WordPress", "Node.js", "MySQL", "Mailjet", "SEO"],
        bullets: [
            "Rôle transversal : développement, design et communication digitale. Applications et sites sur-mesure.",
            "Optimisation UX/SEO et intégration responsive : +20% d'engagement utilisateur.",
            "Application mobile (Laravel/Node.js, MySQL) de gestion d'événements et d'équipes — 10+ participants par session, coordination en temps réel.",
            "CMS multi-rôles pour l'association des commerçants, traitant 50+ demandes par mois.",
            "Gestion de campagnes email (Mailjet) et optimisation SEO : +10% de visibilité.",
        ],
    },
];

/* ── Formations ─────────────────────────────────────────────── */

export const FORMATIONS: Formation[] = [
    {
        period: "Déc. 2025",
        diploma: "Mastère Ingénierie du Web",
        school: "ESGI — 242 rue du Faubourg Saint-Antoine, 75012 Paris",
        level: "Master",
        logo: { src: "/logos/ESGI.png", alt: "ESGI" },
        desc: "Formation en ingénierie du web avancée — architecture logicielle, cloud, management de projet tech.",
    },
    {
        period: "Déc. 2023",
        diploma: "Bachelor Ingénierie du Web",
        school: "ESGI — 242 rue du Faubourg Saint-Antoine, 75012 Paris",
        level: "Bachelor",
        logo: { src: "/logos/ESGI.png", alt: "ESGI" },
        desc: "Spécialisation en ingénierie du web — développement fullstack, conception applicative, méthodes Agile.",
    },
    {
        period: "Déc. 2020",
        diploma: "Baccalauréat Littéraire",
        school: "Notre-Dame Saint-François — 8 Rue Portevin, 27000 Évreux",
        level: "Baccalauréat",
        logo: { src: "/logos/NDSF.png", alt: "Notre-Dame Saint-François" },
        desc: "Baccalauréat Littéraire — options Langue Étrangère & Européenne.",
    },
];

/* ── Skills ─────────────────────────────────────────────────── */

export const SKILLS: SkillGroup[] = [
    {
        cat: "Backend",
        desc: "APIs, logique métier, architecture serveur",
        items: ["Laravel", "Symfony", "Node.js", "API REST", "JWT", "OAuth"],
    },
    {
        cat: "Frontend",
        desc: "Interfaces web et mobiles, SPA, SSR",
        items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Inertia.js", "React Native", "TypeScript", "JavaScript ES6+"],
    },
    {
        cat: "Bases de données",
        desc: "SQL, NoSQL, modélisation, optimisation",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "GraphQL"],
    },
    {
        cat: "Architecture & Perf",
        desc: "Conception système, temps réel, SEO",
        items: ["API-first", "WebSockets", "Intégration API tierces", "SEO technique", "Core Web Vitals"],
    },
    {
        cat: "UI/UX & Design",
        desc: "Composants, design systems, animations",
        items: ["Tailwind CSS", "Bootstrap", "Shadcn", "Flux", "Framer Motion", "Figma", "Adobe XD"],
    },
    {
        cat: "DevOps & Outils",
        desc: "CI/CD, conteneurisation, déploiement",
        items: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Vercel", "AWS", "Laravel Forge"],
    },
    {
        cat: "Gestion de projet",
        desc: "Méthodes agiles, collaboration, outils",
        items: ["Scrum", "Kanban", "Code Review", "Trello", "Notion", "Slack"],
    },
    {
        cat: "Langues",
        desc: "Communication professionnelle",
        items: ["Français — natif", "Anglais — B2", "Espagnol — notions"],
    },
];
/* ── Intro ──────────────────────────────────────────────────── */

export const INTRO_PARAS = [
    "Développeur fullstack, je conçois et développe des produits web de bout en bout, du frontend au backend, avec une attention particulière portée à l’architecture logicielle, la qualité du code et l’expérience utilisateur.",
    
    "En parallèle du développement, j’évolue vers des rôles de chef de projet et de CPO, en pilotant des produits de l’idée jusqu’à la mise en production : cadrage, spécifications, choix techniques et suivi de delivery.",
    
    "Polyvalent et rigoureux, j’ai une approche orientée impact et résultats. Je construis des systèmes robustes, pensés pour durer et évoluer."
];

export const STATS = [
    { val: "5+", label: "Années d'expérience" },
    { val: "20+", label: "Projets livrés" },
    { val: "3", label: "Entreprises" },
];

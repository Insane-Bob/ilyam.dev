import type { Experience, Formation, SkillGroup, TabId } from "./data";

export const TABS_EN: Array<{ id: TabId; label: string }> = [
  { id: "intro", label: "About" },
  { id: "exp", label: "Experience" },
  { id: "form", label: "Education" },
  { id: "skills", label: "Skills" },
];

export const PERSONAL_EN = {
  location: "Île-de-France — Normandy",
  permis: "Driving License B",
  roles: ["Fullstack Developer", "Project Manager"],
  targetRoles: ["Lead Dev", "CTO", "CPO"],
};

export const EXPERIENCES_EN: Experience[] = [
  {
    period: "Nov. 2024 — Nov. 2025",
    role: "Fullstack Developer",
    company: "Mixijob — HR Tech Startup, Bezons (95)",
    type: "Work-study",
    companyDesc:
      "HR Tech startup building an innovative recruitment platform in strong growth. As the only developer in the founding team (3 people), I led product development and technical decisions, from architecture to production, while improving performance, SEO and user experience.",
    url: "https://mixijob.com/",
    logo: { type: "img", src: "/logos/mixijob-logo.webp", alt: "Mixijob" },
    stack: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "Stripe",
      "MySQL",
      "Redis",
      "SEO",
      "SCRUM",
      "Figma",
    ],
    bullets: [
      "Integrated Stripe (proration, automated invoicing, synchronization) and secured financial flows — 20 recurring monthly payments stabilized.",
      "Optimized jobs/applications lifecycle (SmartApply) and built a candidate pool of 10,000+ anonymized profiles with dynamic AI CVs — matching rate +70%.",
      "Delivered ATS integrations (France Travail, Eiffage, Sopra Steria) and KPI-driven improvements: +20% monthly traffic, +20% candidate signups.",
      "Refactored critical processes: reduced 2,000 queries on strategic pages, improved SEO and reinforced partner data security.",
      "Led a mobile-first redesign with +10% measurable accessibility. Worked in SCRUM with strategic sprint prioritization.",
    ],
  },
  {
    period: "Nov. 2023 — Sep. 2024",
    role: "Fullstack Developer",
    company: "Lynx Business — Web Agency, Cergy (95)",
    type: "Work-study",
    companyDesc:
      "Web agency supporting diverse clients (real estate, notary, healthcare, social, recruitment) on custom and SaaS projects. Within a team of 5 developers, I built business-critical solutions, handled multiple projects in parallel in Agile, and contributed to code quality, architecture, and front/back-end optimization.",
    url: "https://lynx-business.com/",
    logo: { type: "component" },
    stack: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "Figma",
      "SCRUM",
    ],
    bullets: [
      "Built complex features (calculations, property tracking, admin flows), AI-generated offer descriptions and geolocated alerts deployed for 15 clients.",
      "Led back-end supervision: centralized management of partners, properties and worksites, multi-role administration, permissions and ATS integration.",
      "Drove Agile SCRUM delivery: code reviews, sprint follow-up and release of 6 complete projects.",
    ],
  },
  {
    period: "Jan. 2021 — Jul. 2023",
    role: "Web & Mobile Developer",
    company: "Cultur'easy — Cultural Company, Haute-Savoie",
    type: "Work-study",
    companyDesc:
      "Cultural company developing web and mobile solutions for event management. Cross-functional role combining development, design and digital communication — custom apps and websites, UX optimization, SEO and content distribution.",
    url: "https://pro.cultureasy.com/",
    logo: { type: "img", src: "/logos/cultureasy.webp", alt: "Cultur'easy" },
    stack: [
      "React Native",
      "Laravel",
      "WordPress",
      "Node.js",
      "MySQL",
      "Mailjet",
      "SEO",
    ],
    bullets: [
      "Cross-functional role: development, design and digital communication. Built custom applications and websites.",
      "Optimized UX/SEO and responsive integration: +20% user engagement.",
      "Built a mobile app (Laravel/Node.js, MySQL) for event and team management — 10+ participants per session, real-time coordination.",
      "Delivered a multi-role CMS for the merchants association, processing 50+ requests per month.",
      "Managed email campaigns (Mailjet) and SEO optimization: +10% visibility.",
    ],
  },
];

export const FORMATIONS_EN: Formation[] = [
  {
    period: "Dec. 2025",
    diploma: "Master's in Web Engineering",
    school: "ESGI — 242 rue du Faubourg Saint-Antoine, 75012 Paris",
    level: "Master",
    logo: { src: "/logos/ESGI.png", alt: "ESGI" },
    desc: "Advanced web engineering program — software architecture, cloud, and tech project management.",
  },
  {
    period: "Dec. 2023",
    diploma: "Bachelor's in Web Engineering",
    school: "ESGI — 242 rue du Faubourg Saint-Antoine, 75012 Paris",
    level: "Bachelor",
    logo: { src: "/logos/ESGI.png", alt: "ESGI" },
    desc: "Specialization in web engineering — fullstack development, app design, Agile methods.",
  },
  {
    period: "Dec. 2020",
    diploma: "Literary Baccalaureate",
    school: "Notre-Dame Saint-François — 8 Rue Portevin, 27000 Évreux",
    level: "High School Diploma",
    logo: { src: "/logos/NDSF.png", alt: "Notre-Dame Saint-François" },
    desc: "Literary Baccalaureate — Foreign & European Language options.",
  },
];

export const SKILLS_EN: SkillGroup[] = [
  {
    cat: "Backend",
    desc: "APIs, business logic, server architecture",
    items: ["Laravel", "Symfony", "Node.js", "REST API", "JWT", "OAuth"],
  },
  {
    cat: "Frontend",
    desc: "Web & mobile interfaces, SPA, SSR",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Inertia.js",
      "React Native",
      "TypeScript",
      "JavaScript ES6+",
    ],
  },
  {
    cat: "Databases",
    desc: "SQL, NoSQL, modeling, optimization",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "GraphQL"],
  },
  {
    cat: "Architecture & Performance",
    desc: "System design, real-time, SEO",
    items: [
      "API-first",
      "WebSockets",
      "Third-party API integrations",
      "Technical SEO",
      "Core Web Vitals",
    ],
  },
  {
    cat: "UI/UX & Design",
    desc: "Components, design systems, animations",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn",
      "Flux",
      "Framer Motion",
      "Figma",
      "Adobe XD",
    ],
  },
  {
    cat: "DevOps & Tooling",
    desc: "CI/CD, containers, deployment",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Vercel",
      "AWS",
      "Laravel Forge",
    ],
  },
  {
    cat: "Project Management",
    desc: "Agile methods, collaboration, tools",
    items: ["Scrum", "Kanban", "Code Review", "Trello", "Notion", "Slack"],
  },
  {
    cat: "Languages",
    desc: "Professional communication",
    items: ["French — native", "English — B2", "Spanish — basics"],
  },
];

export const INTRO_PARAS_EN = [
  "As a fullstack developer, I design and build end-to-end web products, from frontend to backend, with special attention to software architecture, code quality and user experience.",
  "Alongside development, I'm moving toward project lead and CPO roles, driving products from idea to production: framing, specifications, technical choices and delivery follow-up.",
  "Versatile and rigorous, I work with an impact- and results-oriented mindset. I build robust systems designed to last and scale.",
];

export const STATS_EN = [
  { val: "5+", label: "Years of experience" },
  { val: "20+", label: "Projects delivered" },
  { val: "3", label: "Companies" },
];

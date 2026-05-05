/**
 * English text overrides for project data.
 * Non-text fields (slug, name, period, category, stack, url, screenshots.src, video)
 * are inherited from data.ts.
 */

type ProjectTextOverride = {
  role?: string;
  context?: string;
  companyDesc?: string;
  desc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  impact: string[];
  features: string[];
  screenshots?: { title: string; caption: string }[];
};

export const PROJECTS_EN: Record<string, ProjectTextOverride> = {
  mixijob: {
    role: "Fullstack Developer — Lead Tech",
    context: "HR Tech Startup — Paris",
    companyDesc:
      "HR Tech startup developing an innovative recruitment platform in full growth. As the sole developer in the founding team (3 people), I drove product development and technical decisions, from architecture to production, while optimizing performance, SEO and user experience.",
    desc: "End-to-end product development of an HR platform — sole developer on the team. Architecture, production deployment, SEO and performance optimization.",
    longDesc:
      "At Mixijob, I owned the recruitment platform end-to-end in a fast-moving startup context. My role covered both functional design and technical architecture, product delivery, SEO optimizations and platform stability.",
    challenge:
      "Building a solid product foundation with limited resources, while addressing business requirements, SEO and the performance of a growing platform.",
    solution:
      "I structured the application around a Laravel/Vue.js fullstack core, set up the essential platform building blocks, streamlined technical choices and supported product evolution iteratively.",
    impact: [
      "Technical leadership of an HR platform as sole developer.",
      "Front/back performance improvements and organic search optimization.",
      "Production deployment and continuous evolution in a highly autonomous context.",
    ],
    features: [
      "Candidate and recruiter journeys",
      "Product architecture and technical decisions",
      "SEO and performance optimization",
      "Deployment and continuous maintenance",
    ],
    screenshots: [
      { title: "Platform homepage", caption: "Overview of product positioning and entry experience." },
      { title: "Multi-role workspace", caption: "Interface tailored to the specific needs of candidates and recruiters." },
      { title: "Multi-client management and ATS integration", caption: "Ability to manage multiple clients on the same platform with specific integrations (ATS) and business customizations." },
    ],
  },

  "lynx-business": {
    role: "Fullstack Developer",
    context: "Web agency — Paris",
    companyDesc:
      "Web agency serving a diverse range of clients (real estate, notary, healthcare, social, recruitment) on custom and SaaS projects. Within a team of 5 developers, I built solutions with strong business logic, managed several projects in parallel using Agile methodology, and contributed to code quality, architecture and front/back-end optimization.",
    desc: "Building custom and SaaS solutions for diverse clients (real estate, notary, healthcare, recruitment). Strong business logic, code review, front and back-end optimization.",
    longDesc:
      "At Lynx Business, I worked on several parallel client products and projects. The environment demanded strong adaptability, a solid understanding of business context and the ability to deliver quickly without compromising on technical quality.",
    challenge:
      "Managing heterogeneous client contexts, strong business constraints and tight deadlines while maintaining a maintainable technical foundation.",
    solution:
      "I contributed to the fullstack development of the applications, technical trade-offs, UX improvements and delivery quality through a pragmatic and structured approach.",
    impact: [
      "Participation in SaaS and custom projects with strong business logic.",
      "Cross-cutting work on architecture, code quality and performance.",
      "Coordination of multiple topics within an Agile framework.",
    ],
    features: [
      "Client-specific development",
      "Front-end and back-end optimizations",
      "Code review and reliability",
      "Multi-project coordination",
    ],
    screenshots: [
      { title: "Custom business application for real estate", caption: "Property management, renovation tracking and opportunity identification for buying and selling." },
      { title: "Healthcare website integration", caption: "Mobile-first approach with pixel-perfect integration aligned to mockups." },
      { title: "Product and functional evolution for an HR platform", caption: "UX optimization and new feature development for a recruitment platform." },
    ],
  },

  cultureasy: {
    role: "Web & Mobile Developer",
    context: "Cultural startup — Paris",
    companyDesc:
      "Cultural company developing web and mobile solutions for event management. Cross-functional role combining development, design and digital communication — custom apps and websites, UX optimization, SEO and content distribution.",
    desc: "Building custom apps and websites for cultural event management. Cross-functional role: development, UI design and digital communication.",
    longDesc:
      "Cultur'easy gave me a cross-functional role during my first three professional years, blending development, user experience, digital communication and content distribution. I designed interfaces adapted to events and mobile usage.",
    challenge:
      "Creating effective web and mobile experiences in a cultural sector where content readability, attractiveness and discoverability are essential, while helping to strengthen a largely underdeveloped digital presence.",
    solution:
      "I developed custom tools and interfaces (CMS, Mobile App, WordPress...), worked on UX/UI, optimized distribution and supported digital product presence through a user-oriented approach.",
    impact: [
      "Development of web and mobile experiences tailored to the cultural sector.",
      "Hybrid work across technical, design and digital communication.",
      "UX and SEO optimization across publicly visible platforms.",
    ],
    features: [
      "Web and mobile interfaces",
      "UX/UI design",
      "SEO optimization",
      "Content publication and distribution",
    ],
    screenshots: [
      { title: "CMS creation for Thonon-Les-Bains", caption: "Back/front interface for local business owners in Thonon-Les-Bains." },
      { title: "Mobile app for Thonon-Les-Bains", caption: "Mobile marketplace for Thonon-Les-Bains businesses." },
      { title: "Content creation & publication", caption: "WordPress site management and social media presence." },
    ],
  },

  "aem-asbl": {
    role: "Fullstack Developer",
    context: "Évreux — Brussels",
    desc: "Music booking platform centralizing concert, artist and tour management. Includes an event calendar, detailed artist pages, a dedicated content management space, and professional tools (technical riders, media library). Also includes van rental for tour transport and an admin panel to manage everything.",
    longDesc:
      "AEM ASBL is a freelance project structured as a real business product. The goal is to centralize the booking ecosystem — artists, events and logistics — into a single coherent, easy-to-manage platform.",
    challenge:
      "Bringing together multiple business needs into a single interface: booking, event management, media, technical resources and logistics.",
    solution:
      "I am designing a Laravel/Livewire platform built for daily management, with dedicated spaces by use case and an admin layer flexible enough to evolve content and operations over time.",
    impact: [
      "Centralization of multiple business workflows into a single tool.",
      "Structured back-office for content management and operations.",
      "Design of an evolving product built around the music industry.",
    ],
    features: [
      "Concert and tour calendar",
      "Artist pages and media library",
      "Admin dashboard",
      "Van rental management",
    ],
    screenshots: [
      { title: "Booking dashboard", caption: "Central view for managing events, artists and availability." },
      { title: "Artist pages", caption: "Structured content with media, technical info and tour context." },
      { title: "Logistics module", caption: "Dedicated area for van booking and tour travel management." },
    ],
  },

  "map-your-spot": {
    role: "Fullstack Developer",
    context: "Presented at an exhibition in Salzburg, Austria",
    desc: "Interactive map letting users pin favourite spots in a city. Presented at an exhibition in Salzburg, Austria.",
    longDesc:
      "MapYourSpot was designed as an interactive and visual experience. The idea was to offer a simple, intuitive and engaging map to highlight favourite spots in an exhibition context.",
    challenge:
      "Creating a lightweight product that's immediately understandable, capable of showcasing locations and offering a great browsing experience.",
    solution:
      "I developed a smooth map interface, backed by a lightweight backend and a simple Vercel deployment to make the project easily accessible during the event.",
    impact: [
      "Project exhibited in an international context in Salzburg.",
      "Experience centered on spatial visualization and interaction.",
      "Rapid deployment and web accessibility.",
    ],
    features: [
      "Interactive map",
      "Pinning favourite spots",
      "Simple and visual navigation",
      "Fast web deployment",
    ],
    screenshots: [],
  },

  bandzandtankz: {
    role: "Fullstack Developer",
    context: "Évreux — Brussels",
    desc: "Complete web solution (front-end / back-end) dedicated to concert management for the ASBL (non-profit) Bandzandtankz. SEO optimization and security hardening.",
    longDesc:
      "Bandzandtankz is a platform built for a non-profit with a clear need: a website that works both as a public presence and as a management tool for their concert activity.",
    challenge:
      "Balancing web visibility, content administration, security and business logic around concert programming.",
    solution:
      "I built a complete fullstack solution optimized for SEO, with particular attention to security, maintainability and client autonomy in content management.",
    impact: [
      "Creation of a central tool for the non-profit organization.",
      "Improved web search ranking and online visibility.",
      "Solid foundation for event, band and archive management.",
    ],
    features: [
      "Concert management and programming",
      "Content back-office",
      "SEO optimization",
      "Application security hardening",
    ],
    screenshots: [
      { title: "Events page", caption: "Public view of concerts and upcoming dates." },
      { title: "Content administration", caption: "Management of pages, events and media content." },
      { title: "Responsive view", caption: "Experience designed for both desktop and mobile." },
    ],
  },

  "recipe-ai": {
    role: "Fullstack Developer",
    context: "Capstone project — ESGI Master's",
    desc: "AI-assisted recipe generation platform. Google Gemini integration for personalized generation, data management via Airtable, unit tests.",
    longDesc:
      "RecipeAI is a usage-oriented academic project combining AI-assisted generation with structured data. The goal was to deliver a clear, credible and genuinely useful experience to the end user.",
    challenge:
      "Integrating AI generation into a simple, useful and controlled flow, while structuring data and tests around the product.",
    solution:
      "The project uses Vue.js for the interface, Google Gemini for personalized generation and Airtable for data organization, with a test layer to secure expected behavior.",
    impact: [
      "Hands-on experimentation with generative AI in a web product.",
      "Focus on output reliability and data structuring.",
      "Capstone project showcasing a usage-driven fullstack approach.",
    ],
    features: [
      "Personalized recipe generation",
      "User parameters",
      "Data structuring via Airtable",
      "Unit tests",
    ],
    screenshots: [
      { title: "Generation form", caption: "Collecting preferences and constraints before the AI call." },
      { title: "Recipe result", caption: "Displaying a generated recipe with structure and readability." },
      { title: "Data management", caption: "Organizing content and outputs in Airtable." },
    ],
  },

  "revision-ai": {
    role: "Fullstack Developer",
    context: "Capstone project — ESGI Master's",
    desc: "AI-assisted study platform. Microservices architecture with Kubernetes, LLM to generate quizzes from PDFs/images, open-source Tesseract OCR integration, server administration and deployment.",
    longDesc:
      "RevisionAI is a more technical academic project, built around a distributed architecture and a document processing pipeline. The goal was to automatically transform course materials into usable study tools.",
    challenge:
      "Designing a platform capable of processing varied documents, extracting content, applying AI and deploying everything in a robust architecture.",
    solution:
      "We structured the project in microservices, with OCR via Tesseract, LLM-based quiz generation and Kubernetes orchestration, while maintaining a clean administration and deployment logic.",
    impact: [
      "Complete project around a modern microservices architecture.",
      "Automation of document processing and quiz generation.",
      "Skill growth in deployment, orchestration and AI.",
    ],
    features: [
      "PDF / image import",
      "Open-source OCR",
      "LLM quiz generation",
      "Kubernetes architecture",
    ],
    screenshots: [
      { title: "Document import", caption: "Loading materials and preparing documents for processing." },
      { title: "Generated quiz", caption: "Transforming extracted content into active study practice." },
      { title: "Technical architecture", caption: "Logical view of services, processes and deployments." },
    ],
  },

  "ghostly-crm": {
    role: "Fullstack Developer",
    context: "Capstone project — ESGI Master's",
    desc: "CRM application with automated invoice and quote generation, secure quote signing, project management and tracking. Containerized deployment.",
    longDesc:
      "GhostlyCRM is a management project designed to structure client relationships and sales tracking. The idea was to produce a tool capable of unifying quotes, invoicing and project tracking within a single interface.",
    challenge:
      "Making commercial and operational management smoother, with an interface capable of covering multiple stages of the client lifecycle.",
    solution:
      "The product integrates automated document generation, secure signing and project tracking, all within a containerized application to simplify deployment.",
    impact: [
      "Coverage of multiple business needs within a single CRM.",
      "Automation of high-value operational tasks.",
      "Structured deployment via containerization.",
    ],
    features: [
      "Quote and invoice management",
      "Secure signing",
      "Project tracking",
      "Docker deployment",
    ],
    screenshots: [
      { title: "CRM dashboard", caption: "Overview of clients, opportunities and projects." },
      { title: "Commercial document", caption: "Creation and tracking of quotes/invoices within the tool." },
      { title: "Project tracking", caption: "Visualization of progress and key information." },
    ],
  },

  apagnain: {
    role: "Fullstack Developer",
    context: "Capstone project — ESGI Bachelor",
    desc: "Luxury garden gnome e-commerce website. JS/TypeScript backend with a custom framework built from scratch, SSE for real-time stock management, invoice/quote/refund handling.",
    longDesc:
      "Apagnain is a deliberately offbeat academic project in form, but ambitious in scope. The perimeter covered a genuine e-commerce site with real-time logic, document generation and a highly structured backend.",
    challenge:
      "Building a complete e-commerce with real business components, while experimenting with a custom framework and real-time mechanisms.",
    solution:
      "The backend was designed from scratch in JavaScript/TypeScript, with SSE for stock synchronization and an application layer covering invoices, quotes and refunds.",
    impact: [
      "Educational project on backend architecture and e-commerce logic.",
      "Hands-on real-time experimentation via SSE.",
      "Coverage of multiple transactional workflows.",
    ],
    features: [
      "E-commerce catalogue",
      "Real-time stock management",
      "Quote / invoice / refund handling",
      "Custom framework",
    ],
    screenshots: [
      { title: "Product catalogue", caption: "Product showcase and add-to-cart logic." },
      { title: "Real-time stock management", caption: "Quantity synchronization via Server-Sent Events." },
      { title: "Management tunnel", caption: "Dedicated view for commercial and administrative flows." },
    ],
  },

  "vinyl-collector": {
    role: "Fullstack Developer",
    desc: "Space dedicated to vinyl & CD collectors and industry professionals (record stores, sellers, fair exhibitors). Lets individuals manage their collection, stock and wishlist. Connected to the Discogs API for reliable data on each vinyl: original master, release date, edition, tracklist. Enriched with personal user information and professional management data.",
    longDesc:
      "VinylCollector is a personal project blending passion with business product thinking. It aims to offer a genuinely useful space for both collectors and professionals, with rich, structured and actionable data.",
    challenge:
      "Designing a product that meets very different use cases: personal collection, professional stock management, wishlists, metadata enrichment and reliable search.",
    solution:
      "The project leverages Discogs for reference data, complemented by a custom application layer allowing each user to build their own management data.",
    impact: [
      "Personal product with strong business potential.",
      "Centralization of collection and stock data.",
      "Connection to a reliable source with user enrichment.",
    ],
    features: [
      "Collection / wishlist management",
      "Discogs API connection",
      "User-enriched data",
      "Consumer and professional use",
    ],
    screenshots: [
      { title: "Collection library", caption: "Management view for vinyls, CDs and custom lists." },
      { title: "Enriched record page", caption: "Discogs data complemented by the user's business information." },
      { title: "Pro space", caption: "Stock and organization features for sellers and exhibitors." },
    ],
  },

  portfolio: {
    role: "Fullstack Developer & Designer",
    desc: "Complete redesign of my portfolio, originally built on WordPress and unmaintained for several years. Rethought from scratch with a desire to step outside my usual stack (Next / React) and explore new approaches.",
    longDesc:
      "This portfolio was born out of a need to start fresh after several years without updates. The goal was twofold: explore new ways of building outside my main stack, and design a clear, structured experience that highlights my projects, experiences and growth.",
    challenge:
      "Completely rethinking my portfolio with a clean, readable and impactful UX/UI approach, while effectively structuring varied content (projects, experiences, CV) within a cohesive interface.",
    solution:
      "I designed a clear and structured interface, with particular emphasis on content readability and information hierarchy. The site offers smooth navigation between detailed projects, experiences and a digital CV that's easily accessible for recruiters.",
    impact: [
      "Portfolio updated and aligned with my current skill level.",
      "Better readability of my projects and experiences.",
      "Quick access to a structured digital CV for recruiters.",
      "Showcase of more ambitious and challenging personal projects.",
    ],
    features: [
      "Detailed project and experience presentation",
      "Accessible digital CV",
      "UX-oriented clear navigation",
      "Spotlight on personal projects",
    ],
    screenshots: [
      { title: "Homepage", caption: "Clear entry point highlighting positioning and navigation to content." },
      { title: "Project pages", caption: "Project details with context, challenges and solutions." },
      { title: "Digital CV", caption: "Quick and accessible summary of the journey for recruiters." },
    ],
  },
};

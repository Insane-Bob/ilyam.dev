export type ProjectCategory = "pro" | "scolaire" | "freelance" | "perso";

export type ProjectScreenshot = {
    title: string;
    caption: string;
    src?: string;
    alt?: string;
};

export type Project = {
    slug: string;
    name: string;
    period: string;
    category: ProjectCategory;
    role: string;
    context?: string;
    companyDesc?: string;
    desc: string;
    longDesc: string;
    challenge: string;
    solution: string;
    impact: string[];
    features: string[];
    video?: string;
    screenshots: ProjectScreenshot[];
    url?: string;
    stack: string[];
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
    pro: "Pro",
    freelance: "Freelance",
    scolaire: "Scolaire",
    perso: "Perso",
};

export const PROJECTS: Project[] = [
    {
        slug: "mixijob",
        name: "Mixijob",
        period: "2024 — 2025",
        category: "pro",
        role: "Développeur Fullstack — Lead Tech",
        context: "Startup HR Tech — Paris",
        companyDesc:
            "Startup HR Tech développant une plateforme de recrutement innovante en pleine croissance. Unique développeur de l'équipe fondatrice (3 personnes), j'ai piloté le développement produit et les décisions techniques, de l'architecture à la mise en production, tout en optimisant performances, SEO et expérience utilisateur.",
        desc: "Pilotage du développement produit d'une plateforme RH de bout en bout — seul développeur de l'équipe. Architecture, mise en production, SEO et optimisation des performances.",
        longDesc:
            "Chez Mixijob, j'ai porté la plateforme de recrutement de bout en bout dans un contexte startup très rapide. Mon rôle couvrait autant la conception fonctionnelle que l'architecture technique, la livraison produit, les optimisations SEO et la stabilité de la plateforme.",
        challenge:
            "Construire une base produit solide avec peu de ressources, tout en répondant aux enjeux métier, au référencement et à la performance d'une plateforme en croissance.",
        solution:
            "J'ai structuré l'application autour d'un socle fullstack Laravel/Vue.js, mis en place les briques essentielles de la plateforme, rationalisé les choix techniques et accompagné les évolutions produit de manière itérative.",
        impact: [
            "Pilotage technique d'une plateforme RH en tant que développeur principal.",
            "Amélioration des performances front/back et du référencement naturel.",
            "Mise en production et évolution continue dans un contexte de forte autonomie.",
        ],
        features: [
            "Parcours candidats et recruteurs",
            "Architecture produit et décisions techniques",
            "Optimisation SEO et performance",
            "Déploiement et maintenance continue",
        ],
        screenshots: [
            {
                title: "Accueil plateforme",
                caption: "Vue d'ensemble du positionnement produit et de l'expérience d'entrée.",
                src: "/projects/mixijob/mixijob-presentation.png"
            },
            {
                title: "Espace mutli-rôles",
                caption: "Interface adaptée aux besoins spécifiques des candidats et des recruteurs.",
                src: "/projects/mixijob/mixijob-dashboard.png"
            },
            {
                title: "Gestion multi-clients et intégration d'ATS",
                caption: "Capacité à gérer plusieurs clients sur la même plateforme avec des intégrations spécifiques (ATS) et des personnalisations métier.",
                src: "/projects/mixijob/mixijob-ats.png"
            },
        ],
        url: "https://mixijob.com/",
        stack: ["Vue.js", "Laravel", "MySQL", "SEO", "Docker"],
    },
    {
        slug: "lynx-business",
        name: "Lynx Business",
        period: "2023 — 2024",
        category: "pro",
        role: "Développeur Fullstack",
        context: "Agence web — Paris",
        companyDesc:
            "Agence web accompagnant des clients variés (immobilier, notariat, santé, social, recrutement) sur des projets sur-mesure et SaaS. Au sein d'une équipe de 5 développeurs, j'ai développé des solutions à forte logique métier, piloté plusieurs projets en parallèle en méthodologie Agile, et contribué à la qualité du code, l'architecture et l'optimisation front-end et back-end.",
        desc: "Développement de solutions sur-mesure et SaaS pour des clients variés (immobilier, notariat, santé, recrutement). Forte logique métier, revue de code, optimisation front et back.",
        longDesc:
            "Chez Lynx Business, j'ai travaillé sur plusieurs produits et projets clients en parallèle. L'environnement demandait beaucoup d'adaptation, une bonne compréhension métier et la capacité à produire rapidement sans sacrifier la qualité technique.",
        challenge:
            "Gérer des contextes clients hétérogènes, des contraintes métier fortes et des délais courts tout en gardant une base technique maintenable.",
        solution:
            "J'ai contribué au développement fullstack des applications, aux arbitrages techniques, à l'amélioration de l'expérience utilisateur et à la qualité de livraison via une approche pragmatique et structurée.",
        impact: [
            "Participation à des projets SaaS et sur-mesure à forte logique métier.",
            "Travail transverse sur l'architecture, la qualité du code et la performance.",
            "Coordination de plusieurs sujets dans un cadre Agile.",
        ],
        features: [
            "Développements clients spécifiques",
            "Optimisations front-end et back-end",
            "Revue de code et fiabilisation",
            "Coordination multi-projets",
        ],
        screenshots: [
            {
                title: "Application métier sur mesure pour le secteur immobilier",
                caption: "Gestion de biens, suivi des travaux et identification d’opportunités d’achat et de vente",
                src: "/projects/lynx-business/mabrikimmo.png",
            },
            {
                title: "Intégration d’un site vitrine pour le secteur de la santé",
                caption: "Approche mobile-first avec une intégration soignée et fidèle aux maquettes (pixel-perfect)",
                src: "/projects/lynx-business/bossons-futé.png",
            },
            {
                title: "Évolution produit et fonctionnel pour une plateforme RH",
                caption: "Optimisation de l’expérience utilisateur et développement de nouvelles fonctionnalités pour une plateforme de recrutement",
                src: "/projects/lynx-business/mixijob.png",
            },
        ],
        url: "https://lynx-business.com/",
        stack: ["Laravel", "Vue.js", "Agile", "MySQL", "Docker"],
    },
    {
        slug: "cultureasy",
        name: "Cultur'easy",
        period: "2020 — 2023",
        category: "pro",
        role: "Développeur Web & Mobile",
        context: "Startup culturelle — Paris",
        companyDesc:
            "Entreprise culturelle développant des solutions web et mobiles pour la gestion d'événements. Rôle transversal combinant développement, design et communication digitale — création d'applications et sites sur-mesure, optimisation UX, SEO et diffusion des contenus.",
        desc: "Création d'applications et sites sur-mesure pour la gestion d'événements culturels. Rôle transversal : développement, design UI et communication digitale.",
        longDesc:
            "Cultur'easy m'a permis d'occuper un rôle transversal durant mes trois premières années professionnelles, mêlant développement, expérience utilisateur, communication digitale et diffusion de contenus. J’y ai conçu des interfaces adaptées aux événements et aux usages mobiles.",
        challenge:
            "Créer des expériences web et mobile efficaces dans un secteur culturel où la lisibilité, l’attractivité et la découvrabilité des contenus sont essentielles, tout en contribuant à renforcer une présence numérique encore largement sous-développée.",
        solution:
            "J'ai développé des outils et interfaces sur-mesure (CMS, Application Mobile, Wordpress...), j'ai pu travaillé l'UX/UI, optimisé la diffusion et accompagné la présence digitale des produits via une logique orientée utilisateurs.",
        impact: [
            "Développement d'expériences web et mobile adaptées au secteur culturel.",
            "Travail hybride entre technique, design et communication digitale.",
            "Optimisation UX et SEO sur des supports visibles publiquement.",
        ],
        features: [
            "Interfaces web et mobile",
            "Conception UX/UI",
            "Optimisation SEO",
            "Publication et diffusion de contenus",
        ],
        screenshots: [
            {
                title: "Création d'un CMS pour Thonon-Les-Bains",
                caption: "Interface back / front pour les commerçants de Thonon-Les-Bains",
                src: "/projects/cultureasy/thonon-commerce-entreprise.png",
            },
            {
                title: "Application mobile pour Thonon-Les-Bains",
                caption: "Marketplace mobile pour les commerçants Thonon-Les-Bains",
                src: "/projects/cultureasy/iziciti.png"
            },
            {
                title: "Création & Publication de contenu",
                caption: "Gestion d'un site Wordpress et des réseaux sociaux",
                src: "/projects/cultureasy/cultureasy-media.png"
            },
        ],
        url: "https://pro.cultureasy.com/",
        stack: ["React Native", "Laravel", "WordPress", "UX/UI", "SEO"],
    },
    {
        slug: "aem-asbl",
        name: "AEM ASBL",
        period: "2026 — En cours",
        category: "freelance",
        role: "Développeur Fullstack",
        context: "Évreux — Bruxelles",
        desc: "Plateforme de booking musical centralisant la gestion des concerts, des artistes et des tournées. Intègre un agenda d’événements, des fiches artistes complètes, un espace dédié pour la gestion de contenu, ainsi que des outils professionnels (fiches techniques, banque de médias). Inclut également un service de location de vans pour les déplacements en tournée et un espace administrateur pour piloter l’ensemble.",
        longDesc:
            "AEM ASBL est un projet freelance structuré comme un véritable produit métier. L'objectif est de centraliser l'écosystème booking, artistes, événements et logistique dans une seule plateforme cohérente et simple à administrer.",
        challenge:
            "Rassembler plusieurs besoins métier dans une même interface : booking, gestion d'événements, médias, ressources techniques et dimension logistique.",
        solution:
            "Je suis entrain de concevoir une plateforme Laravel/Livewire pensée pour la gestion quotidienne, avec des espaces dédiés selon les usages et une administration suffisamment souple pour faire évoluer le contenu et les opérations.",
        impact: [
            "Centralisation de plusieurs workflows métier dans un seul outil.",
            "Structuration d'un back-office pour la gestion de contenu et des opérations.",
            "Conception d'un produit évolutif autour du secteur musical.",
        ],
        features: [
            "Agenda concerts et tournées",
            "Fiches artistes et banque média",
            "Espace d'administration",
            "Gestion location de vans",
        ],
        screenshots: [
            {
                title: "Dashboard booking",
                caption: "Vue centrale pour piloter les événements, artistes et disponibilités.",
            },
            {
                title: "Fiches artistes",
                caption: "Contenus structurés avec médias, informations techniques et contexte de tournée.",
            },
            {
                title: "Module logistique",
                caption: "Zone dédiée à la réservation et au suivi des vans et déplacements.",
            },
        ],
        stack: ["Laravel", "Livewire", "OVH", "Termius", "GitHub"],
    },
    {
        slug: "map-your-spot",
        name: "MapYourSpot",
        period: "Mars 2026",
        category: "freelance",
        role: "Développeur Fullstack",
        context: "Présenté lors d'une expo à Salzbourg, Autriche",
        desc: "Carte interactive permettant d'épingler des lieux favoris dans une ville. Présentée lors d'une exposition en Autriche (Salzbourg).",
        longDesc:
            "MapYourSpot est un projet pensé comme une expérience interactive et visuelle. L'idée était de proposer une carte simple, intuitive et engageante pour valoriser des lieux favoris dans un contexte d'exposition.",
        challenge:
            "Créer un produit léger, compréhensible immédiatement, capable de mettre en valeur des localisations et d'offrir une bonne expérience de consultation.",
        solution:
            "J'ai développé une interface cartographique fluide, appuyée sur un backend léger et un déploiement simple via Vercel afin de faciliter l'accès au projet pendant l'événement.",
        impact: [
            "Projet exposé dans un contexte international à Salzbourg.",
            "Expérience centrée sur la visualisation et l'interaction spatiale.",
            "Déploiement rapide et accessible via le web.",
        ],
        features: [
            "Carte interactive",
            "Épinglage de lieux favoris",
            "Navigation simple et visuelle",
            "Déploiement web rapide",
        ],
        screenshots: [],
        video: "/projects/map-your-spot/map-your-spot-video.mp4",
        url: "https://mapyourspot.vercel.app",
        stack: ["Vue.js", "MongoDB", "Vercel", "GitHub"],
    },
    {
        slug: "bandzandtankz",
        name: "Bandzandtankz",
        period: "Janvier 2026",
        category: "freelance",
        role: "Développeur Fullstack",
        context: "Évreux — Bruxelles",
        desc: "Solution web complète (front-end / back-end) dédiée à la gestion des concerts de l'ASBL (Association Sans But Lucratif) Bandzandtankz. Optimisation SEO et renforcement de la sécurité.",
        longDesc:
            "Bandzandtankz est une plateforme réalisée pour une ASBL avec un besoin clair : disposer d'un site utile à la fois pour la présence publique et pour la gestion de l'activité autour des concerts.",
        challenge:
            "Concilier visibilité web, administration de contenu, sécurité et logique métier autour de la programmation de concerts.",
        solution:
            "J'ai développé une solution fullstack complète, optimisée pour le SEO, avec une attention particulière portée à la sécurité, à la maintenabilité et à l'autonomie du client dans la gestion du contenu.",
        impact: [
            "Création d'un outil central pour la structure associative.",
            "Amélioration du référencement web et de la visibilité en ligne.",
            "Mise en place d'une base solide pour la gestion d'évènements, de groupes ou d'archives",
        ],
        features: [
            "Gestion concerts et programmation",
            "Back-office contenu",
            "Optimisation SEO",
            "Renforcement sécurité applicative",
        ],
        screenshots: [
            {
                title: "Page agenda",
                caption: "Vue publique des concerts et prochaines dates.",
                src: "/projects/bandz-and-tankz/bandz-and-tankz-agenda.png"
            },
            {
                title: "Administration contenu",
                caption: "Pilotage des pages, événements et contenus média.",
                src: "/projects/bandz-and-tankz/bandz-and-tankz-backend.png",
            },
            {
                title: "Vue responsive",
                caption: "Expérience pensée pour desktop comme mobile.",
                src: "/projects/bandz-and-tankz/bandz-and-tankz.png",
            },
        ],
        url: "https://bandzandtankz.be",
        stack: ["Laravel", "Vue.js", "OVH", "Termius", "GitHub"],
    },
    {
        slug: "recipe-ai",
        name: "RecipeAI",
        period: "Juin — Juil. 2025",
        category: "scolaire",
        role: "Développeur Fullstack",
        context: "Projet fil rouge — Mastère ESGI",
        desc: "Plateforme de génération de recettes assistée par IA. Intégration de Google Gemini pour la génération personnalisée, gestion des données via Airtable, tests unitaires.",
        longDesc:
            "RecipeAI est un projet académique orienté usage qui combine génération assistée par IA et structuration de données. L'objectif était de proposer une expérience claire, crédible et réellement exploitable pour l'utilisateur final.",
        challenge:
            "Intégrer de la génération IA dans un parcours simple, utile et contrôlé, tout en structurant les données et les tests autour du produit.",
        solution:
            "Le projet s'appuie sur Vue.js pour l'interface, Google Gemini pour la génération personnalisée et Airtable pour l'organisation des données, avec une couche de tests pour sécuriser le comportement attendu.",
        impact: [
            "Expérimentation concrète de l'IA générative dans un produit web.",
            "Travail sur la fiabilité des sorties et la structuration des données.",
            "Projet fil rouge valorisant une approche fullstack orientée usage.",
        ],
        features: [
            "Génération de recettes personnalisées",
            "Paramètres utilisateur",
            "Structuration des données via Airtable",
            "Tests unitaires",
        ],
        screenshots: [
            {
                title: "Formulaire de génération",
                caption: "Collecte des préférences et contraintes avant appel IA.",
            },
            {
                title: "Résultat recette",
                caption: "Affichage d'une recette générée avec structure et lisibilité.",
            },
            {
                title: "Gestion des données",
                caption: "Organisation des contenus et sorties dans Airtable.",
            },
        ],
        stack: ["Vue.js", "Google Gemini", "Airtable", "Tests unitaires"],
    },
    {
        slug: "revision-ai",
        name: "RevisionAI",
        period: "Mai — Juil. 2025",
        category: "scolaire",
        role: "Développeur Fullstack",
        context: "Projet fil rouge — Mastère ESGI",
        desc: "Plateforme de révision assistée par IA. Architecture microservices avec Kubernetes, LLM pour générer des quiz depuis PDF/images, intégration Tesseract OCR (open source), administration serveur et déploiement.",
        longDesc:
            "RevisionAI est un projet académique plus technique, pensé autour d'une architecture distribuée et d'un pipeline de traitement documentaire. Le but était de transformer automatiquement des supports de cours en outils de révision exploitables.",
        challenge:
            "Concevoir une plateforme capable de traiter des documents variés, d'extraire du contenu, d'y appliquer de l'IA et de déployer l'ensemble dans une architecture robuste.",
        solution:
            "Nous avons structuré le projet en microservices, avec OCR via Tesseract, génération de quiz par LLM et orchestration par Kubernetes, tout en gardant une logique propre d'administration et de déploiement.",
        impact: [
            "Projet complet autour d'une architecture microservices moderne.",
            "Automatisation du traitement documentaire et de la génération de quiz.",
            "Montée en compétence sur déploiement, orchestration et IA.",
        ],
        features: [
            "Import PDF / images",
            "OCR open source",
            "Génération de quiz par LLM",
            "Architecture Kubernetes",
        ],
        screenshots: [
            {
                title: "Import documentaire",
                caption: "Chargement des supports et préparation des documents à traiter.",
            },
            {
                title: "Quiz généré",
                caption: "Transformation du contenu extrait en révision active.",
            },
            {
                title: "Architecture technique",
                caption: "Vue logique des services, traitements et déploiements.",
            },
        ],
        stack: [
            "Microservices",
            "Kubernetes",
            "LLM",
            "Tesseract OCR",
            "Clean Architecture",
            "Docker",
        ],
    },
    {
        slug: "ghostly-crm",
        name: "GhostlyCRM",
        period: "Mai — Juil. 2023",
        category: "scolaire",
        role: "Développeur Fullstack",
        context: "Projet fil rouge — Mastère ESGI",
        desc: "Application CRM avec génération automatisée de factures et devis, signature sécurisée des devis, gestion et suivi de projets. Déploiement conteneurisé.",
        longDesc:
            "GhostlyCRM est un projet de gestion pensé pour structurer la relation client et le suivi commercial. L'idée était de produire un outil capable d'unifier devis, facturation et suivi des projets au sein d'une même interface.",
        challenge:
            "Rendre la gestion commerciale et opérationnelle plus fluide, avec une interface capable de couvrir plusieurs étapes du cycle client.",
        solution:
            "Le produit intègre la génération automatisée des documents, la sécurisation des signatures et un suivi des projets, le tout dans une application conteneurisée pour simplifier le déploiement.",
        impact: [
            "Couverture de plusieurs besoins métier dans un seul CRM.",
            "Automatisation de tâches à forte valeur opérationnelle.",
            "Déploiement structuré via conteneurisation.",
        ],
        features: [
            "Gestion devis et factures",
            "Signature sécurisée",
            "Suivi de projets",
            "Déploiement Docker",
        ],
        screenshots: [
            {
                title: "Dashboard CRM",
                caption: "Vue synthétique des clients, opportunités et projets.",
            },
            {
                title: "Document commercial",
                caption: "Création et suivi de devis / factures dans l'outil.",
            },
            {
                title: "Suivi projet",
                caption: "Visualisation de l'avancement et des informations clés.",
            },
        ],
        stack: ["Node.js", "Docker", "Conteneurisation"],
    },
    {
        slug: "apagnain",
        name: "Apagnain",
        period: "Mai — Juil. 2024",
        category: "scolaire",
        role: "Développeur Fullstack",
        context: "Projet fil rouge — Bachelor ESGI",
        desc: "Site e-commerce de vente de nains de jardins de luxe. Backend JS/TypeScript avec framework maison from scratch, SSE pour la gestion des stocks en temps réel, gestion des factures/devis/remboursements.",
        longDesc:
            "Apagnain est un projet académique volontairement décalé sur la forme, mais ambitieux sur le fond. Le périmètre couvrait un véritable e-commerce avec logique temps réel, génération documentaire et backend développé de manière très structurante.",
        challenge:
            "Construire un e-commerce complet avec des briques métier réelles, tout en expérimentant un framework maison et des mécanismes temps réel.",
        solution:
            "Le backend a été pensé from scratch en JavaScript/TypeScript, avec SSE pour la synchronisation des stocks et une couche applicative couvrant factures, devis et remboursements.",
        impact: [
            "Projet formateur sur l'architecture backend et la logique e-commerce.",
            "Expérimentation concrète du temps réel via SSE.",
            "Couverture de plusieurs workflows transactionnels.",
        ],
        features: [
            "Catalogue e-commerce",
            "Stocks en temps réel",
            "Gestion devis / factures / remboursements",
            "Framework maison",
        ],
        screenshots: [
            {
                title: "Catalogue produit",
                caption: "Mise en avant des produits et logique d'ajout au panier.",
            },
            {
                title: "Gestion stock temps réel",
                caption: "Synchronisation des quantités via Server-Sent Events.",
            },
            {
                title: "Tunnel de gestion",
                caption: "Vue dédiée aux flux commerciaux et administratifs.",
            },
        ],
        stack: ["TypeScript", "JavaScript", "Vue.js", "SSE", "E-commerce"],
    },
    {
        slug: "vinyl-collector",
        name: "VinylCollector",
        period: "2026 — En cours",
        category: "perso",
        role: "Développeur Fullstack",
        desc: "Espace dédié aux collectionneurs de vinyles & CD ainsi qu'aux professionnels du secteur (disquaires, vendeurs, exposants en bourses et marchés). Permet aux particuliers de gérer leur collection, leur stock et une wishlist. Connecté à l'API Discogs pour des informations fiables sur chaque vinyle : master original, date de sortie, édition, tracklist. Données enrichies avec les informations personnelles de chaque utilisateur et les données de gestion côté professionnel.",
        longDesc:
            "VinylCollector est un projet personnel mêlant passion et produit métier. Il vise à proposer un espace réellement utile aux collectionneurs comme aux professionnels, avec une donnée enrichie, structurée et exploitable au quotidien.",
        challenge:
            "Concevoir un produit capable de répondre à des usages très différents : collection personnelle, gestion de stock professionnel, wishlist, enrichissement de métadonnées et recherche fiable.",
        solution:
            "Le projet s'appuie sur Discogs pour les données de référence, complétées par une couche applicative personnalisée permettant à chaque utilisateur de construire sa propre donnée de gestion.",
        impact: [
            "Produit personnel à fort potentiel métier.",
            "Centralisation de données de collection et de stock.",
            "Connexion à une source fiable avec enrichissement utilisateur.",
        ],
        features: [
            "Gestion collection / wishlist",
            "Connexion API Discogs",
            "Données enrichies par utilisateur",
            "Usage particulier et professionnel",
        ],
        screenshots: [
            {
                title: "Bibliothèque collection",
                caption: "Vue de gestion des vinyles, CD et listes personnalisées.",
            },
            {
                title: "Fiche disque enrichie",
                caption: "Données Discogs complétées par les informations métier de l'utilisateur.",
            },
            {
                title: "Espace pro",
                caption: "Fonctions de stock et d'organisation pour vendeurs et exposants.",
            },
        ],
        stack: ["API Discogs", "Laravel", "Livewire", "SQLite"],
    },
       {
        slug: "portfolio",
        name: "Portfolio",
        period: "2026",
        category: "perso",
        role: "Développeur Fullstack & Designer",
        desc: "Refonte complète de mon portfolio, initialement sous WordPress et non maintenu depuis plusieurs années. Projet repensé from scratch avec une volonté de sortir de ma stack habituelle (Next / React) pour explorer d’autres approches.",
        longDesc:
            "Ce portfolio est né d’un besoin de repartir de zéro après plusieurs années sans mise à jour. L’objectif était double : explorer de nouvelles manières de développer en dehors de ma stack principale, et concevoir une expérience claire et structurée mettant en valeur mes projets, mes expériences et mon évolution.",
        challenge:
            "Repenser entièrement mon portfolio avec une approche UX/UI propre, lisible et impactante, tout en structurant efficacement des contenus variés (projets, expériences, CV) dans une interface cohérente.",
        solution:
            "J’ai conçu une interface claire et structurée, avec un accent particulier sur la lisibilité des contenus et la hiérarchisation des informations. Le site propose une navigation fluide entre projets détaillés, expériences et une version numérique du CV facilement accessible pour les recruteurs.",
        impact: [
            "Portfolio remis à jour et aligné avec mon niveau actuel.",
            "Meilleure lisibilité de mes projets et expériences.",
            "Accès rapide à un CV numérique structuré pour les recruteurs.",
            "Mise en avant de projets personnels plus ambitieux et challengeants.",
        ],
        features: [
            "Présentation détaillée des projets et expériences",
            "CV numérique accessible",
            "Navigation claire orientée UX",
            "Mise en avant des projets personnels",
        ],
        screenshots: [
            {
                title: "Homepage",
                caption: "Entrée claire avec mise en avant du positionnement et navigation vers les contenus.",
            },
            {
                title: "Pages projets",
                caption: "Détail des projets avec contexte, challenges et solutions.",
            },
            {
                title: "CV numérique",
                caption: "Synthèse rapide et accessible du parcours pour les recruteurs.",
            },
        ],
        stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    },
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}

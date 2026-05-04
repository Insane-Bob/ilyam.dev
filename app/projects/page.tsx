"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  name: string;
  period: string;
  category: "pro" | "scolaire" | "freelance" | "perso";
  role: string;
  context?: string;
  companyDesc?: string;
  desc: string;
  url?: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Lynx Business",
    period: "2024 — 2025",
    category: "pro",
    role: "Développeur Fullstack",
    context: "Agence web — Paris",
    companyDesc:
      "Agence web accompagnant des clients variés (immobilier, notariat, santé, social, recrutement) sur des projets sur-mesure et SaaS. Au sein d'une équipe de 5 développeurs, j'ai développé des solutions à forte logique métier, piloté plusieurs projets en parallèle en méthodologie Agile, et contribué à la qualité du code, l'architecture et l'optimisation front-end et back-end.",
    desc: "Développement de solutions sur-mesure et SaaS pour des clients variés (immobilier, notariat, santé, recrutement). Forte logique métier, revue de code, optimisation front et back.",
    url: "https://lynx-business.com/",
    stack: ["Laravel", "Vue.js", "Agile", "MySQL", "Docker"],
  },
  {
    name: "Cultur'easy",
    period: "2023 — 2024",
    category: "pro",
    role: "Développeur Web & Mobile",
    context: "Startup culturelle — Paris",
    companyDesc:
      "Entreprise culturelle développant des solutions web et mobiles pour la gestion d'événements. Rôle transversal combinant développement, design et communication digitale — création d'applications et sites sur-mesure, optimisation UX, SEO et diffusion des contenus.",
    desc: "Création d'applications et sites sur-mesure pour la gestion d'événements culturels. Rôle transversal : développement, design UI et communication digitale.",
    url: "https://pro.cultureasy.com/",
    stack: ["React Native", "Laravel", "WordPress", "UX/UI", "SEO"],
  },
  {
    name: "Mixijob",
    period: "2022 — 2023",
    category: "pro",
    role: "Développeur Fullstack — Lead Tech",
    context: "Startup HR Tech — Paris",
    companyDesc:
      "Startup HR Tech développant une plateforme de recrutement innovante en pleine croissance. Unique développeur de l'équipe fondatrice (3 personnes), j'ai piloté le développement produit et les décisions techniques, de l'architecture à la mise en production, tout en optimisant performances, SEO et expérience utilisateur.",
    desc: "Pilotage du développement produit d'une plateforme RH de bout en bout — seul développeur de l'équipe fondatrice. Architecture, mise en production, SEO et optimisation des performances.",
    url: "https://mixijob.com/",
    stack: ["Vue.js", "Laravel", "MySQL", "SEO", "Docker"],
  },
  {
    name: "Bandzandtankz",
    period: "Nov. 2025",
    category: "freelance",
    role: "Développeur Fullstack",
    context: "Évreux",
    desc: "Solution web complète (front-end / back-end) dédiée à la gestion des concerts de l'ASBL Bandzandtankz. Optimisation SEO et renforcement de la sécurité.",
    url: "https://bandzandtankz.be",
    stack: ["Laravel", "Vue.js", "OVH", "Termius", "GitHub"],
  },
  {
    name: "MapYourSpot",
    period: "2024",
    category: "freelance",
    role: "Développeur Fullstack",
    context: "Présenté lors d'une expo à Salzbourg, Autriche",
    desc: "Carte interactive permettant d'épingler des lieux favoris dans une ville. Présentée lors d'une exposition en Autriche (Salzbourg).",
    url: "https://mapyourspot.vercel.app",
    stack: ["Vue.js", "MongoDB", "Vercel", "GitHub"],
  },
  {
    name: "RecipeAI",
    period: "Juin — Juil. 2025",
    category: "scolaire",
    role: "Développeur Fullstack",
    context: "Projet fil rouge — Mastère ESGI",
    desc: "Plateforme de génération de recettes assistée par IA. Intégration de Google Gemini pour la génération personnalisée, gestion des données via Airtable, tests unitaires.",
    stack: ["Vue.js", "Google Gemini", "Airtable", "Tests unitaires"],
  },
  {
    name: "RevisionAI",
    period: "Mai — Juil. 2025",
    category: "scolaire",
    role: "Développeur Fullstack",
    context: "Projet fil rouge — Mastère ESGI",
    desc: "Plateforme de révision assistée par IA. Architecture microservices avec Kubernetes, LLM pour générer des quiz depuis PDF/images, intégration Tesseract OCR (open source), administration serveur et déploiement.",
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
    name: "GhostlyCRM",
    period: "Mai — Juil. 2023",
    category: "scolaire",
    role: "Développeur Fullstack",
    context: "Projet fil rouge — Mastère ESGI",
    desc: "Application CRM avec génération automatisée de factures et devis, signature sécurisée des devis, gestion et suivi de projets. Déploiement conteneurisé.",
    stack: ["Node.js", "Docker", "Conteneurisation"],
  },
  {
    name: "Apagnain",
    period: "Mai — Juil. 2024",
    category: "scolaire",
    role: "Développeur Fullstack",
    context: "Projet fil rouge — Bachelor ESGI",
    desc: "Site e-commerce de vente de nains de jardins de luxe. Backend JS/TypeScript avec framework maison from scratch, SSE pour la gestion des stocks en temps réel, gestion des factures/devis/remboursements.",
    stack: ["TypeScript", "JavaScript", "Vue.js", "SSE", "E-commerce"],
  },
  {
    name: "VinylCollector",
    period: "2025 — En cours",
    category: "perso",
    role: "Développeur Fullstack",
    desc: "Espace dédié aux collectionneurs de vinyles & CD ainsi qu'aux professionnels du secteur (disquaires, vendeurs, exposants en bourses et marchés). Permet aux particuliers de gérer leur collection, leur stock et une wishlist. Connecté à l'API Discogs pour des informations fiables sur chaque vinyle : master original, date de sortie, édition, tracklist. Données enrichies avec les informations personnelles de chaque utilisateur et les données de gestion côté professionnel.",
    stack: ["API Discogs", "Laravel", "Livewire", "SQLite"],
  },
  {
    name: "Portfolio",
    period: "2026",
    category: "perso",
    role: "Développeur Fullstack & Designer",
    desc: "Ce portfolio — conçu et développé from scratch avec une approche brutalist. Mise en page typographique forte, animations au scroll, design system basé sur des CSS custom properties, et architecture Next.js App Router.",
    stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
];

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "pro", label: "Pro" },
  { id: "freelance", label: "Freelance" },
  { id: "scolaire", label: "Scolaire" },
  { id: "perso", label: "Perso" },
] as const;

type FilterId = (typeof CATEGORIES)[number]["id"];

const CATEGORY_LABELS: Record<Project["category"], string> = {
  pro: "Pro",
  freelance: "Freelance",
  scolaire: "Scolaire",
  perso: "Perso",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 pt-20 pb-16 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: "var(--accent)" }}
        >
          [03] — Projets
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="reflect-glow font-black leading-none tracking-tighter uppercase"
            data-text="Mes"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)", color: "var(--fg)" }}
          >
            Mes
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none tracking-tighter uppercase"
            style={{
              fontSize: "clamp(3rem, 12vw, 10rem)",
              WebkitTextStroke: "2px var(--border-mid)",
              color: "transparent",
            }}
          >
            Projets
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-mono text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--fg-muted)" }}
        >
          Projets professionnels, scolaires et personnels — du e-commerce à
          l'IA, en passant par les CRM et les cartes interactives.
        </motion.p>
      </section>

      {/* ── FILTERS ──────────────────────────────────────── */}
      <div
        className="px-8 md:px-16 flex items-center gap-px border-b"
        style={{ borderColor: "var(--border)", background: "var(--border)" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className="px-6 py-4 font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative"
            style={{
              color: filter === cat.id ? "var(--accent)" : "var(--fg-subtle)",
              background: "var(--bg)",
            }}
            onMouseEnter={(e) => {
              if (filter !== cat.id)
                (e.currentTarget as HTMLElement).style.color =
                  "var(--fg-muted)";
            }}
            onMouseLeave={(e) => {
              if (filter !== cat.id)
                (e.currentTarget as HTMLElement).style.color =
                  "var(--fg-subtle)";
            }}
          >
            {cat.label}
            {filter === cat.id && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 inset-x-0 h-0.5"
                style={{ background: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </button>
        ))}
        <span
          className="ml-auto px-6 py-4 font-mono text-xs"
          style={{ color: "var(--fg-subtle)", background: "var(--bg)" }}
        >
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* ── PROJECTS GRID ────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16">
        <div
          className="flex flex-col gap-px"
          style={{ background: "var(--border)" }}
        >
          {filtered.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex flex-col sm:flex-row gap-6 p-6 md:p-8"
              style={{ background: "var(--bg)" }}
            >
              {/* Left: meta */}
              <div className="shrink-0 sm:w-48 flex flex-col gap-2">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  {project.period}
                </span>
                <span
                  className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border w-fit"
                  style={{
                    borderColor:
                      project.category === "freelance" ||
                      project.category === "pro"
                        ? "var(--accent)"
                        : "var(--border-mid)",
                    color:
                      project.category === "freelance" ||
                      project.category === "pro"
                        ? "var(--accent)"
                        : "var(--fg-subtle)",
                  }}
                >
                  {CATEGORY_LABELS[project.category]}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--fg-subtle)" }}
                >
                  {project.role}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3
                    className="font-black text-2xl uppercase tracking-tight"
                    style={{ color: "var(--fg)" }}
                  >
                    {project.name}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-mono text-xs tracking-widest uppercase px-3 py-1.5 border transition-colors duration-200"
                      style={{
                        borderColor: "var(--border-mid)",
                        color: "var(--fg-subtle)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--accent)";
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--border-mid)";
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--fg-subtle)";
                      }}
                    >
                      ↗ Voir
                    </a>
                  )}
                </div>

                {project.context && (
                  <p
                    className="font-mono text-xs tracking-widest mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {project.context}
                  </p>
                )}

                {project.companyDesc && (
                  <p
                    className="font-mono text-xs leading-relaxed mb-3 max-w-2xl"
                    style={{ color: "var(--fg-subtle)", fontStyle: "italic" }}
                  >
                    {project.companyDesc}
                  </p>
                )}

                <p
                  className="font-mono text-xs leading-relaxed mb-4 max-w-2xl"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.desc}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border"
                      style={{
                        borderColor: "var(--border-mid)",
                        color: "var(--fg-subtle)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────── */}
      <div
        className="px-8 md:px-16 py-8 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "var(--fg-subtle)" }}
        >
          {PROJECTS.length} projets au total
        </span>
        <a
          href="/cv"
          className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: "var(--fg-subtle)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--fg-subtle)")
          }
        >
          Voir le CV complet →
        </a>
      </div>
    </div>
  );
}

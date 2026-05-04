"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = { name: string; period: string; desc: string; stack: string[] };
type Formation = {
  year: string;
  diploma: string;
  level: string;
  school: string;
  schoolFull: string;
  location: string;
  logo: { src: string; alt: string };
  accent: string;
  desc: string;
  modules: string[];
  highlights: { label: string; value: string }[];
  projects?: Project[];
};

const FORMATIONS: Formation[] = [
  {
    year: "2023 — 2025",
    diploma: "Mastère Ingénierie du Web",
    level: "Bac+5 — Master",
    school: "ESGI",
    schoolFull: "École Supérieure de Génie Informatique",
    location: "242 rue du Faubourg Saint-Antoine, 75012 Paris",
    logo: { src: "/logos/ESGI.png", alt: "ESGI" },
    accent: "#b8ff57",
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
      {
        label: "Alternance",
        value: "Mixijob (Startup HR Tech) — développeur fullstack unique, CDI",
      },
      {
        label: "Validation",
        value: "Juin 2025",
      },
    ],
    projects: [
      {
        name: "RecipeAI",
        period: "Juin 2025 — Juil. 2025",
        desc: "Plateforme de génération de recettes assistée par IA. Intégration de Gemini pour la génération de recettes personnalisées, gestion des données via Airtable, tests unitaires.",
        stack: ["Vue.js", "Google Gemini", "Airtable", "Tests unitaires"],
      },
      {
        name: "RevisionAI",
        period: "Mai 2025 — Juil. 2025",
        desc: "Plateforme de révision assistée par IA. Architecture microservices avec Kubernetes, LLM pour générer des quiz depuis PDF/images, intégration Tesseract OCR, déploiement et administration serveur. Clean Architecture & Clean Code.",
        stack: [
          "Microservices",
          "Kubernetes",
          "LLM",
          "Tesseract OCR",
          "Clean Architecture",
          "Docker",
        ],
      },
    ],
  },
  {
    year: "2022 — 2023",
    diploma: "Bachelor Ingénierie du Web",
    level: "Bac+3 — Bachelor",
    school: "ESGI",
    schoolFull: "École Supérieure de Génie Informatique",
    location: "242 rue du Faubourg Saint-Antoine, 75012 Paris",
    logo: { src: "/logos/ESGI.png", alt: "ESGI" },
    accent: "#b8ff57",
    desc: "Spécialisation en ingénierie du web — développement fullstack, conception applicative, méthodes Agile et gestion de projets techniques.",
    modules: [
      "Développement fullstack (Laravel, Vue.js, React)",
      "Bases de données SQL & NoSQL",
      "Architecture MVC & API REST",
      "Méthodes Agile & Scrum",
      "UX/UI & intégration responsive",
      "Gestion de version & travail en équipe (Git)",
    ],
    highlights: [
      {
        label: "Alternance",
        value: "Lynx Business (Agence Web) — développeur fullstack, CDI",
      },
      {
        label: "Validation",
        value: "Décembre 2023",
      },
    ],
    projects: [
      {
        name: "Apagnain",
        period: "Mai 2024 — Juil. 2024",
        desc: "Site e-commerce de vente de nains de jardins de luxe. Backend JS/TypeScript avec développement d'un framework from scratch, SSE pour la gestion des stocks en temps réel, gestion des factures/devis/remboursements, frontend Vue.js.",
        stack: ["TypeScript", "JavaScript", "Vue.js", "SSE", "E-commerce"],
      },
    ],
  },
  {
    year: "2017 — 2020",
    diploma: "Baccalauréat Littéraire",
    level: "Bac — Titre RNCP",
    school: "Notre-Dame Saint-François",
    schoolFull: "Lycée Notre-Dame Saint-François",
    location: "8 Rue Portevin, 27000 Évreux",
    logo: { src: "/logos/NDSF.png", alt: "Notre-Dame Saint-François" },
    accent: "var(--fg-subtle)",
    desc: "Baccalauréat Littéraire avec options Langue Étrangère & Européenne. Solides bases en culture générale, langues et argumentation.",
    modules: [
      "Littérature française & internationale",
      "Philosophie",
      "Langue Étrangère & Européenne (Anglais)",
      "Histoire-Géographie",
      "Arts plastiques",
      "Sciences humaines & sociales",
    ],
    highlights: [
      {
        label: "Option principale",
        value: "Langue Étrangère & Européenne — Anglais renforcé",
      },
      {
        label: "Mention",
        value: "Obtenu avec mention BIEN",
      },
      {
        label: "Validation",
        value: "Décembre 2020",
      },
    ],
    projects: [
           {
        name: "GhostlyCRM",
        period: "Mai 2023 — Juil. 2023",
        desc: "Application de gestion client avec génération automatisée de factures et devis, signature sécurisée des devis, suivi de projets. Déploiement conteneurisé avec Docker.",
        stack: ["Node.js", "Docker", "Conteneurisation"],
      },
    ]
  },
];

export default function FormationsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── HERO ───────────────────────────────────────────── */}
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
          [02] — Formations
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none tracking-tighter uppercase"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)", color: "var(--fg)" }}
          >
            Parcours
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
            Académique
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-mono text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--fg-muted)" }}
        >
          Bac+5 en ingénierie du web. Un parcours construit sur la pratique,
          l'alternance et des projets réels — des fondamentaux aux architectures
          avancées.
        </motion.p>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 md:py-24">
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-[220px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-0">
            {FORMATIONS.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col md:flex-row gap-0 pb-16 last:pb-0"
              >
                {/* Left: year column */}
                <div className="md:w-[220px] shrink-0 flex md:flex-col md:items-end md:pr-10 gap-4 md:gap-2 mb-6 md:mb-0">
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--fg-subtle)" }}
                  >
                    {f.year}
                  </span>
                  <span
                    className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border w-fit"
                    style={{
                      borderColor: "var(--border-mid)",
                      color: "var(--fg-subtle)",
                    }}
                  >
                    {f.level}
                  </span>
                </div>

                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-[220px] top-0 md:top-1 w-3 h-3 -translate-x-1/2 border-2 hidden md:block"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--accent)",
                  }}
                />

                {/* Right: content card */}
                <div className="md:pl-12 flex-1 min-w-0">
                  <div
                    className="border p-6 md:p-8 flex flex-col gap-6"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-1"
                          style={{ color: "var(--fg)" }}
                        >
                          {f.diploma}
                        </h3>
                        <p
                          className="font-mono text-xs tracking-widest mb-0.5"
                          style={{ color: "var(--accent)" }}
                        >
                          {f.school} — {f.schoolFull}
                        </p>
                        <p
                          className="font-mono text-xs"
                          style={{ color: "var(--fg-subtle)" }}
                        >
                          {f.location}
                        </p>
                      </div>
                      {/* Logo */}
                      <div className="relative h-20 w-28 shrink-0 self-start">
                        <Image
                          src={f.logo.src}
                          alt={f.logo.alt}
                          fill
                          className="object-contain object-right"
                        />
                      </div>
                    </div>

                    {/* Desc */}
                    <p
                      className="font-mono text-xs leading-relaxed"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {f.desc}
                    </p>

                    {/* Two cols: modules + highlights */}
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                      style={{ background: "var(--border)" }}
                    >
                      {/* Modules */}
                      <div
                        className="p-5 flex flex-col gap-3"
                        style={{ background: "var(--bg)" }}
                      >
                        <p
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: "var(--fg-subtle)" }}
                        >
                          Matières clés
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {f.modules.map((m, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span
                                className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                                style={{ background: "var(--accent)" }}
                              />
                              <span
                                className="font-mono text-xs leading-relaxed"
                                style={{ color: "var(--fg-muted)" }}
                              >
                                {m}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div
                        className="p-5 flex flex-col"
                        style={{ background: "var(--bg)" }}
                      >
                        <div className="flex flex-col gap-4">
                          {f.highlights.map((h, j) => (
                            <div key={j} className="flex flex-col gap-0.5">
                              <span
                                className="font-mono text-xs tracking-widest uppercase"
                                style={{ color: "var(--fg-subtle)" }}
                              >
                                {h.label}
                              </span>
                              <span
                                className="font-mono text-xs leading-relaxed"
                                style={{ color: "var(--fg-muted)" }}
                              >
                                {h.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Projects (if any) */}
                    {f.projects && f.projects.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <p
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: "var(--fg-subtle)" }}
                        >
                          Projets académiques
                        </p>
                        <div
                          className="flex flex-col gap-px"
                          style={{ background: "var(--border)" }}
                        >
                          {f.projects.map((p, j) => (
                            <div
                              key={j}
                              className="p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                              style={{ background: "var(--bg)" }}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1 flex-wrap">
                                  <h4
                                    className="font-black text-base uppercase tracking-tight"
                                    style={{ color: "var(--fg)" }}
                                  >
                                    {p.name}
                                  </h4>
                                  <span
                                    className="font-mono text-xs"
                                    style={{ color: "var(--fg-subtle)" }}
                                  >
                                    {p.period}
                                  </span>
                                </div>
                                <p
                                  className="font-mono text-xs leading-relaxed mb-3"
                                  style={{ color: "var(--fg-muted)" }}
                                >
                                  {p.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {p.stack.map((tech) => (
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
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ───────────────────────────────────── */}
      <div
        className="px-8 md:px-16 py-8 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "var(--fg-subtle)" }}
        >
          3 diplômes — 2020 → 2025
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

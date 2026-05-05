"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

const traitCategories = [
  {
    label: "Engineering",
    items: [
      {
        num: "01",
        title: "Fullstack Engineering",
        desc: "Conception, architecture et mise en production de produits complets. Du frontend à l’infra, avec une approche orientée performance, scalabilité et qualité.",
      },
      {
        num: "03",
        title: "Performance & Scalabilité",
        desc: "Optimisation des systèmes critiques, réduction des coûts techniques et amélioration continue pour soutenir la croissance produit.",
      },
    ],
  },
  {
    label: "Produit",
    items: [
      {
        num: "02",
        title: "Product & Tech Leadership",
        desc: "Pilotage technique et vision produit. Priorisation, décisions d’architecture et coordination pour transformer des enjeux métier en solutions concrètes.",
      },
      {
        num: "04",
        title: "User-Centric Thinking",
        desc: "Conception d’expériences utiles et mesurables. UX, data et feedback utilisateur au cœur des décisions produit.",
      },
    ],
  },
];

const techStackCategories = [
  {
    label: "Backend",
    items: ["Laravel", "Symfony", "Node.js", "NestJS"],
  },
  {
    label: "Frontend",
    items: ["Vue.js", "Nuxt.js", "React", "Next.js", "Inertia.js"],
  },
  {
    label: "Langages",
    items: ["TypeScript", "JavaScript (ES6+)", "PHP"],
  },
  {
    label: "UI / UX",
    items: ["Tailwind CSS", "Shadcn UI", "Bootstrap"],
  },
  {
    label: "Data & APIs",
    items: ["REST", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "DevOps & Infra",
    items: ["Docker", "AWS", "Vercel", "Laravel Forge"],
  },
  {
    label: "Outils",
    items: ["Git", "Stripe"],
  },
];
export default function MePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative px-8 md:px-16 pt-20 pb-16 border-b border-[var(--border)]">
        {/* Accent dot */}
        <div
          className="absolute top-24 right-12 w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)] mb-8"
        >
          [01] — Présentation
        </motion.p>

        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            {/* Big name */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="reflect-glow text-[14vw] md:text-[11vw] font-black leading-none tracking-tighter uppercase text-[var(--fg)]"
                data-text="Ilyam"
              >
                Ilyam
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[14vw] md:text-[11vw] font-black leading-none tracking-tighter uppercase"
                style={{
                  WebkitTextStroke: "2px #2a2a2a",
                  color: "transparent",
                }}
              >
                Dupuis
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {["Développeur Fullstack", "Open to Work"].map((tag, i) => (
            <span
              key={i}
              className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border ${
                i === 1
                  ? "border-accent text-[var(--accent)]"
                  : "border-[var(--border-mid)] text-[var(--fg-muted)]"
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── BIO ──────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 border-b border-[var(--border)] grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--fg-subtle)] mb-4">
            [ABOUT]
          </p>
          <p className="font-mono text-xs text-[var(--fg-muted)] leading-relaxed">
            Disponible
            <br />
            Ile-de-France - Normandie, FRANCE
            <br />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#ccc]">
            Développeur fullstack,{" "}
            <span className="text-[var(--accent)] font-semibold">
              orienté produit
            </span>{" "}
            — je conçois des expériences digitales utiles, durables et pensées
            pour l’usage, de l’idée à la mise en production.
          </p>

          <p className="text-base leading-relaxed text-[#666] font-mono">
            J’interviens sur des projets à enjeux, où se rencontrent vision
            produit, exigence technique et qualité d’exécution.
          </p>

          <p className="text-base leading-relaxed text-[#666] font-mono">
            Pragmatique et focalisé sur la valeur, je fais le lien entre{" "}
            <span className="text-[var(--fg)]">tech, UX et besoins métier</span>{" "}
            pour construire des solutions qui font vraiment sens.
          </p>
        </motion.div>
      </section>

      {/* ── TRAITS ───────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 border-b border-[var(--border)]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--fg-subtle)] mb-12"
        >
          [CE QUE JE FAIS]
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {traitCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border border-[var(--border)] bg-[var(--card-bg)] p-6 md:p-8"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] mb-6">
                [{category.label}]
              </p>

              <div className="flex flex-col divide-y divide-[var(--border)]">
                {category.items.map((item) => (
                  <div
                    key={item.num}
                    className="group flex items-start gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-[11px] text-[var(--accent)] tracking-widest pt-1 shrink-0">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-[var(--fg-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 border-b border-[var(--border)]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--fg-subtle)] mb-12"
        >
          [STACK TECHNIQUE]
        </motion.p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techStackCategories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="border border-[var(--border)] bg-[var(--card-bg)] p-5"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
                [{category.label}]
              </p>

              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-[var(--border-mid)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────── */}
      <Footer />
    </div>
  );
}

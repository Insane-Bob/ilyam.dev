"use client";

import { motion } from "framer-motion";

const traits = [
  { num: "01", title: "Fullstack Dev", desc: "De la conception à la mise en prod. Frontend, backend, infra — je couvre l'ensemble de la stack." },
  { num: "02", title: "Chef de Projet", desc: "Pilotage technique, vision produit, coordination. Je fais le lien entre la tech et le métier." },
  { num: "03", title: "Amélioration Continue", desc: "Fiabilité, lisibilité, performance. Du code qui dure, pas du code qui survit." },
  { num: "04", title: "Centré Utilisateur", desc: "La tech au service de l'usage. UX, accessibilité, pragmatisme." },
];

const techStack = [
  "Laravel", "VueJS", "React", "Next.js", "Nest.js", "Node.js", "TypeScript", "Docker", "Git", "REST", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "AWS", "Vercel", "Laravel Forge"
];

export default function MePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative px-8 md:px-16 pt-20 pb-16 border-b border-[var(--border)]">
        {/* Accent dot */}
        <div className="absolute top-24 right-12 w-1.5 h-1.5 bg-[#b8ff57] rounded-full" />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)] mb-8"
        >
          [01] — Présentation
        </motion.p>

        {/* Big name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11vw] font-black leading-none tracking-tighter uppercase text-[var(--fg)]"
          >
            Ilyam
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[11vw] font-black leading-none tracking-tighter uppercase"
            style={{ WebkitTextStroke: "2px #2a2a2a", color: "transparent" }}
          >
            Dupuis
          </motion.h2>
        </div>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {["Développeur Fullstack", "Chef de Projet", "Open to Work"].map((tag, i) => (
            <span
              key={i}
              className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border ${
                i === 2
                  ? "border-[#b8ff57] text-[var(--accent)]"
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
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--fg-subtle)] mb-4">[ABOUT]</p>
          <p className="font-mono text-xs text-[var(--fg-muted)] leading-relaxed">
            Disponible<br />
            Ile-de-France - Normandie, FR<br />
            2026
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
            Développeur polyvalent avec une{" "}
            <span className="text-[var(--accent)] font-semibold">forte sensibilité produit</span>
            {" "}— j'interviens de la conception à la mise en production.
          </p>
          <p className="text-base leading-relaxed text-[#666] font-mono">
            J'évolue sur des projets à enjeux mêlant vision produit, pilotage technique
            et qualité d'exécution. Axé amélioration continue, je conçois des fonctionnalités
            fiables, durables et centrées sur l'usage.
          </p>
          <p className="text-base leading-relaxed text-[#666] font-mono">
            Pragmatique et orienté valeur, je fais le lien entre{" "}
            <span className="text-[var(--fg)]">tech, UX et besoins métier</span>.
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

        <div className="flex flex-col divide-y divide-[#1a1a1a]">
          {traits.map((t, i) => (
            <motion.div
              key={t.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-8 md:gap-16 py-8"
            >
              <span className="font-mono text-[11px] text-[var(--accent)] tracking-widest pt-1 shrink-0">
                {t.num}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[var(--fg)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {t.title}
                </h3>
                <p className="font-mono text-xs text-[var(--fg-muted)] max-w-md leading-relaxed">
                  {t.desc}
                </p>
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

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[var(--border-mid)] text-[var(--fg-muted)] hover:border-[#b8ff57] hover:text-[var(--accent)] transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────── */}
      <footer className="px-8 md:px-16 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="font-mono text-[10px] text-[#333] tracking-widest uppercase">
          Ilyam Dupuis — Développeur Fullstack
        </span>
        <a
          href="/"
          className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-subtle)] hover:text-[var(--accent)] transition-colors"
        >
          ← Retour accueil
        </a>
      </footer>
    </div>
  );
}

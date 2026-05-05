"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { Locale } from "../i18n/settings";
import Footer from "./components/Footer";
import { getLocaleFromPathname, withLocalePath } from "./i18n/locale";
import { getPageDictionaries } from "./i18n/pages/index";

type SectionItem = {
  num: string;
  label: string;
  href: string;
  tag: string;
  desc: string;
};

/* ── Section row ─────────────────────────────────────────── */
function SectionRow({
  s,
  i,
  locale,
}: {
  s: SectionItem;
  i: number;
  locale: Locale;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={withLocalePath(s.href, locale)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-between py-8 gap-8 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        {/* number */}
        <span
          className="font-mono text-xs tracking-widest shrink-0 w-8 transition-colors duration-300"
          style={{ color: hovered ? "var(--accent)" : "var(--fg-subtle)" }}
        >
          {s.num}
        </span>

        {/* label + desc */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-4 mb-1 flex-wrap">
            <h3
              className="text-4xl md:text-6xl font-black uppercase tracking-tight transition-colors duration-300"
              style={{ color: hovered ? "var(--accent)" : "var(--fg)" }}
            >
              {s.label}
            </h3>
            <span
              className="font-mono text-xs tracking-widest uppercase shrink-0 transition-colors duration-300"
              style={{ color: hovered ? "var(--accent)" : "var(--fg-subtle)" }}
            >
              [{s.tag}]
            </span>
          </div>
          <p
            className="font-mono text-xs leading-relaxed max-w-sm transition-colors duration-300"
            style={{ color: hovered ? "var(--fg-muted)" : "var(--fg-subtle)" }}
          >
            {s.desc}
          </p>
        </div>

        {/* arrow */}
        <motion.div
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-10 h-10 border flex items-center justify-center text-sm shrink-0 transition-colors duration-300"
          style={{
            borderColor: hovered ? "var(--accent)" : "var(--border-mid)",
            color: hovered ? "var(--accent)" : "var(--fg-subtle)",
          }}
        >
          →
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).home;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-12 overflow-hidden">
        {/* Scrolling watermark */}
        <motion.p
          aria-hidden
          className="absolute bottom-16 left-0 select-none pointer-events-none font-black leading-none tracking-tighter whitespace-nowrap"
          style={{ x: bgTextX, fontSize: "22vw", color: "var(--border)" }}
        >
          PORTFOLIO
        </motion.p>

        {/* Hero body */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 px-6 md:px-16 flex flex-col justify-center flex-1 gap-10 pb-16"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 w-fit"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {t.statusBadge}
            </span>
          </motion.div>

          {/* Name */}
          <div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="reflect-glow font-black leading-none tracking-tighter uppercase"
                data-text="Ilyam"
                style={{
                  fontSize: "clamp(3.5rem, 15vw, 13rem)",
                  color: "var(--fg)",
                }}
              >
                Ilyam
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black leading-none tracking-tighter uppercase"
                style={{
                  fontSize: "clamp(3.5rem, 15vw, 13rem)",
                  WebkitTextStroke: "2px var(--border-mid)",
                  color: "transparent",
                }}
              >
                Dupuis
              </motion.p>
            </div>
          </div>

          {/* Bio + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          >
            {/* Left — bio + tags */}
            <div className="flex flex-col gap-4 max-w-sm">
              <p
                className="font-mono text-sm leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {t.heroBio}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.roles.map((role: string) => (
                  <span
                    key={role}
                    className="font-mono text-xs tracking-widest uppercase px-3 py-1 border"
                    style={{
                      borderColor: "var(--border-mid)",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA buttons */}
            <div className="flex gap-3 shrink-0">
              <Link
                href={withLocalePath("/projects", locale)}
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                {t.ctaProjects}
              </Link>
              <Link
                href={withLocalePath("/me", locale)}
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase border transition-all duration-200"
                style={{
                  borderColor: "var(--border-mid)",
                  color: "var(--fg-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--fg-subtle)";
                  e.currentTarget.style.color = "var(--fg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-mid)";
                  e.currentTarget.style.color = "var(--fg-muted)";
                }}
              >
                {t.ctaAbout}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Indication to scroll */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border border-[var(--border)] text-xs font-mono tracking-widest uppercase text-[var(--fg-subtle)]"
      >
        Scroll
      </motion.div>

      {/* ── INDEX ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--fg-subtle)] mb-12"
        >
          {t.sommaire}
        </motion.p>

        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {t.sections.map((s: SectionItem, i: number) => (
            <SectionRow key={s.href} s={s} i={i} locale={locale} />
          ))}
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}

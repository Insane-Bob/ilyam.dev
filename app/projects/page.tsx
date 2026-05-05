"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../components/Footer";
import { getLocaleFromPathname, withLocalePath } from "../i18n/locale";
import { getPageDictionaries } from "../i18n/pages";
import type { Project } from "./data";
import { CATEGORY_LABELS, PROJECTS, type ProjectCategory } from "./data";
import { PROJECTS_EN } from "./data.en";

const DEFAULT_CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "pro", label: "Pro" },
  { id: "freelance", label: "Freelance" },
  { id: "scolaire", label: "Scolaire" },
  { id: "perso", label: "Perso" },
] as const;

type FilterId = (typeof DEFAULT_CATEGORIES)[number]["id"];

function getLocalizedProject(project: Project, locale: "fr" | "en"): Project {
  if (locale !== "en") return project;

  const override = PROJECTS_EN[project.slug];
  if (!override) return project;

  return {
    ...project,
    ...override,
    screenshots: override.screenshots
      ? project.screenshots.map((shot, index) => ({
          ...shot,
          ...(override.screenshots?.[index] ?? {}),
        }))
      : project.screenshots,
  };
}

export default function ProjectsPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).projects;
  const CATEGORIES = t.categories;

  function ProjectRow({ project, i }: { project: Project; i: number }) {
    const router = useRouter();
    const [hovered, setHovered] = useState(false);

    return (
      <motion.article
        key={project.name}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.07, duration: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 transition-colors duration-200 cursor-pointer"
        style={{ background: hovered ? "var(--card-bg)" : "var(--bg)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => router.push(withLocalePath(`/projects/${project.slug}`, locale))}
        role="link"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            router.push(withLocalePath(`/projects/${project.slug}`, locale));
          }
        }}
      >
        {/* Left: meta */}
        <div className="shrink-0 sm:w-48 flex flex-row sm:flex-col flex-wrap items-center sm:items-start gap-2 sm:gap-2">
          <span
            className="font-mono text-xs tracking-widest transition-colors duration-200"
            style={{ color: hovered ? "var(--fg-muted)" : "var(--fg-subtle)" }}
          >
            {project.period}
          </span>
          <span
            className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border w-fit"
            style={{
              borderColor:
                project.category === "freelance" || project.category === "pro"
                  ? "var(--accent)"
                  : "var(--border-mid)",
              color:
                project.category === "freelance" || project.category === "pro"
                  ? "var(--accent)"
                  : "var(--fg-subtle)",
            }}
          >
            {locale === "en"
              ? ({
                  pro: "Pro",
                  freelance: "Freelance",
                  scolaire: "Academic",
                  perso: "Personal",
                } as Record<ProjectCategory, string>)[project.category]
              : CATEGORY_LABELS[project.category]}
          </span>
          <span
            className="font-mono text-xs transition-colors duration-200 hidden sm:block"
            style={{ color: hovered ? "var(--fg-muted)" : "var(--fg-subtle)" }}
          >
            {project.role}
          </span>
        </div>

        {/* Right: content */}
        <div className="flex-1 min-w-0">
          {/* Title row — stacks on very small screens */}
          <div className="flex flex-row xs:flex-col xs:items-start justify-between gap-2 mb-1">
            <h3
              className="font-black text-xl sm:text-2xl uppercase tracking-tight transition-colors duration-200 leading-tight"
              style={{ color: hovered ? "var(--accent)" : "var(--fg)" }}
            >
              {project.name}
            </h3>
            {project.url && (
              <div className="shrink-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs tracking-widest uppercase px-3 py-1.5 border transition-colors duration-200"
                  style={{
                    borderColor: "var(--border-mid)",
                    color: "var(--fg-subtle)",
                  }}
                  onClick={(event) => event.stopPropagation()}
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
                  {t.visitSite}
                </a>
              </div>
            )}
          </div>

          {/* Role visible only on mobile (hidden in meta column on sm+) */}
          <span
            className="block sm:hidden font-mono text-xs mb-2 transition-colors duration-200"
            style={{ color: hovered ? "var(--fg-muted)" : "var(--fg-subtle)" }}
          >
            {project.role}
          </span>

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
            className="font-mono text-xs leading-relaxed mb-4 max-w-2xl transition-colors duration-200"
            style={{ color: hovered ? "var(--fg-muted)" : "var(--fg-subtle)" }}
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
    );
  }

  const [filter, setFilter] = useState<FilterId>("all");

  const localizedProjects = PROJECTS.map((project) =>
    getLocalizedProject(project, locale)
  );

  const filtered =
    filter === "all"
      ? localizedProjects
      : localizedProjects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 pb-12 sm:pb-16 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.3em] uppercase mb-6 sm:mb-8"
          style={{ color: "var(--accent)" }}
        >
          {t.heroTag}
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="reflect-glow font-black leading-none tracking-tighter uppercase"
            data-text={t.heroTitle1}
            style={{
              fontSize: "clamp(2.75rem, 12vw, 10rem)",
              color: "var(--fg)",
            }}
          >
            {t.heroTitle1}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8 sm:mb-10">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none tracking-tighter uppercase"
            style={{
              fontSize: "clamp(2.75rem, 12vw, 10rem)",
              WebkitTextStroke: "2px var(--border-mid)",
              color: "transparent",
            }}
          >
            {t.heroTitle2}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-mono text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--fg-muted)" }}
        >
          {t.heroDesc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
          className="mt-6 sm:mt-8"
        >
          <Link
            href={withLocalePath("/cv", locale)}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 font-mono text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
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
            {t.cvCta}
          </Link>
        </motion.div>
      </section>

      {/* ── FILTERS ──────────────────────────────────────── */}
      {/* Scrollable horizontally on mobile so all tabs are reachable */}
      <div
        className="border-b overflow-x-auto"
        style={{ borderColor: "var(--border)", background: "var(--border)" }}
      >
        <div
          className="flex items-center gap-px min-w-max px-4 sm:px-8 md:px-16"
          style={{ background: "var(--border)" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as FilterId)}
              className="px-4 sm:px-6 py-3 sm:py-4 font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative whitespace-nowrap"
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
            className="ml-auto px-4 sm:px-6 py-3 sm:py-4 font-mono text-xs whitespace-nowrap"
            style={{ color: "var(--fg-subtle)", background: "var(--bg)" }}
          >
            {t.projectCount(filtered.length)}
          </span>
        </div>
      </div>

      {/* ── PROJECTS LIST ────────────────────────────────── */}
      <section className="px-4 sm:px-8 md:px-16 py-10 sm:py-16">
        <div
          className="flex flex-col gap-px"
          style={{ background: "var(--border)" }}
        >
          {filtered.map((project, i) => (
            <ProjectRow key={project.name} project={project} i={i} />
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
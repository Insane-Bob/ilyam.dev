import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import { CATEGORY_LABELS, getProjectBySlug, PROJECTS } from "../data";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
    };
  }

  return {
    title: project.name,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── Header / Hero ─────────────────────────────────────────────── */}
      <section
        className="project-enter px-4 sm:px-8 md:px-16 pt-16 sm:pt-20 pb-10 sm:pb-12 border-b"
        style={{ borderColor: "var(--border)", animationDelay: "70ms" }}
      >
        {/* Navigation bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="w-fit font-mono text-xs tracking-[0.25em] uppercase transition-colors"
            style={{ color: "var(--fg-subtle)" }}
          >
            ← Retour aux projets
          </Link>

          {/* Prev / Next — scrollable sur très petits écrans */}
          <div className="flex w-full sm:w-auto items-center justify-start sm:justify-end gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {previousProject && (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="shrink-0 whitespace-nowrap font-mono text-xs tracking-widest uppercase px-3 py-2 border transition-all duration-200 hover:border-[var(--fg-subtle)] hover:text-[var(--fg)]"
                style={{
                  borderColor: "var(--border-mid)",
                  color: "var(--fg-subtle)",
                }}
              >
                ← {previousProject.name}
              </Link>
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="shrink-0 whitespace-nowrap font-mono text-xs tracking-widest uppercase px-3 py-2 border transition-all duration-200 hover:bg-[var(--accent)] hover:text-white"
              >
                {nextProject.name} →
              </Link>
            )}
          </div>
        </div>

        {/* Title block */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl min-w-0">
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4 sm:mb-5"
              style={{ color: "var(--accent)" }}
            >
              [{CATEGORY_LABELS[project.category]}] — {project.period}
            </p>
            <h1
              className="reflect-glow font-black leading-none tracking-tighter uppercase mb-3 sm:mb-4 break-words"
              data-text={project.name}
              style={{
                fontSize: "clamp(2.25rem, 10vw, 8rem)",
                color: "var(--fg)",
              }}
            >
              {project.name}
            </h1>
            <p
              className="font-mono text-sm leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-muted)" }}
            >
              {project.longDesc}
            </p>
          </div>

          {/* Meta (role / context / link) */}
          <div className="flex flex-row flex-wrap items-center gap-3 lg:flex-col lg:items-end lg:text-right lg:shrink-0">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--fg-subtle)" }}
            >
              {project.role}
            </span>
            {project.context && (
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {project.context}
              </span>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase px-3 py-2 border transition-colors"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                ↗ Voir
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Context + Stack ────────────────────────────────────────────── */}
      <section
        className="project-enter px-4 sm:px-8 md:px-16 py-10 sm:py-12 border-b"
        style={{ borderColor: "var(--border)", animationDelay: "140ms" }}
      >
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contexte */}
          <div
            className="border p-5 sm:p-6 md:p-8"
            style={{
              borderColor: "var(--border)",
              background: "var(--card-bg)",
            }}
          >
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              [Contexte]
            </p>
            {project.companyDesc && (
              <p
                className="font-mono text-xs leading-relaxed mb-4"
                style={{ color: "var(--fg-subtle)", fontStyle: "italic" }}
              >
                {project.companyDesc}
              </p>
            )}
            <p
              className="font-mono text-sm leading-relaxed mb-5"
              style={{ color: "var(--fg-muted)" }}
            >
              {project.desc}
            </p>
            {/* Problématique / Réponse — stack on mobile, side-by-side from md */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h2
                  className="font-black text-base sm:text-lg uppercase tracking-tight mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  Problématique
                </h2>
                <p
                  className="font-mono text-xs leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2
                  className="font-black text-base sm:text-lg uppercase tracking-tight mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  Réponse apportée
                </h2>
                <p
                  className="font-mono text-xs leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Rôle & stack + Points clés */}
          <div
            className="border p-5 sm:p-6 md:p-8 flex flex-col gap-6"
            style={{
              borderColor: "var(--border)",
              background: "var(--card-bg)",
            }}
          >
            <div>
              <p
                className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                [Rôle & stack]
              </p>
              <p
                className="font-black text-base sm:text-lg uppercase tracking-tight mb-3"
                style={{ color: "var(--fg)" }}
              >
                {project.role}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border"
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

            <div>
              <p
                className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                [Points clés]
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <span
                      className="font-mono text-xs leading-relaxed"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fonctionnalités ────────────────────────────────────────────── */}
      <section
        className="project-enter px-4 sm:px-8 md:px-16 py-10 sm:py-12 border-b"
        style={{ borderColor: "var(--border)", animationDelay: "210ms" }}
      >
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "var(--accent)" }}
        >
          [Fonctionnalités]
        </p>
        {/* 1 col mobile → 2 col sm → 4 col xl */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="border p-4 sm:p-5"
              style={{
                borderColor: "var(--border)",
                background: "var(--card-bg)",
              }}
            >
              <span
                className="font-mono text-[11px] tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                0{index + 1}
              </span>
              <p
                className="mt-3 font-black text-base sm:text-lg uppercase tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Vidéo / Screenshots ────────────────────────────────────────── */}
      {(project.video || project.screenshots.some((s) => s.src)) && (
        <section
          className="project-enter px-4 sm:px-8 md:px-16 py-10 sm:py-12 border-b"
          style={{ borderColor: "var(--border)", animationDelay: "280ms" }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--accent)" }}
          >
            {project.video ? "[Vidéo]" : "[Screenshots]"}
          </p>

          {project.video ? (
            /* Vidéo — centrée, max-width raisonnable, jamais coupée */
            <div className="w-full max-w-3xl mx-auto">
              <div
                className="overflow-hidden border"
                style={{ borderColor: "var(--border)" }}
              >
                <video
                  src={project.video}
                  controls
                  playsInline
                  className="w-full h-auto"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          ) : (
            /* Screenshots — 1 col mobile → 2 col md → 3 col lg */
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.screenshots
                .filter((shot) => shot.src)
                .map((shot) => (
                  <article
                    key={shot.title}
                    className="border overflow-hidden"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--card-bg)",
                    }}
                  >
                    <div className="relative aspect-4/2">
                      <Image
                        src={shot.src!}
                        alt={shot.alt ?? shot.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-fit object-top"
                      />
                    </div>
                    <div
                      className="p-3 sm:p-4 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <h3
                        className="font-black text-sm sm:text-base uppercase tracking-tight mb-1"
                        style={{ color: "var(--fg)" }}
                      >
                        {shot.title}
                      </h3>
                      <p
                        className="font-mono text-xs leading-relaxed"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {shot.caption}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </section>
      )}

      <div className="project-enter" style={{ animationDelay: "350ms" }}>
        <Footer />
      </div>
    </div>
  );
}
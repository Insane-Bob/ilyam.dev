export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <section
        className="px-8 md:px-16 pt-20 pb-12 border-b project-enter"
        style={{ borderColor: "var(--border)", animationDelay: "40ms" }}
      >
        <div className="flex items-center justify-between gap-4">
          <div
            className="h-4 w-40 border loading-shimmer"
            style={{ borderColor: "var(--border-mid)", background: "var(--card-bg)" }}
          />
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-32 border loading-shimmer"
              style={{ borderColor: "var(--border-mid)", background: "var(--card-bg)" }}
            />
            <div
              className="h-9 w-32 border loading-shimmer"
              style={{ borderColor: "var(--accent)", background: "var(--card-bg)" }}
            />
          </div>
        </div>

        <div className="mt-8 space-y-4 max-w-4xl">
          <div
            className="h-3 w-48 border loading-shimmer"
            style={{ borderColor: "var(--border-mid)", background: "var(--card-bg)" }}
          />
          <div
            className="h-20 w-full border loading-shimmer"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
          />
          <div
            className="h-12 w-3/4 border loading-shimmer"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
          />
        </div>
      </section>

      <section
        className="px-8 md:px-16 py-12 border-b project-enter"
        style={{ borderColor: "var(--border)", animationDelay: "120ms" }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="h-56 border loading-shimmer"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
          />
          <div
            className="h-56 border loading-shimmer"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
          />
        </div>
      </section>

      <section
        className="px-8 md:px-16 py-12 border-b project-enter"
        style={{ borderColor: "var(--border)", animationDelay: "180ms" }}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-28 border loading-shimmer"
              style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

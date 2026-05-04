"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LynxBusinessLogo from "../../components/icons/LynxBusinessLogo";
import { EXPERIENCES, type Logo } from "../data";

function ExpLogo({ logo }: { logo: Logo }) {
  if (logo.type === "component") {
    return (
      <div className="h-8 flex items-center">
        <LynxBusinessLogo className="h-3 w-auto" />
      </div>
    );
  }
  return (
    <div className="relative h-12 w-24">
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        sizes="96px"
        className="object-contain"
      />
    </div>
  );
}

function StackPill({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border"
      style={{ borderColor: "var(--border-mid)", color: "var(--fg-subtle)" }}
    >
      {label}
    </span>
  );
}

export default function TabExp() {
  return (
    <div className="flex flex-col gap-5">
      {EXPERIENCES.map((exp, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="border bg-[var(--card-bg)] p-6 md:p-7 flex flex-col sm:flex-row gap-6 md:gap-8"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Left: logo + period + type */}
          <div className="shrink-0 sm:w-44 flex flex-col gap-4">
            <ExpLogo logo={exp.logo} />
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="font-mono text-[11px] tracking-widest"
                style={{ color: "var(--fg-subtle)" }}
              >
                {exp.period}
              </span>
              <span
                className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border w-fit"
                style={{
                  borderColor: "var(--border-mid)",
                  color: "var(--fg-subtle)",
                }}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Right: header + stack + bullets */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <h3
                  className="font-black text-xl md:text-2xl uppercase tracking-tight mb-1"
                  style={{ color: "var(--fg)" }}
                >
                  {exp.role}
                </h3>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-widest transition-colors duration-150 underline underline-offset-4"
                    style={{ color: "var(--accent)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.7")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    {exp.company} ↗
                  </a>
                ) : (
                  <p
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {exp.company}
                  </p>
                )}
                {exp.companyDesc && (
                  <p
                    className="font-mono text-xs leading-relaxed mt-2.5 max-w-xl"
                    style={{ color: "var(--fg-subtle)", fontStyle: "italic" }}
                  >
                    {exp.companyDesc}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 sm:justify-end sm:max-w-sm">
                {exp.stack.map((tech) => (
                  <StackPill key={tech} label={tech} />
                ))}
              </div>
            </div>

            <ul className="flex flex-col gap-2.5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="font-mono text-xs leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

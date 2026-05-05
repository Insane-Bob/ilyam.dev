"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../../i18n/locale";
import { FORMATIONS } from "../data";
import { FORMATIONS_EN } from "../data.en";

export default function TabForm() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const formations = locale === "en" ? FORMATIONS_EN : FORMATIONS;

  return (
    <div
      className="flex flex-col divide-y"
      style={{ borderColor: "var(--border)" }}
    >
      {formations.map((f, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="py-8 flex flex-col sm:flex-row gap-6"
        >
          {/* Left: period + level */}
          <div className="shrink-0 sm:w-44 flex flex-col gap-3">
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--fg-subtle)" }}
            >
              {f.period}
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

          {/* Right: diploma + logo inline + school + desc */}
          <div className="flex-1 min-w-0">
            {/* Title row with logo */}
            <div className="flex items-center justify-between gap-4 mb-0.5">
              <h3
                className="font-black text-xl uppercase tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                {f.diploma}
              </h3>
              <div className="relative h-20 w-24 shrink-0">
                <Image
                  src={f.logo.src}
                  alt={f.logo.alt}
                  fill
                  sizes="96px"
                  className="object-contain object-right"
                />
              </div>
            </div>
            <p
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              {f.school}
            </p>
            {f.desc && (
              <p
                className="font-mono text-xs leading-relaxed max-w-xl"
                style={{ color: "var(--fg-muted)" }}
              >
                {f.desc}
              </p>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../../i18n/locale";
import { getPageDictionaries } from "../../i18n/pages";
import { INTRO_PARAS, STATS } from "../data";
import { INTRO_PARAS_EN, STATS_EN } from "../data.en";

export default function TabIntro() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).cv;
  const introParas = locale === "en" ? INTRO_PARAS_EN : INTRO_PARAS;
  const stats = locale === "en" ? STATS_EN : STATS;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--fg-subtle)" }}
        >
          {t.introHeadline}
        </p>
        <div className="flex flex-col gap-4">
          {introParas.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="font-mono text-sm leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-muted)" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-px border"
        style={{ background: "var(--border)", borderColor: "var(--border)" }}
      >
        {stats.map(({ val, label }) => (
          <div
            key={label}
            className="flex flex-col px-5 py-6 gap-1"
            style={{ background: "var(--bg)" }}
          >
            <span
              className="font-black text-4xl tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              {val}
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--fg-subtle)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

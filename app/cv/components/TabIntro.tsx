"use client";

import { motion } from "framer-motion";
import { INTRO_PARAS, STATS } from "../data";

export default function TabIntro() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--fg-subtle)" }}
        >
          Développeur Fullstack & Chef de Projet
        </p>
        <div className="flex flex-col gap-4">
          {INTRO_PARAS.map((p, i) => (
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
        {STATS.map(({ val, label }) => (
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

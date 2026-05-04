"use client";

import { motion } from "framer-motion";

export default function CvHeader() {
  return (
    <div
      className="px-6 md:px-16 py-5 border-b flex items-center justify-between"
      style={{ borderColor: "var(--border)" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--fg-subtle)" }}
      >
        Curriculum Vitæ
      </motion.span>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        href="/cv.pdf"
        download
        className="font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200"
        style={{ borderColor: "var(--border-mid)", color: "var(--fg-muted)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "var(--border-mid)";
          (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
        }}
      >
        ↓ Télécharger PDF
      </motion.a>
    </div>
  );
}

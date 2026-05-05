"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../../i18n/locale";
import { getPageDictionaries } from "../../i18n/pages";

export default function CvHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).cv;

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
        {t.headerTitle}
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
        {t.downloadPdf}
      </motion.a>
    </div>
  );
}

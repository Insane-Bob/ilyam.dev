"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "../../i18n/locale";
import { SKILLS } from "../data";
import { SKILLS_EN } from "../data.en";

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 border transition-colors duration-200 cursor-default"
      style={{ borderColor: "var(--border-mid)", color: "var(--fg-muted)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        (e.currentTarget as HTMLElement).style.background =
          "color-mix(in srgb, var(--accent) 6%, transparent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "var(--border-mid)";
        (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      {label}
    </span>
  );
}

export default function TabSkills() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const skills = locale === "en" ? SKILLS_EN : SKILLS;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-px"
      style={{ background: "var(--border)" }}
    >
      {skills.map((group, i) => (
        <motion.section
          key={group.cat}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          className={`p-6 flex flex-col gap-3${
            i === skills.length - 1 && skills.length % 2 !== 0
              ? " sm:col-span-2"
              : ""
          }`}
          style={{ background: "var(--bg)" }}
        >
          {/* Header */}
          <div
            className="flex flex-col gap-1 pb-3"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase font-semibold"
              style={{ color: "var(--fg)" }}
            >
              {group.cat}
            </p>
            {group.desc && (
              <p
                className="font-mono text-xs"
                style={{ color: "var(--fg-subtle)" }}
              >
                {group.desc}
              </p>
            )}
          </div>
          {/* Pills */}
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <SkillPill key={item} label={item} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Car, Globe, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import GithubIcon from "../../components/icons/GithubIcon";
import { getLocaleFromPathname } from "../../i18n/locale";
import { getPageDictionaries } from "../../i18n/pages";
import { PERSONAL } from "../data";
import { PERSONAL_EN } from "../data.en";

function ContactRow({
  href,
  icon: Icon,
  children,
  external,
}: {
  href?: string;
  icon: React.ElementType;
  children: React.ReactNode;
  external?: boolean;
}) {
  const base =
    "flex items-start gap-3 transition-colors duration-200 font-mono text-xs";
  const style = { color: "var(--fg-muted)" };
  const hoverOn = (e: React.MouseEvent<HTMLElement>) =>
    (e.currentTarget.style.color = "var(--accent)");
  const hoverOff = (e: React.MouseEvent<HTMLElement>) =>
    (e.currentTarget.style.color = "var(--fg-muted)");

  const content = (
    <>
      <Icon className="w-3.5 h-3.5 shrink-0 mt-0.5" />
      <span className="break-all">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
        style={style}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={base} style={style}>
      {content}
    </div>
  );
}

export default function CvSidebar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).cv;
  const personal =
    locale === "en"
      ? {
          ...PERSONAL,
          ...PERSONAL_EN,
        }
      : PERSONAL;

  return (
    <aside
      className="w-full md:w-64 lg:w-72 shrink-0 border-b md:border-b-0 md:border-r"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="p-6 md:p-8 md:sticky md:top-16 flex flex-col gap-8">
        {/* Identity */}
        <section>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--fg-subtle)" }}
          >
            {t.identity}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1
              className="font-black text-3xl uppercase tracking-tight leading-none"
              style={{ color: "var(--fg)" }}
            >
              {PERSONAL.firstName}
            </h1>
            <p
              className="font-black text-3xl uppercase tracking-tight leading-none"
              style={{
                WebkitTextStroke: "2px var(--border-mid)",
                color: "transparent",
              }}
            >
              {PERSONAL.lastName}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 flex items-center gap-2"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {t.status}
            </span>
          </motion.div>
        </section>

        <div className="h-px" style={{ background: "var(--border)" }} />

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--fg-subtle)" }}
          >
            {t.contact}
          </p>
          <ContactRow href={`mailto:${PERSONAL.email}`} icon={Mail}>
            {personal.email}
          </ContactRow>
          <ContactRow icon={MapPin}>{personal.location}</ContactRow>
          <ContactRow icon={Car}>{personal.permis}</ContactRow>
          <ContactRow href={`https://${personal.site}`} icon={Globe} external>
            {personal.site}
          </ContactRow>
          <ContactRow
            href={`https://${personal.github}`}
            icon={GithubIcon}
            external
          >
            {personal.github}
          </ContactRow>
        </motion.section>

        <div className="h-px" style={{ background: "var(--border)" }} />

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-2"
        >
          {personal.roles.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs tracking-widest uppercase px-2 py-1 border"
              style={{
                borderColor: "var(--border-mid)",
                color: "var(--fg-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Target roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap gap-2"
        >
          <p
            className="w-full font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--fg-subtle)" }}
          >
            {t.objectives}
          </p>
          {personal.targetRoles.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs tracking-widest uppercase px-2 py-1 border"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}

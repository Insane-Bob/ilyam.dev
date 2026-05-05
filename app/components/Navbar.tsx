"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LOCALES, type Locale } from "../../i18n/settings";
import { getLocaleFromPathname, withLocalePath } from "../i18n/locale";
import { getPageDictionaries } from "../i18n/pages";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { key: "me", href: "/me" },
  { key: "formations", href: "/formations" },
  { key: "projects", href: "/projects" },
  { key: "cv", href: "/cv" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const t = getPageDictionaries(locale).common;
  const { theme, toggle } = useTheme();

  const toLocalePath = (href: string) => withLocalePath(href, locale);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    }
    router.push(withLocalePath(pathname, nextLocale));
    setOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 hidden md:flex items-center justify-between px-8 h-12 border-b backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "var(--navbar-bg)" }}
      >
        <Link
          href={toLocalePath("/")}
          className="font-mono text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          {t.brand}
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={toLocalePath(link.href)}
              className="font-mono text-xs tracking-widest uppercase transition-colors relative group text-[var(--fg-subtle)] hover:text-[var(--accent)]"
            >
              {t.nav[link.key]}
              <span
                className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                style={{ background: "var(--accent)" }}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <select
            aria-label={t.languageLabel}
            value={locale}
            onChange={(event) => handleLocaleChange(event.target.value as Locale)}
            className="h-8 px-2 font-mono text-xs border bg-[var(--card-bg)]"
            style={{ borderColor: "var(--border-mid)", color: "var(--fg-subtle)" }}
          >
            <option value={LOCALES[0]}>{t.localeFr}</option>
            <option value={LOCALES[1]}>{t.localeEn}</option>
          </select>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center border transition-colors"
            style={{
              borderColor: "var(--border-mid)",
              color: "var(--fg-muted)",
            }}
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
          <span
            className="font-mono text-sm tracking-widest"
            style={{ color: "var(--fg-subtle)" }}
          >
            ∞ 2026
          </span>
        </div>
      </header>

      {!open && (
        <div className="md:hidden fixed top-10 right-4 z-50">
          <button
            onClick={() => setOpen(true)}
            className="w-12 h-12 flex items-center justify-center transition-colors"
            style={{
              border: "1px solid var(--border-mid)",
              background: "var(--bg)",
              color: "var(--fg)",
            }}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
            className="md:hidden fixed inset-0 z-40 flex flex-col justify-center px-10"
            style={{
              background: "var(--bg)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            <div className="absolute top-8 left-10 right-10 flex items-center justify-between">
              <Link
                href={toLocalePath("/")}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                {t.mobileBrand}
              </Link>
              <div className="flex items-center gap-2">
                <select
                  aria-label={t.languageLabel}
                  value={locale}
                  onChange={(event) =>
                    handleLocaleChange(event.target.value as Locale)
                  }
                  className="h-10 px-2 font-mono text-xs border bg-[var(--card-bg)]"
                  style={{ borderColor: "var(--border-mid)", color: "var(--fg-subtle)" }}
                >
                  <option value={LOCALES[0]}>{t.localeFr}</option>
                  <option value={LOCALES[1]}>{t.localeEn}</option>
                </select>
                <button
                  onClick={toggle}
                  className="w-10 h-10 flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    background: "var(--card-bg)",
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: "var(--border-mid)",
                    color: "var(--fg)",
                    background: "var(--card-bg)",
                  }}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={toLocalePath(link.href)}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span
                      className="font-mono text-[11px] tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="text-4xl font-black uppercase tracking-tight transition-colors"
                      style={{ color: "var(--fg)" }}
                    >
                      {t.nav[link.key]}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <p
              className="absolute bottom-8 left-10 font-mono text-[11px] tracking-widest"
              style={{ color: "var(--fg-subtle)" }}
            >
              ∞ ILYAM DUPUIS — 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

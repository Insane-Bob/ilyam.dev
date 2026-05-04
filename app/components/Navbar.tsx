"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "01 — Présentation", short: "Présentation", href: "/me" },
  { label: "02 — Formations", short: "Formations", href: "/formations" },
  { label: "03 — Projets", short: "Projets", href: "/projects" },
  { label: "04 — CV", short: "CV", href: "/cv" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Desktop: thin top strip */}
      <header
        className="fixed top-0 inset-x-0 z-50 hidden md:flex items-center justify-between px-8 h-12 border-b backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "var(--navbar-bg)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
          style={{ color: "var(--accent)" }}
        >
          ID.DEV
        </Link>

        {/* Center nav */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-widest uppercase transition-colors relative group"
              style={{ color: "var(--fg-subtle)" }}
            >
              {link.short}
              <span
                className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px transition-all duration-300"
                style={{ background: "var(--accent)" }}
              />
            </Link>
          ))}
        </nav>

        {/* Right: theme toggle + year */}
        <div className="flex items-center gap-4">
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
            className="font-mono text-[11px] tracking-widest"
            style={{ color: "var(--fg-subtle)" }}
          >
            ∞ 2026
          </span>
        </div>
      </header>

      {/* Mobile: floating burger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 flex items-center justify-center transition-colors"
          style={{
            border: "1px solid var(--border-mid)",
            background: "var(--bg)",
            color: "var(--fg)",
          }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile: fullscreen menu */}
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
            {/* Logo + theme toggle top */}
            <div className="absolute top-8 left-10 right-10 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                ID.DEV
              </Link>
              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center border transition-colors"
                style={{
                  borderColor: "var(--border-mid)",
                  color: "var(--fg-muted)",
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
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
                      {link.short}
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

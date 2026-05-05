"use client";

import { Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Insane-Bob",
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilyam-dupuis-519ba11b1/",
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Mail",
    href: "mailto:ilyamdupuis0903@gmail.com",
    Icon: Mail,
    external: false,
  },
] as const;

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--fg-subtle)" }}
      >
        © 2026 Ilyam Dupuis
      </span>

      <div className="flex items-center gap-6">
        {socials.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: "var(--fg-subtle)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--fg-subtle)")
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

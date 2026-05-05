import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de projets professionnels, freelance, scolaires et personnels réalisés par Ilyam Dupuis.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Parcours académique de Ilyam Dupuis : formations, compétences développées, projets académiques et alternances.",
};

export default function FormationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

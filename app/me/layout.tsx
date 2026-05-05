import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présentation",
  description:
    "Présentation de Ilyam Dupuis : profil, positionnement fullstack orienté produit, expertises et stack technique.",
};

export default function MeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

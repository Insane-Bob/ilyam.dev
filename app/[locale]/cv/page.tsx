import type { Metadata } from "next";
import { type Locale, isLocale } from "../../../i18n/settings";
import CVPage from "../../cv/page";
import { getPageDictionaries } from "../../i18n/pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const t = getPageDictionaries(locale).cv;

  return {
    title: t.pageTitle,
    description: t.pageDescription,
  };
}

export default CVPage;

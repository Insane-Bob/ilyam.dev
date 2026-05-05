import type { Locale } from "../../../i18n/settings";
import commonEn from "./common.en";
import commonFr from "./common.fr";
import cvEn from "./cv.en";
import cvFr from "./cv.fr";
import formationsEn from "./formations.en";
import formationsFr from "./formations.fr";
import homeEn from "./home.en";
import homeFr from "./home.fr";
import meEn from "./me.en";
import meFr from "./me.fr";
import projectsEn from "./projects.en";
import projectsFr from "./projects.fr";

export function getPageDictionaries(locale: Locale) {
  return {
    common: locale === "en" ? commonEn : commonFr,
    home: locale === "en" ? homeEn : homeFr,
    me: locale === "en" ? meEn : meFr,
    formations: locale === "en" ? formationsEn : formationsFr,
    projects: locale === "en" ? projectsEn : projectsFr,
    cv: locale === "en" ? cvEn : cvFr,
  };
}

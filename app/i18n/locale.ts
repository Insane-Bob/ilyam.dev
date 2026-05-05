import { DEFAULT_LOCALE, type Locale, isLocale } from "../../i18n/settings";

export function getLocaleFromPathname(pathname: string): Locale {
    const segment = pathname.split("/").filter(Boolean)[0];
    return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] && isLocale(segments[0])) {
        const rest = segments.slice(1).join("/");
        return rest ? `/${rest}` : "/";
    }
    return pathname || "/";
}

export function withLocalePath(pathname: string, locale: Locale): string {
    const stripped = stripLocalePrefix(pathname);
    return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}

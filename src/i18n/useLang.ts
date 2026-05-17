import { useLocation } from "react-router-dom";
import { dict, type Lang, type Dict } from "./dictionaries";

export function useLang(): { lang: Lang; t: Dict; pathPrefix: string } {
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "lv";
  return {
    lang,
    t: dict[lang],
    pathPrefix: lang === "en" ? "/en" : "",
  };
}

// SSG-safe variant - takes pathname directly for static analysis
export function langFromPath(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "lv";
}

export function pathFor(path: string, lang: Lang): string {
  if (lang === "en") {
    // /en/<path>
    return path === "/" ? "/en" : `/en${path}`;
  }
  return path;
}

// Translates a LV path to EN path or vice versa using portfolio + nav mapping
const LV_TO_EN_PATHS: Record<string, string> = {
  "/": "/en",
  "/par-mani": "/en/about",
  "/pakalpojumi": "/en/services",
  "/portfolio": "/en/portfolio",
  "/portfolio/logobranding": "/en/portfolio/logo-branding",
  "/portfolio/illustrations": "/en/portfolio/illustrations",
  "/portfolio/print": "/en/portfolio/print",
  "/portfolio/web-design": "/en/portfolio/web-design",
  "/portfolio/box-latvia-branding": "/en/portfolio/box-latvia-branding",
  "/portfolio/apmeklelv-branding": "/en/portfolio/apmekle-lv-branding",
  "/portfolio/digitalaisdzintarslv-branding": "/en/portfolio/digital-amber-branding",
  "/kontakti": "/en/contact",
  "/privatuma-politika": "/en/privacy-policy",
};

const EN_TO_LV_PATHS: Record<string, string> = Object.fromEntries(
  Object.entries(LV_TO_EN_PATHS).map(([lv, en]) => [en, lv])
);

export function alternatePath(currentPath: string): string {
  // Normalize trailing slash
  const p = currentPath.replace(/\/$/, "") || "/";
  if (p.startsWith("/en")) return EN_TO_LV_PATHS[p] || "/";
  return LV_TO_EN_PATHS[p] || "/en";
}

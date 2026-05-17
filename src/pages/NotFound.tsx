import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/useLang";

export default function NotFound() {
  const { lang, pathPrefix } = useLang();

  return (
    <>
      <SEO
        title={lang === "lv" ? "404 - Lapa nav atrasta" : "404 - Page not found"}
        noindex
      />
      <section className="container-tight py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Error 404
        </p>
        <h1 className="font-display text-display-1 font-medium leading-[0.95] tracking-tight">
          {lang === "lv" ? "Tādas lapas nav" : "Page not found"}
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-md mx-auto">
          {lang === "lv"
            ? "Iespējams, saite vairs nedarbojas. Atgriežamies sākumā?"
            : "The link may no longer work. Back to the homepage?"}
        </p>
        <Link
          to={`${pathPrefix}/`}
          className="mt-10 inline-block bg-fg text-bg px-7 py-4 rounded-full text-sm font-medium hover:bg-primary transition-colors"
        >
          {lang === "lv" ? "Uz sākumu" : "Back home"}
        </Link>
      </section>
    </>
  );
}

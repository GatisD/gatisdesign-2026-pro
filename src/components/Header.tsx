import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { alternatePath, useLang } from "@/i18n/useLang";

export default function Header() {
  const { lang, t, pathPrefix } = useLang();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { to: `${pathPrefix}/`, label: t.nav.home, exact: true },
    {
      to: lang === "lv" ? "/par-mani" : "/en/about",
      label: t.nav.about,
    },
    {
      to: lang === "lv" ? "/pakalpojumi" : "/en/services",
      label: t.nav.services,
    },
    {
      to: lang === "lv" ? "/portfolio" : "/en/portfolio",
      label: t.nav.portfolio,
    },
    {
      to: lang === "lv" ? "/kontakti" : "/en/contact",
      label: t.nav.contact,
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link
          to={`${pathPrefix}/`}
          className="font-display text-lg md:text-xl font-semibold tracking-tight"
          aria-label="Gatis Daugavietis"
        >
          Gatis<span className="text-primary">.</span>Daugavietis
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-fg/80 hover:text-fg"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to={alternatePath(pathname)}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-fg transition-colors border-l border-border pl-6"
            aria-label={lang === "lv" ? "Switch to English" : "Pārslēgt uz latviešu"}
          >
            {lang === "lv" ? "EN" : "LV"}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Aizvērt navigāciju" : "Atvērt navigāciju"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="container-wide flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${
                    isActive ? "text-primary" : "text-fg"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to={alternatePath(pathname)}
              className="py-3 text-sm font-mono uppercase tracking-widest text-muted-foreground border-t border-border mt-2"
            >
              {lang === "lv" ? "Switch to English" : "Pārslēgt uz latviešu"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

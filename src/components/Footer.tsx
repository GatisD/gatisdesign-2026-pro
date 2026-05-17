import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useLang } from "@/i18n/useLang";

export default function Footer() {
  const { lang, t, pathPrefix } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-muted/40">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to={`${pathPrefix}/`}
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Gatis<span className="text-primary">.</span>Daugavietis
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">{t.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/gatisdaugavietis/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/gatisdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to={lang === "lv" ? "/par-mani" : "/en/about"}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to={lang === "lv" ? "/pakalpojumi" : "/en/services"}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  to={lang === "lv" ? "/portfolio" : "/en/portfolio"}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  to={lang === "lv" ? "/kontakti" : "/en/contact"}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:gatis@rois.lv"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={14} aria-hidden="true" />
                  gatis@rois.lv
                </a>
              </li>
              <li>
                <a
                  href="tel:+37127112163"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone size={14} aria-hidden="true" />
                  +371 27112163
                </a>
              </li>
              <li className="text-muted-foreground pt-2">Rīga, Latvija</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col-reverse md:flex-row md:justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {year} Gatis Daugavietis. {t.footer.copyright}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link
                to={lang === "lv" ? "/privatuma-politika" : "/en/privacy-policy"}
                className="hover:text-primary transition-colors"
              >
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

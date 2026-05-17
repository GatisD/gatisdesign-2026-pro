import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import HoverLift from "@/components/animations/HoverLift";
import { useLang } from "@/i18n/useLang";
import { PORTFOLIO } from "@/data/portfolio";

const SITE = "https://gatisdesign.com";

export default function PortfolioIndex() {
  const { lang, t, pathPrefix } = useLang();

  const meta = lang === "lv"
    ? {
        title: "Portfolio - 18 gadu darbu apkopojums | Gatis Daugavietis",
        desc: "Vairāk nekā 100 dizaina darbu — zīmolu identitātes, mājaslapas, ilustrācijas un iespieddarbi.",
        h1: "Portfolio",
        sub: "Atlasīti darbi no 18 gadu pieredzes. Trīs zīmola gadījumu izpētes un četras kategoriju kolekcijas.",
      }
    : {
        title: "Portfolio - 18 years of work | Gatis Daugavietis",
        desc: "More than 100 design projects — brand identities, websites, illustrations and print.",
        h1: "Portfolio",
        sub: "Selected work from 18 years of practice. Three brand case studies and four category collections.",
      };

  const breadcrumbs = breadcrumbSchema([
    { name: t.nav.home, url: `${SITE}${pathPrefix}/` },
    { name: t.nav.portfolio, url: `${SITE}${pathPrefix}/portfolio` },
  ]);

  const caseStudies = PORTFOLIO.filter((c) => c.category === "case-study");
  const collections = PORTFOLIO.filter((c) => c.category === "branding");

  return (
    <>
      <SEO title={meta.title} description={meta.desc} lastModified="2026-05-17" />
      <JsonLd data={breadcrumbs} />

      <section className="container-wide py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {t.nav.portfolio}
        </p>
        <RevealText
          as="h1"
          className="font-display text-display-1 font-medium leading-[0.95] tracking-tight"
        >
          {meta.h1}
        </RevealText>

        <FadeInOnScroll delay={0.3}>
          <p className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {meta.sub}
          </p>
        </FadeInOnScroll>
      </section>

      {/* Case studies */}
      <section className="container-wide pb-16 md:pb-24">
        <FadeInOnScroll className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-medium">
            {lang === "lv" ? "Zīmolu gadījumu izpētes" : "Brand case studies"}
          </h2>
        </FadeInOnScroll>

        <div className="grid gap-y-16 gap-x-8 md:grid-cols-2">
          {caseStudies.map((c, i) => {
            const href = `${pathPrefix}/portfolio/${lang === "lv" ? c.slug : c.enSlug}`;
            return (
              <FadeInOnScroll key={c.slug} delay={i * 0.06}>
                <HoverLift href={href} className="group block">
                  <div className="overflow-hidden bg-muted aspect-[4/3] mb-5 rounded-sm">
                    <img
                      src={c.cover}
                      alt={c[lang].title}
                      width={1600}
                      height={1200}
                      loading={i === 0 ? "eager" : "lazy"}
                      {...({ fetchpriority: i === 0 ? "high" : "low" } as any)}
                      decoding={i === 0 ? "sync" : "async"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {c[lang].title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c[lang].subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all shrink-0"
                      size={20}
                    />
                  </div>
                </HoverLift>
              </FadeInOnScroll>
            );
          })}
        </div>
      </section>

      {/* Category collections */}
      <section className="border-t border-border bg-muted/30">
        <div className="container-wide py-24">
          <FadeInOnScroll className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              {lang === "lv" ? "Kolekcijas" : "Collections"}
            </h2>
          </FadeInOnScroll>

          <div className="grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((c, i) => {
              const href = `${pathPrefix}/portfolio/${
                lang === "lv" ? c.slug : c.enSlug
              }`;
              return (
                <FadeInOnScroll key={c.slug} delay={i * 0.05}>
                  <HoverLift href={href} className="group block">
                    <div className="overflow-hidden bg-muted aspect-square mb-4 rounded-sm">
                      <img
                        src={c.cover}
                        alt={c[lang].title}
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-medium tracking-tight">
                        {c[lang].title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">
                        {c.imageCount}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {c[lang].subtitle}
                    </p>
                  </HoverLift>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import { JsonLd, personSchema, professionalServiceSchema, websiteSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import CountUp from "@/components/animations/CountUp";
import HoverLift from "@/components/animations/HoverLift";
import Marquee from "@/components/animations/Marquee";
import MagneticButton from "@/components/animations/MagneticButton";
import { useLang } from "@/i18n/useLang";
import { getFeatured } from "@/data/portfolio";
import { TOP_CLIENTS } from "@/data/clients";

export default function Home() {
  const { lang, t, pathPrefix } = useLang();
  const featured = getFeatured();

  return (
    <>
      <SEO lastModified="2026-05-17" />
      <JsonLd data={[websiteSchema, personSchema, professionalServiceSchema]} />

      {/* HERO */}
      <section className="relative grain min-h-[88vh] flex items-center pt-12 pb-24">
        <div className="container-wide w-full">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-display-1 font-medium leading-[0.95]">
            <RevealText as="span" className="block">
              {t.hero.h1Line1}
            </RevealText>
            <RevealText as="span" delay={0.15} className="block text-primary italic">
              {t.hero.h1Line2}
            </RevealText>
            <RevealText as="span" delay={0.3} className="block">
              {t.hero.h1Line3}
            </RevealText>
          </h1>

          <FadeInOnScroll delay={0.5} className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 lg:col-span-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>

            <div className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-4 md:justify-end">
              <MagneticButton href={`${pathPrefix}/portfolio`}>
                <span className="inline-flex items-center gap-3 bg-fg text-bg px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary transition-colors">
                  {t.hero.ctaPrimary}
                  <ArrowRight size={16} />
                </span>
              </MagneticButton>

              <MagneticButton href={lang === "lv" ? "/kontakti" : "/en/contact"} strength={0.25}>
                <span className="inline-flex items-center gap-3 border border-fg/30 px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:border-fg transition-colors">
                  {t.hero.ctaSecondary}
                </span>
              </MagneticButton>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-muted/30">
        <div className="container-wide py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            <FadeInOnScroll>
              <div>
                <div className="font-display text-5xl md:text-6xl font-medium text-primary">
                  <CountUp to={18} suffix="" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {t.stats.years}
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.1}>
              <div>
                <div className="font-display text-5xl md:text-6xl font-medium text-primary">
                  <CountUp to={350} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {t.stats.projects}
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <div>
                <div className="font-display text-5xl md:text-6xl font-medium text-primary">
                  <CountUp to={10} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {t.stats.clients}
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <div>
                <div className="font-display text-5xl md:text-6xl font-medium text-primary">
                  <CountUp to={25} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {t.stats.industries}
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-wide py-24 md:py-32">
        <FadeInOnScroll className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              01 / Portfolio
            </p>
            <h2 className="font-display text-display-2 font-medium leading-tight max-w-2xl">
              {t.sections.featured}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">{t.sections.featuredSub}</p>
        </FadeInOnScroll>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-12">
          {featured.map((c, i) => {
            const href = `${pathPrefix}/portfolio/${lang === "lv" ? c.slug : c.enSlug}`;
            const isWide = i === 0 || i === 3;
            return (
              <FadeInOnScroll
                key={c.slug}
                delay={i * 0.08}
                className={isWide ? "md:col-span-7" : "md:col-span-5"}
              >
                <HoverLift href={href} className="group block">
                  <div className="overflow-hidden bg-muted aspect-[4/3] mb-5 rounded-sm">
                    <img
                      src={c.cover}
                      alt={c[lang].title}
                      width={1600}
                      height={1200}
                      loading={i < 2 ? "eager" : "lazy"}
                      {...({ fetchpriority: i === 0 ? "high" : "low" } as any)}
                      decoding={i === 0 ? "sync" : "async"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                        {c[lang].title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c[lang].subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all shrink-0"
                      size={22}
                    />
                  </div>
                </HoverLift>
              </FadeInOnScroll>
            );
          })}
        </div>

        <FadeInOnScroll className="mt-20 flex justify-center">
          <Link
            to={`${pathPrefix}/portfolio`}
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide border-b border-fg/40 pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            {lang === "lv" ? "Visi darbi" : "All work"}
            <ArrowRight size={16} />
          </Link>
        </FadeInOnScroll>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="border-y border-border bg-muted/30 overflow-hidden">
        <div className="container-wide py-16 md:py-20">
          <FadeInOnScroll className="mb-10 md:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
              02 / Klienti
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              {t.sections.clients}
            </h2>
            <p className="mt-2 text-muted-foreground">{t.sections.clientsSub}</p>
          </FadeInOnScroll>
        </div>

        <Marquee className="pb-16 md:pb-20" duration={45}>
          {TOP_CLIENTS.map((c) => (
            <span
              key={c.name}
              className="font-display text-3xl md:text-5xl text-muted-foreground/70 hover:text-primary transition-colors whitespace-nowrap"
            >
              {c.text}
            </span>
          ))}
        </Marquee>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-wide py-24 md:py-32">
        <FadeInOnScroll className="mb-16 md:mb-20 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            03 / {lang === "lv" ? "Pakalpojumi" : "Services"}
          </p>
          <h2 className="font-display text-display-2 font-medium leading-tight">
            {t.sections.services}
          </h2>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16">
          {(["branding", "web", "print", "consult"] as const).map((key, i) => (
            <FadeInOnScroll key={key} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium">
                    {t.services[key].title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.services[key].desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative grain bg-fg text-bg">
        <div className="container-wide py-24 md:py-32 text-center">
          <FadeInOnScroll>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-bg/50 mb-6">
              04 / {lang === "lv" ? "Kontakti" : "Contact"}
            </p>
            <h2 className="font-display text-display-1 font-medium leading-[0.95] max-w-4xl mx-auto">
              {t.sections.cta}
            </h2>
            <p className="mt-8 text-bg/70 max-w-xl mx-auto text-lg">
              {t.sections.ctaSub}
            </p>
            <div className="mt-12">
              <MagneticButton href={lang === "lv" ? "/kontakti" : "/en/contact"}>
                <span className="inline-flex items-center gap-3 bg-primary text-bg px-8 py-5 rounded-full text-base font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  {lang === "lv" ? "Sākt sarunu" : "Start a conversation"}
                  <ArrowRight size={18} />
                </span>
              </MagneticButton>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}

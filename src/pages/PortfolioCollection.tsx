import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema, creativeWorkSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import { useLang } from "@/i18n/useLang";
import { getCollectionBySlug, getImageUrls, PORTFOLIO } from "@/data/portfolio";

const SITE = "https://gatisdesign.com";

export default function PortfolioCollection() {
  const { slug } = useParams();
  const { lang, t, pathPrefix } = useLang();

  const collection = getCollectionBySlug(slug || "", lang);

  if (!collection) {
    return (
      <section className="container-tight py-24">
        <h1 className="font-display text-3xl font-medium">
          {lang === "lv" ? "Darbs nav atrasts" : "Work not found"}
        </h1>
        <Link
          to={`${pathPrefix}/portfolio`}
          className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft size={16} /> {lang === "lv" ? "Atpakaļ uz portfolio" : "Back to portfolio"}
        </Link>
      </section>
    );
  }

  const images = getImageUrls(collection);
  const url = `${SITE}${pathPrefix}/portfolio/${
    lang === "lv" ? collection.slug : collection.enSlug
  }`;

  const breadcrumbs = breadcrumbSchema([
    { name: t.nav.home, url: `${SITE}${pathPrefix}/` },
    { name: t.nav.portfolio, url: `${SITE}${pathPrefix}/portfolio` },
    { name: collection[lang].title, url },
  ]);

  const work = creativeWorkSchema({
    name: collection[lang].title,
    description: collection[lang].description,
    url,
    image: `${SITE}${collection.cover}`,
    dateCreated: collection.year,
    client: collection.client,
  });

  // Find next collection for navigation
  const allInLang = PORTFOLIO;
  const idx = allInLang.findIndex((c) => c.slug === collection.slug);
  const next = allInLang[(idx + 1) % allInLang.length];

  return (
    <>
      <SEO
        title={collection[lang].metaTitle}
        description={collection[lang].metaDescription}
        image={`${SITE}${collection.cover}`}
        lastModified="2026-05-17"
      />
      <JsonLd data={[breadcrumbs, work]} />

      {/* Header */}
      <section className="container-tight pt-12 md:pt-16 pb-12 md:pb-16">
        <Link
          to={`${pathPrefix}/portfolio`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          {lang === "lv" ? "Visi darbi" : "All work"}
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {collection.client || (lang === "lv" ? "Kolekcija" : "Collection")}
          {collection.year && ` · ${collection.year}`}
        </p>

        <RevealText
          as="h1"
          className="font-display text-display-2 font-medium leading-[1.0] tracking-tight"
        >
          {collection[lang].title}
        </RevealText>

        <FadeInOnScroll delay={0.3}>
          <p className="mt-6 font-display text-xl md:text-2xl text-muted-foreground italic">
            {collection[lang].subtitle}
          </p>
        </FadeInOnScroll>
      </section>

      {/* Cover */}
      <FadeInOnScroll className="container-wide mb-16 md:mb-24">
        <div className="overflow-hidden bg-muted aspect-[16/10] rounded-sm">
          <img
            src={collection.cover}
            alt={collection[lang].title}
            width={2000}
            height={1250}
            loading="eager"
            {...({ fetchpriority: "high" } as any)}
            decoding="sync"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeInOnScroll>

      {/* Description + meta */}
      <section className="container-tight pb-16 md:pb-24 grid gap-12 md:grid-cols-12">
        <FadeInOnScroll className="md:col-span-7">
          <p className="text-lg md:text-xl leading-relaxed text-fg/85">
            {collection[lang].description}
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.15} className="md:col-span-4 md:col-start-9">
          <dl className="space-y-6 text-sm">
            {collection.client && (
              <div>
                <dt className="font-mono uppercase tracking-widest text-muted-foreground text-xs mb-1">
                  {lang === "lv" ? "Klients" : "Client"}
                </dt>
                <dd className="font-medium">{collection.client}</dd>
              </div>
            )}
            {collection.year && (
              <div>
                <dt className="font-mono uppercase tracking-widest text-muted-foreground text-xs mb-1">
                  {lang === "lv" ? "Gads" : "Year"}
                </dt>
                <dd className="font-medium">{collection.year}</dd>
              </div>
            )}
            {collection.services && (
              <div>
                <dt className="font-mono uppercase tracking-widest text-muted-foreground text-xs mb-1">
                  {lang === "lv" ? "Pakalpojumi" : "Services"}
                </dt>
                <dd className="font-medium">{collection.services.join(", ")}</dd>
              </div>
            )}
            <div>
              <dt className="font-mono uppercase tracking-widest text-muted-foreground text-xs mb-1">
                {lang === "lv" ? "Darbi" : "Items"}
              </dt>
              <dd className="font-medium">{collection.imageCount}</dd>
            </div>
          </dl>
        </FadeInOnScroll>
      </section>

      {/* Gallery */}
      <section className="container-wide pb-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {images.map((src, i) => {
            // Vary grid - first image full width, then 2-up
            const isFull = i === 0;
            return (
              <FadeInOnScroll
                key={src}
                delay={Math.min(i * 0.04, 0.4)}
                className={isFull ? "md:col-span-2" : ""}
              >
                <div className="overflow-hidden bg-muted aspect-[4/3] rounded-sm">
                  <img
                    src={src}
                    alt={`${collection[lang].title} - ${i + 1}`}
                    width={1600}
                    height={1200}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding={i < 2 ? "sync" : "async"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </section>

      {/* Next collection */}
      {next && (
        <section className="border-t border-border">
          <FadeInOnScroll className="container-wide py-20 md:py-24">
            <Link
              to={`${pathPrefix}/portfolio/${
                lang === "lv" ? next.slug : next.enSlug
              }`}
              className="group block"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                {lang === "lv" ? "Nākamais darbs" : "Next project"}
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2 className="font-display text-display-3 font-medium leading-tight group-hover:text-primary transition-colors">
                  {next[lang].title}
                </h2>
                <ArrowRight
                  size={28}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
            </Link>
          </FadeInOnScroll>
        </section>
      )}
    </>
  );
}

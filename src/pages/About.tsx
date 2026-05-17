import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema, personSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import { useLang } from "@/i18n/useLang";

const SITE = "https://gatisdesign.com";

const COPY = {
  lv: {
    title: "Par mani | Gatis Daugavietis",
    desc: "18 gadi web izstrādē, dizainā un SEO. Strādāju ar uzņēmumiem Latvijā, Lietuvā, Igaunijā un ASV.",
    eyebrow: "Par mani",
    h1: "Gatis Daugavietis",
    intro: "Esmu performance mārketinga vadītājs un dizainers ar 18 gadu pieredzi. Strādāju Latvijā, taču klienti ir arī Lietuvā, Igaunijā un Honolulu (ASV).",
    sections: [
      {
        title: "Ar ko strādāju",
        body: "Veidoju zīmolu identitātes, mājaslapas un iespieddarbus. Vairums klientu ir B2B uzņēmumi, kuriem dizains nav tikai estētika, bet konkrēts biznesa rīks — leadu ģenerēšana, pārdošanas atbalsts, partneru pārliecināšana.",
      },
      {
        title: "Kā strādāju",
        body: "Pirms zīmējuma jautāju par biznesu. Kas ir mērķauditorija. Kāpēc cilvēks šobrīd kaut ko nepērk. Kur ir pretestība. Dizains tikai pēc tam, kad atbildes ir uz papīra. Tas iekrāso laiku, bet rezultāts vienmēr ir konkrētāks.",
      },
      {
        title: "Tehniskais steks",
        body: "Mājaslapām: Vite + React + TypeScript + Tailwind + Vercel (SSG). Iespieddarbiem: Adobe ekosistēma (Illustrator, InDesign, Photoshop). SEO: GA4, Google Search Console, Microsoft Clarity, audita rīki. Mārketingam: Meta Ads, Google Ads.",
      },
      {
        title: "Bilingual",
        body: "Strādāju latviski, krieviski un angliski. Igauņu projektiem darbojos angliski, lietuviešu — pa vidu LV/RU. Pielāgojos jūsu komandai.",
      },
    ],
  },
  en: {
    title: "About | Gatis Daugavietis",
    desc: "18 years in web development, design and SEO. Working with companies in Latvia, Lithuania, Estonia and the US.",
    eyebrow: "About",
    h1: "Gatis Daugavietis",
    intro: "I'm a performance marketing lead and designer with 18 years of experience. Based in Latvia, with clients in Lithuania, Estonia and Honolulu, US.",
    sections: [
      {
        title: "Who I work with",
        body: "I build brand identities, websites and print work. Most clients are B2B companies for which design isn't just aesthetics, but a concrete business tool — lead generation, sales support, persuading partners.",
      },
      {
        title: "How I work",
        body: "Before drawing I ask about the business. Who the audience is. Why someone isn't buying right now. Where the resistance is. Design only happens after answers are on paper. It takes time, but results are always more specific.",
      },
      {
        title: "Tech stack",
        body: "Websites: Vite + React + TypeScript + Tailwind + Vercel (SSG). Print: Adobe ecosystem (Illustrator, InDesign, Photoshop). SEO: GA4, Google Search Console, Microsoft Clarity, audit tools. Marketing: Meta Ads, Google Ads.",
      },
      {
        title: "Bilingual",
        body: "I work in Latvian, Russian and English. Estonian projects in English, Lithuanian — mix of LV/RU. I adjust to your team.",
      },
    ],
  },
} as const;

export default function About() {
  const { lang, t, pathPrefix } = useLang();
  const c = COPY[lang];

  const breadcrumbs = breadcrumbSchema([
    { name: t.nav.home, url: `${SITE}${pathPrefix}/` },
    { name: t.nav.about, url: `${SITE}${pathPrefix === "" ? "/par-mani" : "/en/about"}` },
  ]);

  return (
    <>
      <SEO title={c.title} description={c.desc} lastModified="2026-05-17" />
      <JsonLd data={[personSchema, breadcrumbs]} />

      <article className="container-tight py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {c.eyebrow}
        </p>
        <RevealText
          as="h1"
          className="font-display text-display-2 font-medium leading-[1.0] tracking-tight"
        >
          {c.h1}
        </RevealText>

        <FadeInOnScroll delay={0.3}>
          <p className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {c.intro}
          </p>
        </FadeInOnScroll>

        <div className="mt-20 grid gap-12 md:gap-16">
          {c.sections.map((s, i) => (
            <FadeInOnScroll key={s.title} delay={i * 0.05}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border pt-8">
                <div className="md:col-span-4">
                  <h2 className="font-display text-xl md:text-2xl font-medium">
                    {s.title}
                  </h2>
                </div>
                <p className="md:col-span-8 text-muted-foreground text-lg leading-relaxed">
                  {s.body}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </article>
    </>
  );
}

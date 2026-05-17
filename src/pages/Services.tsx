import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema, professionalServiceSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import { useLang } from "@/i18n/useLang";

const SITE = "https://gatisdesign.com";

const COPY = {
 lv: {
 title: "Pakalpojumi | Gatis Daugavietis",
 desc: "Zīmolu identitāte, web dizains un izstrāde, iespieddarbi, dizaina konsultācijas. Pilna pakalpojumu lapa ar tāmes pieprasījumu.",
 eyebrow: "Pakalpojumi",
 h1: "Ar ko varu palīdzēt",
 sub: "Četras pakalpojumu grupas. Katra darbs sākas ar bezmaksas pirmo sarunu - saprotu uzdevumu, atbildu uz jautājumiem, dodu tāmi.",
 services: [
 {
 title: "Zīmola identitāte",
 deliverables: [
 "Logo izstrāde 3 variantos",
 "Krāsu paletes un tipogrāfijas sistēma",
 "Vizuālā valoda un pielietojumi",
 "Brand book ar lietošanas vadlīnijām",
 "Avota faili (AI, SVG, PNG, PDF)",
 ],
 },
 {
 title: "Web dizains un izstrāde",
 deliverables: [
 "UX izpēte un struktūras plāns",
 "Vizuālais dizains (Figma)",
 "Production izstrāde (Vite + React)",
 "SEO un veiktspēja iekļauta",
 "Vercel deploy + CI",
 ],
 },
 {
 title: "Iespieddarbi",
 deliverables: [
 "Plakāti, bukleti, vizītkartes",
 "Iepakojuma dizains",
 "Sagatavošana drukai (CMYK, bleed)",
 "Druka organizēta caur partneriem",
 ],
 },
 {
 title: "Konsultācijas",
 deliverables: [
 "Esoša zīmola audits",
 "Mājaslapas audits (SEO, UX, veiktspēja)",
 "Rekomendāciju saraksts ar prioritātēm",
 "Pavaddokuments komandai",
 ],
 },
 ],
 cta: "Sākt sarunu",
 },
 en: {
 title: "Services | Gatis Daugavietis",
 desc: "Brand identity, web design and development, print, design consulting. Full services page with quote request.",
 eyebrow: "Services",
 h1: "How I can help",
 sub: "Four service groups. Each engagement starts with a free first conversation - I understand the brief, answer questions, give a quote.",
 services: [
 {
 title: "Brand identity",
 deliverables: [
 "Logo design in 3 variants",
 "Color palette and typography system",
 "Visual language and applications",
 "Brand book with usage guidelines",
 "Source files (AI, SVG, PNG, PDF)",
 ],
 },
 {
 title: "Web design & development",
 deliverables: [
 "UX research and information architecture",
 "Visual design (Figma)",
 "Production build (Vite + React)",
 "SEO and performance included",
 "Vercel deploy + CI",
 ],
 },
 {
 title: "Print",
 deliverables: [
 "Posters, brochures, business cards",
 "Packaging design",
 "Print prep (CMYK, bleed)",
 "Print coordinated via partners",
 ],
 },
 {
 title: "Consulting",
 deliverables: [
 "Existing brand audit",
 "Website audit (SEO, UX, performance)",
 "Recommendations list with priorities",
 "Handover document for the team",
 ],
 },
 ],
 cta: "Start a conversation",
 },
} as const;

export default function Services() {
 const { lang, t, pathPrefix } = useLang();
 const c = COPY[lang];

 const breadcrumbs = breadcrumbSchema([
 { name: t.nav.home, url: `${SITE}${pathPrefix}/` },
 {
 name: t.nav.services,
 url: `${SITE}${pathPrefix === "" ? "/pakalpojumi" : "/en/services"}`,
 },
 ]);

 return (
 <>
 <SEO title={c.title} description={c.desc} lastModified="2026-05-17" />
 <JsonLd data={[professionalServiceSchema, breadcrumbs]} />

 <section className="container-tight py-16 md:py-24">
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
 {c.sub}
 </p>
 </FadeInOnScroll>

 <div className="mt-24 grid gap-16">
 {c.services.map((s, i) => (
 <FadeInOnScroll key={s.title} delay={i * 0.05}>
 <article className="border-t border-border pt-10 grid md:grid-cols-12 gap-6 md:gap-10">
 <div className="md:col-span-4">
 <span className="font-mono text-xs text-muted-foreground block mb-3">
 0{i + 1}
 </span>
 <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
 {s.title}
 </h2>
 </div>
 <ul className="md:col-span-8 space-y-3">
 {s.deliverables.map((d) => (
 <li
 key={d}
 className="flex items-start gap-3 text-base md:text-lg"
 >
 <span className="mt-2 inline-block h-px w-4 bg-primary shrink-0" aria-hidden="true" />
 <span>{d}</span>
 </li>
 ))}
 </ul>
 </article>
 </FadeInOnScroll>
 ))}
 </div>

 <FadeInOnScroll className="mt-24">
 <Link
 to={lang === "lv" ? "/kontakti" : "/en/contact"}
 className="inline-flex items-center gap-3 bg-fg text-bg px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary transition-colors"
 >
 {c.cta}
 <ArrowRight size={16} />
 </Link>
 </FadeInOnScroll>
 </section>
 </>
 );
}

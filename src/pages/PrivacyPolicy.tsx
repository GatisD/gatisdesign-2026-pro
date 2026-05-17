import SEO from "@/components/SEO";
import { useLang } from "@/i18n/useLang";

const COPY = {
  lv: {
    title: "Privātuma politika | Gatis Daugavietis",
    desc: "Personas datu apstrādes politika gatisdesign.com.",
    h1: "Privātuma politika",
    updated: "Pēdējais atjauninājums: 2026-05-17",
    sections: [
      {
        h: "Datu pārzinis",
        p: "Gatis Daugavietis, e-pasts gatis@rois.lv, telefons +371 27112163. Atrašanās: Rīga, Latvija.",
      },
      {
        h: "Kādus datus apkopojam",
        p: "Kontaktformā apkopojam vārdu, e-pastu, uzņēmuma nosaukumu (ja norādīts) un ziņojuma saturu. Apkopojam tikai tos datus, ko jūs paši brīvprātīgi sniedzat.",
      },
      {
        h: "Kāpēc apkopojam",
        p: "Datus apkopojam, lai sazinātos ar jums un atbildētu uz jūsu pieprasījumu. Datus neizmantojam tirgvedības saziņai bez papildu piekrišanas.",
      },
      {
        h: "Cik ilgi glabājam",
        p: "Saziņas datus glabājam 24 mēnešus no pēdējās korespondences. Pēc tam dati tiek dzēsti.",
      },
      {
        h: "Analītika",
        p: "Mājaslapā tiek izmantota Vercel Analytics — anonīma, bez sīkdatnēm. Netiek apkopoti personas dati, IP adreses tiek anonimizētas.",
      },
      {
        h: "Jūsu tiesības",
        p: "Jums ir tiesības pieprasīt piekļuvi saviem datiem, to labošanu vai dzēšanu. Rakstiet uz gatis@rois.lv.",
      },
      {
        h: "Sūdzības",
        p: "Strīda gadījumā jums ir tiesības iesniegt sūdzību Datu valsts inspekcijai (dvi.gov.lv).",
      },
    ],
  },
  en: {
    title: "Privacy policy | Gatis Daugavietis",
    desc: "Personal data processing policy for gatisdesign.com.",
    h1: "Privacy policy",
    updated: "Last updated: 2026-05-17",
    sections: [
      {
        h: "Data controller",
        p: "Gatis Daugavietis, email gatis@rois.lv, phone +371 27112163. Based in Rīga, Latvia.",
      },
      {
        h: "What data we collect",
        p: "Via the contact form we collect your name, email, company name (if provided) and message content. We only collect data you voluntarily share.",
      },
      {
        h: "Why we collect it",
        p: "We collect data to contact you and respond to your inquiry. We do not use data for marketing without separate consent.",
      },
      {
        h: "Retention",
        p: "Correspondence is retained for 24 months from the last message. After that data is deleted.",
      },
      {
        h: "Analytics",
        p: "The site uses Vercel Analytics — anonymous, cookie-less. No personal data is collected, IP addresses are anonymized.",
      },
      {
        h: "Your rights",
        p: "You have the right to request access, correction or deletion of your data. Email gatis@rois.lv.",
      },
      {
        h: "Complaints",
        p: "In case of a dispute you have the right to file a complaint with the Latvian Data State Inspectorate (dvi.gov.lv).",
      },
    ],
  },
} as const;

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <>
      <SEO title={c.title} description={c.desc} lastModified="2026-05-17" noindex />
      <article className="container-tight py-16 md:py-24 prose-base max-w-2xl">
        <h1 className="font-display text-display-3 font-medium tracking-tight">{c.h1}</h1>
        <p className="text-sm text-muted-foreground mt-3">{c.updated}</p>

        <div className="mt-12 space-y-10">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl md:text-2xl font-medium mb-3">
                {s.h}
              </h2>
              <p className="text-fg/85 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}

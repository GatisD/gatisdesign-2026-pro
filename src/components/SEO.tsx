import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { alternatePath, useLang } from "@/i18n/useLang";

const SITE = "https://gatisdesign.com";
const DEFAULT_TITLE_LV = "Gatis Daugavietis - dizainers ar 18 gadu pieredzi";
const DEFAULT_TITLE_EN = "Gatis Daugavietis - designer with 18 years of experience";
const DEFAULT_DESC_LV =
  "Zīmolu identitāte, web dizains un iespieddarbi. 18 gadu pieredze. Strādāju ar uzņēmumiem Latvijā, Lietuvā, Igaunijā un ASV.";
const DEFAULT_DESC_EN =
  "Brand identity, web design and print. 18 years of experience. Working with companies in Latvia, Lithuania, Estonia and the US.";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  lastModified?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  path,
  image,
  lastModified,
  noindex,
}: SEOProps) {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const url = `${SITE}${path ?? pathname}`;
  const altUrl = `${SITE}${alternatePath(path ?? pathname)}`;

  const fullTitle =
    title ?? (lang === "lv" ? DEFAULT_TITLE_LV : DEFAULT_TITLE_EN);
  const fullDesc =
    description ?? (lang === "lv" ? DEFAULT_DESC_LV : DEFAULT_DESC_EN);
  const ogImage = image ?? `${SITE}/og-image.png`;

  return (
    <Helmet>
      <html lang={lang === "lv" ? "lv-LV" : "en"} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang */}
      <link
        rel="alternate"
        hrefLang={lang === "lv" ? "en" : "lv-LV"}
        href={altUrl}
      />
      <link rel="alternate" hrefLang={lang === "lv" ? "lv-LV" : "en"} href={url} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === "lv" ? "lv_LV" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Freshness signals (AEO) */}
      {lastModified && <meta property="article:modified_time" content={lastModified} />}
      {lastModified && <meta property="og:updated_time" content={lastModified} />}
    </Helmet>
  );
}

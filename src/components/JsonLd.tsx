import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

const SITE = "https://gatisdesign.com";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gatis Daugavietis",
  givenName: "Gatis",
  familyName: "Daugavietis",
  url: SITE,
  image: `${SITE}/og-image.png`,
  jobTitle: "Designer & Web Developer",
  email: "mailto:gatis@rois.lv",
  telephone: "+371 27112163",
  description:
    "Latvian designer and web developer with 18 years of experience in brand identity, web design and print.",
  knowsLanguage: ["lv", "en", "ru"],
  // 18 years experience -> started 2008
  worksFor: {
    "@type": "Organization",
    name: "ROIS",
    url: "https://rois.lv",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Designer",
    occupationLocation: {
      "@type": "Country",
      name: "Latvia",
    },
    experienceRequirements: "18+ years",
  },
  sameAs: [
    "https://www.linkedin.com/in/gatisdaugavietis/",
    "https://www.instagram.com/gatisdesign/",
  ],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gatis Daugavietis - Design Studio",
  url: SITE,
  image: `${SITE}/og-image.png`,
  description:
    "Brand identity, web design and print services. 18 years of experience.",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LV",
    addressLocality: "Rīga",
  },
  areaServed: ["LV", "LT", "EE", "US"],
  founder: { "@type": "Person", name: "Gatis Daugavietis" },
  email: "gatis@rois.lv",
  telephone: "+371 27112163",
  sameAs: [
    "https://www.linkedin.com/in/gatisdaugavietis/",
    "https://www.instagram.com/gatisdesign/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gatis Daugavietis",
  url: SITE,
  inLanguage: ["lv-LV", "en"],
  publisher: { "@type": "Person", name: "Gatis Daugavietis" },
};

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function creativeWorkSchema(args: {
  name: string;
  description: string;
  url: string;
  image: string;
  dateCreated?: string;
  client?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: args.name,
    description: args.description,
    url: args.url,
    image: args.image,
    creator: { "@type": "Person", name: "Gatis Daugavietis", url: SITE },
    ...(args.dateCreated && { dateCreated: args.dateCreated }),
    ...(args.client && {
      sourceOrganization: { "@type": "Organization", name: args.client },
    }),
  };
}

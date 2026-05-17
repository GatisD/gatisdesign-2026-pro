export interface PortfolioCollection {
  slug: string;
  enSlug: string;
  category: "branding" | "case-study";
  lv: {
    title: string;
    subtitle: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  en: {
    title: string;
    subtitle: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  cover: string;
  imageCount: number;
  imagePrefix: string;
  client?: string;
  year?: string;
  services?: string[];
  featured?: boolean;
}

export const PORTFOLIO: PortfolioCollection[] = [
  // Featured brand case studies (with depth)
  {
    slug: "box-latvia-branding",
    enSlug: "box-latvia-branding",
    category: "case-study",
    lv: {
      title: "Box Latvia",
      subtitle: "Zīmola identitāte un iepakojuma sistēma",
      description:
        "Box Latvia ir Latvijas iepakojuma risinājumu uzņēmums. Es izstrādāju zīmola identitāti, kas saglabā loģistikas nozarei nepieciešamo nopietnību, vienlaikus paliekot mūsdienīgs un atpazīstams. Sistēma aptver logo, krāsu paleti, tipogrāfiju un iepakojuma marķējumus.",
      metaTitle: "Box Latvia zīmola identitāte | Gatis Daugavietis",
      metaDescription:
        "Pilna zīmola identitātes izstrāde Box Latvia iepakojuma uzņēmumam — logo, vizuālā sistēma un pielietojums.",
    },
    en: {
      title: "Box Latvia",
      subtitle: "Brand identity and packaging system",
      description:
        "Box Latvia is a packaging solutions company in Latvia. I developed a brand identity that holds the seriousness logistics demands while staying modern and recognizable. The system covers logo, palette, typography and packaging marks.",
      metaTitle: "Box Latvia brand identity | Gatis Daugavietis",
      metaDescription:
        "Full brand identity development for Box Latvia packaging company — logo, visual system and applications.",
    },
    cover: "/portfolio/box-latvia-cover.jpg",
    imageCount: 11,
    imagePrefix: "/portfolio/box-latvia/box-latvia",
    client: "Box Latvia",
    year: "2024",
    services: ["Brand identity", "Logo design", "Packaging"],
    featured: true,
  },
  {
    slug: "apmeklelv-branding",
    enSlug: "apmekle-lv-branding",
    category: "case-study",
    lv: {
      title: "Apmeklē.lv",
      subtitle: "Tūrisma platformas vizuālā identitāte",
      description:
        "Apmeklē.lv ir Latvijas iekšzemes tūrisma platforma. Identitāte balstās uz vietējās dabas un kultūras motīviem, lietota gan digitālajā vidē, gan iespiestos materiālos. Izveidots logo, krāsu sistēma, ikonogrāfija un kampaņu vizuāļi.",
      metaTitle: "Apmeklē.lv vizuālā identitāte | Gatis Daugavietis",
      metaDescription:
        "Tūrisma platformas Apmeklē.lv vizuālā identitāte — logo, krāsu sistēma, ikonas un kampaņu materiāli.",
    },
    en: {
      title: "Apmeklē.lv",
      subtitle: "Visual identity for a tourism platform",
      description:
        "Apmeklē.lv is a Latvian domestic tourism platform. The identity draws from local nature and cultural motifs, applied across digital and print. Includes logo, color system, iconography and campaign visuals.",
      metaTitle: "Apmeklē.lv visual identity | Gatis Daugavietis",
      metaDescription:
        "Visual identity for tourism platform Apmeklē.lv — logo, color system, icons and campaign materials.",
    },
    cover: "/portfolio/apmekle-cover.jpg",
    imageCount: 9,
    imagePrefix: "/portfolio/apmekle/apmekle",
    client: "Apmeklē.lv",
    year: "2023",
    services: ["Brand identity", "Iconography", "Campaign visuals"],
    featured: true,
  },
  {
    slug: "digitalaisdzintarslv-branding",
    enSlug: "digital-amber-branding",
    category: "case-study",
    lv: {
      title: "Digitālais Dzintars",
      subtitle: "Latvijas kultūras digitalizācijas projekta identitāte",
      description:
        "Digitālais Dzintars ir kultūras mantojuma digitalizācijas iniciatīva. Identitāte savieno tradicionālos motīvus ar tehnoloģisku estētiku — dzintara forma kā simbols, kas pārvēršas pikseļos. Sistēma aptver logo, tipogrāfiju, web prezenci un publikāciju dizainu.",
      metaTitle: "Digitālais Dzintars identitāte | Gatis Daugavietis",
      metaDescription:
        "Kultūras digitalizācijas projekta Digitālais Dzintars vizuālā identitāte un sistēma.",
    },
    en: {
      title: "Digital Amber",
      subtitle: "Identity for a Latvian cultural digitization project",
      description:
        "Digital Amber is a cultural heritage digitization initiative. The identity links traditional motifs to a technological aesthetic — amber form as a symbol turning into pixels. The system covers logo, typography, web presence and publication design.",
      metaTitle: "Digital Amber identity | Gatis Daugavietis",
      metaDescription:
        "Visual identity and system for cultural digitization project Digital Amber.",
    },
    cover: "/portfolio/digitalaisdzintars-cover.jpg",
    imageCount: 16,
    imagePrefix: "/portfolio/digitalaisdzintars/digitalaisdzintars",
    client: "Digitālais Dzintars",
    year: "2024",
    services: ["Brand identity", "Typography", "Publication design"],
    featured: true,
  },
  // Category collections
  {
    slug: "logobranding",
    enSlug: "logo-branding",
    category: "branding",
    lv: {
      title: "Logo un zīmolvedība",
      subtitle: "18 gadu logo izstrādes apkopojums",
      description:
        "Vairāk nekā 50 logo dažādās nozarēs — no būvniecības līdz IT, no restorāniem līdz konsultāciju uzņēmumiem. Katrs zīmols sākas ar uzņēmuma stāstu, ne ar trendiem.",
      metaTitle: "Logo dizains un zīmolvedība | Gatis Daugavietis",
      metaDescription:
        "Logo dizainera Gata Daugavieša 18 gadu darbu apkopojums — vairāk nekā 50 logo dažādās nozarēs.",
    },
    en: {
      title: "Logo & branding",
      subtitle: "18 years of logo design",
      description:
        "More than 50 logos across industries — construction to IT, restaurants to consulting. Every brand starts with the company story, not with trends.",
      metaTitle: "Logo design & branding | Gatis Daugavietis",
      metaDescription:
        "18 years of logo design by Gatis Daugavietis — over 50 logos across industries.",
    },
    cover: "/portfolio/logo-branding/logo-branding-50.jpg",
    imageCount: 51,
    imagePrefix: "/portfolio/logo-branding/logo-branding",
    services: ["Logo design", "Brand identity"],
    featured: true,
  },
  {
    slug: "illustrations",
    enSlug: "illustrations",
    category: "branding",
    lv: {
      title: "Ilustrācijas",
      subtitle: "Pielāgotas ilustrācijas zīmoliem",
      description:
        "Ilustrācijas, kas atbalsta zīmola stāstu — vektorgrafika, tehniski rasējumi, kampaņu motīvi. Katrs darbs adaptēts klienta tonim un izmantošanas kontekstam.",
      metaTitle: "Ilustrācijas | Gatis Daugavietis",
      metaDescription:
        "Pielāgotas ilustrācijas zīmoliem — vektorgrafika, kampaņu motīvi, pielietojuma materiāli.",
    },
    en: {
      title: "Illustrations",
      subtitle: "Custom illustrations for brands",
      description:
        "Illustrations that support brand stories — vector graphics, technical drawings, campaign motifs. Each piece adapted to client tone and use case.",
      metaTitle: "Illustrations | Gatis Daugavietis",
      metaDescription:
        "Custom illustrations for brands — vector graphics, campaign motifs, application materials.",
    },
    cover: "/portfolio/illustrations-cover.jpg",
    imageCount: 8,
    imagePrefix: "/portfolio/illustrations/illustrations",
    services: ["Illustration"],
  },
  {
    slug: "print",
    enSlug: "print",
    category: "branding",
    lv: {
      title: "Iespieddarbi",
      subtitle: "Plakāti, bukleti, iepakojums",
      description:
        "Iespiestie materiāli — afišas, bukleti, vizītkartes, iepakojums. Dizains, kas izstrādāts, paturot prātā gan vizuālo iespaidu, gan tehniskās drukas prasības.",
      metaTitle: "Iespieddarbi | Gatis Daugavietis",
      metaDescription:
        "Iespieddarbu dizains — plakāti, bukleti, vizītkartes, iepakojums.",
    },
    en: {
      title: "Print",
      subtitle: "Posters, brochures, packaging",
      description:
        "Print materials — posters, brochures, business cards, packaging. Design built with visual impact and print technical requirements in mind.",
      metaTitle: "Print design | Gatis Daugavietis",
      metaDescription:
        "Print design — posters, brochures, business cards, packaging.",
    },
    cover: "/portfolio/print-cover.jpg",
    imageCount: 5,
    imagePrefix: "/portfolio/print/print",
    services: ["Print design"],
  },
  {
    slug: "web-design",
    enSlug: "web-design",
    category: "branding",
    lv: {
      title: "Web dizains",
      subtitle: "Mājaslapas, kas pārveidotas par biznesa rīkiem",
      description:
        "Mājaslapas, kas atrisina konkrētu biznesa uzdevumu — leadu ģenerēšana, e-komercija, pakalpojumu prezentācija. Mūsdienu tehnoloģiju steks, SEO un veiktspēja iekļauta no pirmā commit.",
      metaTitle: "Web dizains | Gatis Daugavietis",
      metaDescription:
        "Mājaslapu dizains un izstrāde — leadu ģenerēšana, e-komercija, pakalpojumu prezentācija.",
    },
    en: {
      title: "Web design",
      subtitle: "Websites built as business tools",
      description:
        "Websites that solve a specific business problem — lead generation, e-commerce, service presentation. Modern stack with SEO and performance baked in from the first commit.",
      metaTitle: "Web design | Gatis Daugavietis",
      metaDescription:
        "Web design and development — lead generation, e-commerce, service presentation.",
    },
    cover: "/portfolio/web-design-cover.jpg",
    imageCount: 3,
    imagePrefix: "/portfolio/web-design/web-design",
    services: ["Web design", "Development"],
  },
];

export function getCollectionBySlug(
  slug: string,
  lang: "lv" | "en"
): PortfolioCollection | undefined {
  return PORTFOLIO.find((c) => (lang === "lv" ? c.slug === slug : c.enSlug === slug));
}

export function getFeatured(): PortfolioCollection[] {
  return PORTFOLIO.filter((c) => c.featured);
}

export function getImageUrls(c: PortfolioCollection): string[] {
  return Array.from({ length: c.imageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `${c.imagePrefix}-${num}.jpg`;
  });
}

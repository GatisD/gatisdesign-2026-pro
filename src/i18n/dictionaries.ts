export type Lang = "lv" | "en";

export const dict = {
  lv: {
    nav: {
      home: "Sākums",
      about: "Par mani",
      services: "Pakalpojumi",
      portfolio: "Portfolio",
      contact: "Kontakti",
    },
    hero: {
      eyebrow: "Brand identity. Web. Print.",
      h1Line1: "Dizains, kas",
      h1Line2: "atrisina problēmu.",
      h1Line3: "Ne tikai izskatās.",
      description:
        "Esmu Gatis Daugavietis. 18 gadus veidoju zīmolus, mājaslapas un iespieddarbus uzņēmumiem, kas vēlas izaugt — ne tikai izskatīties.",
      ctaPrimary: "Skatīt darbus",
      ctaSecondary: "Sazināties",
    },
    stats: {
      years: "Gadu pieredze",
      projects: "Pabeigti projekti",
      clients: "Aktīvi klienti",
      industries: "Nozares",
    },
    sections: {
      featured: "Izlasītie darbi",
      featuredSub: "Trīs zīmola identitātes ar pilnu sistēmu un viens logo apkopojums",
      clients: "Cilvēki, ar kuriem strādāju",
      clientsSub: "Klienti Latvijā, Lietuvā, Igaunijā un ASV",
      services: "Ar ko varu palīdzēt",
      cta: "Vai sākam darbu?",
      ctaSub:
        "Pirmā saruna ir bez maksas. Iztaujāju biznesu, izprotu uzdevumu, atbildu uz jautājumiem un dodu tāmi.",
    },
    services: {
      branding: {
        title: "Zīmola identitāte",
        desc: "Logo, krāsu sistēma, tipogrāfija, vizuālā valoda un pielietojums. Sistēma, kas ļauj komandai strādāt patstāvīgi.",
      },
      web: {
        title: "Web dizains un izstrāde",
        desc: "Mājaslapas, kas atrisina biznesa uzdevumu. Mūsdienu tehnoloģiju steks, SEO un veiktspēja iekļauta no pirmā commit.",
      },
      print: {
        title: "Iespieddarbi",
        desc: "Plakāti, bukleti, vizītkartes, iepakojums. Dizains, kas izstrādāts, paturot prātā gan vizuālo iespaidu, gan drukas prasības.",
      },
      consult: {
        title: "Konsultācijas",
        desc: "Audits esošajam zīmolam vai mājaslapai — kur ir vājās vietas un kā tās uzlabot. Konkrēti soļi, ne abstrakcijas.",
      },
    },
    contact: {
      title: "Sazinieties",
      sub: "Atbildu darba dienās 24 stundu laikā.",
      labels: {
        name: "Vārds",
        email: "E-pasts",
        company: "Uzņēmums (nav obligāti)",
        message: "Par ko stāsts?",
        consent: "Piekrītu, ka mani dati tiks apstrādāti saskaņā ar privātuma politiku",
        submit: "Sūtīt",
        sending: "Sūtu...",
      },
      success: "Paldies! Atbildēšu 24 stundu laikā.",
      error: "Diemžēl neizdevās nosūtīt. Rakstiet tieši uz gatis@rois.lv",
    },
    footer: {
      tagline: "Brand identity. Web. Print.",
      quickLinks: "Saites",
      contact: "Kontakti",
      legal: "Tiesiskā informācija",
      privacy: "Privātuma politika",
      copyright: "Visas tiesības aizsargātas.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Brand identity. Web. Print.",
      h1Line1: "Design that",
      h1Line2: "solves the problem.",
      h1Line3: "Not just looks good.",
      description:
        "I'm Gatis Daugavietis. For 18 years I've built brands, websites and print for companies that want to grow — not just look good.",
      ctaPrimary: "See work",
      ctaSecondary: "Get in touch",
    },
    stats: {
      years: "Years of experience",
      projects: "Projects shipped",
      clients: "Active clients",
      industries: "Industries",
    },
    sections: {
      featured: "Featured work",
      featuredSub: "Three brand identities with full systems and one logo compilation",
      clients: "People I work with",
      clientsSub: "Clients in Latvia, Lithuania, Estonia and the US",
      services: "How I can help",
      cta: "Ready to start?",
      ctaSub:
        "First conversation is free. I question the business, understand the brief, answer questions and give you a quote.",
    },
    services: {
      branding: {
        title: "Brand identity",
        desc: "Logo, color system, typography, visual language and applications. A system the team can run with on their own.",
      },
      web: {
        title: "Web design & development",
        desc: "Websites that solve a business problem. Modern stack with SEO and performance baked in from the first commit.",
      },
      print: {
        title: "Print",
        desc: "Posters, brochures, business cards, packaging. Design built with both visual impact and print requirements in mind.",
      },
      consult: {
        title: "Consulting",
        desc: "Audit of your existing brand or website — where the weak spots are and how to fix them. Concrete steps, not abstractions.",
      },
    },
    contact: {
      title: "Get in touch",
      sub: "I reply within 24 hours on working days.",
      labels: {
        name: "Name",
        email: "Email",
        company: "Company (optional)",
        message: "What's it about?",
        consent: "I agree my data is processed under the privacy policy",
        submit: "Send",
        sending: "Sending...",
      },
      success: "Thank you. I'll respond within 24 hours.",
      error: "Sending failed. Please email gatis@rois.lv directly.",
    },
    footer: {
      tagline: "Brand identity. Web. Print.",
      quickLinks: "Links",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy policy",
      copyright: "All rights reserved.",
    },
  },
} as const;

export type Dict = typeof dict.lv;

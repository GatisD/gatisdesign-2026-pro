import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { type RouteRecord } from "vite-react-ssg";

import Layout from "./components/Layout";

const queryClient = new QueryClient();

function withProviders(node: React.ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>
      {node}
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}

const LV_PORTFOLIO_SLUGS = [
  "logobranding",
  "illustrations",
  "print",
  "web-design",
  "box-latvia-branding",
  "apmeklelv-branding",
  "digitalaisdzintarslv-branding",
];

const EN_PORTFOLIO_SLUGS = [
  "logo-branding",
  "illustrations",
  "print",
  "web-design",
  "box-latvia-branding",
  "apmekle-lv-branding",
  "digital-amber-branding",
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: withProviders(<Layout />),
    entry: "src/components/Layout.tsx",
    children: [
      // LV (default)
      {
        index: true,
        lazy: () => import("./pages/Home").then((m) => ({ Component: m.default })),
        entry: "src/pages/Home.tsx",
      },
      {
        path: "par-mani",
        lazy: () => import("./pages/About").then((m) => ({ Component: m.default })),
        entry: "src/pages/About.tsx",
      },
      {
        path: "pakalpojumi",
        lazy: () => import("./pages/Services").then((m) => ({ Component: m.default })),
        entry: "src/pages/Services.tsx",
      },
      {
        path: "portfolio",
        lazy: () =>
          import("./pages/PortfolioIndex").then((m) => ({ Component: m.default })),
        entry: "src/pages/PortfolioIndex.tsx",
      },
      {
        path: "portfolio/:slug",
        lazy: () =>
          import("./pages/PortfolioCollection").then((m) => ({ Component: m.default })),
        entry: "src/pages/PortfolioCollection.tsx",
        getStaticPaths: () => LV_PORTFOLIO_SLUGS.map((s) => `portfolio/${s}`),
      },
      {
        path: "kontakti",
        lazy: () => import("./pages/Contact").then((m) => ({ Component: m.default })),
        entry: "src/pages/Contact.tsx",
      },
      {
        path: "privatuma-politika",
        lazy: () =>
          import("./pages/PrivacyPolicy").then((m) => ({ Component: m.default })),
        entry: "src/pages/PrivacyPolicy.tsx",
      },

      // EN
      {
        path: "en",
        lazy: () => import("./pages/Home").then((m) => ({ Component: m.default })),
        entry: "src/pages/Home.tsx",
      },
      {
        path: "en/about",
        lazy: () => import("./pages/About").then((m) => ({ Component: m.default })),
        entry: "src/pages/About.tsx",
      },
      {
        path: "en/services",
        lazy: () => import("./pages/Services").then((m) => ({ Component: m.default })),
        entry: "src/pages/Services.tsx",
      },
      {
        path: "en/portfolio",
        lazy: () =>
          import("./pages/PortfolioIndex").then((m) => ({ Component: m.default })),
        entry: "src/pages/PortfolioIndex.tsx",
      },
      {
        path: "en/portfolio/:slug",
        lazy: () =>
          import("./pages/PortfolioCollection").then((m) => ({ Component: m.default })),
        entry: "src/pages/PortfolioCollection.tsx",
        getStaticPaths: () => EN_PORTFOLIO_SLUGS.map((s) => `en/portfolio/${s}`),
      },
      {
        path: "en/contact",
        lazy: () => import("./pages/Contact").then((m) => ({ Component: m.default })),
        entry: "src/pages/Contact.tsx",
      },
      {
        path: "en/privacy-policy",
        lazy: () =>
          import("./pages/PrivacyPolicy").then((m) => ({ Component: m.default })),
        entry: "src/pages/PrivacyPolicy.tsx",
      },

      {
        path: "*",
        lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.default })),
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];

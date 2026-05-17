import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

const LV_ROUTES = [
  "/par-mani",
  "/pakalpojumi",
  "/portfolio",
  "/portfolio/logobranding",
  "/portfolio/illustrations",
  "/portfolio/print",
  "/portfolio/web-design",
  "/portfolio/box-latvia-branding",
  "/portfolio/apmeklelv-branding",
  "/portfolio/digitalaisdzintarslv-branding",
  "/kontakti",
  "/privatuma-politika",
];

const EN_ROUTES = [
  "/en",
  "/en/about",
  "/en/services",
  "/en/portfolio",
  "/en/portfolio/logobranding",
  "/en/portfolio/illustrations",
  "/en/portfolio/print",
  "/en/portfolio/web-design",
  "/en/portfolio/box-latvia-branding",
  "/en/portfolio/apmeklelv-branding",
  "/en/portfolio/digitalaisdzintarslv-branding",
  "/en/contact",
  "/en/privacy-policy",
];

export default defineConfig(({ command, isSsrBuild }) => ({
  server: { host: "::", port: 8080, hmr: { overlay: false } },
  plugins: [
    react(),
    sitemap({
      hostname: "https://gatisdesign.com",
      dynamicRoutes: [...LV_ROUTES, ...EN_ROUTES],
      changefreq: "monthly",
      priority: 0.7,
      generateRobotsTxt: false,
    }),
  ],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "react-vendor": ["react", "react-dom", "react-router-dom"],
              "ui-radix": [
                "@radix-ui/react-dialog",
                "@radix-ui/react-dropdown-menu",
                "@radix-ui/react-popover",
                "@radix-ui/react-select",
                "@radix-ui/react-toast",
                "@radix-ui/react-tooltip",
                "@radix-ui/react-slot",
              ],
              motion: ["framer-motion", "lenis"],
              form: ["react-hook-form", "@hookform/resolvers", "zod"],
              icons: ["lucide-react"],
              query: ["@tanstack/react-query"],
            },
          },
    },
  },
}));

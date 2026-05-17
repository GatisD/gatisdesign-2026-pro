import { Outlet, ScrollRestoration } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./Header";
import Footer from "./Footer";
import SmoothScroll from "./animations/SmoothScroll";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScroll />
      <Header />
      <main id="main" className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Analytics />
    </div>
  );
}

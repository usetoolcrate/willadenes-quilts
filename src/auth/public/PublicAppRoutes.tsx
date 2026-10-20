import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import { ContactPage } from "@/site/ContactPage";
import { DonatePage } from "@/site/DonatePage";
import { HomePage } from "@/site/HomePage";
import { InvolvedPage } from "@/site/InvolvedPage";
import { QuiltsPage } from "@/site/QuiltsPage";
import { SamplersPage } from "@/site/SamplersPage";
import { StoriesPage } from "@/site/StoriesPage";
import { StoryPage } from "@/site/StoryPage";
import { SiteFooter, SiteHeader } from "@/site/ui";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function SiteShell() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FBF7F1" }}>
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export function PublicAppRoutes() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<StoryPage />} />
        <Route path="/quilts" element={<QuiltsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/samplers" element={<SamplersPage />} />
        <Route path="/get-involved" element={<InvolvedPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

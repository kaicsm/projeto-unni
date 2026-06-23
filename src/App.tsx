import { useEffect } from "preact/hooks";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuemSomos } from "./components/QuemSomos";
import { ImpactStats } from "./components/ImpactStats";
import { EncontreSeuLugar } from "./components/EncontreSeuLugar";
import { Causas } from "./components/Causas";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div class="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <ImpactStats />
        <EncontreSeuLugar />
        <Causas />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

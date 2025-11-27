import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Portfolio } from "@/components/Portfolio";
import { SubsidiariesSection } from "@/components/SubsidiariesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <SubsidiariesSection />
      <ServicesSection />
      <Portfolio />
      <Footer />
    </main>
  );
}

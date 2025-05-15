
import FeaturedCources from "@/componts/FeaturedCources";
import Footer from "@/componts/Footer";
import HeroSection from "@/componts/HeroSection";
import Loacation from "@/componts/Loacation";
import Stickyscroll from "@/componts/Stickyscroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <section id="home">
        <HeroSection />
      </section>

      <section id="fuels">
        <FeaturedCources />
        <Stickyscroll />
      </section>

      <section id="location">
        <Loacation />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}

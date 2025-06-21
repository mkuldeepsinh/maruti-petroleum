
import FeaturedCources from "@/componts/FeaturedCources";
import Footer from "@/componts/Footer";
import HeroSection from "@/componts/HeroSection";
import Loacation from "@/componts/Loacation";
import Stickyscroll from "@/componts/Stickyscroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 antialiased">
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

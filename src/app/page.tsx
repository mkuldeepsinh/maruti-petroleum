import FeaturedCources from "@/componts/FeaturedCources";
import HeroSection from "@/componts/HeroSection";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white"> 
        {/* <h1 className="text-center">kuldeep</h1> */}
        <HeroSection />
        <FeaturedCources />
    </main>
  );
}

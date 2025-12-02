import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Demos from "@/components/sections/Demos";
import Platform from "@/components/sections/Platform";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <Features />
      
      <Demos />
      
      <Platform />
      
      <Contact />
      
      <Footer />
    </main>
  );
}


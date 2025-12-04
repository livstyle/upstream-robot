import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EmbodiedApps from "@/components/sections/EmbodiedApps";
import LowCodePlatform from "@/components/sections/LowCodePlatform";
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
      
      {/* 辰龙OS 具身化应用场景 */}
      <EmbodiedApps />
      
      {/* 低代码/无代码 AI具象化平台 */}
      <LowCodePlatform />
      
      {/* 核心特性 */}
      <Features />
      
      {/* 演示场景 */}
      <Demos />
      
      {/* 云平台 */}
      <Platform />
      
      {/* 联系我们 */}
      <Contact />
      
      <Footer />
    </main>
  );
}

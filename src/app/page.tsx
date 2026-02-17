import SmoothScroll from "@/components/SmoothScroll";
import Particles from "@/components/Particles";
import AestheticOverlay from "@/components/AestheticOverlay";
import BackgroundMusic from "@/components/BackgroundMusic";
import VisualEnhancements from "@/components/VisualEnhancements";
import FloatingData from "@/components/FloatingData";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <AestheticOverlay />
      <VisualEnhancements />
      <FloatingData />
      <BackgroundMusic />
      <Particles />
      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <Skills />
        <Journey />
        <Projects />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

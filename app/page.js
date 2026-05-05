import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Separator className="max-w-5xl mx-auto" />
        <About />
        <Separator className="max-w-5xl mx-auto" />
        <Skills />
        <Separator className="max-w-5xl mx-auto" />
        <Projects />
        <Separator className="max-w-5xl mx-auto" />
        <Experience />
        <Separator className="max-w-5xl mx-auto" />
        <Education />
        <Separator className="max-w-5xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

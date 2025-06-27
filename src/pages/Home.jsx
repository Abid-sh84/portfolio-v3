import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import GithubActivity from '../components/GithubActivity';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {  
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-dark-text">      <Navigation />
      <Hero />
      <About />
      <Skills />
      <GithubActivity />
      <Projects />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

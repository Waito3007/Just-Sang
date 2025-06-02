import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ParticleBackground from "../components/ParticleBackground";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  return (
    <LoadingScreen>
      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navbar/>
        <main className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LoadingScreen>
  );
}

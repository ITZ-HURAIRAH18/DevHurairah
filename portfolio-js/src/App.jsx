import { useEffect, useState, useRef } from "react";
import Preloader from "./components/Preloader";
import MarqueeTicker from "./components/MarqueeTicker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef(null);

  // ALL hooks MUST run before any conditional return (Rules of Hooks)
  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Active section tracking for navbar
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Preloader — remove from DOM after completion
  return (
    <div className="relative flex min-h-screen flex-col bg-page font-sans antialiased overflow-x-hidden">
      {/* Preloader overlay — hides everything behind until loading is false */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Marquee Ticker Strip */}
      <MarqueeTicker />

      {/* Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1" ref={mainRef}>
        <section id="home" className="reveal is-visible">
          <Home />
        </section>
        <section id="skills" className="reveal">
          <Skills />
        </section>
        <section id="projects" className="reveal">
          <Projects />
        </section>
        <section id="experience" className="reveal">
          <Experience />
        </section>
        <section id="contact" className="reveal">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

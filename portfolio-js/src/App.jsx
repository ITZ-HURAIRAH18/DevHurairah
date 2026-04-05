import { useEffect, useState, useRef } from "react";
import MarqueeTicker from "./components/MarqueeTicker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Hide initial loader
    const timer = setTimeout(() => {
      const loader = document.getElementById("initial-loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          setIsLoading(false);
        }, 600);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
  }, [isLoading]);

  return (
    <div className="relative flex min-h-screen flex-col bg-page font-sans antialiased overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Marquee Ticker Strip */}
      <MarqueeTicker />

      {/* Sticky Navbar */}
      <Navbar />

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
    </div>
  );
}

export default App;

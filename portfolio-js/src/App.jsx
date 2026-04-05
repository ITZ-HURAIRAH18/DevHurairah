import { useEffect, useState } from "react";
import MarqueeTicker from "./components/MarqueeTicker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="relative flex min-h-screen flex-col bg-page font-sans antialiased overflow-x-hidden">
      {/* Marquee Ticker Strip */}
      <MarqueeTicker />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

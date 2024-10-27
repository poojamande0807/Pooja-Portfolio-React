import React, { useState, useEffect, useRef } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Projects from "./components/Projects/Projects";
import "./style.css";
import "./App.css";
import Contact from "./components/Contact/Contact";
function App() {
  const [load, updateLoad] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null); // Contact reference

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 60, // Offset for navbar height
      behavior: "smooth",
    });
  };

  return (
    <div>
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App">
          <Navbar
            scrollToSection={scrollToSection}
            refs={{ homeRef, aboutRef, projectsRef, resumeRef, contactRef }} // Add contactRef here
          />
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={resumeRef}>
            <Resume />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

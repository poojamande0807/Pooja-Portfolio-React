import React from "react";
import "./Navbar.css";

function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <div className="nav-buttons-container">
        <button
          onClick={() => scrollToSection(refs.homeRef)}
          className="nav-button"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(refs.aboutRef)}
          className="nav-button"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(refs.projectsRef)}
          className="nav-button"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection(refs.resumeRef)}
          className="nav-button"
        >
          Resume
        </button>
        <button
          onClick={() => scrollToSection(refs.contactRef)} // Updated for contactRef
          className="nav-button"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

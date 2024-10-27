import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 style={{ color: "white" }}>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span style={{ color: "white" }}>+91 9209 3010 66</span>
        </div>
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/pooja-mande/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/poojamande0807"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:your-email@example.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
            poojamande08@gmail.com
          </a>
        </div>
        <div className="contact-item" style={{ marginTop: "20px" }}>
          <span>B-305 41-Elite Tathwade, Pune, India</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;

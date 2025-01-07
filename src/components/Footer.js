import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Correct React Icons import
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top with smooth scrolling
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
        <Link to="/terms" onClick={scrollToTop}>Terms & Conditions</Link>
        <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
        <Link to="/contact" className="contact-link" onClick={scrollToTop}>
          <FaPhoneAlt size="1.5em" /> Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

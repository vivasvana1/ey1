import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faCogs, faStar } from "@fortawesome/free-solid-svg-icons"; // Changed faServices to faCogs
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="overlay">
          <h1 className="hero-title animate__animated animate__fadeIn">
          <span className="priya-text">Priya</span><span className="highlight">Care</span>
          </h1>
          <p className="hero-subtitle animate__animated animate__fadeIn animate__delay-1s">
            A New <span className="highlight">AI</span> Platform for Everyone
          </p>

          {/* Get Started Button */}
          <button className="hero-btn" onClick={() => handleClick("/get-started")}>
            Get Started
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="bottom-buttons">
          <button
            className="rectangle-btn"
            onClick={() => handleClick("/testimonials")}
          >
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" /> Testimonials
          </button>
          <button
            className="rectangle-btn"
            onClick={() => handleClick("/services")}
          >
            <FontAwesomeIcon icon={faCogs} size="lg" /> Services  {/* Changed to faCogs */}
          </button>
          <button
            className="rectangle-btn"
            onClick={() => handleClick("/highlights")}
          >
            <FontAwesomeIcon icon={faStar} size="lg" /> Highlights
          </button>
        </div>

        {/* New Feature Button - Learn More */}
        <div className="cta-section">
          <h2>Discover the Power of PriyaCare</h2>
          <button className="cta-btn" onClick={(scrollToTop) => handleClick("/learn-more")}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

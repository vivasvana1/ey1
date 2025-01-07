import React from "react";
import "./HighlightSection.css";

function HighlightSection() {
  const highlights = [
    { title: "Convenient Access", description: "Online consultations from your home." },
    { title: "Personalized Care", description: "Plans and advice tailored to you." },
    { title: "Expert Professionals", description: "Trusted specialists at your service." },
  ];

  return (
    <section className="highlight-section">
      <h2>Why Choose PriyaCare?</h2>
      <div className="highlights">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightSection;

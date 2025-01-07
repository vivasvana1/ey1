import React from "react";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  const testimonials = [
    { name: "Aditi", feedback: "PriyaCare has transformed my life with their amazing care." },
    { name: "Rohan", feedback: "Quick and reliable healthcare solutions!" },
    { name: "Simran", feedback: "I got access to essential government schemes through PriyaCare with ease." },
    { name: "Arjun", feedback: "The platform is user-friendly and highly effective." },
    { name: "Priya", feedback: "Best healthcare support I’ve ever received." },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;

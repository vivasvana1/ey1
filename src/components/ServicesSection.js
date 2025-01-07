import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    { title: "Telemedicine", description: "Consult with doctors online." },
    { title: "Women’s Health", description: "Specialized care for women." },
    { title: "Wellness Programs", description: "Programs to keep you fit and healthy." },
    { title: "Mental Health", description: "Support for mental well-being." },
    { title: "Nutrition", description: "Personalized diet plans." },
    { title: "Fitness Coaching", description: "Tailored fitness guidance." },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

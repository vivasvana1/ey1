import React from "react";
import { Link } from "react-router-dom";
import './Features.css'; // Import the Features CSS

const Features = () => {
  const features = [
    {
      title: "Streamlining Applications",
      description: [
        "Save time and effort by managing everything from a single platform.",
        "Eliminate the hassle of navigating through various websites or visiting offices.",
        "Get updates and notifications about your application status in real time."
      ],
      tagline: "👉 Simplify the way you access benefits and ensure you never miss out!"
    },
    {
      title: "Personalized Recommendations",
      description: [
        "Enter basic information about yourself, like age, income, and occupation.",
        "Receive accurate recommendations that match your profile.",
        "Discover new opportunities and benefits you might not know existed."
      ],
      tagline: "👉 Let PriyaCare guide you to the support you deserve!"
    },
    {
      title: "Data Security",
      description: [
        "All your sensitive information is stored securely.",
        "We use advanced encryption techniques to protect against unauthorized access.",
        "Your trust matters to us, and we commit to maintaining it through rigorous security protocols."
      ],
      tagline: "👉 Feel confident knowing your data is in safe hands."
    },
    {
      title: "User-Friendly Interface",
      description: [
        "Clean and easy-to-understand layout for smooth navigation.",
        "Step-by-step guidance through each process.",
        "Accessible on all devices—whether it's a smartphone, tablet, or desktop."
      ],
      tagline: "👉 Enjoy a seamless experience that works for everyone, regardless of tech expertise!"
    }
  ];

  return (
    <div className="features-container">
      <h1 className="features-title">Features of PriyaCare</h1>
      <p className="features-subtitle">
        Discover the incredible features that make PriyaCare the ultimate citizen support platform.
      </p>

      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3 className="feature-card-title">{feature.title}</h3>
            <ul className="feature-card-description">
              {feature.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <p className="feature-card-tagline">{feature.tagline}</p>
          </div>
        ))}
      </div>

      <div className="get-started-container">
        <Link to="/get-started" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Features;

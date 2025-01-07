import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaComment, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // For routing links
import "./LearnMore.css";

const LearnMore = () => {
  const [showFAQ, setShowFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  return (
    <div className="learn-more">
      <header className="learn-more-header">
        <h1>Learn More About PriyaCare</h1>
        <p>Explore the features, guides, and success stories to get the most out of PriyaCare.</p>
      </header>

      <section className="features-grid" id="features">
        <h2>Features Overview</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Streamlining Applications</h3>
            <p>Apply for multiple government schemes in one place.</p>
            <Link to="/features" className="features-button">
        <button className="features-btn">Learn More About Features</button>
      </Link>
          </div>
          <div className="feature-card">
            <h3>Personalized Recommendations</h3>
            <p>Get tailored suggestions based on your eligibility.</p>
            <Link to="/features" className="features-button">
        <button className="features-btn">Learn More About Features</button>
      </Link>
          </div>
          <div className="feature-card">
            <h3>Data Security</h3>
            <p>Your privacy is our priority with robust encryption.</p>
            <Link to="/features" className="features-button">
        <button className="features-btn">Learn More About Features</button>
      </Link>
          </div>
          <div className="feature-card">
            <h3>User-Friendly Interface</h3>
            <p>Navigate easily, even if you’re not tech-savvy.</p>
            <Link to="/features" className="features-button">
        <button className="features-btn">Learn More About Features</button>
      </Link>
          </div>
        </div>
      </section>

      <section className="step-by-step-guides" id="guide-steps">
        <h2>Step-by-Step Guides</h2>
        <div className="guide">
          <h3>How to Get Started</h3>
          <p>Follow these steps to create your account and start applying for schemes.</p>
          <a href="#guide-steps" className="learn-more-link">View detailed guide</a>
        </div>
        <div className="guide">
          <h3>How to Track Your Application</h3>
          <p>Learn how to monitor the status of your applications.</p>
          <a href="#guide-steps" className="learn-more-link">Learn how to track</a>
        </div>
        <div className="guide">
          <h3>How to Manage Your Data</h3>
          <p>Understand how to update and manage your personal information.</p>
          <a href="#guide-steps" className="learn-more-link">Understand data management</a>
        </div>
      </section>

      <section className="faqs" id="faqs">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq">
          <h3 onClick={() => toggleFAQ(0)}>
            Account Management
          </h3>
          {showFAQ === 0 && (
            <p>
              <strong>Q:</strong> How do I reset my password? <br />
              <strong>A:</strong> Go to the login page, click "Forgot Password," and follow the instructions.
              <a href="#reset-password" className="learn-more-link">Reset password</a>
            </p>
          )}
        </div>
        <div className="faq">
          <h3 onClick={() => toggleFAQ(1)}>
            Using PriyaCare
          </h3>
          {showFAQ === 1 && (
            <p>
              <strong>Q:</strong> How do I know if I’m eligible for a scheme? <br />
              <strong>A:</strong> PriyaCare analyzes your profile and suggests schemes you qualify for.
              <a href="#eligibility-info" className="learn-more-link">Eligibility info</a>
            </p>
          )}
        </div>
        <div className="faq">
          <h3 onClick={() => toggleFAQ(2)}>
            Data Security
          </h3>
          {showFAQ === 2 && (
            <p>
              <strong>Q:</strong> Is my data shared with third parties? <br />
              <strong>A:</strong> Your data is only shared with authorized government agencies when required.
              <a href="/privacy-policy" className="learn-more-link">Privacy Policy</a>
            </p>
          )}
        </div>
        <a href="/faq" className="learn-more-link">See all FAQs</a><br />
      </section>

      <section className="success-stories" id="success-stories">
        <h2>Success Stories</h2>
        <div className="story">
          <h3>Meet Ramesh Kumar</h3>
          <p>
            <strong>Problem:</strong> Ramesh struggled to apply for subsidies due to complex paperwork.<br />
            <strong>Solution:</strong> PriyaCare guided him step-by-step, ensuring he received financial aid.<br />
            <strong>Result:</strong> “PriyaCare changed my life by simplifying the process and saving me time!”
          </p>
          <a href="#success-stories" className="learn-more-link">Read more stories</a>
        </div>
        <a href="/testimonials" className="learn-more-link">Watch Our Users’ Testimonials</a>
      </section>

      <section className="contact-feedback" id="contact-feedback">
        <h2>Contact and Feedback</h2>
        <p>Need help or want to share feedback?</p>
        <div className="contact-options">
          <div className="contact-option">
            <FaEnvelope size={24} />
            <a href="mailto:support@priyacare.com" className="learn-more-link">Email us</a>
          </div>
          <div className="contact-option">
            <FaPhone size={24} />
            <a href="tel:+123456789" className="learn-more-link">Call us</a>
          </div>
          <div className="contact-option">
            <FaComment size={24} />
            <a href="#feedback-form" className="learn-more-link">Submit feedback</a>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" className="learn-more-link"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" className="learn-more-link"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com" className="learn-more-link"><FaLinkedin size={24} /></a>
        </div>
      </section>

      <footer className="footer-links">
        <a href="#top" className="learn-more-link">Back to Top</a><br />
        
      </footer>
    </div>
  );
};

export default LearnMore;

import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="tagline">Your Data, Your Rights</p>
      </header>

      <section className="intro-section">
        <p>
          Welcome to PriyaCare! Your privacy is our priority. This Privacy Policy
          explains how we collect, use, and protect your personal information while
          helping you access government schemes efficiently.
        </p>
      </section>

      <section className="content-section">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Personal Details: Name, contact information (email, phone), address.</li>
          <li>Demographic Data: Age, gender, occupation (if required by specific schemes).</li>
          <li>Government IDs: Aadhaar, PAN (if necessary for eligibility verification).</li>
          <li>Usage Data: Device information, IP address, and interaction history with PriyaCare.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Assist in finding and applying for government schemes.</li>
          <li>Improve the functionality and user experience of PriyaCare.</li>
          <li>Communicate updates or notifications regarding schemes and services.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
      </section>

      <section className="highlight-box">
        <strong>We do not sell your information.</strong>
      </section>

      <section className="content-section">
        <h2>3. Your Rights</h2>
        <ul>
          <li>Access and download a copy of your data.</li>
          <li>Update or correct your information.</li>
          <li>Request deletion of your data.</li>
          <li>Withdraw consent for data processing.</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy practices or need
          further information, please <a href="/contact">reach out to us here</a>.
        </p>
      </section>

      <footer className="footer">
        <p>Last Updated: 01/01/2025</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

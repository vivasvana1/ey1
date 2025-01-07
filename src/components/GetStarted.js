import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaRegEye, FaRobot, FaClipboardList, FaHeadset, FaTachometerAlt, FaBell, FaGlobe } from 'react-icons/fa'; // Importing icons
import './GetStarted.css'; // Import the external CSS file

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <h1 className="title">Welcome to PriyaCare</h1>
      <p className="subtitle">Your AI-Powered Citizen Support Platform</p>

      <section className="section">
        <h2 className="heading">Step into the World of Seamless Public Service Delivery</h2>
        <p>Here’s how you can get started:</p>
        
        <div className="card">
          <Link to="/explore-schemes" className="icon-link">
            <FaRegEye size={40} />
          </Link>
          <p>Explore Schemes</p>
        </div>

        <div className="card">
          <Link to="/ai-tools" className="icon-link">
            <FaRobot size={40} />
          </Link>
          <p>Use the Recommendation Engine</p>
        </div>

        <div className="card">
          <Link to="/services" className="icon-link">
            <FaClipboardList size={40} />
          </Link>
          <p>Access Services</p>
        </div>

        <div className="card">
          <Link to="/get-support" className="icon-link">
            <FaHeadset size={40} />
          </Link>
          <p>Get Support</p>
        </div>
      </section>

      <section className="section">
        <h2 className="heading">Features You'll Love</h2>
        
        <div className="card">
          <Link to="/dashboard" className="icon-link">
            <FaTachometerAlt size={40} />
          </Link>
          <p>Personalized Dashboard</p>
        </div>

        <div className="card">
          <Link to="/notifications" className="icon-link">
            <FaBell size={40} />
          </Link>
          <p>Notification Alerts</p>
        </div>

        <div className="card">
          <Link to="/language-support" className="icon-link">
            <FaGlobe size={40} />
          </Link>
          <p>Language Support</p>
        </div>
      </section>

      <h3 className="subtitle">Navigate Through PriyaCare</h3>
      <p>Explore more about PriyaCare through the links below:</p>
      <div className="nav-links">
        <Link to="/dashboard" className="link">Dashboard</Link>
        <Link to="/learn-more" className="link">Learn More</Link>
        <Link to="/services" className="link">Explore Services</Link>
        <Link to="/contact" className="link">Contact Us</Link>
      </div>
    </div>
  );
};

export default GetStarted;

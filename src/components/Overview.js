import React, { useState, useEffect } from "react";
import "./Overview.css"; // Import the CSS file for styling

function Overview() {
  const [eligibleSchemes, setEligibleSchemes] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [documentStatus, setDocumentStatus] = useState({ verified: 0, pending: 0 });

  useEffect(() => {
    // Fetch data from localStorage or API for eligible schemes and notifications
    const schemesFromLocalStorage = JSON.parse(localStorage.getItem("eligibleSchemes"));
    const notificationsFromLocalStorage = JSON.parse(localStorage.getItem("notifications"));

    // Default fallback if the data is not found in localStorage
    const defaultSchemes = [
      "Agnipath Scheme - A recruitment initiative by the Government of India for the Indian Armed Forces, allowing young individuals to serve as Agniveers on a short-term contractual basis for four years, with the aim of modernizing the forces and providing youth with skills and discipline",
      "Svamitva Yojana - Aims to provide property rights to rural residents by mapping their lands using drones",
      "Atal Bhujal Yojana - Aims to improve groundwater management in water-stressed areas",
    ];

    const defaultNotifications = [
      "Your document verification is in progress.",
      "New scheme available: Housing for All.",
      "Update your profile to access additional schemes.",
    ];

    setEligibleSchemes(schemesFromLocalStorage || defaultSchemes);
    setNotifications(notificationsFromLocalStorage || defaultNotifications);

    // Simulating document status
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    const verifiedDocs = storedFiles.filter(doc => doc && doc.verified).length;
    const pendingDocs = storedFiles.length - verifiedDocs;

    setDocumentStatus({ verified: verifiedDocs, pending: pendingDocs });
  }, []);

  return (
    <div className="overview-container">
      <h2 className="overview-header">Overview</h2>

      {/* Notifications Section */}
      <section className="notifications-section">
        <h3>Notifications</h3>
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              {notification}
            </li>
          ))}
        </ul>
      </section>

      {/* Eligible Schemes Section */}
      <section className="schemes-section">
        <h3>Eligible Schemes</h3>
        <ul className="schemes-list">
          {eligibleSchemes.map((scheme, index) => (
            <li key={index} className="scheme-item">
              {scheme}
            </li>
          ))}
        </ul>
      </section>

      {/* Document Status Section */}
      <section className="documents-section">
        <h3>Document Status</h3>
        <div className="documents-summary">
          <div className="document-card verified">
            <h4>Verified Documents</h4>
            <p>{documentStatus.verified}</p>
          </div>
          <div className="document-card pending">
            <h4>Pending Documents</h4>
            <p>{documentStatus.pending}</p>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="additional-features-section">
        <h3>Additional Features</h3>
        <p>Explore more tools and features in the dashboard sidebar.</p>
      </section>
    </div>
  );
}

export default Overview;

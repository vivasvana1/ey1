import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressIndicators from "./ProgressIndicators";
import './Dashboard.css'; // Importing updated CSS file for styling

function Dashboard() {
  const [currentStep, setCurrentStep] = useState(3);
  const totalSteps = 5;

  const [documents, setDocuments] = useState([]);
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);

  const [schemes, setSchemes] = useState([
    { name: 'Agnipath Scheme', description: 'A recruitment initiative by the Government of India for the Indian Armed Forces.', status: 'pending' },
    { name: 'Svamitva Yojana', description: 'Aims to provide property rights to rural residents using drones.', status: 'completed' },
    { name: 'Atal Bhujal Yojana', description: 'Aims to improve groundwater management in water-stressed areas.', status: 'completed' }
  ]);

  const [profileCompleted, setProfileCompleted] = useState(false);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (storedFiles) {
      setDocuments(storedFiles);
      const verifiedDocs = storedFiles.filter(doc => doc.verified);
      setVerifiedDocuments(verifiedDocs);
    }

    const profileStatus = localStorage.getItem("profileCompleted") === 'true';
    setProfileCompleted(profileStatus);
  }, []);

  const totalDocuments = documents.length;
  const unverifiedDocuments = totalDocuments - verifiedDocuments.length;

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/schemes">Schemes</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <section className="progress-section">
          
        </section>

        <section className="overview-section">
          <h2>Dashboard Overview</h2>
          <div className="overview-cards">
            <div className="card">
              <h3>Documents</h3>
              <p>{unverifiedDocuments} Documents Pending Verification</p>
              <Link to="/documents" className="view-details-link">View Details</Link>
              <ul>
                {documents.map((doc, index) => (
                  <li key={index}>
                    {doc.name} - <span className={doc.verified ? 'verified' : 'unverified'}>
                      {doc.verified ? 'Verified' : 'Not Verified'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Schemes</h3>
              <p>{schemes.length} Schemes Available</p>
              <Link to="/schemes" className="view-details-link">View Details</Link>
              <ul>
                {schemes.map((scheme, index) => (
                  <li key={index}>
                    {scheme.name} - <span className={scheme.status === 'completed' ? 'completed' : 'pending'}>
                      {scheme.status.charAt(0).toUpperCase() + scheme.status.slice(1)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Profile</h3>
              <p>{profileCompleted ? 'Profile Completed' : 'Profile Incomplete'}</p>
              <Link to="/profile" className="view-details-link">View Details</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

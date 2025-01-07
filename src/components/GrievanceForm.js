// src/components/Grievance/GrievanceForm.js
import React, { useState } from 'react';
import './GrievanceForm.css';

function GrievanceForm() {
  const [description, setDescription] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error
    setError('');

    // Validate form inputs
    if (!applicationId || !description) {
      setError('Both Application ID and Description are required.');
      return;
    }

    // Simulating a submission delay (replace with actual backend call)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Grievance submitted for Application ID: ${applicationId}`);
      
      // Clear form fields after submission
      setDescription('');
      setApplicationId('');
    }, 1500);
  };

  return (
    <div className="grievance-form">
      <h2>File a Grievance</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="applicationId">Application ID:</label>
          <input
            id="applicationId"
            type="text"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            required
            aria-label="Enter your Application ID"
            placeholder="Enter Application ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            aria-label="Enter a description of your grievance"
            placeholder="Describe your grievance"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Grievance'}
        </button>
      </form>
    </div>
  );
}

export default GrievanceForm;

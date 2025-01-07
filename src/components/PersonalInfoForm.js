import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalInfoForm.css';

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    occupation: ''
  });

  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Redirect to another page

  useEffect(() => {
    // Load saved data from local storage if it exists
    const savedData = JSON.parse(localStorage.getItem('personalInfo'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    // Calculate progress based on how many fields are filled
    const filledFields = Object.values(formData).filter((field) => field !== '').length;
    const totalFields = Object.keys(formData).length;
    const completionPercentage = (filledFields / totalFields) * 100;
    setProgress(completionPercentage);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem('personalInfo', JSON.stringify(formData));

    // Redirect to AIPage after successful form submission
    navigate('/ai-tools');
  };

  const handleClearData = () => {
    // Clear form data and reset progress
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      dateOfBirth: '',
      gender: '',
      occupation: ''
    });
    setProgress(0); // Reset progress bar to 0
    // Clear from localStorage as well
    localStorage.removeItem('personalInfo');
  };

  return (
    <div className="personal-info-form-container">
      <div className="personal-info-header">
        <h1>Complete Your Profile</h1>
        <p>
          To help you get the best government scheme recommendations and manage your account,
          we need to collect some basic information.
        </p>
      </div>

      <form className="personal-info-form" onSubmit={handleSubmit}>
        <div className="form-step">
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-step">
          <label htmlFor="email">What's your email address?</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-step">
          <label htmlFor="phone">What's your phone number? (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number (Optional)"
          />
        </div>

        <div className="form-step">
          <label htmlFor="address">Where do you live?</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <div className="form-step">
          <label htmlFor="dateOfBirth">When were you born?</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-step">
          <label htmlFor="gender">What is your gender?</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-step">
          <label htmlFor="occupation">What's your occupation?</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Enter your occupation"
          />
        </div>

        <div className="form-footer">
          <button type="submit" disabled={progress < 100}>
            Complete Your Profile
          </button>
        </div>
      </form>

      <div className="clear-data">
        <button type="button" onClick={handleClearData}>
          Clear Data
        </button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>Your Progress: {Math.round(progress)}%</p>
      </div>
    </div>
  );
}

export default PersonalInfoForm;

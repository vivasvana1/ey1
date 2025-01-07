import React, { useState, useEffect } from 'react';
import './AIPage.css';

const AIPage = () => {
  const [schemes, setSchemes] = useState([]);
  const [userInput, setUserInput] = useState({
    age: '',
    education: '',
    sector: '',
    gender: '',
    income: '',
    state: '',
    occupation: '',
    maritalStatus: '',
    disability: '',
    minorityStatus: '',
  });
  const [recommendedSchemes, setRecommendedSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get data from localStorage when the page is loaded
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('personalInfo'));

    if (savedData) {
      setUserInput((prevInput) => ({
        ...prevInput,
        age: savedData.dateOfBirth ? new Date().getFullYear() - new Date(savedData.dateOfBirth).getFullYear() : '',
        gender: savedData.gender || '',
        occupation: savedData.occupation || '',
        state: savedData.address || '', // You can map 'state' field accordingly
      }));
    }
    
    setLoading(true);
    fetch('http://localhost:5000/api/schemes') // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setSchemes(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching schemes. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleRecommendation = () => {
    const { age, education, sector } = userInput;
    setLoading(true);

    setTimeout(() => {
      const filteredSchemes = schemes.filter((scheme) => {
        const ageRange = scheme.eligibility_criteria.match(/(\d+(\.\d+)?)\s*to\s*(\d+(\.\d+)?)/);
        const minAge = ageRange ? parseFloat(ageRange[1]) : 0;
        const maxAge = ageRange ? parseFloat(ageRange[3]) : 100;
        const isAgeEligible = age >= minAge && age <= maxAge;

        const isSectorEligible = sector === '' || scheme.sector.toLowerCase().includes(sector.toLowerCase());
        const isEducationEligible = education === '' || scheme.eligibility_criteria.toLowerCase().includes(education.toLowerCase());

        return isAgeEligible && isSectorEligible && isEducationEligible;
      });

      setRecommendedSchemes(filteredSchemes);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="ai-page-container">
      <h1>AI-Based Government Scheme Recommendations</h1>

      <div className="user-input-form">
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInput.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
          />
        </label>

        <label>
          Educational Qualification:
          <select
            name="education"
            value={userInput.education}
            onChange={handleInputChange}
          >
            <option value="">Select Qualification</option>
            <option value="10th">10th Pass</option>
            <option value="12th">12th Pass</option>
            <option value="Graduation">Graduation</option>
            <option value="Post-Graduation">Post-Graduation</option>
          </select>
        </label>

        <label>
          Sector:
          <select name="sector" value={userInput.sector} onChange={handleInputChange}>
            <option value="">Select Sector</option>
            <option value="Agriculture & Rural Development">Agriculture & Rural Development</option>
            <option value="Defense">Defense</option>
            <option value="Economic Development and Self-Reliance">Economic Development and Self-Reliance</option>
            <option value="Education">Education</option>
            <option value="Energy and Women Empowerment">Energy and Women Empowerment</option>
            <option value="Energy & Mobility">Energy & Mobility</option>
            <option value="Environment & Water Management">Environment & Water Management</option>
            <option value="Financial Inclusion">Financial Inclusion</option>
            <option value="Health & Nutrition">Health & Nutrition</option>
            <option value="Infrastructure & Urban Development">Infrastructure & Urban Development</option>
            <option value="Sanitation and Rural Development">Sanitation and Rural Development</option>
            <option value="Skill Development & Employment">Skill Development & Employment</option>
            <option value="Social Welfare & Empowerment">Social Welfare & Empowerment</option>
            <option value="Women & Child Welfare">Women & Child Welfare</option>
          </select>
        </label>

        <label>
          Gender:
          <select name="gender" value={userInput.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Annual Income:
          <input
            type="number"
            name="income"
            value={userInput.income}
            onChange={handleInputChange}
            placeholder="Enter your annual income"
          />
        </label>

        <label>
          State:
          <select name="state" value={userInput.state} onChange={handleInputChange}>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </label>

        <label>
          Occupation:
          <input
            type="text"
            name="occupation"
            value={userInput.occupation}
            onChange={handleInputChange}
            placeholder="Enter your occupation"
          />
        </label>

        <label>
          Marital Status:
          <select name="maritalStatus" value={userInput.maritalStatus} onChange={handleInputChange}>
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
          </select>
        </label>

        <label>
          Disability Status:
          <select name="disability" value={userInput.disability} onChange={handleInputChange}>
            <option value="">Select Disability Status</option>
            <option value="None">None</option>
            <option value="Visually Impaired">Visually Impaired</option>
            <option value="Hearing Impaired">Hearing Impaired</option>
            <option value="Physically Disabled">Physically Disabled</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Minority Status:
          <select name="minorityStatus" value={userInput.minorityStatus} onChange={handleInputChange}>
            <option value="">Select Minority Status</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <button onClick={handleRecommendation} disabled={loading}>
          {loading ? 'Processing...' : 'Get AI-Recommended Schemes'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {recommendedSchemes.length > 0 && (
        <div className="recommended-schemes">
          <h2>AI-Recommended Schemes</h2>
          <ul>
            {recommendedSchemes.map((scheme, index) => (
              <li key={index} className="scheme-card">
                <h3>{scheme.scheme_name}</h3>
                <p>{scheme.description}</p>
                <p><strong>Eligibility:</strong> {scheme.eligibility_criteria}</p>
                <p><strong>Required Documents:</strong> {scheme.required_documents}</p>
                <p><strong>Application Process:</strong> {scheme.application_process}</p>
                <p><strong>Sector:</strong> {scheme.sector}</p>
                <a href={scheme.url} target="_blank" rel="noopener noreferrer">Learn More</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {recommendedSchemes.length === 0 && !loading && <p>No schemes match your criteria.</p>}
    </div>
  );
};

export default AIPage;

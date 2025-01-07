import React, { useState } from "react";

const Recommendation = () => {
  const [userInput, setUserInput] = useState({
    age: "",
    education: "",
    sector: "",
    eligibility: "",
  });
  const [recommendedSchemes, setRecommendedSchemes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleRecommendation = async () => {
    const response = await fetch("http://localhost:5000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_input: userInput,
      }),
    });
    const data = await response.json();
    setRecommendedSchemes(data.recommended);
  };

  return (
    <div>
      <h2>Get Scheme Recommendations</h2>
      <input
        type="text"
        name="age"
        value={userInput.age}
        onChange={handleInputChange}
        placeholder="Enter age"
      />
      <input
        type="text"
        name="education"
        value={userInput.education}
        onChange={handleInputChange}
        placeholder="Enter education"
      />
      <input
        type="text"
        name="sector"
        value={userInput.sector}
        onChange={handleInputChange}
        placeholder="Enter sector"
      />
      <input
        type="text"
        name="eligibility"
        value={userInput.eligibility}
        onChange={handleInputChange}
        placeholder="Enter eligibility criteria"
      />
      <button onClick={handleRecommendation}>Get Recommendations</button>

      <div>
        {recommendedSchemes.length > 0 && (
          <ul>
            {recommendedSchemes.map((scheme, index) => (
              <li key={index}>{scheme}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recommendation;

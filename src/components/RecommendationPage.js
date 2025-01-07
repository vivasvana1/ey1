import React, { useState, useEffect } from 'react';
import schemeServices from '../services/schemeServices';

const RecommendationPage = () => {
  const [recommendedSchemes, setRecommendedSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = 1; // Replace with actual user ID logic (e.g., from localStorage or auth context)

    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const response = await schemeServices.getRecommendedSchemes(user_id); // Changed to schemeServices
        setRecommendedSchemes(response.data.recommendedSchemes);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="recommendation-page">
      <h2>AI-Powered Scheme Recommendations</h2>

      {/* Loading indicator */}
      {loading ? (
        <p>Loading recommendations...</p>
      ) : (
        <>
          <section className="criteria-section">
            <h3>Criteria for Recommendations</h3>
            <ul>
              <li>Eligibility based on your personal details (age, income, etc.)</li>
              <li>Preference for government schemes tailored to your needs</li>
              <li>Machine learning algorithms to optimize the suggestions</li>
              <li>Real-time data processing and recommendation updates</li>
            </ul>
          </section>

          <section className="recommendations-section">
            <h3>Recommended Schemes for You</h3>
            {recommendedSchemes.length > 0 ? (
              <ul>
                {recommendedSchemes.map((scheme, index) => (
                  <li key={index}>
                    <h4>{scheme.name}</h4>
                    <p>{scheme.description}</p>
                    <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                    <p><strong>Benefits:</strong> {scheme.benefits}</p>
                    <p><strong>Application Link:</strong> <a href={scheme.applicationLink} target="_blank" rel="noopener noreferrer">Apply here</a></p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recommendations available at the moment.</p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default RecommendationPage;

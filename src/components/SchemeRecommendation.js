import React, { useState } from 'react';
import axios from 'axios';

const SchemeRecommendation = () => {
    const [userInfo, setUserInfo] = useState({
        age: 30, income: 40000, occupation: 'Farmer'
    });
    const [scheme, setScheme] = useState(null);

    const fetchRecommendations = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/recommendations', userInfo);
            setScheme(response.data.recommendedScheme);
        } catch (error) {
            console.error('Error fetching recommendations', error);
        }
    };

    return (
        <div>
            <button onClick={fetchRecommendations}>Get Scheme Recommendation</button>
            {scheme && <div>Recommended Scheme: {scheme}</div>}
        </div>
    );
};

export default SchemeRecommendation;

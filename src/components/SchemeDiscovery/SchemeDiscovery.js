import React, { useState, useEffect } from 'react';
import SchemeList from './SchemeList';
import SchemeDetails from './SchemeDetails';
import './SchemeDiscovery.css';

const SchemeDiscovery = () => {
    // Initialize state
    const [schemes, setSchemes] = useState([]);
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchemes = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/schemes');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setSchemes(data); // Save schemes to state
                setLoading(false); // Stop loading
            } catch (error) {
                console.error("Error fetching schemes:", error);
                setError(error.message); // Handle error state
                setLoading(false); // Stop loading even on error
            }
        };
        fetchSchemes();
    }, []);
    
    
    

    // Rendering logic
    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="scheme-discovery">
            <h1>Discover Government Schemes</h1>
            {!selectedScheme ? (
                <>
                    <SchemeList
                        schemes={schemes}  // Passing the fetched schemes to SchemeList
                        onSelectScheme={setSelectedScheme}
                    />
                </>
            ) : (
                <SchemeDetails
                    scheme={selectedScheme}
                    onBack={() => setSelectedScheme(null)} // Reset selectedScheme on back button
                />
            )}
        </div>
    );
};

export default SchemeDiscovery;

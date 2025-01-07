import React from 'react';

const SchemeDetails = ({ scheme, onBack }) => {
    return (
        <div className="scheme-details">
            <button onClick={onBack}>Back to List</button>
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p><strong>Sector:</strong> {scheme.sector}</p>
            <p><strong>Urgency:</strong> {scheme.urgency}</p>
            <img src={scheme.imageUrl} alt={scheme.name} />
        </div>
    );
};

export default SchemeDetails;

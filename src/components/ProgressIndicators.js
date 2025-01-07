import React from "react";
import "./ProgressIndicators.css";

const ProgressIndicators = ({ currentStep }) => {
  const steps = ["Upload", "Verification", "Confirmation"];

  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`progress-step ${
            currentStep >= index ? "active" : ""
          }`}
        >
          <span>{step}</span>
          {index < steps.length - 1 && <div className="progress-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicators;

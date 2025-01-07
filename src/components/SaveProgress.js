import React from "react";
import "./SaveProgress.css";

const SaveProgress = ({ onSave }) => {
  const handleSave = () => {
    onSave();
    alert("Your progress has been saved!");
  };

  return (
    <div className="save-progress-container">
      <button onClick={handleSave} className="button save-button">
        Save Progress
      </button>
    </div>
  );
};

export default SaveProgress;

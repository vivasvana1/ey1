import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AIChatbot.css"; // Make sure to import the CSS file

function AIChatbot() {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  // Handle clicking on the logo
  const handleClick = () => {
    setShowText(!showText); // Toggle text visibility
  };

  // Navigate to chatgpt.com when the logo is clicked
  const redirectToChatGPT = () => {
    window.open("https://chat.openai.com", "_blank");
  };

  return (
    <div className="chatbot">
      <div className="chatbot-logo" onClick={redirectToChatGPT}>
        {/* Chatbot Logo: you can replace the following with an image or SVG */}
        <div className="logo"></div>
      </div>
      {showText && <p className="chatbot-text">Chat with us</p>}
    </div>
  );
}

export default AIChatbot;

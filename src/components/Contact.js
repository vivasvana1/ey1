import React, { useState } from 'react';
import './Contact.css'; // For custom styles (you can create a separate CSS file)

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const isFormValid = () => {
    return formData.name && formData.email && formData.message && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setStatusMessage('Please fill out all fields correctly.');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setStatusMessage('Sending your message...');
    setIsError(false);

    // Simulate an API request
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="contact-input"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
            className="contact-input"
          />
        </label>

        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="contact-textarea"
          />
        </label>

        <button type="submit" className="contact-submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Status message */}
      {statusMessage && (
        <div className={`status-message ${isError ? 'error' : 'success'}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;

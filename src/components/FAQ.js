import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-cards">
        <div className="faq-card">
          <h3>What is our refund policy?</h3>
          <p>We offer a 30-day money-back guarantee if you're not satisfied with our product.</p>
        </div>

        <div className="faq-card">
          <h3>How do I contact support?</h3>
          <p>You can reach out to our support team via email at support@example.com or call us at 123-456-7890.</p>
        </div>

        <div className="faq-card">
          <h3>Do you offer discounts?</h3>
          <p>Yes! We offer seasonal promotions and discounts. Subscribe to our newsletter for updates.</p>
        </div>

        <div className="faq-card highlighted">
          <h3>What is the best way to use your product?</h3>
          <p>The best way is to follow the user guide included with your product and visit our tutorial page for helpful tips.</p>
        </div>

        <div className="faq-card">
          <h3>Is my data safe?</h3>
          <p>Yes, we take data privacy seriously and use the latest encryption protocols to protect your information.</p>
        </div>

        <div className="faq-card">
          <h3>How can I cancel my subscription?</h3>
          <p>To cancel your subscription, simply visit the account settings page and select the "Cancel Subscription" option.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

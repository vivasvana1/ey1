// ForgotPasswordPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const navigate = useNavigate();

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle new password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle the email submission (send password reset request)
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsEmailSent(true); // Simulate email sent
  };

  // Handle the password reset form submission
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");
    setIsResettingPassword(true);

    // Simulate password reset process
    setTimeout(() => {
      alert("Password has been successfully reset.");
      localStorage.setItem("isAuthenticated", "true"); // Simulate login after password reset
      setIsResettingPassword(false);
      navigate("/login"); // Redirect to login page after resetting password
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        {!isEmailSent ? (
          <>
            <h1>Forgot Password</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmitEmail}>
              <label htmlFor="email">
                Enter your email address:
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
              <br />
              <button type="submit">Send Reset Link</button>
            </form>
          </>
        ) : (
          <>
            <h1>Reset Your Password</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleResetPassword}>
              <label htmlFor="newPassword">
                New Password:
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter your new password"
                  required
                />
              </label>
              <br />
              <label htmlFor="confirmPassword">
                Confirm Password:
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm your new password"
                  required
                />
              </label>
              <br />
              <button type="submit" disabled={isResettingPassword}>
                {isResettingPassword ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

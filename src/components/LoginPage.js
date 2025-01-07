import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Updated import for useNavigate and Link
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!validateEmail(credentials.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (credentials.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate an API call for login
    setTimeout(() => {
      alert(`Welcome back, ${credentials.email}!`);
      onLogin({ email: credentials.email }); // Pass the user info to App
      setCredentials({ email: '', password: '' });
      setIsLoading(false);

      // Redirect to the Home page after successful login
      navigate('/'); // Use navigate instead of history.push
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </label>
          <br />
          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="links">
          {/* Use Link component from react-router-dom */}
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GovernmentSchemes from "./components/GovernmentSchemes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faBell } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./components/Dashboard";
import AIPage from "./components/AIPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import SchemePage from "./components/SchemePage";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPassword";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
import GrievanceForm from "./components/GrievanceForm";
import TestimonialsSection from "./components/TestimonialsSection";
import HighlightSection from "./components/HighlightSection";
import ServicesSection from "./components/ServicesSection";
import GetStarted from "./components/GetStarted";
import Overview from "./components/Overview";
import Documents from "./components/Documents";
import TermsConditions from "./components/TermsCondtions";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Schemes from "./components/Scheme";
import Profile from "./components/Profile";
import PersonalInfoForm from "./components/PersonalInfoForm";
import { FaPhoneAlt } from "react-icons/fa";
import Recommendation from "./components/Recommendation";
import RecommendationPage from "./components/RecommendationPage";
import SignUpPage from "./components/SignUp";
import Features from "./components/Features";
import "./App.css";
import LearnMore from "./components/LearnMore";

// ProtectedRoute component for route protection based on authentication
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New government scheme available!" },
    { id: 2, message: "AI tools updated to new version." },
    { id: 3, message: "Important update on document verification." },
  ]);
  const [userEmail, setUserEmail] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);  // Add a state to handle initial load logic

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);
    if (loggedIn) {
      const storedEmail = localStorage.getItem("userEmail");
      setUserEmail(storedEmail);
    }
    setIsInitialLoad(false); // Mark that the initial load has completed
  }, []);

  const handleLogin = ({ email }) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email); // Store email in localStorage
    setIsAuthenticated(true);
    setUserEmail(email); // Set userEmail state
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setUserEmail("");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  if (isInitialLoad) {
    // Render a loading state or splash screen during the initial load
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        {!isAuthenticated ? (
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            <Header onLogout={handleLogout} userEmail={userEmail} />
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/government-schemes">Government Schemes</Link>
              <Link to="/ai-tools">AI Tools</Link>
              <Link to="/file-grievance">Grievance Form</Link>
              <Link to="/dashboard">
                <button className="dashboard-btn">
                  <FontAwesomeIcon icon={faDashboard} /> Dashboard
                </button>
              </Link>
            </nav>

            <div className="notifications-icon" onClick={toggleNotifications}>
              <div className="bell-icon">
                <FontAwesomeIcon icon={faBell} size="2x" />
              </div>
            </div>

            {showNotifications && (
              <div className="notifications-dropdown">
                <ul>
                  {notifications.map((notif) => (
                    <li key={notif.id}>{notif.message}</li>
                  ))}
                </ul>
              </div>
            )}

            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/government-schemes" element={<GovernmentSchemes />} />
              <Route path="/ai-tools" element={<AIPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/scheme-details" element={<SchemePage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="/file-grievance"
                element={<ProtectedRoute element={<GrievanceForm />} isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/dashboard"
                element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
              />
              <Route path="/testimonials" element={<TestimonialsSection />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/highlights" element={<HighlightSection />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/personal-info" element={<PersonalInfoForm />} />
              <Route path="/recommendation" element={<Recommendation />} />
              <Route path="/recommendations" element={<RecommendationPage />} />
            </Routes>

            <AIChatbot />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

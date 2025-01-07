import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Importing logout icon

function Header({ onLogout }) {
  return (
    <header className="header">
      {/* Main header section for AI Healthcare */}
      <h1 className="main-header">AI Healthcare</h1>

      {/* Navbar section for the login link and logout icon */}
      <nav className="navbar">
        {/* Redirecting to the homepage when the user clicks the login icon */}
        <Link to="/personal-info" className="login-link">
          {/* User Icon */}
          <FontAwesomeIcon icon={faUser} size="lg" className="login-icon" />
        </Link>

        {/* Logout Icon (Clickable) */}
        <div className="logout-icon" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        </div>
      </nav>
    </header>
  );
}

export default Header;

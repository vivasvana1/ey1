import React from 'react';

const HomePage = ({ user }) => {
  return (
    <div className="home-container">
      <h2>Welcome, {user.email}</h2>
      <p>You are now logged in!</p>
      {/* You can add more user details or actions here */}
    </div>
  );
};

export default HomePage;

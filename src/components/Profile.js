import React, { useState, useEffect } from "react";
import "./Profile.css"; // Import the CSS file for styling

function Profile() {
  // Initialize state with saved data from localStorage
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // Fetch the saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalInfo"));
    if (savedData) {
      setName(savedData.name || "");
      setEmail(savedData.email || "");
      setPhone(savedData.phone || "");
      setAddress(savedData.address || "");
      setDob(savedData.dateOfBirth || "");
      setGender(savedData.gender || "");
      setOccupation(savedData.occupation || "");
      setProfilePicture(savedData.profilePicture || null); // Set profile picture from localStorage
    }
  }, []);

  // Handle file selection for profile picture
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const pictureUrl = URL.createObjectURL(file);
      setProfilePicture(pictureUrl);
      localStorage.setItem("profilePicture", pictureUrl); // Save the profile picture to localStorage
    }
  };

  // Handle saving profile data to localStorage
  const handleSave = () => {
    const profileData = {
      name,
      email,
      phone,
      address,
      dateOfBirth: dob,
      gender,
      occupation,
      profilePicture
    };

    // Save profile data to localStorage
    localStorage.setItem("personalInfo", JSON.stringify(profileData));
    alert("Profile updated successfully!");
  };

  // Handle clearing the profile picture
  const handleClearPicture = () => {
    setProfilePicture(null); // Clear state
    localStorage.removeItem("profilePicture"); // Remove from localStorage
  };

  // Handle clearing individual fields
  const handleClear = (field) => {
    switch (field) {
      case "name":
        setName("");
        break;
      case "email":
        setEmail("");
        break;
      case "phone":
        setPhone("");
        break;
      case "address":
        setAddress("");
        break;
      case "dob":
        setDob("");
        break;
      case "gender":
        setGender("");
        break;
      case "occupation":
        setOccupation("");
        break;
      default:
        break;
    }

    // Also remove the data from localStorage for the respective field
    localStorage.removeItem(field);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Manage Your Account</h2>
      <p className="profile-description">
        We need to collect some basic information to complete your profile.
      </p>

      <div className="profile-picture-section">
        <img
          src={profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-picture"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
          className="profile-picture-input"
        />
        <button
          type="button"
          onClick={handleClearPicture}
          className="clear-picture-btn"
        >
          Clear Picture
        </button>
      </div>

      <form className="profile-form">
        <label>
          What's your name?
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("name")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          What's your email address?
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("email")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          What's your phone number? (Optional)
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("phone")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          Where do you live?
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("address")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          When were you born?
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("dob")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          What is your gender?
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="profile-input"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="button" onClick={() => handleClear("gender")} className="clear-btn">
            Clear
          </button>
        </label>

        <label>
          What's your occupation?
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="Enter your occupation"
            className="profile-input"
          />
          <button type="button" onClick={() => handleClear("occupation")} className="clear-btn">
            Clear
          </button>
        </label>

        <button type="button" onClick={handleSave} className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;

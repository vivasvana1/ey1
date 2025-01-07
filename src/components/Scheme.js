import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import "./Scheme.css";

function Schemes() {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");
  const [eligibilityFilter, setEligibilityFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schemes")
      .then((response) => {
        setSchemes(response.data);
        setFilteredSchemes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching schemes data:", error);
        setError("Failed to load schemes. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      const result = schemes.filter((scheme) =>
        scheme.scheme_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSchemes(result);
    }, 300),
    [schemes]
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Handle sector filter change
  const handleSectorChange = (e) => {
    const sector = e.target.value;
    setSectorFilter(sector);
    filterSchemes(searchQuery, sector, eligibilityFilter);
  };

  // Handle eligibility filter change
  const handleEligibilityChange = (e) => {
    const eligibility = e.target.value;
    setEligibilityFilter(eligibility);
    filterSchemes(searchQuery, sectorFilter, eligibility);
  };

  // Filter schemes based on search query, sector, and eligibility
  const filterSchemes = (query, sector, eligibility) => {
    let result = schemes;

    if (query) {
      result = result.filter((scheme) =>
        scheme.scheme_name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (sector) {
      result = result.filter((scheme) =>
        scheme.sector.toLowerCase().includes(sector.toLowerCase())
      );
    }

    if (eligibility) {
      result = result.filter((scheme) =>
        scheme.eligibility_criteria
          .toLowerCase()
          .includes(eligibility.toLowerCase())
      );
    }

    setFilteredSchemes(result);
  };

  return (
    <div className="schemes-container">
      <h2>Government Schemes</h2>
      <p>Explore and apply for government schemes available to you.</p>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search schemes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={sectorFilter}
          onChange={handleSectorChange}
          className="filter-select"
        >
          <option value="">All Sectors</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          {/* Add more sectors as needed */}
        </select>
        <select
          value={eligibilityFilter}
          onChange={handleEligibilityChange}
          className="filter-select"
        >
          <option value="">All Eligibility Criteria</option>
          <option value="Women">Women</option>
          <option value="Students">Students</option>
          <option value="Farmers">Farmers</option>
          {/* Add more eligibility criteria as needed */}
        </select>
      </div>

      {/* Display Schemes List */}
      <div className="schemes-list">
        {loading ? (
          <p>Loading schemes...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : filteredSchemes.length > 0 ? (
          <ul>
            {filteredSchemes.map((scheme, index) => (
              <li key={index} className="scheme-card">
                <h3>{scheme.scheme_name}</h3>
                <p>{scheme.description}</p>
                <p>
                  <strong>Eligibility:</strong> {scheme.eligibility_criteria}
                </p>
                <p>
                  <strong>Sector:</strong> {scheme.sector}
                </p>
                <a
                  href={scheme.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more-link"
                >
                  Learn More
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No schemes found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Schemes;

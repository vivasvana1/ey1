import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SchemesList.css";

const SchemesList = () => {
  const [schemes, setSchemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState(""); // Sector filter state
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  // Fetch schemes from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schemes")
      .then((response) => {
        setSchemes(response.data);
        setFilteredSchemes(response.data); // Set schemes initially
      })
      .catch((error) => {
        console.error("There was an error fetching the schemes!", error);
      });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sector filter change
  const handleSectorChange = (e) => {
    setSectorFilter(e.target.value);
  };

  // Filter the schemes based on search and sector
  useEffect(() => {
    const filteredData = schemes.filter((scheme) => {
      // Normalize sector names for consistent comparison
      const schemeSector = (scheme.sector || "").toLowerCase().trim();
      const selectedSector = sectorFilter.toLowerCase().trim();

      // Check for undefined fields before applying filters
      const schemeName = scheme.scheme_name || "";
      const description = scheme.description || "";
      const eligibility = scheme.eligibility_criteria || "";
      const documents = scheme.required_documents || "";
      const process = scheme.application_process || "";

      // Apply search query filter across multiple fields
      const matchesSearch =
        schemeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        eligibility.toLowerCase().includes(searchQuery.toLowerCase()) ||
        documents.toLowerCase().includes(searchQuery.toLowerCase()) ||
        process.toLowerCase().includes(searchQuery.toLowerCase());

      // Apply sector filter
      const matchesSector =
        !sectorFilter || schemeSector === selectedSector;

      return matchesSearch && matchesSector;
    });

    setFilteredSchemes(filteredData); // Update the filtered schemes
  }, [searchQuery, sectorFilter, schemes]);

  return (
    <div className="schemes-list">
      <h2 className="page-title">Government Schemes</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search schemes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      {/* Filters */}
      <div className="filters-container">
        <select
          className="filter-select"
          value={sectorFilter}
          onChange={handleSectorChange}
        >
          <option value="">Select Sector</option>
          <option value="Agriculture & Rural Development">Agriculture & Rural Development</option>
          <option value="Defense">Defense</option>
          <option value="Economic Development and Self-Reliance">Economic Development and Self-Reliance</option>
          <option value="Education">Education</option>
          <option value="Energy and Women Empowerment">Energy and Women Empowerment</option>
          <option value="Energy & Mobility">Energy & Mobility</option>
          <option value="Environment & Water Management">Environment & Water Management</option>
          <option value="Financial Inclusion">Financial Inclusion</option>
          <option value="Health & Nutrition">Health & Nutrition</option>
          <option value="Infrastructure & Urban Development">Infrastructure & Urban Development</option>
          <option value="Sanitation and Rural Development">Sanitation and Rural Development</option>
          <option value="Skill Development & Employment">Skill Development & Employment</option>
          <option value="Social Welfare & Empowerment">Social Welfare & Empowerment</option>
          <option value="Social Welfare and Development">Social Welfare and Development</option>
          <option value="Women & Child Welfare">Women & Child Welfare</option>
        </select>
      </div>

      {/* Display filtered schemes */}
      <div className="schemes-container">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <div key={scheme.scheme_name} className="scheme-card">
              <h2 className="scheme-name">{scheme.scheme_name}</h2>
              <p className="scheme-description">{scheme.description}</p>
              <p className="scheme-eligibility">
                <strong>Eligibility:</strong> {scheme.eligibility_criteria}
              </p>
              <p className="scheme-documents">
                <strong>Required Documents:</strong> {scheme.required_documents}
              </p>
              <p className="scheme-process">
                <strong>Application Process:</strong> {scheme.application_process}
              </p>
              <p className="scheme-sector">
                <strong>Sector:</strong> {scheme.sector}
              </p>
              {/* Apply Button */}
              <a href={scheme.url} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply</button>
              </a>
            </div>
          ))
        ) : (
          <p>No schemes found</p>
        )}
      </div>
    </div>
  );
};

export default SchemesList;

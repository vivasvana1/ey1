import React, { useState, useEffect } from "react";

const SchemeFilters = ({ schemes = [], onFilter }) => {
  const [sector, setSector] = useState("");
  const [urgency, setUrgency] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!Array.isArray(schemes)) return;

    const filteredSchemes = schemes.filter((scheme) => {
      const matchesSector = sector
        ? scheme.sector?.toLowerCase() === sector.toLowerCase()
        : true;
      const matchesUrgency = urgency
        ? scheme.urgency?.toLowerCase() === urgency.toLowerCase()
        : true;
      const matchesSearchTerm = searchTerm
        ? scheme.name?.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesSector && matchesUrgency && matchesSearchTerm;
    });

    if (onFilter) {
      onFilter(filteredSchemes);
    }
  }, [sector, urgency, searchTerm, schemes, onFilter]);

  return (
    <div className="scheme-filters">
      <h2>Filter Schemes</h2>

      <label>
        Sector:
        <select value={sector} onChange={(e) => setSector(e.target.value)}>
          <option value="">All</option>
          {/* Add sector options here */}
        </select>
      </label>

      <label>
        Urgency:
        <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value="">Any</option>
          <option value="urgent">Urgent</option>
          <option value="non-urgent">Non-Urgent</option>
        </select>
      </label>

      <label>
        Search:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search schemes"
        />
      </label>
    </div>
  );
};

export default SchemeFilters;

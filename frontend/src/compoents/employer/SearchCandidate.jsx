import React, { useState } from "react";
import axios from "axios";

const SearchCandidate = () => {
  const [skills, setSkills] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/employer/search/candidates?skills=${skills}`);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error searching candidates:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <input
        type="text"
        placeholder="Search by skills (comma-separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
        Search
      </button>

      <div className="mt-4">
        {candidates.length > 0 ? (
          candidates.map((candidate, index) => (
            <div key={index} className="p-2 border-b">
              <p><strong>Name:</strong> {candidate.name}</p>
              <p><strong>Skills:</strong> {candidate.skills.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No candidates found</p>
        )}
      </div>
    </div>
  );
};

export default SearchCandidate;

import React, { useEffect, useState } from "react";
import Employer from "../employer/Employer";
import Candidate from "../candidate/Candidate";
import axios from "axios";

const Dashboard = () => {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get("/api/candidate/profile"); // Adjust the endpoint as necessary
        setCandidate(response.data);
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      }
    };

    fetchCandidate();
  }, []);

  return (
    <>
      {candidate ? (
        <Candidate candidate={candidate} />
      ) : (
        <div>Loading candidate data...</div>
      )}
      <Employer />
      {/* Add links or buttons to navigate to other employer functionalities */}
      <div>
        <a href="/post-job">Post Job</a>
        <a href="/search-candidate">Search Candidates</a>
        <a href="/about-company">About Company</a>
        <a href="/message-candidate">Message Candidate</a>
      </div>
    </>
  );
};

export default Dashboard;

// src/components/application/Dashboard.jsx
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Employer from "../employer/Employer";
import Candidate from "../candidate/Candidate";
import axios from "axios";
import { Button, Box } from "@mui/material"; // Import MUI components

const Dashboard = () => {
  const [candidate, setCandidate] = useState(null);
  const [employer, setEmployer] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const userType = localStorage.getItem("userType"); // Get user type from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userType === "candidate") {
          // Check if user is a candidate
          const response = await axios.get("/api/candidate/profile");
          setCandidate(response.data);
        } else if (userType === "employer") {
          // Check if user is an employer
          const response = await axios.get("/api/employer/profile");
          setEmployer(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userType]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from local storage
    localStorage.removeItem("userType"); // Clear the user type from local storage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      {userType === "candidate" ? ( // Conditional rendering
        candidate ? (
          <Candidate candidate={candidate} />
        ) : (
          <div>Loading candidate data...</div>
        )
      ) : userType === "employer" ? (
        employer ? (
          <Employer employer={employer} />
        ) : (
          <div>Loading employer data...</div>
        )
      ) : (
        <div>User type not recognized.</div>
      )}
    </Box>
  );
};

export default Dashboard;

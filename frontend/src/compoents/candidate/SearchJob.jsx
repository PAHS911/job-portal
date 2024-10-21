import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const SearchJob = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/candidate/search-jobs?query=${query}`);
      setJobs(response.data);
    } catch (error) {
      console.error("Error searching for jobs:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSearchSubmit} sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5">Search for Jobs</Typography>
      <TextField name="search" label="Search Jobs" onChange={handleSearchChange} fullWidth required />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Search</Button>
      <Box sx={{ mt: 2 }}>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <Typography key={job._id}>{job.title} at {job.companyName}</Typography>
          ))
        ) : (
          <Typography>No jobs found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchJob;

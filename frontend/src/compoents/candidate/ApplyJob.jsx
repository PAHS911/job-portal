import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const ApplyJob = ({ jobId }) => {
  const [applicationData, setApplicationData] = useState({});

  const handleChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/candidate/${jobId}/apply`,
        applicationData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2 }}
    >
      <Typography variant="h5">Apply for Job</Typography>
      <TextField
        name="coverLetter"
        label="Cover Letter"
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit Application
      </Button>
    </Box>
  );
};

export default ApplyJob;

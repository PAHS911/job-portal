import React from "react";
import { Box, Typography } from "@mui/material";

const AboutCandidate = ({ candidate }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5">About Candidate</Typography>
      <Typography variant="body1">
        {candidate?.firstName} {candidate?.lastName}
      </Typography>
      <Typography variant="body2">Email: {candidate?.email}</Typography>
      <Typography variant="body2">Mobile: {candidate?.mobile}</Typography>
      <Typography variant="body2">Location: {candidate?.city}, {candidate?.country}</Typography>
      <Typography variant="body2">Professional Summary: {candidate?.professionalSummary}</Typography>
    </Box>
  );
};

export default AboutCandidate;

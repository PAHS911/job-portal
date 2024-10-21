import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const ReplyEmployer = ({ applicationId }) => {
  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/candidate/reply-to-message", { applicationId, reply });
      alert(response.data.message);
    } catch (error) {
      console.error("Error replying to employer:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleReplySubmit} sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5">Reply to Employer</Typography>
      <TextField name="reply" label="Your Reply" onChange={handleReplyChange} fullWidth multiline rows={4} required />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Send Reply</Button>
    </Box>
  );
};

export default ReplyEmployer;

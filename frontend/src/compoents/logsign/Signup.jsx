import   { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", formData);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", maxWidth: "400px", mx: "auto", mt: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
       
        name="userType"
        value={formData.userType}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        select
        SelectProps={{ native: true }}
      >
        <option value="">Select user type</option>
        <option value="employer">Employer</option>
        <option value="candidate">Candidate</option>
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Signup
      </Button>
    </Box>
  );
};

export default Signup;

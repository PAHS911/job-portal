//Singup.js
const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  signupAs: {
    type: String,
    enum: ["employer", "candidate"],
    required: true,
  },
});

module.exports = mongoose.model("Signup", signupSchema);

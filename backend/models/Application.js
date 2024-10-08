//Application.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: {
    type: String,
    enum: ["company", "candidate"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const applicationSchema = new Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobPost",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "shortlisted",
      "screening",
      "interview",
      "test",
      "hired",
      "rejected",
    ],
    required: true,
    default: "screening",
  },
  messages: [messageSchema], // Array of messages
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;

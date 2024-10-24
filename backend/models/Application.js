
//models/Application.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: String, enum: ["employer", "candidate"], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const applicationSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "JobPost", required: true },
  stage: { type: String, enum: ["apply","applied","shortlisted", "screening", "interview", "hired", "rejected"], default: "apply" },
  messages: [messageSchema] 
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);

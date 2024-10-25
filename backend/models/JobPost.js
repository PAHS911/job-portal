//JobPost.js
const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  experienceRequired: String,
  jobType: String,
  jobCategory: String,
  qualification: String,
  postedOn: {
    type: Date,
    default: Date.now,
  },
  companyName: String,
  location: String,
  salary: String,
  jobShift: String,
  totalVacancies: Number,
  lastDate: Date,
  jobDescription: String,
  jobSpecification: String,
  stage: {
    type: String,
    enum: [
      "apply",
      "applied",
      "shortlisted",
      "screening",
      "interview",
      "hired",
      "rejected",
    ],
    default: "apply",
  },
  jobRewardsBenefits: String,
});

module.exports = mongoose.model("JobPost", jobPostSchema);

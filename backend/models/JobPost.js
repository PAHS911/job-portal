//JobPost.js
const mongoose = require('mongoose');

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
  jobDescription: String, // Responsibilities
  jobSpecification: String, // Preferred Skills
  jobRewardsBenefits: String
});

module.exports = mongoose.model('JobPost', jobPostSchema);

//Candidate.ja
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fatherName: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dob: Date,
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: String,
  country: String,
  city: String,
  resume: String, // Path to resume file
  industry: {
    type: String,
    enum: [
      'Accounting', 'Airline/Aviation', 'Animation', 'Medicine', 'Art and Craft',
      'Automotive', 'Banking', 'Biotechnologies', 'Civil Engineering', 'Computer', 'other'
      // Add more as needed
    ],
    required: true,
  },
  experienceLevel: String,
  currentSalary: Number,
  expectedSalary: Number,
  professionalSummary: String,
  socialLinks: {
    facebook: String,
    linkedin: String,
    twitter: String
  },
  education: [String], // You could expand this based on needs
  workExperience: [String], // Could also expand to details
  projects: [String],
  languages: [String],
  skills: [String],
  certificates: [String],
  portfolio: String,
  references: [String]
});

module.exports = mongoose.model('Candidate', candidateSchema);

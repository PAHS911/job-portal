//Employer.js
const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  businessEntity: {
    type: String,
    enum: [
      "Sole Proprietorship",
      "Partnership",
      "SME (Pvt. Ltd.)",
      "Private Limited Company (Pvt. Ltd.)",
      "Public Limited Company (Listed)",
      "Public Limited Company (Unlisted)",
      "Nonprofits",
      "Joint Venture",
      "Inc (Incorporated)",
      "LLC (Limited Liability Company)",
      "Government Organization",
    ],
    required: true,
  },
  industry: {
    type: String,
    enum: [
      "Accounting",
      "Airline/Aviation",
      "Animation",
      "Medicine",
      "Art and Craft",
      "Automotive",
      "Banking",
      "Biotechnologies",
      "Civil Engineering",
      "Computer",
      "others",
    ],
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  dialingCode: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  country: String,
  state: String,
  city: String,
  companyProfile: {
    type: String,
    required: true,
  },
  website: String,
  nationalTaxNumber: String,
  totalEmployees: Number,
  establishedIn: Date,
});

module.exports = mongoose.model("Employer", employerSchema);

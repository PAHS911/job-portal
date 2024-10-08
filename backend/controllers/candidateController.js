//candidateController.js
const Candidate = require("../models/Candidate"); // Candidate model
const Application = require("../models/Application"); // Application model, assuming it exists
const JobPost = require("../models/JobPost"); // JobPost model, assuming it exists

// Upload Resume
exports.uploadResume = async (req, res) => {
  const { candidateId } = req.params;
  const { resume } = req.body;

  try {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate)
      return res.status(404).json({ message: "Candidate not found!" });

    candidate.resume = resume;
    await candidate.save();
    res.status(200).json({ message: "Resume uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Apply for a Job
exports.applyForJob = async (req, res) => {
  const { jobId } = req.params;
  const candidateId = req.user.id; // Assuming req.user is populated by the auth middleware

  try {
    const application = new Application({ jobId, candidateId });
    await application.save();
    res
      .status(201)
      .json({ message: "Applied for job successfully!", application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Jobs
exports.searchJobs = async (req, res) => {
  const { query } = req.query; // Search criteria

  try {
    const jobs = await JobPost.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { companyName: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reply to a Company Message
exports.replyToCompanyMessage = async (req, res) => {
  const { applicationId, reply } = req.body;

  try {
    const application = await Application.findById(applicationId);
    if (!application)
      return res.status(404).json({ message: "Application not found!" });

    application.messages.push({ from: "candidate", message: reply });
    await application.save();
    res.status(200).json({ message: "Reply sent to company!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Job Application Stage
exports.updateJobApplicationStage = async (req, res) => {
  const { applicationId, stage } = req.body; // e.g., 'shortlisted', 'screening'

  try {
    const application = await Application.findById(applicationId);
    if (!application)
      return res.status(404).json({ message: "Application not found!" });

    application.stage = stage; // Update application stage
    await application.save();
    res
      .status(200)
      .json({ message: "Application stage updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Candidate Profile
exports.updateProfile = async (req, res) => {
  const { candidateId } = req.params;
  const updates = req.body;

  try {
    const candidate = await Candidate.findByIdAndUpdate(candidateId, updates, {
      new: true,
    });
    if (!candidate)
      return res.status(404).json({ message: "Candidate not found!" });

    res
      .status(200)
      .json({ message: "Profile updated successfully!", candidate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

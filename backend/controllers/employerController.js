
//employerController.js
const JobPost = require("../models/JobPost");
const Candidate = require("../models/Candidate");
const Application = require("../models/Application");

// Post a job
exports.postJob = async (req, res) => {
  const jobData = req.body;
  try {
    const jobPost = new JobPost({ ...jobData, employerId: req.user.id }); // Link to employer
    await jobPost.save();
    res.status(201).json({ message: "Job posted successfully!", jobPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job posting
exports.updateJob = async (req, res) => {
  const { jobId } = req.params;
  const jobData = req.body;

  try {
    const updatedJob = await JobPost.findByIdAndUpdate(jobId, jobData, { new: true });
    if (!updatedJob) return res.status(404).json({ message: "Job not found!" });
    res.status(200).json({ message: "Job updated successfully!", updatedJob });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete job posting
exports.deleteJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const deletedJob = await JobPost.findByIdAndDelete(jobId);
    if (!deletedJob) return res.status(404).json({ message: "Job not found!" });
    res.status(200).json({ message: "Job deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search candidates by skills
exports.searchCandidatesBySkills = async (req, res) => {
  const { skills } = req.query;

  try {
    const candidates = await Candidate.find({
      skills: { $in: skills.split(",") },
    });
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job application stages
exports.updateJobApplicationStage = async (req, res) => {
  const { applicationId, stage } = req.body; 

  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: "Application not found!" });

    application.stage = stage;
    await application.save();
    res.status(200).json({ message: "Application stage updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Send message to candidate
exports.messageCandidate = async (req, res) => {
  const { applicationId, message } = req.body;

  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: "Application not found!" });

    application.messages.push({ sender: "employer", content: message });
    await application.save();
    res.status(200).json({ message: "Message sent to candidate!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update employer profile
exports.updateEmployerProfile = async (req, res) => {
  const { employerId } = req.params;
  const updateData = req.body;

  try {
    const updatedEmployer = await Employer.findByIdAndUpdate(employerId, updateData, {
      new: true,
    });
    res.status(200).json({ message: "Employer profile updated!", updatedEmployer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
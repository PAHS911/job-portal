//employercontroller.js

const JobPost = require("../models/JobPost"); // Assuming JobPost model exists
const Application = require("../models/Application"); // Assuming Application model exists

exports.postJob = async (req, res) => {
  const jobData = req.body;
  try {
    const jobPost = new JobPost(jobData);
    await jobPost.save();
    res.status(201).json({ message: "Job posted successfully!", jobPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  const { jobId } = req.params;
  const jobData = req.body;

  try {
    const updatedJob = await JobPost.findByIdAndUpdate(jobId, jobData, {
      new: true,
    });
    if (!updatedJob) return res.status(404).json({ message: "Job not found!" });
    res.status(200).json({ message: "Job updated successfully!", updatedJob });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

exports.messageCandidate = async (req, res) => {
  const { applicationId, message } = req.body;

  try {
    const application = await Application.findById(applicationId);
    if (!application)
      return res.status(404).json({ message: "Application not found!" });
    application.messages.push({ from: "employer", message });
    await application.save();
    res.status(200).json({ message: "Message sent to candidate!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchCandidatesBySkills = async (req, res) => {
  const { skills } = req.query; // skills should be a string to search

  try {
    const candidates = await Candidate.find({
      skills: { $in: skills.split(",") },
    }); // Assuming Candidate model exists
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

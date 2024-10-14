
//candidateController.js
const Candidate = require("../models/Candidate");
const Application = require("../models/Application");
const JobPost = require("../models/JobPost");

// Upload resume
exports.uploadResume = async (req, res) => {
  const { candidateId } = req.params;
  const { resume } = req.body;

  try {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) return res.status(404).json({ message: "Candidate not found!" });

    candidate.resume = resume;
    await candidate.save();
    res.status(200).json({ message: "Resume uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Apply for a job
exports.applyForJob = async (req, res) => {
  const { jobId } = req.params;
  const candidateId = req.user.id;

  try {
    const application = new Application({ jobId, candidateId });
    await application.save();
    res.status(201).json({ message: "Applied for job successfully!", application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search for jobs
exports.searchJobs = async (req, res) => {
  const { query } = req.query;

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

// Reply to employer message
exports.replyToCompanyMessage = async (req, res) => {
  const { applicationId, reply } = req.body;

  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: "Application not found!" });

    application.messages.push({ sender: "candidate", content: reply });
    await application.save();
    res.status(200).json({ message: "Reply sent to employer!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update candidate profile
exports.updateCandidateProfile = async (req, res) => {
  const { candidateId } = req.params;
  const updateData = req.body;

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(candidateId, updateData, {
      new: true,
    });
    res.status(200).json({ message: "Candidate profile updated!", updatedCandidate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
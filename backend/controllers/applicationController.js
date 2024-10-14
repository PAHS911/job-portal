
//applicationcontroller.js
const Application = require("../models/Application"); // Assuming Application model exists

//application by userEmail
exports.getApplicationsByUserEmail = async (req, res) => {
  const email = req.user.email; // Assuming user is set in the request

  try {
    const applications = await Application.find({ email });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post job for company
exports.getPostedJobsForCompany = async (req, res) => {
  const companyId = req.user.id; // Assuming user is set in the request

  try {
    const jobs = await JobPost.find({ companyId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// apply for job by candidate
exports.getAppliedJobsForCandidate = async (req, res) => {
  const candidateId = req.user.id; // Assuming user is set in the request

  try {
    const applications = await Application.find({ candidateId });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// for chat
exports.getMessagesBetweenCompanyAndCandidate = async (req, res) => {
  const { applicationId } = req.params;

  try {
    const application = await Application.findById(applicationId);
    if (!application)
      return res.status(404).json({ message: "Application not found!" });

    res.status(200).json(application.messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



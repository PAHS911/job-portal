//applicationcontroller.js
const Application = require("../models/Application"); // Assuming Application model exists

exports.getApplicationsByUserEmail = async (req, res) => {
  const email = req.user.email; // Assuming user is set in the request

  try {
    const applications = await Application.find({ email });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostedJobsForCompany = async (req, res) => {
  const companyId = req.user.id; // Assuming user is set in the request

  try {
    const jobs = await JobPost.find({ companyId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAppliedJobsForCandidate = async (req, res) => {
  const candidateId = req.user.id; // Assuming user is set in the request

  try {
    const applications = await Application.find({ candidateId });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

exports.updateProfile = async (req, res) => {
  const { userId } = req.params; // Assuming userId is passed
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

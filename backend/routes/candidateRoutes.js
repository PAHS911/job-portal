//candidateRoutes.js

const express = require("express");
const {
  uploadResume,
  applyForJob,
  searchJobs,
  replyToCompanyMessage,
  updateJobApplicationStage,
  updateProfile,
} = require("../controllers/candidateController"); // Ensure these are functions

const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Candidate routes
router.post("/:candidateId/upload-resume", authenticate, uploadResume);
router.post("/:jobId/apply", authenticate, applyForJob);
router.get("/search-jobs", authenticate, searchJobs);
router.post("/reply-to-message", authenticate, replyToCompanyMessage);
router.put("/update-application-stage", authenticate, updateJobApplicationStage);
router.put("/:candidateId/profile", authenticate, updateProfile);

module.exports = router;

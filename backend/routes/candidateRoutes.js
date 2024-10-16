
//candidateRoutes.js
const express = require("express");
const {
  uploadResume,
  applyForJob,
  searchJobs,
  replyToCompanyMessage,
  jobStages,
  updateCandidateProfile,
} = require("../controllers/candidateController");

const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Candidate routes
router.post("/:candidateId/upload-resume", authenticate, uploadResume);
router.post("/:jobId/apply", authenticate, applyForJob);
router.get("/search-jobs", authenticate, searchJobs);
router.post("/reply-to-message", authenticate, replyToCompanyMessage);
router.put('/applications/:applicationId/stage', authenticate, jobStages);

router.put("/:candidateId/profile", authenticate, updateCandidateProfile);

module.exports = router;

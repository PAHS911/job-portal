//employerRoutes.js

const express = require("express");
const {
  postJob,
  updateJob,
  deleteJob,
  messageCandidate,
  searchCandidatesBySkills,
} = require("../controllers/employerController");
const {
  authenticate,
  authorizeEmployer,
} = require("../middleware/authMiddleware"); // Importing auth middleware
const router = express.Router();

// Ensure the user is authenticated and authorized as an employer
router.use(authenticate, authorizeEmployer);

router.post("/jobs", postJob); // Post a new job
router.put("/jobs/:jobId", updateJob); // Update a job by jobId
router.delete("/jobs/:jobId", deleteJob); // Delete a job by jobId
router.post("/jobs/message", messageCandidate); // Message candidate about the job application
router.get("/search/candidates", searchCandidatesBySkills); // Search candidates by skills

module.exports = router;

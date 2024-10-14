
//applicationRoutes.js
const express = require("express");
const {
  getApplicationsByUserEmail,
  getPostedJobsForCompany,
  getAppliedJobsForCandidate,
  getMessagesBetweenCompanyAndCandidate,
  updateProfile,
} = require("../controllers/applicationController");
const { authenticate } = require("../middleware/authMiddleware"); // Importing auth middleware
const router = express.Router();

// Ensure the user is authenticated
router.use(authenticate);

router.get("/applications", getApplicationsByUserEmail); // Get applications by user email
router.get("/jobs/posted", getPostedJobsForCompany); // Get posted jobs for company
router.get("/jobs/applied", getAppliedJobsForCandidate); // Get applied jobs for candidate
router.get(
  "/applications/:applicationId/messages",
  getMessagesBetweenCompanyAndCandidate
); // Get messages for specific application

module.exports = router;

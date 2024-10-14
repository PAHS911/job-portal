
//employerRoutes.js
const express = require("express");
const { postJob, updateJob, deleteJob, messageCandidate, searchCandidatesBySkills } = require("../controllers/employerController");
const { authenticate, authorizeEmployer } = require("../middleware/authMiddleware");

const router = express.Router();

// Apply authentication and authorization middleware to all routes
router.use(authenticate, authorizeEmployer);

router.post("/jobs", postJob);
router.put("/jobs/:jobId", updateJob);
router.delete("/jobs/:jobId", deleteJob);
router.post("/jobs/message", messageCandidate);
router.get("/search/candidates", searchCandidatesBySkills);

module.exports = router;

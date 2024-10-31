//authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust path to your User model if needed

// Middleware to authenticate the user via JWT
exports.authenticate = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ message: "Unauthorized!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifying the token
    req.user = await User.findById(decoded.id); // Finding the user by ID in the token
    next(); // Continue if authenticated
  } catch (error) {
    res.status(401).json({ message: "Invalid token!" });
  }
};

// Middleware to authorize an employer
exports.authorizeEmployer = (req, res, next) => {
  if (req.user.userType !== "employer") {
    return res.status(403).json({ message: "Access denied!" }); // Only employers can access
  }
  next(); // Continue if authorized
};

// Middleware to authorize a candidate
exports.authorizeCandidate = (req, res, next) => {
  if (req.user.userType !== "candidate") {
    return res.status(403).json({ message: "Access denied!" }); // Only candidates can access
  }
  next(); // Continue if authorized
};

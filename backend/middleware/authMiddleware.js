//authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assuming you have a User model

exports.authenticate = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) return res.status(401).json({ message: "Unauthorized!" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token!" });
    }
  };

exports.authorizeEmployer = (req, res, next) => {
  if (req.user.userType !== "employer") {
    return res.status(403).json({ message: "Access denied!" });
  }
  next();
};

exports.authorizeCandidate = (req, res, next) => {
  if (req.user.userType !== "candidate") {
    return res.status(403).json({ message: "Access denied!" });
  }
  next();
};

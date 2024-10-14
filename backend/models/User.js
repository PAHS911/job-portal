
// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['employer', 'candidate'], required: true } // New field for user type
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

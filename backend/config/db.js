// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace 'your_mongo_uri' with your actual MongoDB URI
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/your_database_name';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

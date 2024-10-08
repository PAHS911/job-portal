//server..js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const employerRoutes = require('./routes/employerRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error(err));

// Route middleware
app.use('/api/auth', authRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api/candidate', candidateRoutes);
app.use('/api/application', applicationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

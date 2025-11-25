const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Patient must have a first name'],
  },
  lastname: {
    type: String,
    required: [true, 'User must have a last name'],
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    lowercase: true,
  },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

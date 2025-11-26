const Doctor = require('../models/doctorModel');

const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      status: 'success',
      results: doctors.length,
      data: { doctors },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to fetch doctors...');
  }
};

exports.getDoctor = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not yet defined...',
  });
};

exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { doctor: newDoctor },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to create doctor...');
  }
};

exports.updateDoctor = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not yet defined...',
  });
};

exports.deleteDoctor = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not yet defined...',
  });
};

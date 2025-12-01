const Patient = require('../models/patientModel');

// Helper: standardize error responses
const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

// ============================
// 1. GET ALL PATIENTS
// ============================
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    res.status(200).json({
      status: 'success',
      results: patients.length,
      data: { patients },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to fetch patients');
  }
};

// ============================
// 2. GET SINGLE PATIENT BY ID
// ============================
exports.getAPatient = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return sendError(res, 400, 'Invalid patient ID');
    }

    const patient = await Patient.findById(id);

    if (!patient) {
      return sendError(res, 404, 'Patient not found');
    }

    res.status(200).json({
      status: 'success',
      data: { patient },
    });
  } catch (error) {
    sendError(res, 500, 'Server error while fetching patient');
  }
};

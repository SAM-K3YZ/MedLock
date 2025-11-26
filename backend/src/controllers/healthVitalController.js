const HealthVital = require('../models/healthVitalsModel');

// Helper: standardize error responses
const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

// === 1. GET ALL VITALS (with optional patientId filter) ===
exports.getAllHealthVitals = async (req, res) => {
  try {
    const { patientId } = req.query;

    // Build query
    const queryObj = {};
    if (patientId) queryObj.patientId = patientId;

    const vitals = await HealthVital.find(queryObj).sort({ recordedAt: -1 });

    res.status(200).json({
      status: 'success',
      results: vitals.length,
      data: { vitals },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to fetch vitals');
  }
};

// === 2. GET ONE VITAL BY ID ===
exports.getAVital = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return sendError(res, 400, 'Invalid vital ID');
    }

    const vital = await HealthVital.findById(id);

    if (!vital) {
      return sendError(res, 404, 'Vital not found');
    }

    res.status(200).json({
      status: 'success',
      data: { vital },
    });
  } catch (error) {
    sendError(res, 500, 'Server error');
  }
};

// === 3. CREATE NEW VITAL ===
exports.createVitals = async (req, res) => {
  try {
    // Optional: validate required fields
    const required = [
      'heart_rate',
      'blood_pressure',
      'temperature',
      'oxygen_saturation',
      'source',
      'patientId',
    ];
    const missing = required.filter((field) => !(field in req.body));
    if (missing.length > 0) {
      return sendError(res, 400, `Missing fields: ${missing.join(', ')}`);
    }

    const newVital = await HealthVital.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { vital: newVital },
    });
  } catch (error) {
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return sendError(res, 400, messages.join('; '));
    }
    sendError(res, 500, 'Failed to create vital');
  }
};

// controllers/healthVitalController.js

exports.updateVital = async (req, res) => {
  try {
    const vital = await HealthVital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!vital) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Vital not found' });
    }

    res.status(200).json({ status: 'success', data: { vital } });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

exports.deleteVital = async (req, res) => {
  try {
    const vital = await HealthVital.findByIdAndDelete(req.params.id);

    if (!vital) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Vital not found' });
    }

    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

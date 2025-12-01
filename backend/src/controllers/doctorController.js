const Doctor = require('../models/doctorModel');

// Helper: standardize error responses
const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

// ============================
// 1. GET ALL DOCTORS
// ============================
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
      status: 'success',
      results: doctors.length,
      data: { doctors },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to fetch doctors');
  }
};

// ============================
// 2. GET SINGLE DOCTOR BY ID
// ============================
exports.getDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return sendError(res, 400, 'Invalid doctor ID');
    }

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return sendError(res, 404, 'Doctor not found');
    }

    res.status(200).json({
      status: 'success',
      data: { doctor },
    });
  } catch (error) {
    sendError(res, 500, 'Server error while fetching doctor');
  }
};

// ============================
// 3. CREATE NEW DOCTOR
// ============================
exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { doctor: newDoctor },
    });
  } catch (error) {
    sendError(res, 500, 'Failed to create doctor');
  }
};

// ============================
// 4. UPDATE DOCTOR BY ID
// ============================
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return sendError(res, 404, 'Doctor not found');
    }

    res.status(200).json({ status: 'success', data: { doctor } });
  } catch (error) {
    sendError(res, 400, error.message);
  }
};

// ============================
// 5. DELETE DOCTOR BY ID
// ============================
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return sendError(res, 404, 'Doctor not found');
    }

    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    sendError(res, 500, error.message);
  }
};

// controllers/appointmentController.js

const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

// Helper for clean error messages
const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

/**
 * ======================================================
 * 1. GET ALL APPOINTMENTS (supports ?patientId= or full list)
 * ======================================================
 * - Matches your Vitals controller structure
 * - Populates doctor + patient details
 * - Validates ObjectId
 * - Sorted by appointmentDate (closest upcoming first)
 * ======================================================
 */
exports.getAllAppointments = async (req, res) => {
  try {
    const { patientId } = req.query;

    const queryObj = {};

    // -------------------------------
    // EDIT #1 — Validate and filter by patientId
    // -------------------------------
    if (patientId) {
      if (!mongoose.Types.ObjectId.isValid(patientId)) {
        return sendError(res, 400, 'Invalid patient ID');
      }
      queryObj.patientId = patientId;
    }

    // -------------------------------
    // EDIT #2 — Sort by appointmentDate (not recordedAt)
    // Consistent with real appointment logic
    // -------------------------------
    const appointments = await Appointment.find(queryObj)
      .sort({ appointmentDate: 1 })
      .populate({
        path: 'doctorId',
        select: 'firstname lastname specialty',
      })
      .populate({
        path: 'patientId',
        select: 'firstname lastname',
      });

    res.status(200).json({
      status: 'success',
      results: appointments.length,
      data: { appointments },
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    sendError(res, 500, 'Server error while fetching appointments');
  }
};

/**
 * ======================================================
 * 2. GET ONE APPOINTMENT BY :id
 * ======================================================
 */
exports.getAnAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    // -------------------------------
    // EDIT #3 — Proper ObjectId validation
    // -------------------------------
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return sendError(res, 400, 'Invalid appointment ID');
    }

    const appointment = await Appointment.findById(id)
      .populate({
        path: 'doctorId',
        select: 'firstname lastname specialty',
      })
      .populate({
        path: 'patientId',
        select: 'firstname lastname',
      });

    if (!appointment) {
      return sendError(res, 404, 'Appointment not found');
    }

    res.status(200).json({
      status: 'success',
      data: { appointment },
    });
  } catch (error) {
    console.error('Error fetching single appointment:', error);
    sendError(res, 500, 'Server error');
  }
};

/**
 * ======================================================
 * 3. CREATE APPOINTMENT
 * ======================================================
 * - Clean validation
 * - Error reporting for missing required fields
 * ======================================================
 */
exports.createAppointments = async (req, res) => {
  try {
    const requiredFields = [
      'patientId',
      'doctorId',
      'department',
      'appointmentDate',
      'appointmentTime',
      'reason',
    ];

    // -------------------------------
    // EDIT #4 — Check missing fields early
    // -------------------------------
    const missing = requiredFields.filter((f) => !req.body[f]);
    if (missing.length > 0) {
      return sendError(
        res,
        400,
        `Missing required fields: ${missing.join(', ')}`
      );
    }

    // -------------------------------
    // EDIT #5 — Actual creation
    // -------------------------------
    const newAppointment = await Appointment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { appointment: newAppointment },
    });
  } catch (error) {
    console.error('Error creating appointment:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return sendError(res, 400, messages.join('; '));
    }

    sendError(res, 500, 'Failed to create appointment');
  }
};

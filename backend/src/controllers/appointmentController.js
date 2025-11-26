const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');

const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

// GET appointments by ID or patientId
exports.getAppointments = async (req, res) => {
  try {
    const { id, patientId } = req.query;

    // --- Fetch single appointment by ID ---
    if (id) {
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return sendError(res, 400, 'Invalid appointment ID');
      }

      const appointment = await Appointment.findById(id)
        .populate('doctorId', 'firstname lastname specialty')
        .populate('patientId', 'firstname lastname');

      if (!appointment) {
        return sendError(res, 404, 'Appointment not found');
      }

      return res.status(200).json({
        status: 'success',
        data: { appointments: [appointment] },
      });
    }

    // --- Fetch all appointments for a patient ---
    if (patientId) {
      if (!patientId.match(/^[0-9a-fA-F]{24}$/)) {
        return sendError(res, 400, 'Invalid patient ID');
      }

      // Try casting to ObjectId; if fails, fallback to string
      let queryPatientId;
      try {
        queryPatientId = mongoose.Types.ObjectId(patientId);
      } catch {
        queryPatientId = patientId;
      }

      const appointments = await Appointment.find({ patientId: queryPatientId })
        .sort({ appointmentDate: 1 })
        .populate({
          path: 'doctorId',
          select: 'firstname lastname specialty',
          options: { lean: true },
        })
        .populate({
          path: 'patientId',
          select: 'firstname lastname',
          options: { lean: true },
        });

      return res.status(200).json({
        status: 'success',
        data: { appointments },
      });
    }

    // --- Fetch all appointments if no query provided ---
    const appointments = await Appointment.find()
      .sort({ appointmentDate: 1 })
      .populate({
        path: 'doctorId',
        select: 'firstname lastname specialty',
        options: { lean: true },
      })
      .populate({
        path: 'patientId',
        select: 'firstname lastname',
        options: { lean: true },
      });

    return res.status(200).json({
      status: 'success',
      data: { appointments },
    });
  } catch (error) {
    console.error('Error in getAppointments:', error);
    return sendError(res, 500, 'Server error while fetching appointments');
  }
};

// POST create a new appointment
exports.createAppointments = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { appointments: [newAppointment] },
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    sendError(res, 500, 'Failed to create appointment');
  }
};

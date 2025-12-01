const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  getAnAppointment,
  createAppointments,
} = require('../controllers/appointmentController');

// 1. GET all appointments
// Optional query: ?patientId=xxxx to filter by patient
router.route('/').get(getAllAppointments).post(createAppointments);

// 2. GET single appointment by ID
router.route('/').get(getAnAppointment);

module.exports = router;

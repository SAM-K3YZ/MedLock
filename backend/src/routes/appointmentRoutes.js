const express = require('express');
const {
  getAppointments,
  createAppointments,
} = require('../controllers/appointmentController');
const router = express.Router();

// Unified GET for single/multiple appointments & POST to create
router.route('/').get(getAppointments).post(createAppointments);

module.exports = router;

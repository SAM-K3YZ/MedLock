// routes/vitalRoutes.js
const express = require('express');
const {
  getAllHealthVitals,
  createVitals,
  getAVital,
  updateVital,
  deleteVital,
} = require('../controllers/healthVitalController');

const router = express.Router();

// === 1. GET ALL & CREATE (root path) ===
router.route('/').get(getAllHealthVitals).post(createVitals);

// === 2. GET ONE (by ID) ===
router.route('/:id').get(getAVital).patch(updateVital).delete(deleteVital);

module.exports = router;

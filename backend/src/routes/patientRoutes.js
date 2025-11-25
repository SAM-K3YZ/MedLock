const express = require('express');
const {
  getAllPatients,
  getAPatient,
} = require('../controllers/patientController');

const router = express.Router();

router.route('/').get(getAllPatients);
router.route('/:id').get(getAPatient);

module.exports = router;

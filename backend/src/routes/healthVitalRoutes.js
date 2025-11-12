const express = require('express');
const {
  getAllHealthVitals,
  createVitals,
} = require('../controllers/healthVitalController');

const router = express.Router();

//getting the vitals...
router.route('/').get(getAllHealthVitals).post(createVitals);

module.exports = router;

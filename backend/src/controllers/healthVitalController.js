const HealthVital = require('../models/healthVitalsModel');

exports.getAllHealthVitals = async (req, res) => {
  try {
    const vitals = await HealthVital.find();
    res.status(200).json({
      status: 'success',
      results: vitals.length,
      message: vitals,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.createVitals = async (req, res) => {
  try {
    const newVital = await HealthVital.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newVital,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

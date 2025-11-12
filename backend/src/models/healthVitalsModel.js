const mongoose = require('mongoose');

const healthVitalSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'A vital must belong to a user'],
  },
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
  oxygenLevel: Number,
  recordedAt: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    enum: ['hospital', 'user'],
    default: 'user',
  },
});

const HealthVital = mongoose.model('HealthVital', healthVitalSchema);

module.exports = HealthVital;

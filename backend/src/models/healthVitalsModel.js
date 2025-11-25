const mongoose = require('mongoose');

const healthVitalSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, 'A vital must belong to a user'],
  },
  heart_rate: Number,
  blood_pressure: String,
  oxygen_saturation: Number,
  temperature: Number,
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

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: [true, 'An appointment must belong to a patient'],
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'An appointment must be assigned to a doctor'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
    },
    specialty: {
      type: String,
    },
    appointmentDate: {
      type: Date,
      required: [true, 'Appointment date is required'],
    },
    appointmentTime: {
      type: String,
      required: [true, 'Appointment time is required'],
    },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    visitType: {
      type: String,
      enum: ['In-person', 'Online'],
      default: 'In-person',
    },
    reason: {
      type: String,
      required: [true, 'Reason is required'],
    },
    iconName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);

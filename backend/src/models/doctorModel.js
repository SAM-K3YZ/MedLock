const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Doctor first name is required'],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, 'Doctor last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Doctor email is required'],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    department: {
      type: String,
      required: [true, 'Doctor must belong to a department'],
    },
    specialty: {
      type: String,
      required: [true, 'Doctor specialty is required'],
    },
    photo: {
      type: String, // URL
    },
    bio: {
      type: String,
    },
    experience: {
      type: Number, // years of experience
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);

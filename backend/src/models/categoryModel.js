const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title must be stated...'],
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'A slug must be stated...'],
  },
  icon: {
    type: String,
    required: [true, 'An icon name must be stated...'],
  },
  description: {
    type: String,
    required: [true, 'A decription must be stated...'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //hides it from the user
  },
  //startDates: [Date],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

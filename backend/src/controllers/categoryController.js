const Category = require('../models/categoryModel');
const APIFeatures = require('./../utils/apifeatures');

exports.aliasTopCategory = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-slug,description';
  req.query.fields = 'title, icon';
  next();
};

exports.getAllCategories = async (req, res) => {
  try {
    // Execute query
    const features = new APIFeatures(Category.find(), req.query)
      .filter()
      .sort()
      .limitFeilds()
      .paginate(0);
    const categories = await features.query;

    // Send response
    res.status(200).json({
      status: 'success',
      results: categories.length,
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

//Route handlers
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    //Category.findOne({_id: req.params.id});

    res.status(200).json({
      status: 'success',
      data: { category },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messsage: 'Invalid data set!...',
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messsage: 'Invalid data set!...',
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messsage: 'Invalid data set!...',
    });
  }
};

//Pipeliniing
exports.getCategoryStats = async (req, res, next) => {
  try {
    const stats = Category.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: '$ratingsAverage' },
        },
      },
    ]);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      messsage: 'Invalid data set!...',
    });
  }
};

const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./../models/categoryModel');

dotenv.config({ path: './../config/config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('✅ DB Connection Successful!'));

//Reading json file
const categories = JSON.parse(fs.readFileSync('categories.json', 'utf-8'));

//Importing data into DB
const importData = async () => {
  try {
    await Category.create(categories);
    console.log('Data successfullly loaded!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//Deleting data from DB
const deleteData = async () => {
  try {
    await Category.deleteMany();
    console.log('Data successfullly deleted!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

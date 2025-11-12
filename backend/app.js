const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
//const connectDB = require("./src/config/database");

// Load environment variables
//dotenv.config({ path: "./src/config/config.env" });

// Connect to database
//connectDB();

const categoryRouter = require('./src/routes/categoryRoutes');
const doctorRouter = require('./src/routes/doctorRoutes');
const vitalRouter = require('./src/routes/healthVitalRoutes');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//for production app.use(cors({ origin: "https://medlockapp.com" }));
app.use(
  cors({
    origin: '*',
    methods: 'POST, GET, DELETE, PUT',
  })
);
app.use(express.json());
//app.use(express.static(`${__dirname}./../frontend`)); //for webdev

app.use((req, res, next) => {
  console.log('Hello from the middleware🔥🔥🔥');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use('/api/v1/vitals', vitalRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/doctors', doctorRouter);

module.exports = app;

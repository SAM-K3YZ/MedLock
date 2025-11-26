const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const categoryRouter = require('./src/routes/categoryRoutes');
const doctorRouter = require('./src/routes/doctorRoutes');
const vitalRouter = require('./src/routes/healthVitalRoutes');
const patientRouter = require('./src/routes/patientRoutes');
const appointmentRouter = require('./src/routes/appointmentRoutes');

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
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/vitals', vitalRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/appointments', appointmentRouter);

module.exports = app;

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('✅ DB Connection Successful!'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  );
});

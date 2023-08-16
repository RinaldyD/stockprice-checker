require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected Successfully'))
  .catch((err) => {
    console.log(err);
  });

module.exports = db;

require('dotenv'). config();
const mongoose = require('mongoose');

function connectDB() {
  const URI = process.env.WYER_CRM_URI;
  try {
    mongoose.connect(URI);
    console.log('connected to DB');
  } catch(error) {
    console.error('Error trying to connect with DB', error);
    process.exit(1);
  }
}

module.exports = connectDB;

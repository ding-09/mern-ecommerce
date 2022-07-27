const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log('connection open')
  } catch (e) {
    process.exit(1);
  }
};

module.exports = connectDB;

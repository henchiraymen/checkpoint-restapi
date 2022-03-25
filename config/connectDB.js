// require mongoose
const mongoose = require("mongoose");

// connect to DB

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected succesfully ...");
  } catch (error) {
    console.log("connection to database fail !!!!");
  }
};

module.exports = connectDB;

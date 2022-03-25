// require mongoose
const mongoose = require("mongoose");

// require schema
const { Schema } = mongoose;

// create contact schema

const contactSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});

module.exports = Contact = mongoose.model("contact", contactSchema);

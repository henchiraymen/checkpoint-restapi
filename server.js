// 1- require express
const express = require("express");

// 2- instance of express
const app = express();

// 5- require and config dotenv
require("dotenv").config();

// 3- port
const port = process.env.PORT;

// 6- connect to DB
const connectDB = require("./config/connectDB");
connectDB();

// 8- badyparser middleware
app.use(express.json());

// 7- require routes
const router = require("./routes/contact");
app.use("/api/contacts/", router);
// 4- create server
app.listen(port, (error) =>
  error
    ? console.log("can not run the server !!! ")
    : console.log(`the server is running on port ${port} !!!`)
);

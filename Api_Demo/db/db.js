const mongoose = require("mongoose");
const connectDB = mongoose
  .connect("mongodb://localhost:27017/p")
  .then(() => {
    console.log("DB connect...");
  })
  .catch((err) => {
    console.log(err);
  });

//   connectDB;
module.exports = connectDB;

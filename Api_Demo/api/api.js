const express = require("express");
const app = express();
const connectDB = require("../db/db");
connectDB;
app.use(express.json());
const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
  name: String,
  salary: Number,
});
const empModule = mongoose.model("emp", empSchema);
app.get("/getEmp", async (req, resp) => {
  try {
    const result = await empModule.find();
    resp.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/addEmp", async (req, resp) => {
  try {
    const data = new empModule({
      name: req.body.name,
      salary: req.body.salary,
    });
    const result = await data.save();
    resp.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, resp) => {
  try {
    const result = await empModule.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    resp.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/updateEmp/:id", async (req, resp) => {
  try {
    const result = await empModule.findByIdAndUpdate(req.params.id);
    resp.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("running....");
});

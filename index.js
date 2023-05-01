const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { connectDatabase } = require("./connection/connect");
const STUDENT_MODEL = require("./models/student");
app.use(express.json());
// const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1.27017").then(() => {
//       console.log("Database Connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

app.post("/api/studentdata", async (req, res) => {
  try {
    const student = {
      h_name: req.body.username,
      h_mother_name: req.body.mother_name,
      h_father_name: req.body.father_name,
      h_number: req.body.phone_number,
      h_roomNo: req.body.room_number,
    };
    const student1 = new HOSTELER_MODEL(student);
    await student1.save();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

// get student in sorted order
app.get("/api/lateststudent", async (req, res) => {
  try {
    const sortedStudents = await STUDENT_MODEL.find().sort({ createdAt: -1 }); //-1 is decendingg and 1 is ascending
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is connected on port ", PORT);
});

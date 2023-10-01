const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Add path module
const multer = require('multer');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/designstudio");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Uploads will be stored in the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename files to avoid conflicts
  },
});

const upload = multer({ storage: storage });

app.post("/register", upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const {
    name,
    email,
    password,
    phone,
    location,
  } = req.body;

  const imagePath = req.file.path;

  const employee = new EmployeeModel({
    name,
    email,
    password,
    phoneNumber: phone, // Use phoneNumber field
    location,
    floorPlan: imagePath, // Use floorPlan field
  });

  employee.save()
    .then(() => {
      res.status(201).json({ message: 'Registration Successful' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

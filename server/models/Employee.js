const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String, // Add phone number field
    location: String,    // Add location field
    floorPlan: String    // Add floor plan field (you may want to use a different data type depending on your needs)
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;

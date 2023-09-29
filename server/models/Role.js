const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    id: Number, 
    name: String,
});

const RoleModel = mongoose.model("roles", RoleSchema);

module.exports = RoleModel;

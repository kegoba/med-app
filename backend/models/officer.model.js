
const mongoose = require("mongoose");

const Officer = mongoose.model("Owner", {
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isStaff :   { type: Boolean, default: false },
});

module.exports = Officer;

const mongoose = require("mongoose");


const OfficerSchema = mongoose.Schema({
  _id: {type : mongoose.Schema.Types.ObjectId},
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  password: { type: String, required: true },
  isStaff: { type: Boolean, default: false },
});


const Officer = mongoose.model('Officer', OfficerSchema);

module.exports = Officer;




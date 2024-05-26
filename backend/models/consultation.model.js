
const mongoose = require("mongoose");

const Consultation = mongoose.model("Consultation", new mongoose.Schema({
  medicalCondition: { type: String, required: true },
  notes: { type: String, required: true },
  date: { type: String },
  consultationType: { type: String, required: true },
  Officer: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Officer' 
}],
}));

module.exports = Consultation;

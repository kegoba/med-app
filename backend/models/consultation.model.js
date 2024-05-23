
const mongoose = require("mongoose");

const  consultation = mongoose.model("consultation", {
  medicalCondition: { type: String, required: true },
  notes: { type: String, required: true },
  date: { type: String },
  consultationType : { type: String, required: true },
  officer: { type: mongoose.Schema.Types.ObjectId, ref: 'Officer' },
});

module.exports = consultation;

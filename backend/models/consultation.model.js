
const mongoose = require("mongoose");

const ConsultationSchema = mongoose.Schema({
  medicalCondition: { type: String, required: true },
  notes: { type: String, required: true },
  date: { type: String },
  consultationType: { type: String, required: true }, 
  healthcareProvider: { type: String, required: true },
  officerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Officer' 
},
});


const Consultation = mongoose.model('Consultation', ConsultationSchema);

module.exports = Consultation;

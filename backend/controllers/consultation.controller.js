
const Consultation = require('../models/consultation.model');



const createPatientConsultation =  async (req, res) => {
  const consultation = new Consultation({
    patient: req.body.patient,
    officer: req.officer.id,
    date: req.body.date,
    consultationType: req.body.type,
    medicalCondition: req.body.medicalCondition,
    notes: req.body.notes,
  });
  await consultation.save();
  res.status(201).send(consultation);
};



const getAllPatientConsultation = async (req, res) => {
  const consultations = await Consultation.find()
    .populate('patient')
    .populate('officer');
  res.send(consultations);
};

const getSinglePatientConsultation = async (req, res) => {
  const consultation = await Consultation.findById(req.params.id)
    .populate('patient')
    .populate('officer');
  if (!consultation) {
    return res.status(404).send('Consultation not found');
  }
  res.send(consultation);
};

const filterConsultation = async (req, res) => {
    const { date, patientName, healthcareProvider, consultationType, medicalCondition } = req.query;
    const filters = {};
  
    if (date) filters.date = new Date(date);
    if (patientName) filters['patient.name'] = patientName;
    if (healthcareProvider) filters['officer.name'] = healthcareProvider;
    if (consultationType) filters.type = consultationType;
    if (medicalCondition) filters.medicalCondition = medicalCondition;
  
    const consultations = await Consultation.find(filters)
      .populate('patient')
      .populate('officer');
    res.send(consultations);
  };
  


module.exports = {
    createPatientConsultation,
    getAllPatientConsultation,
    getSinglePatientConsultation,

}

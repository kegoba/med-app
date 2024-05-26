const mongoose = require("mongoose");
const Consultation = require('../models/consultation.model');
const consultation = require("../models/consultation.model");



const createPatientConsultation =  async (req, res) => {
    //console.log(req.body.officer)
    try {
        const consultation = new Consultation({
            patient: req.body.patient,
            officer: req.body.officerId,
            date: req.body.date,
            consultationType: req.body.consultationType,
            medicalCondition: req.body.medicalCondition,
            notes: req.body.notes,
        });
        await consultation.save();
        res.status(200).json({consultation: consultation});

    } catch(error){
        res.status(400).json({message: error.errors})
    }

    
    };



const getAllPatientConsultation = async (req, res) => {
  const consultations = await Consultation.find()
    .populate('Officer');
  res.send(consultations);
};

const getSinglePatientConsultation = async (req, res) => {
  const consultation = await Consultation.findById(req.params.id)
    .populate('Officer');
  if (!consultation) {
    return res.status(404).send('Consultation not found');
  }
  res.send(consultation);
};

const filterConsultation = async (req, res) => {
    //const { date, patientName, healthcareProvider, consultationType, medicalCondition } = req.body;
    //const consultations = await Consultation.find(req.body)
      //.populate('Officer');
    //res.send(consultations);

    const result = await Consultation.deleteMany({});
    res.json({ message: 'All consultations deleted successfully', result });
  };
  

  const  getConsulationByOfficerId = async (req, res) => {
    
        const officerId = req.body.officerId;
          console.log(officerId)
        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid("665212bc3f941205b9acab56")) {
          return res.status(400).json({ message: 'Invalid officer ID format' });
        }
    
        const consultations = await Consultation.find({ Officer: officerId }).populate('Officer');
        console.log(consultations)
        if (consultations.length === 0) {
          return res.status(404).json({ message: 'No consultations found for this officer.' });
        }
    
        res.json(consultations);
    
    
  };
  


module.exports = {
    createPatientConsultation,
    getAllPatientConsultation,
    getSinglePatientConsultation,
    filterConsultation,
    getConsulationByOfficerId

}

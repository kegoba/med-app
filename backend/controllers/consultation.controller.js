const mongoose = require("mongoose");
const Consultation = require('../models/consultation.model');
const officer = require('../models/officer.model');




const createPatientConsultation =  async (req, res) => {
    console.log("hi",req.body.officerId)//officerId
    try {
        const consultation = new Consultation({
            patient: req.body.patient,
            officerId: req.body.officerId, //officerId
            date: req.body.date,
            consultationType: req.body.consultationType,
            medicalCondition: req.body.medicalCondition,
            notes: req.body.notes,
        });
        const  data = await consultation.save();
        console.log(data.officerId)
        res.status(200).json({consultation: data});

    } catch(error){
        res.status(400).json({message: error.errors})
    }

    
    };



const getAllPatientConsultation = async (req, res) => {
  const consultations = await Consultation.find()
  res.send(consultations);
};

const getSinglePatientConsultation = async (req, res) => {
  const consultation = await Consultation.findById(req.params.id)
    .populate('officerId');
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
    
        const consultations = await Consultation.findOne({officerId: officerId}).populate("officerId");
        console.log(consultations)

    
        res.json(consultations);
    
    
  };
  


module.exports = {
    createPatientConsultation,
    getAllPatientConsultation,
    getSinglePatientConsultation,
    filterConsultation,
    getConsulationByOfficerId

}

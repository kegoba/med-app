const mongoose = require("mongoose");
const Consultation = require('../models/consultation.model');
const Officer = require('../models/officer.model');



//create consultation with user Id or patient Id
const createConsultation =  async (req, res) => {
  console.log(req.body)
      try{
        const consultation = new Consultation({
             officerId: req.body.officerId, //officerId
             date: req.body.date,
             healthcareProvider : req.body.healthcareProvider,
             consultationType: req.body.consultationType,
             medicalCondition: req.body.medicalCondition,
             notes: req.body.notes,
         });
         const  consultations = await consultation.save();
         //console.log(consultations.officerId)
         res.status(200).json({data: consultations});

      }catch(error){
        res.status(400).json({data: "could not create"});
      }
    };


//get all the consultation associate to all the users
const getAllUserAndConsultation = async (req, res) => {
      try {
        const consultation = await Consultation.find().populate({
          path: 'officerId',
          model: 'Officer',
          match: {}, // optional: filter consultations if needed
          options: { lean: true }
        }).lean();
        if (consultation){
          // merge to a single array and return 
          const consultationData = consultation.map((item, index) => ({
            id: index + 1,
            _id : item._id ,
            date: item.date,
            note : item.note,
            healthcareProvider: item.healthcareProvider ? item.healthcareProvider : "unkown",
            consultationType: item.consultationType,
            medicalCondition: item.medicalCondition,
            officerId : item.officerId,
          }));
          res.status(200).json({data : consultationData});
        }else{
        res.status(400).json({data : "no data"});
        }
        
      } catch(error){
        res.status(400).json({data : "No Record Found"});
      }


      }


    
// User Get all their Consultation with Id
const getSinglePatientConsultation = async (req, res) => {
  try{
      const consultation = await Consultation.find({officerId:req.body.officerId})
      .populate('officerId');
    if (!consultation) {
      return res.status(404).send('Consultation not found');
    }
    
      // merge to a single array and return 
      const consultationData = consultation.map((item, index) => ({
        id: index + 1,
        _id : item._id ,
        date: item.date,
        note : item.note,
        healthcareProvider: item.healthcareProvider ? item.healthcareProvider : "unkown",
        consultationType: item.consultationType,
        medicalCondition: item.medicalCondition,
        officerId : item.officerId,
      }));
      res.status(200).send({data : consultationData});
  }catch(error){
    res.status(400).send({data : "No Record"});
  };
    
  }



//Delete all the Consultation
const deleteAllConsultation = async (req, res) => {
    const result = await Consultation.deleteMany({});
    res.json({ message: 'All consultations deleted successfully', result });
  };
  


  


module.exports = {
    createConsultation,
    getAllUserAndConsultation,
    getSinglePatientConsultation,
    deleteAllConsultation,
   

}

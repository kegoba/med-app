const Officer = mongoose.model("Officer", new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
}));
module.exports = Officer;

const Consultation = mongoose.model("Consultation", new mongoose.Schema({
  medicalCondition: { type: String, required: true },
  Officer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Officer' 
},
}));
module.exports = Consultation;
 //get all consultation associationg to perticular officer
  const  getConsulationByOfficerId = async (req, res) => {
        const officerId = req.body.officerId;
          console.log(officerId)
        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid("665212bc3f941205b9acab56")) {
          return res.status(400).json({ message: 'Invalid officer ID format' });
        }
     constre = await Consultation.find({ Officer : officerId }).populate('Officer');
        console.log(consultations)
        if (consultations.length === 0) {
          return res.status(404).json({ message: 'No consultations officer.' });
        }
        res.json(consultations);
  };
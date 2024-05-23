
import React, { useState } from 'react';
import axios from 'axios';

const ConsultationPage = () => {
  const [patient, setPatient] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data ={
      patient, date, type, medicalCondition, notes
    }
    console.log(data)
    /*const token = localStorage.getItem('token');
    await axios.post('/api/consultations', {
      patient, date, type, medicalCondition, notes
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); */
  };

  const handlepatientName = (e)=>{
    setPatient(e.target.value)

  }
  const handleDate = (e)=>{
    setDate(e.target.value)
    
  }
  const handleType = (e)=>{
    setType(e.target.value)
    
  }
  const handlemedicalCondition = (e)=>{
    setMedicalCondition(e.target.value)
    
  }
  const handleNote = (e)=>{
    setNotes(e.target.value)
    
  }

  return (
  <>
    <div className="w-full max-w-sm md:mx-[450px] mt-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">SignUp in to our platform</h5>
        <div>
            <input placeholder="Patient Name"  onChange={handlepatientName}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <input placeholder="Type"  onChange={handleType}  name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <input placeholder="Medical Condition" onChange={handlemedicalCondition} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <textarea  placeholder="Notes" onChange={handleNote}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <input type="date" placeholder="Notes" onChange={handleDate}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        
        <button onClick={handleSubmit}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Book Consultation</button>
       
    </div>
</div>
    </>
  );
};

export default ConsultationPage;


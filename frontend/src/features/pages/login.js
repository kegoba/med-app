
import React, { useState } from 'react';
import axios from 'axios';

const AddOfficer = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data ={
      email, password
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

  
  const handleEmail = (e)=>{
    setEmail(e.target.value)
    
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    
  }
  
  return (
  <>
    <div className="w-full max-w-sm md:mx-[450px] mt-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white"> Login</h5>
        <div>
            <input placeholder="Email"  onChange={handleEmail}  type="email"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <input type="password" placeholder="Password" onChange={handlePassword}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        
        <button onClick={handleSubmit}  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Create Officer</button>
       
    </div>
</div>
    </>
  );
};

export default AddOfficer;


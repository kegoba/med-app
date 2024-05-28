import React, { useState } from 'react'
import UserConsultations from './userConsultation'
import FilterAllConsulations from './filterAllConsultation'

import {getAllConsultation } from "../services/userServices"


const sampleData = [
  {
    id: 1,
    date: '2024-05-01',
    patientName: 'John Doe',
    healthcareProvider: 'Dr. Smith',
    consultationType: 'Routine Check-up',
    medicalCondition: 'Hypertension'
  },
  {
    id: 2,
    date: '2024-05-02',
    patientName: 'Jane Doe',
    healthcareProvider: 'Dr. Brown',
    consultationType: 'Emergency',
    medicalCondition: 'Diabetes'
  },
  // Add more sample data as needed
];
const Home = () => {
  const [checkUser, setCheckUser]= useState(false)
  const [consultations, setConsultations]= useState()



 
  React.useEffect(() => {
    const checkUserLogin = localStorage.getItem("user")
    const user = JSON.parse(checkUserLogin)
    if (user?.isStaff===true){
      setCheckUser(true)
    }else{
      setCheckUser(false)
    }
    


  }, []);
  return (
    < div >   
    {checkUser? (<div>
    <FilterAllConsulations />
    </div>) :
    (<div><UserConsultations /> </div>)}
           
            
    </div>
  )
}

export default Home
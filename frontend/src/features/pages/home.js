import React, { useState } from 'react'
import UserConsultations from './userConsultation'
import FilterAllConsulations from './filterAllConsultation'

import {getAllConsultation } from "../services/userServices"



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
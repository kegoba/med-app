import React from "react"
import axios from "axios"
import { BASE_URL } from "../asset/asset"
  

const getsingleconsultation  = async ()=> {
    return await axios.get(BASE_URL + "/getallproduct",
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(resp => resp.data)
  }


   const getallconsultation  = async ()=> {
    return await axios.get(BASE_URL + "/getallproduct",
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(resp => resp.data)
  }
  


   const addOfficer  =  (item) => {
   return axios.post(BASE_URL, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
  }


   const loginofficer  =  (item) => {
    return axios.post(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(data => data.json())
   }



   export default {
    getsingleconsultation,
    getallconsultation,
    addOfficer,
    loginofficer
   }
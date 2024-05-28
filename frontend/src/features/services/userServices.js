
import axiosInstance from "./axiosConfig"



export const getAllConsultation  = async ()=> {
  const response = await axiosInstance.get("/getalluserconsultation");

  return response.data
    
}

export const getSingleConsulation  = async (data)=> {
  console.log(data,"ser")
  const response = await axiosInstance.post("/getsingleconsulation",data);

  return response.data
    
}


export const createConsultation  = async (data)=> {
  const response = await axiosInstance.post("/createconsultation",data);

  return response
    
}

export const registerUser  = async (data)=> {
  const response = await axiosInstance.post("/registeruser",data);

  return response
    
}

export const loginofficer  = async (data)=> {
  const response = await axiosInstance.post("/loginuser",data);
  if(response.status ===200){
    localStorage.setItem("user", JSON.stringify(response.data.data))
    localStorage.setItem("token", (response.data.data.token))
    return response
    
   } 
   return null
    
}


export const getAllUsers  = async (data)=> {
  const response = await axiosInstance.get("/getalluser",data);

  return response.data
    
}

//

export const getSingleUser  = async (id)=> {
  const response = await axiosInstance.get("/getsingleuser/"+id);

  return response.data.data
    
}



   
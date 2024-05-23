
import Login from './login'
import AddOfficer from './addOfficer'
import Home from './home'
import ConsultationPage from './consultationPage'
import {  Route, Routes } from 'react-router-dom'

const PageRouter = ()=>{

    return(
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/addofficer" element={<AddOfficer/>} /> 
        <Route  path="/consultation" element={<ConsultationPage/>} />
    </Routes>
    )
}



export default PageRouter
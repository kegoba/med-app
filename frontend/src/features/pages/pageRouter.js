
import Login from './login'
import Register from './register'
import Home from './home'
import AddConsultation from "./addConsultation"
import ViewAllUsers from "./usersList"
import {  Route, Routes } from 'react-router-dom'

const PageRouter = ()=>{

    return(
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} /> 
        <Route  path="/addconsultation/:id" element={<AddConsultation/>} />
        <Route  path="/userslist" element={<ViewAllUsers/>} />
    </Routes>
    )
}



export default PageRouter
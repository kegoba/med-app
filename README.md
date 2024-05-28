# med-# Full-Stack Application with Node.js and React

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a full-stack application built with Node.js for the backend and React for the frontend. It demonstrates a simple implementation of a medical consultancy application with authentication.

## Features
- User Authentication (Login, Register)

- An officer should be able to create/book consultation for a patient - Only

 - authorized officers can create/book or read a consultation.

➔ An officer can view all consultations and filter between various criteria such as date, patient
 name, healthcare provider, consultation type, and medical condition, ensuring efficient
 access to specific records as needed.


➔ A patient can search and view his/her consultation details.

- Protected routes

- Filtering and searching capabilities

## Tech Stack
### Backend
- Node.js
- Express
- MongoDB (with Mongoose)

### Frontend
- React
- Axios
- Tailwind CSS

## Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.22.x)
- MongoDB (running instance)

## Installation

### Backend Setup
1. Clone the repository:

   
   git clone https://github.com/kegoba/med-app


   cd med-app/backend Install dependencies: npm install

# or
yarn installSet up environment variables: Create a .env file in the backend directory and add the following 

variables:PORT=5000MONGODB_URI=mongodb: your db url


JWT_SECRET=your_jwt_secretStart the backend server:npm run dev


# or
npm devFrontend SetupNavigate to the frontend directory:cd ../ frontend dependencies:npm install
# or
yarn installSet up environment variables: Create a .env file in the frontend directory and add the following variables:REACT_APP_API_URL=http://localhost:3000/ the frontend development server:npm start
# or
npm startRunning the ApplicationBackend: http://localhost:5000Frontend: http://localhost:8000 

StructureBackend (Node.js)backend/


│
├── conenction/


│   └── database.js


├── controllers/


│   └── consultantioncontroller.js


│   └── officercontroller.js


├── models/


│   └── consultation.model.js


│   └── officer.model.js


├── routes/


│   └── consultation.Routes.js


│   └── officer.Routes.js


├── middleware/


│   └── authenticate.js
├── .env


├── app.js


└── package.json


Frontend (React)frontend/
│


├── public/


├── src/


│   ├── features/


│   │   └── images/


│   │       └── Login.js
│   │   
│   │   └── pages/


│   │       └── addConsultation.js


│   │   └── Home.js


│   │   └── Login.js


│   │   └── Register.js


│   │   └── services/


│   │       └── axiosconfig.js


│   │       └── userServices.js


            validationServices.js
│   ├── App.js


│   ├── index.js


│   └── tailwind.css


├── .env
└── package.jsonAPI EndpointsAuthenticationPOST /api/auth/register - Register a new userPOST /api/auth/login - 



Endpoint for Backend




### CREATE CONSULTANCE
post =>'/createconsultation', 
            

get => '/getalluserconsultation', 
            

delete => '/deletealluserconsultation', 
                

get => /getsingleconsulation'


post '/registeruser', 


post '/loginuser', 


get '/getalluser', 


get '/getsingleuser/:id',  


get '/deleteuser', 
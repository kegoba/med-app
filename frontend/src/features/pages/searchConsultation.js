import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientConsultations = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/consultations/mypatient', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setConsultations(response.data);
    };

    fetchConsultations();
  }, []);

  return (
    <ul>
      {consultations.map((consultation) => (
        <li key={consultation._id}>
          {consultation.date} - {consultation.type} - {consultation.medicalCondition}
        </li>
      ))}
    </ul>
  );
};

export default PatientConsultations;

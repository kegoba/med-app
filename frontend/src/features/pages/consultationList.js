import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultationList = () => {
  const [consultations, setConsultations] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchConsultations = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/consultations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      });
      setConsultations(response.data);
    };

    fetchConsultations();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input name="date" type="date" onChange={handleFilterChange} />
        <input name="patientName" placeholder="Patient Name" onChange={handleFilterChange} />
        <input name="healthcareProvider" placeholder="Healthcare Provider" onChange={handleFilterChange} />
        <input name="consultationType" placeholder="Consultation Type" onChange={handleFilterChange} />
        <input name="medicalCondition" placeholder="Medical Condition" onChange={handleFilterChange} />
      </div>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation._id}>
            {consultation.date} - {consultation.patient.name} - {consultation.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationList;

import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm = () => {
  const [patient, setPatient] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/consultations', {
      patient, date, type, medicalCondition, notes
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={patient} onChange={(e) => setPatient(e.target.value)} placeholder="Patient" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <input value={medicalCondition} onChange={(e) => setMedicalCondition(e.target.value)} placeholder="Medical Condition" />
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
      <button type="submit">Book Consultation</button>
    </form>
  );
};

export default ConsultationForm;

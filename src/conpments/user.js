import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Av from '../conpments/aviable';
import './WorkScheduleForm.css';
import backgroundImage from '../assests/teambg.png';

const WorkScheduleForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [cin, setCin] = useState('');
  const [idCoupe, setIdCoupe] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      Date_debut: startDate.toISOString(),
      Date_fin: endDate.toISOString(),
      Cin: cin,
      id_coupe: idCoupe
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
      });

      // Handle the response from the API as needed
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center abdo" >
      <form onSubmit={handleSubmit} className="p-4 border rounded">
       
        
        <Av />
        <br></br>
      
      </form>
    </div>
  );
};

export default WorkScheduleForm;

import React, { useState, useEffect } from 'react';
import './recu.css';
import logo from '../assests/logo2.png';
import { useParams } from 'react-router';

const Receipt = () => {
  const [bookingData, setBookingData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/reservation/${id}`)
      .then(response => response.json())
      .then(data => {
        setBookingData(data.data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
        <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>    <br></br>   <br></br>   <br></br>
      <div className="d-flex justify-content-between align-items-center ">
      
        <h2>Receipt</h2>
        <img className="ml-auto" id="logo" src={logo} alt="Logo" />
      </div>
      <div className="card mt-4">
        <div className="card-body">
          {bookingData ? (
            <div>
              <div className="mb-3">
                <strong>Meeting Day:</strong> {bookingData.reservation.Date_debut}
              </div>
              <div className="mb-3">
                <strong>Barber Name:</strong> {bookingData.employee.nom}
              </div>
              <div className="mb-3">
                <strong>Haircut Type:</strong> {bookingData.coupe.nom}
              </div>
              <div>
                <strong>Client name:</strong> {bookingData.reservation.name}
              </div>
              <br />
              <div>
                <strong>Client Cin:</strong> {bookingData.reservation.Cin}
              </div>
              <br />
              <div className="mb-3">
                <strong>Price:</strong> {bookingData.coupe.prix}
              </div>
            </div>
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
        <br></br>   <br></br>
      </div>
      <button className="hideonprint btn btn-primary mt-4" onClick={() => window.print()}>
        Print
      </button>
    </div>
  );
};

export default Receipt;

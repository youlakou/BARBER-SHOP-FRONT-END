import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './WorkScheduleForm.css';
import { Link, useParams } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';

const AvailabilityTable = () => {
  const [availability, setAvailability] = useState([]);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [reservationData, setReservationData] = useState({
    hour: '',
    cin: '',
    name: ''
  });
  const [startDate, setStartDate] = useState(null);
  const [reservationSubmitted, setReservationSubmitted] = useState(false); // Added state variable
const navigate  = useNavigate ();
  const { id } = useParams();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const fetchAvailability = async () => {
    try {
      const selectedDate = new Date(startDate);
      selectedDate.setDate(selectedDate.getDate() + 1); // Add one day
      
      const response = await fetch(`http://127.0.0.1:8000/api/availabelety?date_reservation=${selectedDate.toISOString()}&coup_id=${id}`);
      const data = await response.json();
      console.log('API Response:', data); // Check the structure of the response data
      setAvailability(data.data.splited_availabelety);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, [id, startDate]);

  const handleReserveClick = (item) => {
    setShowReservationForm(true);

    const selectedDate = new Date(startDate);
    selectedDate.setDate(selectedDate.getDate() + 1); // Add one day
    const fullDateTime = `${selectedDate.toISOString().split('T')[0]} ${item.Heure_debut}`;

    setReservationData({
      hour: fullDateTime,
      cin: '',
      name: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    try {
      const desiredTime = reservationData.hour; // Get the desired time from reservationData.hour

      const response = await fetch('http://127.0.0.1:8000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Date_debut: desiredTime,
          Cin: reservationData.cin,
          id_coupe: id,
          Name: reservationData.name
        })
      });

      const data = await response.json();

      if(!data.data.reservation.id) return;

      // Handle the response from the API as needed
      console.log('Response:', data.data.reservation.id);

      // Reset reservation form
      setReservationData({
        hour: '',
        cin: '',
        name: ''
      });

      fetchAvailability();

      

      navigate("/recu/"+ data.data.reservation.id);

      // Show the reservation submission message
      setReservationSubmitted(true);

      setInterval(()=>setReservationSubmitted(false),2000)

      // Hide the reservation form after a delay
      setTimeout(() => {
        setShowReservationForm(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <br></br>    <br></br>
          
      <h1 className="text-center" id="a">
        Please select the day
      </h1>
      <DatePicker
        id="startDate"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        className="form-control"
      />
      <br />
      <br />
      <br />
      <h1 className="text-center" id="a">
        This is the list of available times
      </h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Days</th>
            <th>Starting at</th>
            <th>Ending at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {availability.map((item, index) => (
            <tr key={index}>
              <td>{days[item.Num_jour - 1]}</td>
              <td>{item.Heure_debut}</td>
              <td>{item.Heure_fin}</td>
              <td>
                <button className="btn btn-primary" id="t" onClick={() => handleReserveClick(item)}>
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showReservationForm && (
        <>
          <div className="form-group">
            <label>Hour:</label>
            <input
              className="form-control"
              type="text"
              name="hour"
              readOnly={true}
              value={reservationData.hour}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Cin:</label>
            <input
              className="form-control"
              type="text"
              name="cin"
              value={reservationData.cin}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={reservationData.name}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary d-block" onClick={handleReservationSubmit}>
            Submit
          </button>
        </>
      )}

      {reservationSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Thank you! Your reservation has been done.
        </div>
      )}
    </div>
  );
};

export default AvailabilityTable;

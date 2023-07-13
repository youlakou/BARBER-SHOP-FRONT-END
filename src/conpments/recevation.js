import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this import statement

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/reservations?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setReservations(data.data.reservations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePayment = (reservationId) => {
    // Perform the payment logic here
    console.log(`Payment for reservation ${reservationId} is being processed.`);
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by Cin"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cin</th>
            <th>Start</th>
            <th>End</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.name}</td>
              <td>{reservation.Cin}</td>
              <td>{reservation.Date_debut}</td>
              <td>{reservation.Date_fin}</td>
              <td>
              <Link to={`/recu/${reservation.id}`} className="btn btn-primary">
          Recu
        </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReservationTable;

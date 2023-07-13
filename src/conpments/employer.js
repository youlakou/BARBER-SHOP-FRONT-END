import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const WorkScheduleForm = () => {
  const [day, setDay] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatHour = (hour) => {
      return hour.replace(/(AM|PM)/i, '').trim();
    };

    const scheduleData = {
      Heure_debut: formatHour(startHour),
      Heure_fin: formatHour(endHour),
      date: day
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/emploi/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(scheduleData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.status_message);
      } else {
        setSubmitMessage("Error: " + data.status_message);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-center mb-3">Work Planning</h2>

      <div className="mb-3">
        <label htmlFor="day" className="form-label">Select a day:</label>
        <select id="day" className="form-select" value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="-1">-- Select a day --</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="startHour" className="form-label">Starting hour:</label>
        <input
          type="time"
          id="startHour"
          className="form-control"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="endHour" className="form-label">Ending hour:</label>
        <input
          type="time"
          id="endHour"
          className="form-control"
          value={endHour}
          onChange={(e) => setEndHour(e.target.value)}
        />
      </div>

      {submitMessage && <p className={submitMessage.includes("Error") ? "text-danger" : "text-success"}>{submitMessage}</p>}

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default WorkScheduleForm;

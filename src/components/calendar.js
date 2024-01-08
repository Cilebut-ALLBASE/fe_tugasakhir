import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar-style.css';
import PopupAbsen from "./Popup-absen";
import moment from "moment/moment";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [absenStatus, setAbsenStatus] = useState(false);
  const [absenPulangStatus, setAbsenPulangStatus] = useState(false);
  const jwtToken = localStorage.getItem('token');
  const formattedDate = moment(date).format('YYYY-MM-DD');
  const currentHour = moment().hour();

  useEffect(() => {
    checkAbsenStatus();
  }, []);

  const checkAbsenStatus = () => {
    fetch(`http://LAPTOP-A5E7H59A:5000/attendance/status?date=${formattedDate}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Absen status:', result);
        setAbsenStatus(result.absenStatus);
        setAbsenPulangStatus(result.absenPulangStatus);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const onDateClick = (date) => {
    setDate(date);
    if (absenStatus) {
      alert('Yeyy! Anda sudah absen hari ini!');
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleAbsenSubmit = (selectedOption) => {
    let data = {
      date: formattedDate,
      status: selectedOption,
      pulang: absenPulangStatus,
    };

    fetch('http://LAPTOP-A5E7H59A:5000/attendance', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('API response:', result);
        setAbsenStatus(true);
        setAbsenPulangStatus(true);
        setIsDialogOpen(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Calendar onClickDay={onDateClick} value={date} minDate={new Date()} maxDate={new Date()} />
      <PopupAbsen isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAbsenSubmit={handleAbsenSubmit} />
    </div>
  );
};

export default ReactCalendar;

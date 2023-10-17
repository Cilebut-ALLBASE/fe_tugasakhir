import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar-style.css';
import PopupAbsen from "./Popup-absen";
import moment from "moment/moment";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const jwtToken = localStorage.getItem('token');
  const formattedDate = moment(date).format('YYYY-MM-DD');

  const onDateClick = (date) => {
    setDate(date);
    setIsDialogOpen(true);
  };

  const handleAbsenSubmit = (selectedOption) => {
    const data = {
      date: formattedDate, // Tanggal yang dipilih
      status: selectedOption, // 'present' atau 'sick'
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };  

  return (
    <div>
      <Calendar onClickDay={onDateClick} value={date} minDate={new Date} />
      <PopupAbsen isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAbsenSubmit={handleAbsenSubmit} />
    </div>
  );
};

export default ReactCalendar;
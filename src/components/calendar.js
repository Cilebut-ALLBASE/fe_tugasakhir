import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/calendar-style.css';
import PopupAbsen from "./Popup-absen";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDateClick = (date) => {
    setDate(date);
    setIsDialogOpen(true);
  };

  const handleAbsenSubmit = (selectedOption) => {
    const data = {
      date: date, // Tanggal yang dipilih
      option: selectedOption, // 'present' atau 'sick'
    };
  
    fetch('http://LAPTOP-A5E7H59A:5000/absen', {
      method: 'POST',
      headers: {
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
      <Calendar onClickDay={onDateClick} value={date} />
      <PopupAbsen isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAbsenSubmit={handleAbsenSubmit} />
    </div>
  );
};

export default ReactCalendar;
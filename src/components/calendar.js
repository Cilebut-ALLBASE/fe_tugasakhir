import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar-style.css';
import PopupAbsen from "./Popup-absen";
import moment from "moment/moment";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [absenDates, setAbsenDates] = useState(() => {
    // Mengambil tanggal-tanggal absen dari localStorage saat komponen pertama kali dimuat
    const storedDates = localStorage.getItem('absenDates');
    return storedDates ? JSON.parse(storedDates) : [];
  });
  const jwtToken = localStorage.getItem('token');
  const formattedDate = moment(date).format('YYYY-MM-DD');

  // Fungsi untuk memeriksa apakah pengguna sudah absen pada tanggal tertentu
  const hasAbsenOnDate = (date) => {
    return absenDates.includes(moment(date).format('YYYY-MM-DD'));
  };

  const onDateClick = (date) => {
    setDate(date);
    if (hasAbsenOnDate(date)) {
      alert('Yeyy! Anda sudah absen hari ini!');
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleAbsenSubmit = (selectedOption) => {
    let data = {
      date: formattedDate,
      status: selectedOption,
    };

    fetch('http://DESKTOP-75HF6R4:5000/attendance', {
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
        // Tambahkan tanggal absen ke daftar absen pengguna
        const updatedDates = [...absenDates, formattedDate];
        setAbsenDates(updatedDates);
        // Simpan tanggal-tanggal absen di localStorage
        localStorage.setItem('absenDates', JSON.stringify(updatedDates));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Calendar onClickDay={onDateClick} value={date} minDate={new Date} maxDate={new Date} />
      <PopupAbsen isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAbsenSubmit={handleAbsenSubmit} />
    </div>
  );
};

export default ReactCalendar;

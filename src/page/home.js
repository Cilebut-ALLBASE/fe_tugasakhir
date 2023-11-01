import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import LiveClock from '../components/live-clock';
import Sidebar from './sidebar/sidebar';
import jwtDecode from 'jwt-decode';
import '../styles/home-style.css';
import present from '../assets/Present-bg.png';
import absent from '../assets/Absent-bg.png';
import Leave_history from '../components/table/history-leave';
import ReactCalendar from '../components/calendar';
import AbsentCount from '../components/absent-count';
import PresentCount from '../components/present-count';

export const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Cek otentikasi di sini dengan memeriksa token yang ada di penyimpanan lokal
        const token = localStorage.getItem('token');
        if (token) {
            // Lakukan verifikasi token atau logika otentikasi sesuai kebutuhan Anda
            // Contoh: Anda bisa menggunakan library jwt-decode untuk mendekode token
            // dan memeriksa apakah token masih valid.
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp > Date.now() / 1000) {
                setIsAuthenticated(true);
            }
            // (Periksa token dengan metode yang sesuai untuk aplikasi Anda)

            // Contoh sederhana: Kami anggap pengguna otentikasi selama token ada.
            // setIsAuthenticated(true);
        }
    }, []); 

    if (!isAuthenticated) {
      // Jika pengguna tidak diotentikasi, Anda bisa mengarahkan mereka ke halaman login atau melakukan tindakan lain sesuai kebijakan otentikasi Anda.
      return <Navigate to="/" />;
    }

  return (
    <div>
      <div className='absolute'>
        <div className='content-home'>
          <h1>Overview</h1>

          <div className='status-home'>
            <div className='present'>
              <p>Present</p>
              <PresentCount />
              <img src={present} alt='bg' className='present-bg'></img>
            </div>

            <div className='absent'>
              <p>Absent</p>
              <AbsentCount />
              <img src={absent} alt='bg' className='absent-bg'></img>
            </div>
          </div>

          <div className='status-kedua'>
            <div className='history'>
              <h4 className='h4'>Leave History</h4>
              <Leave_history />
            </div>

            <div className='bungkus2element'>
              <div className='clock'>
                <LiveClock />
              </div>

              <div className='kalender'>
                <ReactCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
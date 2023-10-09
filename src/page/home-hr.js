import React from 'react';
import LiveClock from '../components/live-clock';
import Sidebar from './sidebar/sidebar';
import '../styles/home-style.css';
import present from '../assets/Present-bg.png';
import absent from '../assets/Absent-bg.png';
import Calendar from '../components/calendar';
import Leave_history from '../components/table/history-leave';

export const Home_hr = () => {
    return (
        <div>
            <div className='absolute'>
                <div className='content-home'>
                    <h1>Overview</h1>

                    <div className='status-home'>
                        <div className='present'>
                            <p>Present</p>
                            <img src={present} alt='bg' className='present-bg'></img>
                        </div>

                        <div className='absent'>
                            <p>Absent</p>
                            <img src={absent} alt='bg' className='absent-bg'></img>
                        </div>
                    </div>

                    <div className='bungkus-kedua'>
                        <div className='history'>
                            <h4 className='h4'>Leave History</h4>
                            <Leave_history />
                        </div>

                        <div className='att_history'>
                            <h4 className='h4'>Attendance History</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
};
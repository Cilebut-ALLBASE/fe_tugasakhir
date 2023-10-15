import React from 'react';
import Sidebar from './sidebar/sidebar';
import '../styles/home-style.css';
import present from '../assets/Present-bg.png';
import absent from '../assets/Absent-bg.png';
import Leave_history from '../components/table/history-leave';
import Attendance_history from '../components/table/history-attendance';
import AbsentCount from '../components/absent-count';
import PresentCount from '../components/present-count';

export const Home_hr = () => {
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
                        <div className='att_history'>
                            <h4 className='h4'>Attendance History</h4>
                            <Attendance_history />
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
};
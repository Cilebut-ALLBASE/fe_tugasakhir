import React, { useState } from 'react';
import '../../styles/absen-style.css';
import { Sidebar } from '../sidebar/sidebar';
import ReactCalendar from '../../components/calendar';
import ProtectedRoute from '../../components/protectedroute';

export const Absen = () => {

    return (
        <ProtectedRoute>
            <div>
                <div className="absolute">
                    <div className='content-home'>
                        <div className="nav-button-cover">
                            <h1 className="h1">Attendance</h1>

                            <div className='kalender-absen'>
                                <ReactCalendar />
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </ProtectedRoute>
    )
}


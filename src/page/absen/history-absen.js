import React from "react";
import '../../styles/absen-style.css';
import { Sidebar } from '../sidebar/sidebar';
import { useLocation } from "react-router-dom";

export const Absen_history = () => {
    const location = useLocation();
    
    return (
        <div>
            <div className="box">
                <h1 className="h1">Attendance</h1>
                <a className={`h2 ${location.pathname === '/absen' ? 'active-link' : ''}`} href="./absen">Attendance</a>
                <a className={`h3 ${location.pathname === '/history' ? 'active-link' : ''}`} href="./history">History</a>
            </div>
            <Sidebar />
        </div>
    )
}

export default Absen_history
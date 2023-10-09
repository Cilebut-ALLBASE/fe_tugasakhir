import React from "react";
import '../../styles/absen-style.css';
import { Sidebar } from '../sidebar/sidebar';
import { useLocation } from "react-router-dom";

export const Absen_history = () => {
    const location = useLocation();

    return (
        <div>
            <div className="box">
                <div className="nav-button-cover">
                <h1 className="h1">Attendance</h1>
                    <div className="nav-button">
                        <a className={`h2 ${location.pathname === '/absen' ? 'active-link' : ''}`} href="./absen">Attendance</a>
                        <a className={`h3 ${location.pathname === '/absen-history' ? 'active-link' : ''}`} href="./absen-history">History</a>
                    </div>

                    <div className="bungkus-card">
                        <div className="list-card">
                            <div className="box-tanggal">
                                <p className="date-history">17</p>
                            </div>

                            <div className="content-history">
                                <h3 className="day">Monday</h3>
                                <p className="jam-history">9 AM - 10 AM</p>
                            </div>
                            <div className="status-history">
                                <h4 className="status-green">Present</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default Absen_history
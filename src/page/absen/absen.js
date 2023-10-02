import React, { useState } from 'react';
import '../../styles/absen-style.css';
import { Sidebar } from '../sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

export const Absen = ({ label, checked, onChange }) => {

    return (
        <div>
            <div className="box">
                <div className="ic-search">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div>
                    <FontAwesomeIcon className="ic-notif" icon={faBell} />
                    <input className="box-search" type="text"></input>
                </div>
                <h1 className="h1">Attendance</h1>
                <a className="h2" href="./absen">Attendance</a>
                <a className="h3" href="./history">History</a>
                <div className="box-in1">
                    <label className="checkbox-container"><h2 className="present1">Present</h2>
                        {label}
                        <input type="checkbox" checked={checked} onChange={onChange} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-container2"><h2 className="sick">Sick</h2>
                        {label}
                        <input type="checkbox" checked={checked} onChange={onChange} />
                        <span className="checkmark2"></span>
                    </label>
                    <h1 className="time1">9 AM - 10 AM</h1>
                    <h1 className="day1">Monday</h1>
                    <button className="btn-submit1">
                        <h1 className="submit1">Submit</h1>
                    </button>
                    <div className="box-mini1">
                        <h1 className="h1-date">15</h1>
                    </div>
                </div>
                <div className="box-in2">
                    <h1 className="time2">9 AM - 10 AM</h1>
                    <h1 className="day2">Tuesday</h1>
                    <button className="btn-submit2">
                        <h1 className="submit2">Submit</h1>
                    </button>
                    <div className="box-mini2">
                        <label className="checkbox-container3"><h2 className="present2">Present</h2>
                            {label}
                            <input type="checkbox" checked={checked} onChange={onChange} />
                            <span className="checkmark3"></span>
                        </label>
                        <label className="checkbox-container4"><h2 className="sick2">Sick</h2>
                            {label}
                            <input type="checkbox" checked={checked} onChange={onChange} />
                            <span className="checkmark4"></span>
                        </label>
                        <h1 className="h2-date">16</h1>
                    </div>
                </div>
                <div className="box-in3">
                    <label className="checkbox-container5"><h2 className="present3">Present</h2>
                        {label}
                        <input type="checkbox" checked={checked} onChange={onChange} />
                        <span className="checkmark5"></span>
                    </label>
                    <label className="checkbox-container6"><h2 className="sick3">Sick</h2>
                        {label}
                        <input type="checkbox" checked={checked} onChange={onChange} />
                        <span className="checkmark6"></span>
                    </label>
                    <h1 className="time3">9 AM - 10 AM</h1>
                    <h1 className="day3">Wednesday</h1>
                    <button className="btn-submit3">
                        <h1 className="submit3">Submit</h1>
                    </button>
                    <div className="box-mini3">
                        <h1 className="h3-date">17</h1>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>


    )
}


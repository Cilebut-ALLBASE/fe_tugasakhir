import React, { useState } from 'react';
import '../../styles/leave-hd-style.css';
import { useLocation, Link } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

export const LeaveHD = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const jwtToken = localStorage.getItem('token');
    const [newData, setNewData] = useState({
        name: '',
        role: '',
        type: '',
        reason: '',
        date: '',
        period: '',
        phone: '',
        emergency: '',
    });

    const handleCreate = async (e) => {
        e.preventDefault(); // Mencegah pengiriman permintaan POST langsung
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/leave', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            if (response.status === 200) {
                alert('Leave request submitted');
            } else if (response.status === 401) {
                console.error('Failed to submit');
            } else {
                setError('');
            }
        } catch (error) {
            console.error('Error creating data:', error);
            setError('Error!');
        }
    };

    const [date, setDate] = useState('');

    const [selectedOption, setSelectedOption] = useState('');

    const dropdownOptions = [
        'Annual Leave',
        'Hospitalization',
        'Marriage',
        'Other',
    ];

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        setNewData({ ...newData, type: event.target.value });
    }

    return (
        <div>
            <div className="rect">
                <div className="bell">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="i-search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input className="rect-search" type="text"></input>
                </div>
                <h1 className="label-leave">Leave</h1>
                <div className="tab-button">
                    <a className={`a-leave ${location.pathname === '/leave-hd' ? 'active-link' : ''}`} href="./leave-hd">Leave</a>
                    <a className={`a-request ${location.pathname === '/request' ? 'active-link' : ''}`} href="./request">Request</a>
                </div>
                <form onSubmit={handleCreate}>
                    <h2 className="h2-name">Name</h2>
                    <input
                        className="box-name"
                        type="text"
                        name="name"
                        value={newData.name}
                        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                    ></input>

                    <h2 className="h2-role">Role</h2>
                    <input
                        className="box-role"
                        type="text"
                        name="role"
                        value={newData.role}
                        onChange={(e) => setNewData({ ...newData, role: e.target.value })}
                    ></input>

                    <h2 className="h2-type">Type of Leave</h2>
                    <select
                        className="drop"
                        value={selectedOption}
                        onChange={handleDropdownChange}
                    >
                        <option className="down" value="">Choose one</option>
                        {dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>

                    <h2 className="h2-reason">Reason</h2>
                    <input
                        className="box-reason"
                        type="text"
                        name="reason"
                        value={newData.reason}
                        onChange={(e) => setNewData({ ...newData, reason: e.target.value })}
                    ></input>

                    <h2 className="date-1">Date</h2>
                    <input
                        className="box-date"
                        type="date"
                        value={newData.date}
                        onChange={(e) => setNewData({ ...newData, date: e.target.value })}
                    ></input>

                    <h2 className="h2-period">Leave Period</h2>
                    <input
                        className="period-box"
                        type="date"
                        value={newData.period}
                        onChange={(e) => setNewData({ ...newData, period: e.target.value })}
                    ></input>

                    <h2 className="h2-phone">Phone Number</h2>
                    <input
                        className="box-phone"
                        type="text" // Menggunakan type="text" daripada "number"
                        name="phone"
                        value={newData.phone}
                        onChange={(e) => setNewData({ ...newData, phone: e.target.value })}
                    ></input>

                    <h2 className="h2-emergency">Emergency Contact</h2>
                    <input
                        className="box-emergency"
                        type="text" // Menggunakan type="text" daripada "number"
                        name="emergency"
                        value={newData.emergency}
                        onChange={(e) => setNewData({ ...newData, emergency: e.target.value })}
                    ></input>

                    <button type="submit" className="button-submit">Submit</button>
                    <Link to="/home">
                        <button className="button-back">Back</button>
                    </Link>
                </form>
                <div className="rect2"></div>
            </div>
            <Sidebar />
        </div>
    )
}
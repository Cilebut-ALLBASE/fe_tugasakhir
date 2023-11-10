import React, { useState, useEffect } from "react";
import '../../styles/leave-style.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment'; // Import moment.js
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/sidebar";
import ProtectedRoute from "../../components/protectedroute";
import jwtDecode from "jwt-decode";

export const Leave = () => {
    const location = useLocation();
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
        e.preventDefault();

        // Konversi format tanggal menggunakan moment.js
        const formattedDate = moment(newData.date).format('YYYY-MM-DD');
        const formattedPeriod = moment(newData.period).format('YYYY-MM-DD');

        // Membuat objek baru dengan format tanggal yang benar
        const newDataWithFormattedDate = {
            ...newData,
            date: formattedDate,
            period: formattedPeriod,
        };

        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/leave', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDataWithFormattedDate),
            });

            if (response.status === 200) {
                alert('Leave request submitted');
            } else if (response.status === 401) {
                console.error('Failed to submit');
            } else {
                console.error('Failed');
            }
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData({
            ...newData,
            [name]: value,
        });
    };

    useEffect(() => {
        const jwtToken = localStorage.getItem('token');
        
        if(jwtToken) {
            const decodedToken = jwtDecode(jwtToken);
            const userName = decodedToken.name;
            const role = decodedToken.role;

            setNewData({...newData, name: userName, role: role});
        }

      }, []);

    return (
        <ProtectedRoute>
            <div>
                <div className="box">
                    <h1 className="h1-leave">Leave</h1>
                    <form onSubmit={handleCreate}>
                        <h2 className="h2-name">Name</h2>
                        <input
                            disabled
                            className="box-name"
                            type="text"
                            name="name"
                            value={newData.name}
                            onChange={handleInputChange}
                            placeholder=""
                        />

                        <h2 className="h2-role">Role</h2>
                        <input
                            disabled
                            className="box-role"
                            type="text"
                            name="role"
                            value={newData.role}
                            onChange={handleInputChange}
                            placeholder=""
                        />

                        <h2 className="h2-type">Type of Leave</h2>
                        <select
                            className="drop"
                            name="type"
                            value={newData.type}
                            onChange={handleInputChange}
                        >
                            <option value="">Choose one</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Hospitalization">Hospitalization</option>
                            <option value="Marriage">Marriage</option>
                            <option value="Other">Other</option>
                        </select>

                        <h2 className="h2-reason">Reason</h2>
                        <input
                            className="box-reason"
                            type="text"
                            name="reason"
                            value={newData.reason}
                            onChange={handleInputChange}
                        />

                        <h2 className="date-1">Date</h2>
                        <input
                            className="box-date"
                            type="date"
                            name="date"
                            value={newData.date}
                            onChange={handleInputChange}
                        />

                        <h2 className="h2-period">Leave Period</h2>
                        <input
                            className="period-box"
                            type="date"
                            name="period"
                            value={newData.period}
                            onChange={handleInputChange}
                        />

                        <h2 className="h2-phone">Phone Number</h2>
                        <input
                            className="box-phone"
                            type="text"
                            name="phone"
                            value={newData.phone}
                            onChange={handleInputChange}
                        />

                        <h2 className="h2-emergency">Emergency Contact</h2>
                        <input
                            className="box-emergency"
                            type="text"
                            name="emergency"
                            value={newData.emergency}
                            onChange={handleInputChange}
                        />

                        <button type="submit" className="button-submit">Submit</button>
                        <Link to="/home">
                            <button className="button-back">Back</button>
                        </Link>
                    </form>
                    <div className="box2"></div>
                </div>
                <Sidebar />
            </div>
        </ProtectedRoute>
    );
};

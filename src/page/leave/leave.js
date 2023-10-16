import React, { useEffect, useState } from "react";
import '../../styles/leave-style.css';
import { Sidebar } from '../sidebar/sidebar';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Leave = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const jwtToken = localStorage.getItem('token');
    const [newData, setNewData] = useState({
        name: '',
        position: '',
        type: '',
        reason: '',
        date: '',
        period: '',
        phone: '',
        emergency: '',
    })

    const handleCreate = async () => {
        try {
            const response = await fetch('http://DESKTOP-CGH6082:5000/leave', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...newData }),
            });

            if (response.status === 200) {
                alert('leave request submitted')
                
            } else if (response.status === 401) {
                console.error('failed to submit');
            } else {
                setError('');
            }
        } catch (error) {
            console.error('error creating data:', error);
            setError('error!');
        }
    };

    const [date, setDate] = useState();

    const [selectedOption, setSelectedOption] = useState('');

    const dropdownOptions = [
        'Annual Leave',
        'Hospitalization',
        'Marriage',
        'Other',
    ];

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div>
            <div className="box">
                <div className="notif">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div>
                    <FontAwesomeIcon className="search" icon={faSearch} />
                    <input className="input-search" type="text"></input>
                </div>
                <h1 className="h1-leave">Leave</h1>
                <form onSubmit={handleCreate}>
                    <h2 className="h2-name">Name</h2>
                    <input className="box-name"
                        type="text"
                        name="name"
                        value={newData.name}
                        onChange={(e) => setNewData( e.target.value )}
                    ></input>

                    <h2 className="h2-role">Position/Role</h2>
                    <input className="box-role"
                        type="text"
                        name="position"
                        value={newData.position}
                        onChange={(e) => setNewData( e.target.value )}
                    ></input>

                    <h2 className="h2-type">Type of Leave</h2>
                    <select className="drop" value={selectedOption} onChange={handleDropdownChange}>
                        <option className="down" value="">Choose one</option>
                        {dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>

                    <h2 className="h2-reason">Reason</h2>
                    <input className="box-reason"
                        type="text"
                        name="reason"
                        value={newData.reason}
                        onChange={(e) => setNewData( e.target.value )}
                    ></input>

                    <h2 className="date-1">Date</h2>
                    <input className="box-date"
                        type="date"
                        onChange={e => setDate( e.target.value )}
                    ></input>

                    <h2 className="h2-period">Leave Period</h2>
                    <input className="period-box"
                        type="date"
                        onChange={e => setDate( e.target.value )}
                    ></input>

                    <h2 className="h2-phone">Phone Number</h2>
                    <input className="box-phone"
                        type="number"
                        name="phone"
                        value={newData.phone}
                        onChange={(e) => setNewData( e.target.value )}
                    ></input>

                    <h2 className="h2-emergency">Emergency Contact</h2>
                    <input className="box-emergency"
                        type="number"
                        name="emergency"
                        value={newData.emergency}
                        onChange={(e) => setNewData( e.target.value )}
                    ></input>

                    <button type="submit" className="button-submit">Submit</button>
                    <Link to="/home">
                        <button className="button-back">Back</button>
                    </Link>
                </form>
                <div className="box2"></div>
            </div>
            <Sidebar />
        </div>
    )
}
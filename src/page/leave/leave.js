import React, { useState } from "react";
import '../../styles/leave-style.css';
import { Sidebar } from '../sidebar/sidebar';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

export const Leave = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        position: '',
        type: '',
        reason: '',
        date: '',
        period: '',
        phone: '',
        emergency: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
        // e.preventDefault();
        // console.log('', formData);
    };

    const [date, setData] = useState();

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
                <form onSubmit={handleSubmit}>
                    <h2 className="h2-name">Name</h2>
                    <input className="box-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    ></input>

                    <h2 className="h2-role">Position/Role</h2>
                    <input className="box-role"
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
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
                        value={formData.reason}
                        onChange={handleChange}
                    ></input>

                    <h2 className="date-1">Date</h2>
                    <input className="box-date"
                        type="date"
                        onChange={e => setData(e.target.value)}
                    ></input>

                    <h2 className="h2-period">Leave Period</h2>
                    <input className="period-box"
                        type="date"
                        onChange={e => setData(e.target.value)}
                    ></input>

                    <h2 className="h2-phone">Phone Number</h2>
                    <input className="box-phone"
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    ></input>

                    <h2 className="h2-emergency">Emergency Contact</h2>
                    <input className="box-emergency"
                        type="number"
                        name="emergency"
                        value={formData.emergency}
                        onChange={handleChange}
                    ></input>

                    <button type="submit" className="button-submit">Submit</button>
                    <button type="back" className="button-back">Back</button>
                </form>
                <div className="box2"></div>
            </div>
            <Sidebar />
        </div>
    )
}
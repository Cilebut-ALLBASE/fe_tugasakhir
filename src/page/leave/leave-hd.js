import React, { useState } from 'react';
import '../../styles/leave-hd-style.css';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

export const LeaveHD = () => {
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
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        fetch('https://LAPTOP-A5E7H59A:5000/leave', {
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
    };

    const [date, setData] = useState();

    const [role, setRole] = useState('');

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
                <form onSubmit={handleSubmit}>
                    <h2 className="name">Name</h2>
                    <input className="input-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    ></input>

                    <h2 className="role">Position/Role</h2>
                    <input className="input-role"
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    ></input>

                    <h2 className="type">Type of Leave</h2>
                    <select
                        className='input-type'
                        id='role'
                        value={role}
                        placeholder='select role'
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value=''>Choose one</option>
                        <option value='Annual Leave'>Annual Leave</option>
                        <option value='Hospitalization'>Hospitalization</option>
                        <option value='Marriage'>Marriage</option>
                        <option value='Other'>Other</option>
                    </select>

                    <h2 className="reason">Reason</h2>
                    <input className="input-reason"
                        type="text"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                    ></input>

                    <h2 className="date">Date</h2>
                    <input className="input-date"
                        type="date"
                        onChange={e => setData(e.target.value)}
                    ></input>

                    <h2 className="period">Leave Period</h2>
                    <input className="input-period"
                        type="date"
                        onChange={e => setData(e.target.value)}
                    ></input>

                    <h2 className="phone">Phone Number</h2>
                    <input className="input-phone"
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    ></input>

                    <h2 className="emergency">Emergency Contaact</h2>
                    <input className="input-emergency"
                        type="number"
                        name="emergency"
                        value={formData.emergency}
                        onChange={handleChange}
                    ></input>

                    <button type="submit" className="btn-submit">Submit</button>
                    <button type="reset" className="btn-back">Back</button>
                </form>
                <div className="rect2"></div>
            </div>
            <Sidebar />
        </div>
    )
}
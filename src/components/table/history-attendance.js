import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';

const Attendance_history = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const jwtToken = localStorage.getItem('token');

    const columns = [
        { field: 'user_name', column: 'Nama' },
        { field: 'date', column: 'Date' },
        { field: 'status', column: 'Status' },
    ];

    const fetchData = async () => {
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/attendance', {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`,
                }
            });
            const dataFromApi = await response.json();
            setData(dataFromApi.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TableComponent row={data} column={columns} />
            )}
        </div>
    );
};

export default Attendance_history;
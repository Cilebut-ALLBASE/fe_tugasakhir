import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';
import jwt_decode from 'jwt-decode';

const Attend_employee = () => {
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
            // Mendekode token JWT
            const decodedToken = jwt_decode(jwtToken);
            const userId = decodedToken.id_users;

            // Membuat URL endpoint dengan parameter query
            const endpoint = `http://LAPTOP-A5E7H59A:5000/Attendance/idAttendance`;

            // Mengirimkan permintaan GET ke endpoint
            const response = await fetch(endpoint, {
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

export default Attend_employee;
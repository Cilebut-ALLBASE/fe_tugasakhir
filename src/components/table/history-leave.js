import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';
import jwt_decode from 'jwt-decode';

const Leave_history = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const jwtToken = localStorage.getItem('token');

    const columns = [
        { field: 'type', column: 'Type of Leave' },
        { field: 'date', column: 'Date' },
        { field: 'status', column: 'Status' },
    ];

    useEffect(() => {
        const decodedToken = jwt_decode(jwtToken);
        const name = decodedToken.name; // Menggunakan username sesuai dengan struktur database Anda

        const fetchData = async () => {
            try {
                const response = await fetch(`http://DESKTOP-CGH6082:5000/leave?name=${name}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
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
        fetchData();
    }, [jwtToken]);

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

export default Leave_history;
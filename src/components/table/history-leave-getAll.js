import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';
import jwt_decode from 'jwt-decode';

const Leave_history_getAll = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const jwtToken = localStorage.getItem('token');

    const columns = [
        { field: 'name', column: 'Name' },
        { field: 'type', column: 'Type of Leave' },
        { field: 'date', column: 'Date' },
        { field: 'status', column: 'Status' },
    ];

    useEffect(() => {
        const decodedToken = jwt_decode(jwtToken);

        const fetchData = async () => {
            try {
                const response = await fetch(`http://LAPTOP-A5E7H59A:5000/leave`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                });
                const dataFromApi = await response.json();

                console.log('Data from API:', dataFromApi);

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

export default Leave_history_getAll;

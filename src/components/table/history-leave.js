import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';

const Leave_history = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { field: 'typeleave', column: 'Type of Leave' },
        { field: 'date', column: 'Date' },
        { field: 'status', column: 'Status' },
    ];

    // const columns = [
    //   { field: 'AddressTypeID', column: 'AddressTypeID' },
    //   { field: 'Name', column: 'Name' },
    //   { field: 'rowguid', column: 'rowguid' },
    //   { field: 'ModifiedDate', column: 'ModifiedDate' },
    // ];

    const fetchData = async () => {
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/users');
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

export default Leave_history;
import React, { useState, useEffect } from 'react';

const AbsentCount = () => {
    const [absentCount, setAbsentCount] = useState(0);
    const jwtToken = localStorage.getItem('token');
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://LAPTOP-A5E7H59A:5000/attendance', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                });
                const data = await response.json();
                const absentData = data.data.filter((entry) => entry.status === 'Sick'); // Filter data yang sakit
                setAbsentCount(absentData.length);
            } catch (error) {
                console.error('Error fetching absent data:', error);
            }
        };

        fetchData();
    }, []);

    return <p className='count'>{absentCount}</p>;
};

export default AbsentCount;
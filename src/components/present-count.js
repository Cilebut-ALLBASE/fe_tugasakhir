import React, { useState, useEffect } from 'react';

const PresentCount = () => {
    const [presentCount, setPresentCount] = useState(0);
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
                const presentData = data.data.filter((entry) => entry.status === 'Present');
                setPresentCount(presentData.length);
            } catch (error) {
                console.error('Error fetching present data:', error);
            }
        };

        fetchData();
    }, []);

    return <p className='count'>{presentCount}</p>;
};

export default PresentCount;
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../sidebar/sidebar';
import LeaveComponent from '../../components/table/tablecomponent';
import '../../styles/request-style.css';

export const Request = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const columns = [
    { field: 'name', column: 'Name' },
    { field: 'role', column: 'Position/Role' },
    { field: 'type', column: 'Type of Leave' },
    { field: 'reason', column: 'Reason' },
    { field: 'date', column: 'Date' },
    { field: 'period', column: 'Leave Period' },
    { field: 'phone', column: 'Phone Number' },
    { field: 'emergency', column: 'Emergency Contact' },
  ];

  const fetchData = async () => {
    try {
        const response = await fetch('http://DESKTOP-CGH6082:5000/users');
        const dataFromApi = await response.json();
        setData(dataFromApi.data);
        setLoading(false);
    }
    catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className='bx-request'>
      <h1 className='req' align='center'>Request</h1>
      <LeaveComponent
        row = {data}
        column = {columns}
      />
      <div className='bx-request2'></div>
      <Sidebar />
    </div>
  );
};

export default Request;
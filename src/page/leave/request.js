import React, { useEffect, useState } from 'react';
import { Sidebar } from '../sidebar/sidebar';
import LeaveComponent from '../../components/table/tablecomponent';
import '../../styles/request-style.css';
import moment from 'moment';

export const Request = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const jwtToken = localStorage.getItem('token');

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
      const response = await fetch('http://LAPTOP-A5E7H59A:5000/leave', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        }
      });
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
    <div>
      <div className='absolute'>
        <div className='content-home'>
          <h2 className='req'>Request</h2>
          <div className='satu'>
            <LeaveComponent row={data} column={columns} />
          </div>
        </div>
        
        <div className='bx-request2'></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Request;

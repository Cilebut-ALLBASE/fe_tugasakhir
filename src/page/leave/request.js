import React, { useEffect, useState } from 'react';
import { Sidebar } from '../sidebar/sidebar';
import { useLocation } from 'react-router-dom';
import LeaveComponent from '../../components/table/leavecomponent';
import '../../styles/request-style.css';
import moment from 'moment';


export const Request = () => {
  const location = useLocation();
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
      <div className='bx-request'>
        {/* <div className='st-bell'>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className='st-search'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='bx-input-search' type='text'></input>
        </div> */}
        <h1 className='req'>Request</h1>

        <LeaveComponent
          row={data}
          column={columns}
        />
        <div className='bx-request2'></div>

      </div>
      <Sidebar />
    </div>
  );
};

export default Request;

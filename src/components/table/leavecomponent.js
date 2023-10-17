import React, { useState } from 'react';
import './../../styles/request-style.css';
import moment from 'moment'; // Import moment library

const LeaveComponent = (props) => {
  const { row, column } = props;
<<<<<<< HEAD
  const [ data, setData ] = useState([]);
  const [ status, setStatus ] = useState('Submit');
  const jwtToken = localStorage.getItem('token');

  const handleButtonClick = (newStatus) => {
    setStatus('Menyimpan');

  fetch('http://DESKTOP-CGH6082:5000/leave/1', {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({ decision: newStatus}), 
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data dari API:', data);
      setStatus(newStatus);
    })
    .catch(error => {
      console.log('Error:', error);
      setStatus('Gagal');
    });
  };
=======
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(null);
>>>>>>> ebe4cae836aae059b3dbba21d6e34146ccd1e9f0

  if (!row || !column) {
    return <div>Loading...</div>;
  }

<<<<<<< HEAD
=======
  const handleApprove = (itemId) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === itemId ? { ...item, status: 'Approve' } : item
      );
    });
  };

  const handleReject = (itemId) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id !== itemId);
    });
  };

>>>>>>> ebe4cae836aae059b3dbba21d6e34146ccd1e9f0
  return (
    <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            {column.map((col) => (
              <th style={{ width: 700 }} key={col.field}>
                {col.column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.id}>
              {column.map((col) => (
                <td key={col.field}>
                  {col.field === 'date' || col.field === 'period'
                    ? moment(item[col.field]).format('YYYY-MM-DD') // Format date with moment
                    : item[col.field]}
                </td>
              ))}
<<<<<<< HEAD
                <td>
                  <div style={{width: 200}}>
                    <button onClick={() => handleButtonClick('Accepted')} disabled={status !== 'Submit'} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleButtonClick('Denied')} disabled={status !== 'Submit'} className='btn-lv-del'>Reject</button>
                  </div>
                </td>   
=======
              <td>
                <div style={{ width: 200 }}>
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="btn-lv-submit"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(item.id)}
                    className="btn-lv-del"
                  >
                    Reject
                  </button>
                </div>
              </td>
>>>>>>> ebe4cae836aae059b3dbba21d6e34146ccd1e9f0
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveComponent;

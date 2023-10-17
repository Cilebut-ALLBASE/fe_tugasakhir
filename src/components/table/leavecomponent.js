import React, { useState } from 'react'
import './../../styles/request-style.css';

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [ status, setStatus ] = useState('Submit');
  const [anotherStatus, setAnotherStatus] = useState('Submit');
  const jwtToken = localStorage.getItem('token');

  const handleStatusChange = (newStatus, statusUpdater) => {
    setStatus('Menyimpan');
  
    fetch('http://DESKTOP-CGH6082:5000/leave/idleave', {
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
        setStatus(newStatus);  // Pindahkan ini ke sini
      })
      .catch(error => {
        console.log('Error:', error);
        setStatus('Gagal');
      });
  };
  
  const handleApprove = () => {
    handleStatusChange('Approved', setStatus);
  }

  const handleRejected = () => {
    handleStatusChange('Rejected', setAnotherStatus);
  }

  if (!row || !column) {
    return <div>Loading...</div>;
  }

  return (
    <div className='table-container'>
      <table className='my-table'>
        <thead>
          <tr>
            {column.map((col) => (
              <th style={{width: 700}} key={col.field}>{col.column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.id}>
              {column.map((col) => (
                <td key={col.field}>{item[col.field]}</td>
              ))}
                <td>
                  <div style={{width: 200}}>
                    <button onClick={() => handleApprove('Accepted')} disabled={status !== 'Submit'} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleRejected('Denied')} disabled={status !== 'Submit'} className='btn-lv-del'>Reject</button>
                  </div>
                </td>   
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveComponent;

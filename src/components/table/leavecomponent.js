import React, { useState } from 'react'
import './../../styles/request-style.css';

const LeaveComponent = (props) => {
  const { row, column } = props;
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
                    <button onClick={() => handleButtonClick('Accepted')} disabled={status !== 'Submit'} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleButtonClick('Denied')} disabled={status !== 'Submit'} className='btn-lv-del'>Reject</button>
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

import React, { useState, useEffect } from 'react'
import './../../styles/request-style.css';

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [ status, setStatus ] = useState('Submit');
  const jwtToken = localStorage.getItem('token');
  console.log(row);

  const handleStatusChange = (newStatus, id) => {
    setStatus('Menyimpan');
    
    fetch(`http://DESKTOP-75HF6R4:5000/leave/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ status: newStatus }), 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Status telah diperbarui:', data.status);
      setStatus(data.status); // Memperbarui status setelah berhasil
    })
    .catch(error => {
      console.log('Error:', error);
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
                    <button onClick={() => handleStatusChange('Approved', item.id)} disabled={item.status !== 'Pending'} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleStatusChange('Rejected', item.id)} disabled={item.status !== 'Pending'} className='btn-lv-del'>Reject</button>
                  </div>
                </td>   
            </tr>
          ))}
        </tbody>
      </table>
      <p>Status: {status}</p>
    </div>
  );
};

export default LeaveComponent;

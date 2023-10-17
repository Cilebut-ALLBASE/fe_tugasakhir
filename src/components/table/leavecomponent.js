import React, { useState } from 'react'
import './../../styles/request-style.css';

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [ status, setStatus ] = useState('Submit');
  const [anotherStatus, setAnotherStatus] = useState('Submit');
  const jwtToken = localStorage.getItem('token');
  console.log(row)

  const handleStatusChange = (newStatus, id, item) => {
    setStatus('Menyimpan');
    
  
    fetch(`http://DESKTOP-CGH6082:5000/leave/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ 
        role: item.role,
        type: item.type,
        reason: item.reason,
        date: item.date,
        period: item.period,
        phone: item.phone,
        emergency: item.emergency,
        status: newStatus }), 
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
  
  const handleApprove = (item) => {
    handleStatusChange('Approved', item.id, setStatus);
  }

  const handleRejected = (item) => {
    handleStatusChange('Rejected', item.id, setAnotherStatus);
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
                    <button onClick={() => handleApprove(item)} disabled={item.status !== 'Pending'} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleRejected(item)} disabled={item.status !== 'Pending'} className='btn-lv-del'>Reject</button>
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

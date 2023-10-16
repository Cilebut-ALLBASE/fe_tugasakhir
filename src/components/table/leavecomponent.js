import React, { useState } from 'react'
import './../../styles/request-style.css';

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [ data, setData ] = useState([]);
  const [ status, setStatus ] = useState(null)

  if (!row || !column) {
    return <div>Loading...</div>;
  }

  const handleApprove = itemId => {
    setData(prevData => {
      return prevData.map(item => 
        item.id == itemId ? { ...item, status: 'Approve' } : item );
    });
  };

  const handleReject = itemId => {
    setData(prevData => {
      return prevData.filter(item => item.id !== itemId);
    });
  };

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
                    <button onClick={() => handleApprove()} className='btn-lv-submit'>Approve</button> 
                    <button onClick={() => handleReject()} className='btn-lv-del'>Reject</button>
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

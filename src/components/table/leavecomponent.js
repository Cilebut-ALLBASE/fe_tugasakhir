import React, { useState, useEffect } from 'react'
import './../../styles/request-style.css';
import moment from 'moment';

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Submit');
  const jwtToken = localStorage.getItem('token');
  console.log(row);
  const refreshPage = () => {
    window.location.reload();
  };

  const handleStatusChange = (newStatus, id) => {
    setStatus('Menyimpan');

    fetch(`http://LAPTOP-A5E7H59A:5000/leave/${id}`, {
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
        // Perbarui status pada objek yang sesuai di dalam array row
        const updatedRow = row.map(item => {
          if (item.id === id) {
            return { ...item, status: data.status };
          }
          return item;
        });
        setData(updatedRow); // Perbarui data untuk memicu pembuatan ulang komponen
        setStatus(data.status); // Memperbarui status setelah berhasil
        refreshPage();
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
              <th style={{ width: 700 }} key={col.field}>{col.column}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.id}>
              {column.map((col) => (
                <td key={col.field}>
                  {col.field === 'date' || col.field === 'period' ?
                    moment(item[col.field]).format('YYYY-MM-DD') : item[col.field]}
                </td>
              ))}
              <td>
                <div style={{ width: 200 }}>
                  {item.status === 'Pending' ? ( // Cek status saat ini
                    <>
                      <button onClick={() => handleStatusChange('Accepted', item.id)} disabled={item.status !== 'Pending'} className='btn-lv-submit'>Approve</button>
                      <button onClick={() => handleStatusChange('Denied', item.id)} disabled={item.status !== 'Pending'} className='btn-lv-del'>Reject</button>
                    </>
                  ) : (
                    <p className='' style={{ textAlign: 'center', color: item.status === 'Accepted' ? '#00FE0A' : 'red' }}>{item.status}</p> // Tampilkan teks status jika tidak lagi "Pending"
                  )}
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      {/* <p>Status: {status}</p> */}
    </div>
  );
};

export default LeaveComponent;

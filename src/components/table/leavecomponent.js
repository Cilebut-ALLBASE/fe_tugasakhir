import React, { useState } from 'react';
import './../../styles/request-style.css';
import moment from 'moment'; // Import moment library

const LeaveComponent = (props) => {
  const { row, column } = props;
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(null);

  if (!row || !column) {
    return <div>Loading...</div>;
  }

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveComponent;

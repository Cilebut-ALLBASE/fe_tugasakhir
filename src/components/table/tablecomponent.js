import React from 'react'
import moment from 'moment';

const TableComponent = (props) => {
  const { row, column } = props;

  if (!row || !column) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {column.map((col) => (
              <th key={col.field}>{col.column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.id}>
              {column.map((col) => (
                <td key={col.field}>
                  {col.field === 'date' ? moment(item[col.field]).format('YYYY-MM-DD') : col.field === 'status' ? (
                    <span style={{ color: item[col.field] === 'Present' ? '#00FE0A' : '#0066FE' }}>{item[col.field]}</span>
                  ) : item[col.field]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

// import React, { useState, useEffect } from "react";

// const TableComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Contoh: Mengambil data dari server (gantilah URL dengan URL API Anda)
//     fetch("http://LAPTOP-A5E7H59A:5000/users")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Jika data adalah objek dengan properti "items"
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Type of Leave</th>
//             <th>Date</th>
//             <th>Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(data) ? (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.typeleave}</td>
//                 <td>{item.date}</td>
//                 <td>{item.reason}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">Data tidak valid</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
  
// };

// export default TableComponent;

import React from 'react'

const TableComponent = (props) => {
  const { row, column } = props;

  if (!row || !column) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
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
                <td key={col.field}>{item[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

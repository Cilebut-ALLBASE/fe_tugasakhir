// ProtectedRoute.js

import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Ambil token dari penyimpanan lokal (localStorage)
    const token = localStorage.getItem('token');

    if (token) {
      // Lakukan permintaan ke server untuk memeriksa otentikasi pengguna dengan menggunakan token
      fetch('http://LAPTOP-A5E7H59A:5000/check/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Mengirim token dalam header Authorization
        }
      })
        .then(response => {
          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        })
        .catch(error => {
          setIsAuthenticated(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedRoute;

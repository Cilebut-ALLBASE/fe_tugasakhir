// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
    // Periksa otentikasi di sini, jika pengguna sudah login, tampilkan children, jika tidak, arahkan ke halaman login
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;

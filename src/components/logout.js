import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Menampilkan alert konfirmasi sebelum logout
        if (window.confirm('Anda yakin ingin logout?')) {
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    return (
        <div>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
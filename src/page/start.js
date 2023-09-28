import React, { useState } from 'react';
import '../styles/login-style.css';
import { Link, useNavigate } from 'react-router-dom';
import login1 from '../assets/login1.png';
import login2 from '../assets/login2.png';
import login from './login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Start = () => {
    const navigate = useNavigate();

    const userClick = () => {
    navigate('/');
  };

  const adminClick = () => {
    navigate('/register');
  };

    return (
        <div>
            <img src={login1} className='login-1' />
            <img src={login2} className='login-2' />

            <div className='container'>
                <div className='sub-container'>  {/* supaya display flex dari container tidak mempengaruhi isi */}
                    <div className='input-container'>
                    <h1 align='center'>Login As</h1>
                    </div>
                <div className='pst'>
                    <button className='log-btn pstb' onClick={userClick}>User</button>
                    <button className='log-btn pstb' onClick={adminClick} >Admin</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Start;
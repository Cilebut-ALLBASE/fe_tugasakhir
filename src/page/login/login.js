import React, { useState } from 'react';
import '../../styles/login-style.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import login1 from '../../assets/login1.png';
import login2 from '../../assets/login2.png';
import home from '../home';
import Register from '../register/register';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                alert('Login berhasil');
                // Redirect ke halaman utama
                Navigate('/home') // Ganti '/home' dengan rute ke halaman utama Anda
            } else if (response.status === 401) {
                setError('Akun tidak terdaftar!');
            } else {
                setError('Terjadi kesalahan!');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            setError('Terjadi kesalahan!');
        }
    };

    return (
        <div>
            <img src={login1} className='login-1' />
            <img src={login2} className='login-2' />

            <div className='container'>
                <div className='sub-container'>  {/* supaya display flex dari container tidak mempengaruhi isi */}
                    <div className='input-container'>
                        <h1 align='center'>Login</h1>
                        <label htmlFor='em'>Email</label>
                        <input className='input' type='email' placeholder='Email' id='em' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='pw'>Password</label>
                        <input className='input' type='password' placeholder='Password' id='pw' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className='input-container div-btn'>
                        <button className='log-btn' type='submit' onClick={handleLogin}>Login</button >
                    </div>
                    <button id='navi' onClick={() => Navigate('/register')}>Belum mempunyai akun?</button>
                    {/* <Link to="/register" className='link'>Belum mempunyai akun?</Link> */}
                    {error && <div className='error-message'>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Login;
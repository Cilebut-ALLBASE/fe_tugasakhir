import React, { useState } from 'react';
import '../../styles/login-style.css';
import { Link, useNavigate } from 'react-router-dom';
import login1 from '../../assets/login1.png';
import login2 from '../../assets/login2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const jwtToken = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/users', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, role, password }),
            });

            if (response.status === 200) {
                alert('akun berhasil terdaftar');
                // Redirect ke halaman utama
                navigate('/')
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
                        <h1 align='center'>Sign Up</h1>
                        <label htmlFor='na'>Name</label>
                        <input
                            className='input'
                            type='text'
                            placeholder='Name'
                            id='na'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />

                        <div className='input-row'>
                            <div className='input-half'>
                                <label htmlFor='em'>Email</label>
                                <input
                                    className='col-md-11 input'
                                    type='email'
                                    placeholder='Email'
                                    id='em'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className='input-half'>
                                <label htmlFor='role'>Role</label>
                                <select
                                    className='col-md-11 input'
                                    id='role'
                                    value={role}
                                    placeholder='select role'
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                >
                                    <option value=''>select role</option>
                                    <option value='staff'>Staff</option>
                                    <option value='hr'>HR</option>
                                    <option value='hd'>HD</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor='pw'>Password</label>
                        <input
                            className='input'
                            type='password'
                            placeholder='Password'
                            id='pw'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>

                    <div className='input-container div-btn'>
                        <button className='log-btn' type='submit' onClick={handleRegister} >Sign Up</button>
                    </div>
                    {/* <button id='navi' onClick={() => navigate('/')}>Sudah mempunyai akun?</button> */}
                    <Link to="/" className='link'>Sudah mempunyai akun?</Link>
                    {error && <div className='error-message'>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Register;
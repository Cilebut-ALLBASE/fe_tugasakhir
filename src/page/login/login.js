import React, { useState, useEffect } from 'react';
import '../../styles/login-style.css';
import { Link, useNavigate } from 'react-router-dom';
import login1 from '../../assets/login1.png';
import login2 from '../../assets/login2.png';
import eyeOpenIcon from '../../assets/icon/showpw.png';
import eyeClosedIcon from '../../assets/icon/hidepw.png';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://LAPTOP-A5E7H59A:5000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                const responseData = await response.json();
                localStorage.setItem('token', responseData.body.accessToken)
                console.log('Data Response', responseData)
                alert('Login berhasil');

                const userRole = responseData.body.role;
                if (userRole === 'staff') {
                    navigate('/home')
                } else if (userRole === 'hr') {
                    navigate('/home-hr')
                } else if (userRole === 'hd') {
                    navigate('/home')
                }
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

    // Fungsi untuk mengisi data login dari localStorage saat komponen dimuat
    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');

        if (rememberedEmail) {
            setEmail(rememberedEmail);
            setRememberMe(true);
        }
    }, []);

    // Fungsi untuk menyimpan data login ke localStorage saat "Remember Me" dicentang
    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    }, [rememberMe, email]);

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

                    <div className='input-container password-container'>
                        <label htmlFor='pw'>Password</label>
                        <div className='password-input-container'>
                            <input className='input geserdikit' type={showPassword ? 'text' : 'password'} placeholder='Password' id='pw' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className='password-input-container1'>
                            <button className='transparent-button' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <img src={eyeOpenIcon} alt='Hide Password' className='password-icon' /> : <img src={eyeClosedIcon} alt='Show Password' className='password-icon' />}
                            </button>
                        </div>
                    </div>


                    <div className='input-container div-btn'>
                        <button className='log-btn' type='submit' onClick={handleLogin}>Login</button>
                    </div>

                    <div className='input-row'>
                        <div className='input-paw'>
                            <label>
                                <input type='checkbox' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> Remember Me
                            </label>
                        </div>

                        <div className='input-paw'>
                            <Link to="/register" className='link'>Belum mempunyai akun?</Link>
                        </div>
                    </div>
                    {error && <div className='error-message'>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Login;

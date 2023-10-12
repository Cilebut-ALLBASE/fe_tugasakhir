import React from 'react';
import { Routes, Router, Route } from 'react-router-dom';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { Start } from './page/start';
import Home from './page/home';
import { Absen } from './page/absen/absen';
import { Leave } from './page/leave/leave';
import { LeaveHD } from './page/leave/leave-hd';
import { Home_hr } from './page/home-hr';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/absen' element={<Absen />}></Route>
        <Route path='/leave' element={<Leave />}></Route>
        <Route path='/leave-hd' element={<LeaveHD />}></Route>
        <Route path='/home-hr' element={<Home_hr />}></Route>
      </Routes>
    </div>
  );
}

export default App;
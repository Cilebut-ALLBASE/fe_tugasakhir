import React from 'react';
import { Routes, Router, Route } from 'react-router-dom';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { Start } from './page/start';
import Home from './page/home';
import { Absen } from './page/absen/absen';
import { Sidebar } from './page/sidebar/sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Absen_history from './page/absen/history-absen';
import { Leave } from './page/leave/leave';
import { LeaveHD } from './page/leave/leave-hd';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/absen' element={<Absen />}></Route>
        <Route path='/absen-history' element={<Absen_history />}></Route>
        <Route path='/leave' element={<Leave />}></Route>
        <Route path='/leave-hd' element={<LeaveHD />}></Route>
      </Routes>
    </div>
  );
}

export default App;
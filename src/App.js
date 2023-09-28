import React from 'react';
import { Routes, Router, Route } from 'react-router-dom';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { Start } from './page/start';
import Home from './page/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Start />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
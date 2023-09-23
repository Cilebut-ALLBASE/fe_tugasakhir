import React from 'react';
import { Routes, Router, Route } from 'react-router-dom';
import { Login } from './page/login/login';
import { home } from './page/home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
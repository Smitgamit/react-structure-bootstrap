import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/AppLayout';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

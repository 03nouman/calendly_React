import React from 'react'
import Navbar from '../components/Navbar';
import LogIn from '../components/LogIn';
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
const Routings = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}

export default Routings

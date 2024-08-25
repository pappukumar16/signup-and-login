import { useState } from "react"
import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Navbar from './components/Navbar';


function App() {

  
  const [isLoggedIn,setisLoggedIn] = useState(false);

  return (
    <div>
    
    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

    <div>
 {
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/dashboard" element={<Dashboard />} />
 </Routes>
 }

    </div>
    
    </div>
  )
}

export default App
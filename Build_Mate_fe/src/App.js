// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Architecture from "./Pages/Architecture";
import Suppliers from "./Pages/Suppliers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Pages/home" element={<Home/>}/>
          <Route path="/Pages/login" element={<Login/>}/>
          <Route path="/Pages/signup" element={<Signup/>}/>
          <Route path="/Pages/about" element={<About/>}/>
          <Route path="/Pages/architecture" element={<Architecture/>}/>
          <Route path="/Pages/suppliers" element={<Suppliers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
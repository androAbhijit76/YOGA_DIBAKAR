// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./Pages/Layout/Wrapper/Wrapper";
import Home from "./Pages/CMS/Home/Home";
import AboutUs from "./Pages/CMS/AboutUs/AboutUs"; 
import "./App.css";
import Contact from "./Pages/CMS/Contact/Contact"; 



export default function App() {
  return (
    <BrowserRouter>
      <Wrapper> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/con" element={<Contact />} />
        </Routes> 
        
      </Wrapper>
    </BrowserRouter>
  );
}









































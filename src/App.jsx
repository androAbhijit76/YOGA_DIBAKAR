// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./Pages/Layout/Wrapper/Wrapper";
import Home from "./Pages/CMS/Home/Home";
import AboutUs from "./Pages/CMS/AboutUs/AboutUs"; 
import "./App.css";
import Contact from "./Pages/CMS/Contact/Contact"; 
import CourseSection from "./Pages/CMS/CourseSection/CourseSection";
// import YogaTypesDetails from "./Pages/CMS/YogaTypesDetails/YogaTypesDetails"; 
import YogaTypesDetails from "./Pages/CMS/YogaTypesDetails/YogaTypesDetails";
// import CourseDetails from "./CourseDetails/CourseDetails";  
import CourseDetailsPage from "./Pages/CMS/CouseDetailsPage/CourseDetailsPage";


export default function App() {
  return (
    <BrowserRouter>
      <Wrapper> 
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/con" element={<Contact />} /> 
          <Route path="/course" element={<CourseSection/>}/> 
          <Route path="/yogaTypesDetails/yoga/:id" element={<YogaTypesDetails />} />  
          <Route path="/courseDetailsPage/course/:id" element={<CourseDetailsPage />} />



        </Routes> 
        
      </Wrapper>
    </BrowserRouter>
  );
}









































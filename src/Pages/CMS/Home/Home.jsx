// // import React from 'react'

// // import Animated from "../Animated/Animated";
// import { useEffect } from "react";
// import Banner from "../Banner/Banner";
// import Benefits from "../Benefits/Benefits";
// import Branches from "../Branches/Branches";
// import Services from "../Services/Services";
// import Teachers from "../Teachers/Teachers";
// import YogaTypes from "../YogaTypes/YogaTypes";
// // import AllCoursesSection from "../AllCoursesSection/AllCoursesSection";
// // import CourseCard from "../CourseCard/CourseCard";
// // import Video from "../Viedo/Viedo";
// // import Video from "../Viedo/Viedo";


// export default function Home() {   

  
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
//   return (
//    <>
//     <Banner/>  
//     <Benefits/> 
//     {/* <Animated/> */} 
//     {/* <Video/> */}  
//     <Services/>
    
//    {/* <CourseCard/> */} 
//    {/* <AllCoursesSection/> */}   
//    <YogaTypes/> 
//    <Branches/>
//    <Teachers/>
//    </>
    
//   )
// }











import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Branches from "../Branches/Branches";
import Services from "../Services/Services";
import Teachers from "../Teachers/Teachers";
import YogaTypes from "../YogaTypes/YogaTypes";

// Optional: If you use MUI or FontAwesome icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // if using MUI

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Benefits />
      <Services />
      <YogaTypes />
      <Branches />
      <Teachers />

      {/* Fixed WhatsApp Icon */}  
      
      <a
        href="https://wa.me/919339058372" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <WhatsAppIcon style={{ fontSize: 32 }} />
      </a>
    </>
  );
}

// import React from 'react'

// import Animated from "../Animated/Animated";
import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Branches from "../Branches/Branches";
import Services from "../Services/Services";
// import Video from "../Viedo/Viedo";
// import Video from "../Viedo/Viedo";


export default function Home() {   

  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
    <Banner/>  
    <Benefits/> 
    {/* <Animated/> */} 
    {/* <Video/> */}  
    <Services/>
    <Branches/>
   
   </>
    
  )
}

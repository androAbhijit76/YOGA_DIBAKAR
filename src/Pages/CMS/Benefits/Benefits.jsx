// // import React from 'react'

// import { Box,  Typography } from "@mui/material";
// import { Grid } from '@mui/material';

// export default function Benefits() {
//   return (
//     <>
//     <Box mt={2}  
//     sx={{
//         width: "100%",
//         height: "70vh",
//         overflowX: "hidden",
//         overflowY: "hidden",
//       }}
//     >

//     <Typography
//           mt={2}
//           sx={{ color:"#800080", textAlign: "center" }}
//           variant="h3" 
//           data-aos="fade-up"
//      data-aos-duration="3000"
//         >
//           BENEFITS OF YOGA
//         </Typography>   
//         <Typography 
//          mt={2}
//          sx={{ color:"black", textAlign: "center" }}
//          variant="h5" >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being.Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.Yoga is more than just a physical exercise; it is a holistic practice that unites the mind, body, and spirit.
//         </Typography>

//         <Grid container> 
//             <Grid item md={6}>  


//                 <Grid item md={6}>

//                 </Grid>

//             </Grid>

//         </Grid>

//     </Box>
    
//     </>
//   )
// }













// // import React from 'react';
// import { Box, Typography, Grid, CardMedia } from '@mui/material';
// import { Card } from 'react-bootstrap'; 
// import { LiaHandPointRightSolid } from "react-icons/lia";


// export default function Benefits() {
//   return (
//     <Box
//       mt={2}
//       sx={{
//         width: '100%',
//         minHeight: '45vh', // Use minHeight instead of height for better responsiveness
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center', // Center content vertically
//         alignItems: 'center', // Center content horizontally
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         padding: { xs: '20px', md: '0' }, // Add padding for smaller screens
//       }}
//     >
//       {/* Title */}
//       <Typography
//         sx={{
//           color: '#800080',
//           textAlign: 'center',
//           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
//         }}
//         variant="h3"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         BENEFITS OF YOGA
//       </Typography>

//       {/* Description */}
//       <Typography
//         mt={2}
//         sx={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
//           maxWidth: { xs: '90%', sm: '80%', md: '70%' }, // Limit width for better readability
//         }}
//         variant="h5"
//       >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone. 
//       </Typography>

//       {/* Grid for additional content (if needed) */}
//       <Grid container sx={{ mt: 4, justifyContent: 'left' }}>
//         <Grid item xs={12} md={5}>
           
//            <Card sx={{ maxWidth: 345 }}>
//                   <CardMedia
//                     sx={{ height:"70vh"}}
//                     title="green iguana"
//                     component="img"
//                     image="/public/img/benefitY.jpg"
//                   />
//            </Card>
//         </Grid>  

//         <Grid item={6}>
//     <Typography ml={20} mt={6} variant='h4'>
//     <LiaHandPointRightSolid />
//     Improves Physical Health 
    


//     </Typography> 
//     <Typography ml={20} mt={6} variant='h4'>
//     <LiaHandPointRightSolid />

//     Reduces Stress and Anxiety


//     </Typography>
//     <Typography ml={20} mt={6} variant='h4'>
//     <LiaHandPointRightSolid />
//     Enhances Mental Clarity and Focus



//     </Typography>
//     <Typography ml={20} mt={6} variant='h4'>
//     <LiaHandPointRightSolid />
//     Promotes Emotional Well-Being


//     </Typography>
//     <Typography ml={20} mt={6} variant='h4'>
//     <LiaHandPointRightSolid />
//     Increases Energy Levels



//     </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }   



























// // import React from 'react';
// import { Box, Typography, Grid, CardMedia } from '@mui/material';
// import { Card } from 'react-bootstrap';
// import { LiaHandPointRightSolid } from "react-icons/lia";

// export default function Benefits() {
//   return (
//     <Box
//       mt={2}
//       sx={{
//         width: '100%',
//         minHeight: 'auto', // Use auto for better responsiveness
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         padding: { xs: '20px', md: '40px' }, // Adjust padding for different devices
//       }}
//     >
//       {/* Title */}
//       <Typography
//         sx={{
//           color: '#800080',
//           textAlign: 'center',
//           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
//         }}
//         variant="h3"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         BENEFITS OF YOGA
//       </Typography>

//       {/* Description */}
//       <Typography
//         mt={2}
//         sx={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' }, // Responsive font size
//           maxWidth: { xs: '90%', sm: '80%', md: '70%' }, // Limit width for better readability
//         }}
//         variant="h5"
//       >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.
//       </Typography>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={4} // Add spacing between grid items
//         sx={{
//           mt: 4,
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: { xs: '10px', md: '20px' }, // Adjust padding for different devices
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={5}>
//           <Card sx={{ maxWidth: '100%', height: 'auto' }}>
//             <CardMedia
//               sx={{ height: { xs: '300px', sm: '400px', md: '500px' }, objectFit: 'cover' }} // Responsive image height
//               title="Yoga Benefits"
//               component="img"
//               image="/public/img/benefitY.jpg" // Replace with your image path
//               alt="Yoga Benefits"
//             />
//           </Card>
//         </Grid>

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6} >
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, left-align on larger screens
//               gap: { xs: 2, md: 3 }, // Add gap between items
//             }}
//           >
//             {/* Benefit 1 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Improves Physical Health
//             </Typography>

//             {/* Benefit 2 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Reduces Stress and Anxiety
//             </Typography>

//             {/* Benefit 3 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Enhances Mental Clarity 
//             </Typography>

//             {/* Benefit 4 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Promotes Emotional Well-Being
//             </Typography>

//             {/* Benefit 5 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Increases Energy Levels
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




























// // import React from 'react';
// import { Box, Typography, Grid, CardMedia } from '@mui/material';
// import { Card } from 'react-bootstrap';
// import { LiaHandPointRightSolid } from "react-icons/lia";

// export default function Benefits() {
//   return (
//     <Box
//       mt={0.1}
//       sx={{ 
//         backgroundColor:"#D3D3D3",
//         width: '100%',
//         minHeight: 'auto', // Use auto for better responsiveness
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         padding: { xs: '20px', md: '40px' }, // Adjust padding for different devices
//       }}
//     >
//       {/* Title */}
//       <Typography
//         sx={{
//           color: '#800080',
//           textAlign: 'center',
//           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
//         }}
//         variant="h3"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         BENEFITS OF YOGA
//       </Typography>

//       {/* Description */}
//       <Typography
//         mt={2}
//         sx={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' }, // Responsive font size
//           maxWidth: { xs: '90%', sm: '80%', md: '70%' }, // Limit width for better readability
//         }}
//         variant="h5"
//       >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.
//       </Typography>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={4} // Add spacing between grid items
//         sx={{
//           mt: 4,
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: { xs: '10px', md: '20px' }, // Adjust padding for different devices
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={5}>
//           <Card sx={{ maxWidth: '100%', height: 'auto' }}>
//             <CardMedia
//               sx={{ height: { xs: '300px', sm: '400px', md: '500px' }, objectFit: 'cover' }} // Responsive image height
//               title="Yoga Benefits"
//               component="img"
//               image="/public/img/benefitY.jpg" // Replace with your image path
//               alt="Yoga Benefits"
//             />
//           </Card>
//         </Grid>

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, left-align on larger screens
//               gap: { xs: 2, md: 3 }, // Add gap between items
//               marginLeft: { xs: 0, md: '40px' }, // Add space between image and text on larger screens
//             }}
//           >
//             {/* Benefit 1 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem',color:"#800080" } }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }}  
//               />
//               Improves Physical Health
//             </Typography>

//             {/* Benefit 2 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' ,color:"#800080"} }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Reduces Stress and Anxiety
//             </Typography>

//             {/* Benefit 3 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' ,color:"#800080"} }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Enhances Mental Focus
//             </Typography>

//             {/* Benefit 4 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' ,color:"#800080"} }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Promotes Emotional Well-Being
//             </Typography>

//             {/* Benefit 5 */}
//             <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' ,color:"#800080"} }}>
//               <LiaHandPointRightSolid style={{ marginRight: '10px' }} />
//               Increases Energy Levels
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }   























// import { Box, Typography, Grid, CardMedia } from '@mui/material';
// import { Card } from 'react-bootstrap';
// import { LiaHandPointRightSolid } from "react-icons/lia";
// import { Reveal } from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react";

// // Define a custom animation
// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// export default function Benefits() {
//   return (
//     <Box
//       mt={0.1}
//       sx={{ 
//         backgroundColor:"#D3D3D3",
//         width: '100%',
//         minHeight: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         padding: { xs: '20px', md: '40px' },
//       }}
//     >
//       {/* Title */}
//       <Typography
//         sx={{
//           color: '#800080',
//           textAlign: 'center',
//           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//         }}
//         variant="h3"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         BENEFITS OF YOGA
//       </Typography>

//       {/* Description */}
//       <Typography
//         mt={2}
//         sx={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' },
//           maxWidth: { xs: '90%', sm: '80%', md: '70%' },
//         }}
//         variant="h5"
//       >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.
//       </Typography>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           mt: 4,
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: { xs: '10px', md: '20px' },
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={5}>
//           <Card sx={{ maxWidth: '100%', height: 'auto' }}>
//             <CardMedia
//               sx={{ height: { xs: '300px', sm: '400px', md: '500px' }, objectFit: 'cover' }}
//               title="Yoga Benefits"
//               component="img"
//               image="/public/img/benefitY.jpg"
//               alt="Yoga Benefits"
//             />
//           </Card>
//         </Grid>

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: { xs: 'center', md: 'flex-start' },
//               gap: { xs: 2, md: 3 },
//               marginLeft: { xs: 0, md: '40px' },
//             }}
//           >
//             {/* Benefit 1 */}
//             <Reveal keyframes={customAnimation} duration={1200} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#800080', fontWeight: 'bold' }}>
//                 <LiaHandPointRightSolid style={{ marginRight: '10px', color: '#800080' }} />
//                 Improves Physical Health
//               </Typography>
//             </Reveal>

//             {/* Benefit 2 */}
//             <Reveal keyframes={customAnimation} duration={1400} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#800080', fontWeight: 'bold' }}>
//                 <LiaHandPointRightSolid style={{ marginRight: '10px', color: '#800080' }} />
//                 Reduces Stress and Anxiety
//               </Typography>
//             </Reveal>

//             {/* Benefit 3 */}
//             <Reveal keyframes={customAnimation} duration={1600} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#800080', fontWeight: 'bold' }}>
//                 <LiaHandPointRightSolid style={{ marginRight: '10px', color: '#800080' }} />
//                 Enhances Mental Focus
//               </Typography>
//             </Reveal>

//             {/* Benefit 4 */}
//             <Reveal keyframes={customAnimation} duration={1800} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#800080', fontWeight: 'bold' }}>
//                 <LiaHandPointRightSolid style={{ marginRight: '10px', color: '#800080' }} />
//                 Promotes Emotional Well-Being
//               </Typography>
//             </Reveal>

//             {/* Benefit 5 */}
//             <Reveal keyframes={customAnimation} duration={2000} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#800080', fontWeight: 'bold' }}>
//                 <LiaHandPointRightSolid style={{ marginRight: '10px', color: '#800080' }} />
//                 Increases Energy Levels
//               </Typography>
//             </Reveal>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


















// import { Box, Typography, Grid, CardMedia } from '@mui/material';
// import { Card } from 'react-bootstrap';
// // import { LiaHandPointRightSolid } from "react-icons/lia";
// import { Reveal } from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react"; 
// import { FaCheck } from "react-icons/fa";


// // Define a custom animation
// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// export default function Benefits() {
//   return (
//     <Box
//       mt={0.1}
//       sx={{ 
//         backgroundColor:"#D3D3D3",
//         width: '100%',
//         minHeight: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflowX: 'hidden',
//         overflowY: 'hidden',
//         padding: { xs: '20px', md: '40px' },
//       }}
//     >
//       {/* Title */}
//       <Typography
//         sx={{
//           color: '#800080',
//           textAlign: 'center',
//           fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//         }}
//         variant="h3"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         BENEFITS OF YOGA
//       </Typography>

//       {/* Description */}
//       <Typography
//         mt={2}
//         sx={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' },
//           maxWidth: { xs: '90%', sm: '80%', md: '70%' },
//         }}
//         variant="h5"
//       >
//         Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.
//       </Typography>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           mt: 4,
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: { xs: '10px', md: '20px' },
//         }}
//       >
//         {/* Image Section */}
//           <Grid item xs={12} md={5}>
//           <Card sx={{ maxWidth: '100%', height: 'auto' }}>
//             <CardMedia
//               sx={{ height: { xs: '300px', sm: '400px', md: '500px' }, objectFit: 'cover' }}
//               title="Yoga Benefits"
//               component="img"
//               image="/img/benefitY.jpg"
//               alt="Yoga Benefits"
//             />
//           </Card>
//         </Grid> 




//         {/* Video Section */}
       


        

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start', // Ensure items start from the same position
//               gap: { xs: 2, md: 3 },
//               marginLeft: { xs: 0, md: '40px' },
//             }}
//           >
//             {/* Benefit 1 */}
//             <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
//                 <FaCheck  style={{ marginRight: '10px', color: 'green', minWidth: '24px' }}/>
                
//                 Improves Physical Health
//               </Typography>
//             </Reveal>

//             {/* Benefit 2 */}
//             <Reveal keyframes={customAnimation} duration={1200} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
//                 <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
//                 Reduces Stress and Anxiety
//               </Typography>
//             </Reveal>

//             {/* Benefit 3 */}
//             <Reveal keyframes={customAnimation} duration={1400} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
//                 <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
//                 Enhances Mental Focus
//               </Typography>
//             </Reveal>

//             {/* Benefit 4 */}
//             <Reveal keyframes={customAnimation} duration={1600} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
//                 <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
//                 Promotes Emotional Well-Being
//               </Typography>
//             </Reveal>

//             {/* Benefit 5 */}
//             <Reveal keyframes={customAnimation} duration={1800} triggerOnce>
//               <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
//                 <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
//                 Increases Energy Levels
//               </Typography>
//             </Reveal>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }            









































// import { Box, Typography, Grid, CardMedia, Paper, useTheme } from '@mui/material';
// import { FaCheck } from "react-icons/fa";
// import { Reveal } from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react"; 

// // Custom animations
// const fadeInLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const fadeInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

// export default function Benefits() {
//   const theme = useTheme();
  
//   return (
//     <Box
//       sx={{ 
//         background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
//         width: '100%',
//         minHeight: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden',
//         padding: { xs: '20px', md: '60px' },
//         position: 'relative',
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '10px',
//           background: 'linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)',
//         }
//       }}
//     >
//       {/* Decorative elements */}
//       <Box sx={{
//         position: 'absolute',
//         top: '20%',
//         left: '5%',
//         width: '100px',
//         height: '100px',
//         borderRadius: '50%',
//         background: 'rgba(142, 45, 226, 0.1)',
//         filter: 'blur(30px)',
//         zIndex: 0,
//         [theme.breakpoints.down('md')]: {
//           display: 'none'
//         }
//       }} />
      
//       <Box sx={{
//         position: 'absolute',
//         bottom: '10%',
//         right: '5%',
//         width: '150px',
//         height: '150px',
//         borderRadius: '50%',
//         background: 'rgba(74, 0, 224, 0.1)',
//         filter: 'blur(40px)',
//         zIndex: 0,
//         [theme.breakpoints.down('md')]: {
//           display: 'none'
//         }
//       }} />

//       {/* Title */}
//       <Reveal keyframes={fadeInLeft} triggerOnce>
//         <Typography
//           sx={{
//             color: '#4A00E0',
//             textAlign: 'center',
//             fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
//             fontWeight: 'bold',
//             mb: 2,
//             position: 'relative',
//             '&:after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '-10px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '100px',
//               height: '4px',
//               background: 'linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)',
//               borderRadius: '2px'
//             }
//           }}
//           variant="h2"
//         >
//           Benefits of Yoga
//         </Typography>
//       </Reveal>

//       {/* Description */}
//       <Reveal keyframes={fadeInRight} triggerOnce>
//         <Typography
//           sx={{
//             color: '#555',
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
//             maxWidth: { xs: '90%', sm: '80%', md: '70%' },
//             lineHeight: 1.6,
//             mb: 4
//           }}
//           variant="body1"
//         >
//           Discover the transformative power of yoga - an ancient practice that harmonizes body, mind, and spirit through physical postures, breathing techniques, and meditation.
//         </Typography>
//       </Reveal>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={6}
//         sx={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'relative',
//           zIndex: 1
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={6}>
//           <Reveal keyframes={fadeInLeft} triggerOnce>
//             <Paper
//               elevation={6}
//               sx={{
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-5px)',
//                   boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
//                 }
//               }}
//             >
//               <CardMedia
//                 sx={{ 
//                   height: { xs: '300px', sm: '400px', md: '500px' },
//                   objectFit: 'cover',
//                   animation: `${pulse} 8s infinite ease-in-out`
//                 }}
//                 component="img"
//                 image="/img/benefitY.jpg"
//                 alt="Woman practicing yoga"
//               />
//             </Paper>
//           </Reveal>
//         </Grid>

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 3,
//               padding: { xs: '20px', md: '0 20px' }
//             }}
//           >
//             {[
//               {
//                 title: "Improves Physical Health",
//                 description: "Enhances flexibility, strength, and posture while reducing chronic pain."
//               },
//               {
//                 title: "Reduces Stress & Anxiety",
//                 description: "Lowers cortisol levels and promotes relaxation through mindful breathing."
//               },
//               {
//                 title: "Enhances Mental Focus",
//                 description: "Sharpens concentration and cognitive function through meditation."
//               },
//               {
//                 title: "Emotional Well-Being",
//                 description: "Balances emotions and fosters self-awareness and acceptance."
//               },
//               {
//                 title: "Boosts Energy Levels",
//                 description: "Increases vitality by improving circulation and oxygen flow."
//               }
//             ].map((benefit, index) => (
//               <Reveal 
//                 key={index} 
//                 keyframes={fadeInRight} 
//                 duration={600 + (index * 200)} 
//                 triggerOnce
//               >
//                 <Paper
//                   elevation={2}
//                   sx={{
//                     padding: '20px',
//                     borderRadius: '12px',
//                     background: 'white',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateX(5px)',
//                       background: 'linear-gradient(90deg, rgba(142, 45, 226, 0.05) 0%, rgba(74, 0, 224, 0.05) 100%)'
//                     }
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
//                     <Box sx={{
//                       background: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
//                       borderRadius: '50%',
//                       width: '36px',
//                       height: '36px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       mr: 2,
//                       color: 'white'
//                     }}>
//                       <FaCheck size={16} />
//                     </Box>
//                     <Box>
//                       <Typography 
//                         sx={{ 
//                           fontSize: '1.3rem', 
//                           fontWeight: '600',
//                           color: '#333',
//                           mb: 1
//                         }}
//                       >
//                         {benefit.title}
//                       </Typography>
//                       <Typography 
//                         sx={{ 
//                           color: '#666',
//                           fontSize: '0.95rem',
//                           lineHeight: 1.5
//                         }}
//                       >
//                         {benefit.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Paper>
//               </Reveal>
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }






































// import { Box, Typography, Grid, CardMedia, Paper, useTheme } from '@mui/material';
// import { FaCheck } from "react-icons/fa";
// import { Reveal } from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react"; 

// // Custom animations
// const fadeInLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const fadeInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const float = keyframes`
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// `;

// export default function Benefits() {
//   const theme = useTheme();
  
//   return (
//     <Box
//       sx={{ 
//         background: 'linear-gradient(to bottom, #f9f5ff 0%, #f0e9ff 100%)',
//         width: '100%',
//         minHeight: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden',
//         padding: { xs: '30px', md: '80px' },
//         position: 'relative',
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '6px',
//           background: 'linear-gradient(90deg, #4b0082 0%, #8a2be2 100%)',
//           opacity: 0.8
//         }
//       }}
//     >
//       {/* Decorative elements */}
//       <Box sx={{
//         position: 'absolute',
//         top: '15%',
//         left: '10%',
//         width: '120px',
//         height: '120px',
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(75, 0, 130, 0.1) 0%, rgba(75, 0, 130, 0) 70%)',
//         zIndex: 0,
//         animation: `${float} 8s ease-in-out infinite`,
//         [theme.breakpoints.down('md')]: {
//           display: 'none'
//         }
//       }} />
      
//       <Box sx={{
//         position: 'absolute',
//         bottom: '15%',
//         right: '10%',
//         width: '150px',
//         height: '150px',
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0) 70%)',
//         zIndex: 0,
//         animation: `${float} 10s ease-in-out infinite`,
//         animationDelay: '1s',
//         [theme.breakpoints.down('md')]: {
//           display: 'none'
//         }
//       }} />

//       {/* Title */}
//       <Reveal keyframes={fadeInLeft} triggerOnce>
//         <Typography
//           sx={{
//             color: '#4b0082',
//             textAlign: 'center',
//             fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
//             fontWeight: 500,
//             mb: 3,
//             position: 'relative',
//             fontFamily: '"Playfair Display", serif',
//             letterSpacing: '0.5px',
//             '&:after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '-15px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '100px',
//               height: '3px',
//               background: 'linear-gradient(90deg, #4b0082 0%, #8a2be2 100%)',
//               borderRadius: '2px'
//             }
//           }}
//           variant="h2"
//         >
//           Transform Through Yoga
//         </Typography>
//       </Reveal>

//       {/* Description */}
//       <Reveal keyframes={fadeInRight} triggerOnce>
//         <Typography
//           sx={{
//             color: '#5d3a9b',
//             textAlign: 'center',
//             fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
//             maxWidth: { xs: '90%', sm: '80%', md: '70%' },
//             lineHeight: 1.7,
//             mb: 6,
//             fontFamily: '"Lora", serif',
//             fontWeight: 400
//           }}
//           variant="body1"
//         >
//           Yoga is more than physical exercise - it's a sacred journey of self-discovery. 
//           Through mindful movement and breath awareness, we awaken our highest potential.
//         </Typography>
//       </Reveal>

//       {/* Grid for Image and Benefits List */}
//       <Grid
//         container
//         spacing={6}
//         sx={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'relative',
//           zIndex: 1
//         }}
//       >
//         {/* Image Section */}
//         <Grid item xs={12} md={6}>
//           <Reveal keyframes={fadeInLeft} triggerOnce>
//             <Paper
//               elevation={4}
//               sx={{
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 transition: 'all 0.5s ease',
//                 boxShadow: '0 10px 30px rgba(75, 0, 130, 0.15)',
//                 '&:hover': {
//                   transform: 'translateY(-8px)',
//                   boxShadow: '0 15px 40px rgba(75, 0, 130, 0.2)'
//                 }
//               }}
//             >
//               <CardMedia
//                 sx={{ 
//                   height: { xs: '350px', sm: '450px', md: '550px' },
//                   objectFit: 'cover',
//                   filter: 'brightness(1.02) contrast(1.05)'
//                 }}
//                 component="img"
//                 image="/img/benefitY.jpg"
//                 alt="Serene yoga practice"
//               />
//             </Paper>
//           </Reveal>
//         </Grid>

//         {/* Benefits List Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 4,
//               padding: { xs: '20px', md: '0 20px' }
//             }}
//           >
//             {[
//               {
//                 title: "Sacred Movement",
//                 description: "Honor your body through asanas that build strength, flexibility and grace."
//               },
//               {
//                 title: "Mindful Awareness",
//                 description: "Cultivate present-moment awareness through conscious breathing techniques."
//               },
//               {
//                 title: "Emotional Harmony",
//                 description: "Release stored tension and create space for peace and contentment."
//               },
//               {
//                 title: "Spiritual Connection",
//                 description: "Deepen your relationship with your true essence and universal energy."
//               },
//               {
//                 title: "Energetic Alignment",
//                 description: "Balance your chakras and awaken your vital life force energy (prana)."
//               }
//             ].map((benefit, index) => (
//               <Reveal 
//                 key={index} 
//                 keyframes={fadeInRight} 
//                 duration={600 + (index * 200)} 
//                 triggerOnce
//               >
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     padding: '24px',
//                     borderRadius: '10px',
//                     background: 'rgba(255, 255, 255, 0.8)',
//                     transition: 'all 0.4s ease',
//                     borderLeft: '4px solid #8a2be2',
//                     '&:hover': {
//                       transform: 'translateX(8px)',
//                       background: 'rgba(255, 255, 255, 0.95)',
//                       boxShadow: '0 8px 25px rgba(138, 43, 226, 0.15)',
//                       borderLeft: '4px solid #4b0082'
//                     }
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
//                     <Box sx={{
//                       background: 'linear-gradient(135deg, #4b0082 0%, #8a2be2 100%)',
//                       borderRadius: '50%',
//                       width: '42px',
//                       height: '42px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexShrink: 0,
//                       mr: 3,
//                       color: 'white',
//                       boxShadow: '0 4px 12px rgba(75, 0, 130, 0.3)'
//                     }}>
//                       <FaCheck size={18} />
//                     </Box>
//                     <Box>
//                       <Typography 
//                         sx={{ 
//                           fontSize: '1.4rem', 
//                           fontWeight: 500,
//                           color: '#4b0082',
//                           mb: 1.5,
//                           fontFamily: '"Playfair Display", serif'
//                         }}
//                       >
//                         {benefit.title}
//                       </Typography>
//                       <Typography 
//                         sx={{ 
//                           color: '#5d3a9b',
//                           fontSize: '1.05rem',
//                           lineHeight: 1.7,
//                           fontFamily: '"Lora", serif'
//                         }}
//                       >
//                         {benefit.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Paper>
//               </Reveal>
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



















import { Box, Typography, Grid, CardMedia, Paper, useTheme } from '@mui/material';
import { FaCheck } from "react-icons/fa";
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react"; 

// Custom animations
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default function Benefits() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{ 
        background: 'linear-gradient(to bottom, #f9f5ff 0%, #f0e9ff 100%)',
        width: '100%',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: { 
          xs: '20px 15px', 
          sm: '30px 20px', 
          md: '60px 40px',
          lg: '80px'
        },
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: { xs: '4px', sm: '6px' },
          background: 'linear-gradient(90deg, #4b0082 0%, #8a2be2 100%)',
          opacity: 0.8
        }
      }}
    >
      {/* Decorative elements - hidden on mobile */}
      <Box sx={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: { xs: 0, sm: '100px', md: '120px' },
        height: { xs: 0, sm: '100px', md: '120px' },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(75, 0, 130, 0.1) 0%, rgba(75, 0, 130, 0) 70%)',
        zIndex: 0,
        animation: `${float} 8s ease-in-out infinite`,
        display: { xs: 'none', sm: 'block' }
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: { xs: 0, sm: '120px', md: '150px' },
        height: { xs: 0, sm: '120px', md: '150px' },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0) 70%)',
        zIndex: 0,
        animation: `${float} 10s ease-in-out infinite`,
        animationDelay: '1s',
        display: { xs: 'none', sm: 'block' }
      }} />

      {/* Title */}
      <Reveal keyframes={fadeInLeft} triggerOnce>
        <Typography
          sx={{
            color: '#4b0082',
            textAlign: 'center',
            fontSize: { 
              xs: '1.8rem', 
              sm: '2.2rem', 
              md: '2.8rem',
              lg: '3.2rem'
            },
            fontWeight: 500,
            mb: { xs: 2, sm: 3 },
            position: 'relative',
            fontFamily: '"Playfair Display", serif',
            letterSpacing: { xs: '0.3px', sm: '0.5px' },
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: '80px', sm: '100px' },
              height: '3px',
              background: 'linear-gradient(90deg, #4b0082 0%, #8a2be2 100%)',
              borderRadius: '2px'
            }
          }}
          variant="h2"
        >
          Transform Through Yoga
        </Typography>
      </Reveal>

      {/* Description */}
      <Reveal keyframes={fadeInRight} triggerOnce>
        <Typography
          sx={{
            color: '#5d3a9b',
            textAlign: 'center',
            fontSize: { 
              xs: '1rem', 
              sm: '1.1rem', 
              md: '1.2rem',
              lg: '1.3rem'
            },
            maxWidth: { 
              xs: '95%', 
              sm: '90%', 
              md: '80%',
              lg: '70%'
            },
            lineHeight: { xs: 1.6, sm: 1.7 },
            mb: { xs: 4, sm: 5, md: 6 },
            fontFamily: '"Lora", serif',
            fontWeight: 400,
            px: { xs: 1, sm: 0 }
          }}
          variant="body1"
        >
          Yoga is more than physical exercise - it's a sacred journey of self-discovery. 
          Through mindful movement and breath awareness, we awaken our highest potential.
        </Typography>
      </Reveal>

      {/* Grid for Image and Benefits List */}
      <Grid
        container
        spacing={{ xs: 4, sm: 5, md: 6 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          px: { xs: 1, sm: 2 }
        }}
      >
        {/* Image Section - full width on mobile, half on larger screens */}
        <Grid item xs={12} md={6}>
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <Paper
              elevation={4}
              sx={{
                borderRadius: { xs: '8px', sm: '12px' },
                overflow: 'hidden',
                transition: 'all 0.5s ease',
                boxShadow: '0 10px 30px rgba(75, 0, 130, 0.15)',
                '&:hover': {
                  transform: { xs: 'none', sm: 'translateY(-8px)' },
                  boxShadow: { xs: '0 10px 30px rgba(75, 0, 130, 0.15)', sm: '0 15px 40px rgba(75, 0, 130, 0.2)' }
                }
              }}
            >
              <CardMedia
                sx={{ 
                  height: { 
                    xs: '280px', 
                    sm: '350px', 
                    md: '450px',
                    lg: '550px'
                  },
                  objectFit: 'cover',
                  filter: 'brightness(1.02) contrast(1.05)'
                }}
                component="img"
                image="/img/benefitY.jpg"
                alt="Serene yoga practice"
              />
            </Paper>
          </Reveal>
        </Grid>

        {/* Benefits List Section - full width on mobile, half on larger screens */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2.5, sm: 3, md: 4 },
              padding: { xs: '10px', sm: '15px', md: '0 20px' }
            }}
          >
            {[
              {
                title: "Sacred Movement",
                description: "Honor your body through asanas that build strength, flexibility and grace."
              },
              {
                title: "Mindful Awareness",
                description: "Cultivate present-moment awareness through conscious breathing techniques."
              },
              {
                title: "Emotional Harmony",
                description: "Release stored tension and create space for peace and contentment."
              },
              {
                title: "Spiritual Connection",
                description: "Deepen your relationship with your true essence and universal energy."
              },
              {
                title: "Energetic Alignment",
                description: "Balance your chakras and awaken your vital life force energy (prana)."
              }
            ].map((benefit, index) => (
              <Reveal 
                key={index} 
                keyframes={fadeInRight} 
                duration={600 + (index * 200)} 
                triggerOnce
              >
                <Paper
                  elevation={0}
                  sx={{
                    padding: { 
                      xs: '16px 12px', 
                      sm: '20px 16px', 
                      md: '24px 20px'
                    },
                    borderRadius: { xs: '8px', sm: '10px' },
                    background: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.4s ease',
                    borderLeft: '4px solid #8a2be2',
                    '&:hover': {
                      transform: { xs: 'none', sm: 'translateX(8px)' },
                      background: 'rgba(255, 255, 255, 0.95)',
                      boxShadow: { xs: 'none', sm: '0 8px 25px rgba(138, 43, 226, 0.15)' },
                      borderLeft: { xs: '4px solid #8a2be2', sm: '4px solid #4b0082' }
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    flexDirection: { xs: 'column', sm: 'row' }
                  }}>
                    <Box sx={{
                      background: 'linear-gradient(135deg, #4b0082 0%, #8a2be2 100%)',
                      borderRadius: '50%',
                      width: { xs: '36px', sm: '42px' },
                      height: { xs: '36px', sm: '42px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mr: { xs: 0, sm: 3 },
                      mb: { xs: 1.5, sm: 0 },
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(75, 0, 130, 0.3)'
                    }}>
                      <FaCheck size={18} />
                    </Box>
                    <Box>
                      <Typography 
                        sx={{ 
                          fontSize: { 
                            xs: '1.2rem', 
                            sm: '1.3rem', 
                            md: '1.4rem'
                          }, 
                          fontWeight: 500,
                          color: '#4b0082',
                          mb: { xs: 1, sm: 1.5 },
                          fontFamily: '"Playfair Display", serif',
                          textAlign: { xs: 'center', sm: 'left' }
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#5d3a9b',
                          fontSize: { 
                            xs: '0.9rem', 
                            sm: '1rem', 
                            md: '1.05rem'
                          },
                          lineHeight: { xs: 1.5, sm: 1.7 },
                          fontFamily: '"Lora", serif',
                          textAlign: { xs: 'center', sm: 'left' }
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Reveal>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
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


















import { Box, Typography, Grid, CardMedia } from '@mui/material';
import { Card } from 'react-bootstrap';
// import { LiaHandPointRightSolid } from "react-icons/lia";
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react"; 
import { FaCheck } from "react-icons/fa";


// Define a custom animation
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function Benefits() {
  return (
    <Box
      mt={0.1}
      sx={{ 
        backgroundColor:"#D3D3D3",
        width: '100%',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
        padding: { xs: '20px', md: '40px' },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: '#800080',
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
        variant="h3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        BENEFITS OF YOGA
      </Typography>

      {/* Description */}
      <Typography
        mt={2}
        sx={{
          color: 'black',
          textAlign: 'center',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' },
          maxWidth: { xs: '90%', sm: '80%', md: '70%' },
        }}
        variant="h5"
      >
        Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall health and well-being. Whether you are looking to improve your physical fitness, reduce stress, or find inner peace, yoga offers something for everyone.
      </Typography>

      {/* Grid for Image and Benefits List */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: 4,
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '10px', md: '20px' },
        }}
      >
        {/* Image Section */}
          <Grid item xs={12} md={5}>
          <Card sx={{ maxWidth: '100%', height: 'auto' }}>
            <CardMedia
              sx={{ height: { xs: '300px', sm: '400px', md: '500px' }, objectFit: 'cover' }}
              title="Yoga Benefits"
              component="img"
              image="/img/benefitY.jpg"
              alt="Yoga Benefits"
            />
          </Card>
        </Grid> 




        {/* Video Section */}
       


        

        {/* Benefits List Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // Ensure items start from the same position
              gap: { xs: 2, md: 3 },
              marginLeft: { xs: 0, md: '40px' },
            }}
          >
            {/* Benefit 1 */}
            <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
                <FaCheck  style={{ marginRight: '10px', color: 'green', minWidth: '24px' }}/>
                
                Improves Physical Health
              </Typography>
            </Reveal>

            {/* Benefit 2 */}
            <Reveal keyframes={customAnimation} duration={1200} triggerOnce>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
                <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
                Reduces Stress and Anxiety
              </Typography>
            </Reveal>

            {/* Benefit 3 */}
            <Reveal keyframes={customAnimation} duration={1400} triggerOnce>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
                <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
                Enhances Mental Focus
              </Typography>
            </Reveal>

            {/* Benefit 4 */}
            <Reveal keyframes={customAnimation} duration={1600} triggerOnce>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
                <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
                Promotes Emotional Well-Being
              </Typography>
            </Reveal>

            {/* Benefit 5 */}
            <Reveal keyframes={customAnimation} duration={1800} triggerOnce>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#36013F', fontWeight: 'bold' }}>
                <FaCheck style={{ marginRight: '10px', color: 'green', minWidth: '24px' }} />
                Increases Energy Levels
              </Typography>
            </Reveal>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
// // import React from 'react';
// import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Animated = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5,   // Trigger when 50% of the component is visible
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices
// //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Check for tablet devices

//   return (
//     <Container>
//       <Box
//         ref={ref}
//         sx={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for others
//           justifyContent: 'space-around',
//           alignItems: 'center',
//           textAlign: 'center',
//           padding: isMobile ? '2rem 0' : '4rem 0', // Adjust padding for mobile
//           background: 'linear-gradient(135deg, #4A00E0, #8E2DE2,#00FFFF )', // Use `background` for gradients

//           gap: isMobile ? '2rem' : '0', // Add gap between items for mobile 
        
//         }}
//       >
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={1000} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{color:"white"}} variant={isMobile ? 'body1' : 'h6'}>Students</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{color:"white"}} variant={isMobile ? 'body1' : 'h6'}>Classes</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{color:"white"}} variant={isMobile ? 'body1' : 'h6'}>Teachers</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={500} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{color:"white"}} variant={isMobile ? 'body1' : 'h6'}>Clients</Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Animated;  



















// // import React from 'react';
// import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Animated = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5,   // Trigger when 50% of the component is visible
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices

//   return (
//     <Container maxWidth={false} sx={{ padding: 0 }}> {/* Remove maxWidth and padding */}
//       <Box
//         ref={ref}
//         sx={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for others
//           justifyContent: 'space-around',
//           alignItems: 'center',
//           textAlign: 'center',
//           padding: isMobile ? '2rem 0' : '4rem 0', // Adjust padding for mobile
//           background: 'linear-gradient(135deg, #4A00E0, #8E2DE2, #00FFFF)', // Gradient background
//           color: 'white', // Ensure text is visible
//           gap: isMobile ? '2rem' : '0', // Add gap between items for mobile
//           width: '100%', // Ensure the Box takes full width
//         }}
//       >
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={1000} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Students</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Classes</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Teachers</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={500} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Clients</Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Animated;  















// // import React from 'react';
// import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Animated = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5,   // Trigger when 50% of the component is visible
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices

//   return (
//     <Container
//       maxWidth={false}
//       sx={{
//         padding: 0, // Remove default padding
//         margin: 0,  // Remove default margin
//         width: '100%', // Ensure the Container takes full width
//       }}
//     >
//       <Box
//         ref={ref}
//         sx={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for others
//           justifyContent: 'space-around',
//           alignItems: 'center',
//           textAlign: 'center',
//           padding: isMobile ? '2rem 0' : '4rem 0', // Adjust padding for mobile
//           background: 'linear-gradient(135deg, #4A00E0, #8E2DE2, #00FFFF)', // Gradient background
//           color: 'white', // Ensure text is visible
//           gap: isMobile ? '2rem' : '0', // Add gap between items for mobile
//           width: '100%', // Ensure the Box takes full width
//         }}
//       >
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={1000} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Students</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Classes</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Teachers</Typography>
//         </Box>
//         <Box>
//           <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//             {inView ? <CountUp end={500} duration={2} suffix="+" /> : '0+'}
//           </Typography>
//           <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Clients</Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Animated;  































// // import React from 'react';
// import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Animated = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5,   // Trigger when 50% of the component is visible
//   });

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for others
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         textAlign: 'center',
//         padding: isMobile ? '2rem 0' : '4rem 0', // Adjust padding for mobile
//         background: 'linear-gradient(135deg, #4A00E0, #8E2DE2, #00FFFF)', // Gradient background
//         color: 'white', // Ensure text is visible
//         gap: isMobile ? '2rem' : '0', // Add gap between items for mobile
//         width: '100vw', // Ensure the Box takes full viewport width
//         margin: 0, // Remove default margin
//         boxSizing: 'border-box', // Ensure padding is included in the width 
//         overflow:'hidden'
//       }}
//     >
//       <Box>
//         <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//           {inView ? <CountUp end={1000} duration={2} suffix="+" /> : '0+'}
//         </Typography>
//         <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Students</Typography>
//       </Box>
//       <Box>
//         <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//           {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
//         </Typography>
//         <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Classes</Typography>
//       </Box>
//       <Box>
//         <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//           {inView ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
//         </Typography>
//         <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Teachers</Typography>
//       </Box>
//       <Box>
//         <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
//           {inView ? <CountUp end={500} duration={2} suffix="+" /> : '0+'}
//         </Typography>
//         <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Clients</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Animated;   




























// import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Animated = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,   // Trigger when 50% of the component is visible
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile devices

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile, row for others
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '2rem 0' : '4rem 0', // Adjust padding for mobile
        background: 'linear-gradient(135deg, #4A00E0, #8E2DE2, #00FFFF)', // Gradient background
        color: 'white', // Ensure text is visible
        gap: isMobile ? '2rem' : '0', // Add gap between items for mobile
        width: '100%', // Use 100% instead of 100vw to avoid overflow
        margin: 0, // Remove default margin
        boxSizing: 'border-box', // Ensure padding is included in the width
      }}
    >
      <Box>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
          {inView ? <CountUp end={1000} duration={2} suffix="+" /> : '0+'}
        </Typography>
        <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Students</Typography>
      </Box>
      <Box>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
          {inView ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
        </Typography>
        <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Classes</Typography>
      </Box>
      <Box>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
          {inView ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
        </Typography>
        <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Teachers</Typography>
      </Box>
      <Box>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: 'white' }}>
          {inView ? <CountUp end={500} duration={2} suffix="+" /> : '0+'}
        </Typography>
        <Typography sx={{ color: 'white' }} variant={isMobile ? 'body1' : 'h6'}>Clients</Typography>
      </Box>
    </Box>
  );
};

export default Animated;
// // import React from 'react'
// import { Box, Breadcrumbs, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// // import HeroCourse from "../HeroCourse/HeroCourse";
// export default function CourseSection() {
//   return (  

//     <>
//  <Box
//   sx={{
//     position: "relative",
//     // height: { xs: "50vh", sm: "60vh", md: "70vh" }, // Adjusted heights  
//     height: { xs: "60vh", sm: "70vh", md: "80vh", lg: "90vh" },

//     minHeight: { xs: 300, sm: 400 }, // Added minimum heights
//     overflow: "hidden",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <Box
//     sx={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundImage: "url(/img/courseb1.jpg)",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundAttachment: { xs: "scroll", sm: "fixed" }, // Disable parallax on mobile
//       zIndex: -1,
//       "&::before": {
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0,0,0,0.3)",
//       },
//     }}
//   />
  
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     style={{
//       width: "100%", // Ensure full width
//       padding: "0 16px", // Add some padding on sides
//     }}
//   >
//     <Container maxWidth="lg">
//       <Typography
//         variant="h2"
//         sx={{
//           color: "white",
//           fontSize: {
//             xs: "2rem",  // Smaller on mobile
//             sm: "3rem",
//             md: "4rem",
//           },
//           fontWeight: 700,
//           textAlign: "center",
//           textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
//           mb: 2,
//           fontFamily: "'Playfair Display', serif",
//           lineHeight: {
//             xs: 1.2,  // Better line height for mobile
//             sm: 1.3,
//           },
//         }}
//       >
//         All Courses
//       </Typography>
      
//       <Breadcrumbs
//               aria-label="breadcrumb"
//               sx={{
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   justifyContent: "center",
//                   flexWrap: "wrap",
//                 },
//               }}
//             >
//               <Link
//                 underline="hover"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                   fontSize: { xs: "0.8rem", sm: "1rem" },
//                   fontWeight: 500,
//                 }}
//                 to="/"
//               >
//                 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                 Home
//               </Link>
//               <Typography
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                   fontSize: { xs: "0.8rem", sm: "1rem" },
//                   fontWeight: 500,
//                 }}
//               >
//                 <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                 Course
//               </Typography>
//             </Breadcrumbs>
//     </Container>
//   </motion.div>
// </Box> 



    
//     </>
//   )
// }
















































// // import React from 'react'
// import { Box, Breadcrumbs, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import SchoolIcon from "@mui/icons-material/School";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import GrainIcon from "@mui/icons-material/Grain";
// import { keyframes } from "@emotion/react";
// // import AllCoursesSection from "../AllCoursesSection/AllCoursesSection";
// import { useEffect } from "react";
// // import TypeCourse from "../TypeCourse/TypeCourse";
// // import CourseCard from "../CourseCard/CourseCard";
// // import HeroCourse from "../HeroCourse/HeroCourse";

// // Floating animation for decorative elements
// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-15px); }
//   100% { transform: translateY(0px); }
// `;   



// export default function CourseSection() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

//   // Responsive values
//   const getResponsiveValue = (mobile, tablet, desktop) => {
//     if (isMobile) return mobile;
//     if (isTablet) return tablet;
//     return desktop;
//   };  
  
  

// useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//         <Box
//         sx={{
//           position: "relative",
//           height: {
//             xs: "70vh",   // Extra small devices (phones)
//             sm: "75vh",   // Small devices (tablets)
//             md: "80vh",   // Medium devices (small laptops)
//             lg: "85vh",   // Large devices (desktops)
//             xl: "90vh"    // Extra large devices
//           },
//           minHeight: {
//             xs: 400,
//             sm: 500,
//             md: 600
//           },
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* Background with parallax effect */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: "url(/img/courseb2.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             backgroundAttachment: { xs: "scroll", sm: "fixed" },
//             zIndex: -2,
//             "&::before": {
//               content: '""',
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             //   background: "linear-gradient(135deg, rgba(25,118,210,0.3) 0%, rgba(0,0,0,0.7) 100%)",
//             },
//           }}
//         />
        
//         {/* Decorative floating elements - only show on larger screens */}
//         {!isMobile && (
//           <>
//             <Box
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.2 }}
//               transition={{ duration: 1.5 }}
//               sx={{
//                 position: "absolute",
//                 top: getResponsiveValue("15%", "20%", "20%"),
//                 left: getResponsiveValue("5%", "10%", "10%"),
//                 fontSize: getResponsiveValue("2rem", "2.5rem", "3rem"),
//                 color: theme.palette.primary.main,
//                 animation: `${float} 6s ease-in-out infinite`,
//                 zIndex: -1,
//               }}
//             >
//               <SchoolIcon fontSize="inherit" />
//             </Box>
            
//             <Box
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.3 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               sx={{
//                 position: "absolute",
//                 top: getResponsiveValue("65%", "60%", "60%"),
//                 right: getResponsiveValue("10%", "15%", "15%"),
//                 fontSize: getResponsiveValue("2.5rem", "3rem", "4rem"),
//                 color: theme.palette.secondary.main,
//                 animation: `${float} 8s ease-in-out infinite`,
//                 zIndex: -1,
//               }}
//             >
//               <StarBorderIcon fontSize="inherit" />
//             </Box>

//             {isDesktop && (
//               <Box
//                 component={motion.div}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.2 }}
//                 transition={{ duration: 1.5, delay: 0.8 }}
//                 sx={{
//                   position: "absolute",
//                   bottom: "10%",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   fontSize: "3rem",
//                   color: theme.palette.warning.main,
//                   animation: `${float} 7s ease-in-out infinite`,
//                   zIndex: -1,
//                 }}
//               >
//                 <GrainIcon fontSize="inherit" />
//               </Box>
//             )}
//           </>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             width: "100%",
//             padding: getResponsiveValue("0 16px", "0 24px", "0 32px"),
//           }}
//         >
//           <Container maxWidth="lg">
//             <Typography
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               variant="h2"
//               sx={{
//                 color: "white",
//                 fontSize: {
//                   xs: "2rem",   // phones
//                   sm: "2.8rem",  // tablets
//                   md: "3.5rem",  // small laptops
//                   lg: "4rem",    // desktops
//                   xl: "4.5rem"   // large desktops
//                 },
//                 fontWeight: 800,
//                 textAlign: "center",
//                 textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
//                 mb: {
//                   xs: 1,
//                   sm: 2
//                 },
//                 fontFamily: "'Playfair Display', serif",
//                 lineHeight: {
//                   xs: 1.1,
//                   sm: 1.2,
//                   md: 1.3
//                 },
//                 px: {
//                   xs: 1,
//                   sm: 0
//                 }
//               }}
//             >
//               Explore Our <span style={{ color: theme.palette.secondary.main }}>Courses</span>
//             </Typography>
            
//             <Typography
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               variant="subtitle1"
//               sx={{
//                 color: "rgba(255,255,255,0.9)",
//                 fontSize: {
//                   xs: "0.9rem",
//                   sm: "1.1rem",
//                   md: "1.2rem"
//                 },
//                 maxWidth: {
//                   xs: "90%",
//                   sm: "80%",
//                   md: "700px"
//                 },
//                 margin: "0 auto",
//                 textAlign: "center",
//                 mb: {
//                   xs: 3,
//                   sm: 4
//                 },
//                 textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
//                 lineHeight: {
//                   xs: 1.4,
//                   sm: 1.5
//                 }
//               }}
//             >
//               Discover a world of knowledge with our expertly crafted courses designed to help you achieve your goals and unlock your potential.
//             </Typography>

         
//             <Breadcrumbs
//               aria-label="breadcrumb"
//               sx={{
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   justifyContent: "center",
//                   flexWrap: "wrap",
//                 },
//               }}
//             >
//               <Link
//                 underline="hover"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                   fontSize: { xs: "0.8rem", sm: "1rem" },
//                   fontWeight: 500,
//                 }}
//                 to="/"
//               >
//                 <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                 Home
//               </Link>
//               <Typography
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                   fontSize: { xs: "0.8rem", sm: "1rem" },
//                   fontWeight: 500,
//                 }}
//               >
//                 <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                 All Courses
//               </Typography>
//             </Breadcrumbs>
//           </Container>
//         </motion.div>
//       </Box>  


//     {/* <AllCoursesSection/> */}
//     </>
//   )
// }



































































import React, { useEffect } from 'react';
import { Box, Breadcrumbs, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SchoolIcon from "@mui/icons-material/School";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GrainIcon from "@mui/icons-material/Grain";
import { keyframes } from "@emotion/react";  
import CourseTypes from '../CourseTypes/CourseTypes';
// import AllCoursesSection from "../AllCoursesSection/AllCoursesSection";

// Floating animation for decorative elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const responsiveValue = (mobile, tablet, desktop, isMobile, isTablet) => {
  return isMobile ? mobile : isTablet ? tablet : desktop;
};

export default function CourseSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "70vh",
            sm: "75vh",
            md: "80vh",
            lg: "85vh",
            xl: "90vh"
          },
          minHeight: {
            xs: 400,
            sm: 500,
            md: 600
          },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background with parallax effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/img/courseb2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: { xs: "scroll", sm: "fixed" },
            zIndex: -2,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            },
          }}
        />
        
        {/* Decorative floating elements */}
        {!isMobile && (
          <>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              sx={{
                position: "absolute",
                top: responsiveValue("15%", "20%", "20%", isMobile, isTablet),
                left: responsiveValue("5%", "10%", "10%", isMobile, isTablet),
                fontSize: responsiveValue("2rem", "2.5rem", "3rem", isMobile, isTablet),
                color: theme.palette.primary.main,
                animation: `${float} 6s ease-in-out infinite`,
                zIndex: -1,
              }}
            >
              <SchoolIcon fontSize="inherit" />
            </Box>
            
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              sx={{
                position: "absolute",
                top: responsiveValue("65%", "60%", "60%", isMobile, isTablet),
                right: responsiveValue("10%", "15%", "15%", isMobile, isTablet),
                fontSize: responsiveValue("2.5rem", "3rem", "4rem", isMobile, isTablet),
                color: theme.palette.secondary.main,
                animation: `${float} 8s ease-in-out infinite`,
                zIndex: -1,
              }}
            >
              <StarBorderIcon fontSize="inherit" />
            </Box>

            {isDesktop && (
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "3rem",
                  color: theme.palette.warning.main,
                  animation: `${float} 7s ease-in-out infinite`,
                  zIndex: -1,
                }}
              >
                <GrainIcon fontSize="inherit" />
              </Box>
            )}
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            padding: responsiveValue("0 16px", "0 24px", "0 32px", isMobile, isTablet),
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              variant="h2"
              sx={{
                color: "white",
                fontSize: {
                  xs: "2rem",
                  sm: "2.8rem",
                  md: "3.5rem",
                  lg: "4rem",
                  xl: "4.5rem"
                },
                fontWeight: 800,
                textAlign: "center",
                textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
                mb: {
                  xs: 1,
                  sm: 2
                },
                fontFamily: "'Playfair Display', serif",
                lineHeight: {
                  xs: 1.1,
                  sm: 1.2,
                  md: 1.3
                },
                px: {
                  xs: 1,
                  sm: 0
                }
              }}
            >
              Explore Our <span style={{ color: theme.palette.secondary.main }}>Courses</span>
            </Typography>
            
            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              variant="subtitle1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.1rem",
                  md: "1.2rem"
                },
                maxWidth: {
                  xs: "90%",
                  sm: "80%",
                  md: "700px"
                },
                margin: "0 auto",
                textAlign: "center",
                mb: {
                  xs: 3,
                  sm: 4
                },
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                lineHeight: {
                  xs: 1.4,
                  sm: 1.5
                }
              }}
            >
              Discover a world of knowledge with our expertly crafted courses designed to help you achieve your goals and unlock your potential.
            </Typography>

            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                justifyContent: "center",
                "& .MuiBreadcrumbs-ol": {
                  justifyContent: "center",
                  flexWrap: "wrap",
                },
              }}
            >
              <Link
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 500,
                }}
                to="/"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 500,
                }}
              >
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                All Courses
              </Typography>
            </Breadcrumbs>
          </Container>
        </motion.div>
      </Box>  

      {/* <AllCoursesSection/>   */}   

      <CourseTypes/>
    </>
  );
}
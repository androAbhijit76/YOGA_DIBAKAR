

// // // import React from 'react'

// // import { Box, CardMedia, Typography, useMediaQuery, useTheme,Button } from "@mui/material"
// // import { Grid } from '@mui/material';
// // import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// // import { motion } from "framer-motion";  
// // // import { Button } from "bootstrap";

// // import SpaIcon from '@mui/icons-material/Spa';
// // import WhatshotIcon from "@mui/icons-material/Whatshot";


// // const fadeIn = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         duration: 0.8,
// //         ease: "easeIn"
// //       }
// //     }
// //   };  


// //   const slideInLeft = {
// //     hidden: { x: -50, opacity: 0 },
// //     visible: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut"
// //       }
// //     }
// //   };   


// //   const scaleUp = {
// //     hidden: { scale: 0.95, opacity: 0 },
// //     visible: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "backOut"
// //       }
// //     }
// //   };


// //   const slideInRight = {
// //     hidden: { x: 50, opacity: 0 },
// //     visible: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut"
// //       }
// //     }
// //   };
  
// // function Founders() { 

// //      const theme = useTheme();
// //       const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //     //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// //     //   const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    
// //   return (
// //     <>
    
// //   {/* Founders Section */}
// // <Box mt={8} sx={{ 
// //   background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
// //   py: isMobile ? 4 : 8,
// //   px: { xs: 2, sm: 3, md: 4 },
// //   position: "relative",
// //   overflow: "hidden",
// //   '&::before': {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     width: "100%",
// //     height: "100%",
// //     backgroundImage: "url('/img/yoga-pattern.png')",
// //     backgroundRepeat: "repeat",
// //     opacity: 0.03,
// //     zIndex: 0
// //   }
// // }}>
// //   <motion.div variants={fadeIn}>
// //     <Typography
// //       variant={isMobile ? "h4" : "h3"}
// //       sx={{
// //         fontWeight: "bold",
// //         textAlign: "center",
// //         color: "primary.main",
// //         mb: isMobile ? 4 : 6,
// //         position: "relative",
// //         zIndex: 1,
// //         '&::after': {
// //           content: '""',
// //           display: "block",
// //           width: "100px",
// //           height: "4px",
// //           background: "linear-gradient(to right, #3f51b5, #9c27b0)",
// //           margin: isMobile ? "12px auto 0" : "20px auto 0",
// //           borderRadius: "4px"
// //         }
// //       }}
// //     >
// //       Our Visionary Founders
// //     </Typography>
// //   </motion.div>

// //   <Grid container spacing={isMobile ? 2 : 6} sx={{ position: "relative", zIndex: 1 }}>
// //     {/* Dibakar Das */}
// //     <Grid item xs={12} md={6}>
// //       <motion.div
// //         variants={slideInLeft}
// //         whileHover={{ y: -5 }}
// //         style={{
// //           height: "100%",
// //           background: "white",
// //           borderRadius: "16px",
// //           overflow: "hidden",
// //           boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
// //           display: "flex",
// //           flexDirection: isMobile ? "column" : "row"
// //         }}
// //       >
// //         <Box sx={{
// //           width: isMobile ? "100%" : "40%",
// //           height: isMobile ? "300px" : "auto",
// //           position: "relative",
// //           overflow: "hidden"
// //         }}>
// //           <CardMedia
// //             component="img"
// //             image="/img/arun.jpg" // Replace with actual image path
// //             alt="Dibakar Das"
// //             sx={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //               transition: "transform 0.5s ease",
// //               '&:hover': {
// //                 transform: "scale(1.05)"
// //               }
// //             }}
// //           />
// //           <Box sx={{
// //             position: "absolute",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "linear-gradient(to top, rgba(63,81,181,0.8), transparent)",
// //             color: "white",
// //             p: 2,
// //             textAlign: "center"
// //           }}>
// //             <Typography variant="h6" sx={{ fontWeight: "bold" }}>Dibakar Das</Typography>
// //             <Typography variant="body2">Co-Founder & Spiritual Guide</Typography>
// //           </Box>
// //         </Box>
        
// //         <Box sx={{
// //           width: isMobile ? "100%" : "60%",
// //           p: isMobile ? 2 : 3,
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "center"
// //         }}>
// //           <Box sx={{ mb: 2 }}>
// //             <Typography variant="body1" color="text.secondary" sx={{ 
// //               fontStyle: "italic",
// //               mb: 1,
// //               fontSize: isMobile ? "0.875rem" : "1rem"
// //             }}>
// //               "Yoga is not about touching your toes, it's about what you learn on the way down."
// //             </Typography>
// //           </Box>
          
// //           <Typography variant="body1" sx={{ 
// //             mb: 1,
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Education:</b> Master's in Yoga Science, RYT 500 Certified, PhD in Yogic Studies
// //           </Typography>
          
// //           <Typography variant="body1" sx={{ 
// //             mb: 1,
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Achievements:</b> 
// //             <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
// //               <li>Gold Medalist in International Yoga Championship</li>
// //               <li>Author of 3 bestselling books on Yoga Philosophy</li>
// //               <li>Recipient of "Yoga Ratna" National Award</li>
// //             </ul>
// //           </Typography>
          
// //           <Typography variant="body1" sx={{ 
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Contributions:</b> Developed the institute's core curriculum and meditation programs with over 20 years of teaching experience.
// //           </Typography>
          
// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             style={{ alignSelf: "flex-start", marginTop: "16px" }}
// //           >
// //             <Button
// //               variant="outlined"
// //               color="primary"
// //               size="small"
// //               startIcon={<SpaIcon />}
// //               sx={{
// //                 borderRadius: "20px",
// //                 fontWeight: "bold",
// //                 borderWidth: "2px",
// //                 '&:hover': {
// //                   borderWidth: "2px"
// //                 }
// //               }}
// //             >
// //               Read Biography
// //             </Button>
// //           </motion.div>
// //         </Box>
// //       </motion.div>
// //     </Grid>

// //     {/* Rupam Das */}
// //     <Grid item xs={12} md={6}>
// //       <motion.div
// //         variants={slideInRight}
// //         whileHover={{ y: -5 }}
// //         style={{
// //           height: "100%",
// //           background: "white",
// //           borderRadius: "16px",
// //           overflow: "hidden",
// //           boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
// //           display: "flex",
// //           flexDirection: isMobile ? "column" : "row"
// //         }}
// //       >
// //         <Box sx={{
// //           width: isMobile ? "100%" : "40%",
// //           height: isMobile ? "300px" : "auto",
// //           position: "relative",
// //           overflow: "hidden"
// //         }}>
// //           <CardMedia
// //             component="img"
// //             image="/img/barun.jpg" // Replace with actual image path
// //             alt="Rupam Das"
// //             sx={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //               transition: "transform 0.5s ease",
// //               '&:hover': {
// //                 transform: "scale(1.05)"
// //               }
// //             }}
// //           />
// //           <Box sx={{
// //             position: "absolute",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "linear-gradient(to top, rgba(156,39,176,0.8), transparent)",
// //             color: "white",
// //             p: 2,
// //             textAlign: "center"
// //           }}>
// //             <Typography variant="h6" sx={{ fontWeight: "bold" }}>Rupam Das</Typography>
// //             <Typography variant="body2">Co-Founder & Therapeutic Specialist</Typography>
// //           </Box>
// //         </Box>
        
// //         <Box sx={{
// //           width: isMobile ? "100%" : "60%",
// //           p: isMobile ? 2 : 3,
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "center"
// //         }}>
// //           <Box sx={{ mb: 2 }}>
// //             <Typography variant="body1" color="text.secondary" sx={{ 
// //               fontStyle: "italic",
// //               mb: 1,
// //               fontSize: isMobile ? "0.875rem" : "1rem"
// //             }}>
// //               "Healing begins when we listen to our body with compassion."
// //             </Typography>
// //           </Box>
          
// //           <Typography variant="body1" sx={{ 
// //             mb: 1,
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Education:</b> MD in Yoga Therapy, Certified Ayurvedic Practitioner, MSc in Sports Science
// //           </Typography>
          
// //           <Typography variant="body1" sx={{ 
// //             mb: 1,
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Achievements:</b> 
// //             <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
// //               <li>Pioneer in Yoga for Chronic Pain Management</li>
// //               <li>Developed "Yogic Healing" methodology</li>
// //               <li>Featured in "Top 40 Under 40" Wellness Leaders</li>
// //             </ul>
// //           </Typography>
          
// //           <Typography variant="body1" sx={{ 
// //             fontSize: isMobile ? "0.875rem" : "1rem"
// //           }}>
// //             <b>Contributions:</b> Created the institute's therapeutic yoga programs and established partnerships with medical institutions.
// //           </Typography>
          
// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             style={{ alignSelf: "flex-start", marginTop: "16px" }}
// //           >
// //             <Button
// //               variant="outlined"
// //               color="secondary"
// //               size="small"
// //               startIcon={<EmojiNatureIcon />}
// //               sx={{
// //                 borderRadius: "20px",
// //                 fontWeight: "bold",
// //                 borderWidth: "2px",
// //                 '&:hover': {
// //                   borderWidth: "2px"
// //                 }
// //               }}
// //             >
// //               Read Biography
// //             </Button>
// //           </motion.div>
// //         </Box>
// //       </motion.div>
// //     </Grid>
// //   </Grid>

// //   {/* Founders' Joint Message */}
// //   <motion.div 
// //     variants={scaleUp}
// //     style={{
// //       maxWidth: "900px",
// //       margin: "40px auto 0",
// //       background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
// //       borderRadius: "16px",
// //       padding: isMobile ? "20px" : "30px",
// //       boxShadow: "0 20px 40px rgba(63,81,181,0.2)",
// //       color: "white",
// //       position: "relative",
// //       zIndex: 1,
// //       overflow: "hidden",
// //       '&::before': {
// //         content: '""',
// //         position: "absolute",
// //         top: "-50px",
// //         right: "-50px",
// //         width: "150px",
// //         height: "150px",
// //         background: "rgba(255,255,255,0.1)",
// //         borderRadius: "50%"
// //       }
// //     }}
// //     sx={{
// //       '&::after': {
// //         content: '""',
// //         position: "absolute",
// //         bottom: "-30px",
// //         left: "-30px",
// //         width: "100px",
// //         height: "100px",
// //         background: "rgba(255,255,255,0.1)",
// //         borderRadius: "50%"
// //       }
// //     }}
// //   >
// //     <Typography variant={isMobile ? "h5" : "h4"} sx={{ 
// //       fontWeight: "bold", 
// //       mb: 3,
// //       textAlign: "center",
// //       position: "relative",
// //       zIndex: 2
// //     }}>
// //       Our Shared Vision
// //     </Typography>
    
// //     <Typography variant={isMobile ? "body1" : "h6"} sx={{ 
// //       mb: 3,
// //       fontStyle: "italic",
// //       textAlign: "center",
// //       position: "relative",
// //       zIndex: 2,
// //       fontSize: isMobile ? "0.875rem" : "1.1rem"
// //     }}>
// //       "Together we envisioned Dibakar Yogarathi Institute as a sanctuary where traditional wisdom meets modern wellness, creating a transformative experience for every seeker."
// //     </Typography>
    
// //     <Box sx={{ 
// //       display: "flex", 
// //       justifyContent: "center",
// //       position: "relative",
// //       zIndex: 2
// //     }}>
// //       <motion.div
// //         whileHover={{ scale: 1.05 }}
// //         whileTap={{ scale: 0.95 }}
// //       >
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           size={isMobile ? "medium" : "large"}
// //           endIcon={<WhatshotIcon />}
// //           sx={{
// //             borderRadius: "20px",
// //             px: 4,
// //             fontWeight: "bold",
// //             background: "white",
// //             color: "primary.main",
// //             '&:hover': {
// //               background: "white",
// //               boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
// //             }
// //           }}
// //         >
// //           Meet Our Team
// //         </Button>
// //       </motion.div>
// //     </Box>
    
// //     <Box sx={{
// //       position: "absolute",
// //       top: "50%",
// //       left: "50%",
// //       transform: "translate(-50%, -50%)",
// //       opacity: 0.1,
// //       zIndex: 1
// //     }}>
// //       <SpaIcon sx={{ fontSize: "150px" }} />
// //     </Box>
// //   </motion.div>
// // </Box>
    
    
// //     </>
// //   )
// // }

// // export default Founders   























// import React from 'react';
// import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
// import { styled } from '@mui/system';
// import { motion } from 'framer-motion';

// const MotionCard = motion(Card);

// const founders = [
//   {
//     name: 'Mr. Arun Patra',
//     title: 'Principal | Consultant of Yoga and Physiotherapy',
//     qualifications: 'D.Y.S., M.M.W.Y.S., A.P.R.T.',
//     achievement: 'National Judge',
//     avatar: '/path-to-arun-image.jpg' // Replace with actual image path
//   },
//   {
//     name: 'Grand Master Mr. Barun Patra',
//     title: 'Vice-Principal | International Yoga Coach & Judge',
//     qualifications: 'D.Y.S., TTC 200 HR (India), TTC 300 HR (Vietnam)',
//     achievement: 'International Yoga Judge & Coach',
//     avatar: '/path-to-barun-image.jpg' // Replace with actual image path
//   }
// ];

// const StyledCard = styled(MotionCard)(({ theme }) => ({
//   borderRadius: '24px',
//   background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
//   boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//   transition: 'all 0.3s ease',
//   overflow: 'hidden',
//   '&:hover': {
//     boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
//     transform: 'translateY(-5px)'
//   }
// }));

// const FoundersSection = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 8 }, py: 10, background: 'linear-gradient(180deg, #f9fafb, #e6f0ec)' }}>
//       <Typography
//         variant="h3"
//         align="center"
//         fontWeight="bold"
//         color="primary"
//         sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.8rem' } }}
//       >
//         Meet Our Visionary Founders
//       </Typography>

//       <Grid container spacing={5} justifyContent="center">
//         {founders.map((founder, index) => (
//           <Grid item xs={12} sm={6} md={5} key={index}>
//             <StyledCard
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//             >
//               <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                 <Avatar
//                   src={founder.avatar}
//                   alt={founder.name}
//                   sx={{
//                     width: 110,
//                     height: 110,
//                     mb: 2,
//                     mx: 'auto',
//                     border: '4px solid #fff',
//                     boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//                   }}
//                 />
//                 <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
//                   {founder.name}
//                 </Typography>
//                 <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
//                   {founder.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   <strong>Qualifications:</strong> {founder.qualifications}
//                 </Typography>
//                 <Typography variant="body2">
//                   <strong>Achievements:</strong> {founder.achievement}
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FoundersSection;


































// import React from 'react';
import { Box, CardMedia, Typography, useMediaQuery, useTheme, Button, Grid } from "@mui/material";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SpaIcon from '@mui/icons-material/Spa';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
};

function Founders() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const foundersData = [
    {
      name: "Mr. Arun Patra",
      title: "Principal | Consultant of Yoga and Physiotherapy",
      image: "/img/arun.jpg",
      quote: `"Discipline and consistency are the foundation of wellness."`,
      qualifications: "D.Y.S., M.M.W.Y.S., A.P.R.T.",
      achievements: [
        "National Yoga Judge",
        "Pioneer in Integrative Yoga Therapy",
        "Renowned Speaker on Yogic Rehabilitation"
      ],
      contributions: "He has developed core modules for therapeutic yoga and wellness education across the nation, empowering hundreds of students.",
      icon: <SpaIcon />,
      buttonColor: "primary",
      profileLink: "https://www.facebook.com/arun.patra.9250595" // ← ADD THIS

    },
    {
      name: "Grand Master Mr. Barun Patra",
      title: "Vice-Principal | International Yoga Coach & Judge",
      image: "/img/barun.jpg",
      quote: `"Yoga is the journey of the self, through the self, to the self."`,
      qualifications: "D.Y.S., TTC 200 HR (India), TTC 300 HR (Vietnam)",
      achievements: [
        "International Yoga Judge & Coach",
        "Conducted 100+ Global Yoga Retreats",
        "Mentor for International Yoga Federations"
      ],
      contributions: "Mr. Barun has been instrumental in elevating Indian yogic practices globally, mentoring coaches and leading world-class yoga championships.",
      icon: <EmojiNatureIcon />,
      buttonColor: "secondary",
      profileLink: "https://www.facebook.com/barun.patra.58511276" // ← ADD THIS

    }
  ];

  return (
    <Box mt={8} sx={{
      background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
      py: isMobile ? 4 : 8,
      px: { xs: 2, sm: 3, md: 4 },
      position: "relative",
      overflow: "hidden",
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundImage: "url('/img/yoga-pattern.png')",
        backgroundRepeat: "repeat",
        opacity: 0.03,
        zIndex: 0
      }
    }}>
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "primary.main",
            mb: isMobile ? 4 : 6,
            position: "relative",
            zIndex: 1,
            '&::after': {
              content: '""',
              display: "block",
              width: "100px",
              height: "4px",
              background: "linear-gradient(to right, #3f51b5, #9c27b0)",
              margin: isMobile ? "12px auto 0" : "20px auto 0",
              borderRadius: "4px"
            }
          }}
        >
          Our Visionary Founders
        </Typography>
      </motion.div>

      <Grid container spacing={isMobile ? 2 : 6} sx={{ position: "relative", zIndex: 1 }}>
        {foundersData.map((founder, i) => (
          <Grid item xs={12} md={6} key={founder.name}>
            <motion.div
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
              style={{
                height: "100%",
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: isMobile ? "column" : "row"
              }}
            >
              {/* Image Block */}
               <Box sx={{
                width: isMobile ? "100%" : "40%",
                height: isMobile ? "300px" : "auto",
                position: "relative",
                overflow: "hidden"
              }}>
                <CardMedia
                  component="img"
                  image={founder.image}
                  alt={founder.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    // transition: "transform 0.5s ease",
                    // '&:hover': {
                    //   transform: "scale(1.05)"
                    // }
                  }}
                />
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(63,81,181,0.8), transparent)",
                  color: "white",
                  p: 2,
                  textAlign: "center"
                }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{founder.name}</Typography>
                  <Typography variant="body2">{founder.title}</Typography>
                </Box>
              </Box>    










              {/* <Box sx={{
  width: isMobile ? "100%" : "40%",
  height: isMobile ? "300px" : "100%", // Changed to 100% for desktop
  minHeight: isMobile ? "300px" : "400px", // Added minHeight for consistency
  position: "relative",
  overflow: "hidden"
}}>
  <CardMedia
    component="img"
    image={founder.image}
    alt={founder.name}
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center", // Ensures faces are always visible
      transition: "transform 0.5s ease",
      '&:hover': {
        transform: isMobile ? "none" : "scale(1.05)" // Disable hover zoom on mobile
      }
    }}
  />   
  {/* Name overlay remains the same */}   


  {/* <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(63,81,181,0.8), transparent)",
                  color: "white",
                  p: 2,
                  textAlign: "center"
                }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{founder.name}</Typography>
                  <Typography variant="body2">{founder.title}</Typography>
                </Box>
</Box>  */}

              {/* Info Block */}
              <Box sx={{
                width: isMobile ? "100%" : "60%",
                p: isMobile ? 2 : 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Typography variant="body1" color="text.secondary" sx={{
                  fontStyle: "italic",
                  mb: 2,
                  fontSize: isMobile ? "0.875rem" : "1rem"
                }}>
                  {founder.quote}
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  <b>Qualifications:</b> {founder.qualifications}
                </Typography>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  <b>Achievements:</b>
                  <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                    {founder.achievements.map((achieve, index) => (
                      <li key={index}>{achieve}</li>
                    ))}
                  </ul>
                </Typography>

                <Typography variant="body1">
                  <b>Contributions:</b> {founder.contributions}
                </Typography>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ alignSelf: "flex-start", marginTop: "16px" }}
                >
                  {/* <Button
                    variant="outlined"
                    color={founder.buttonColor}
                    size="small"
                    startIcon={founder.icon}
                    sx={{
                      borderRadius: "20px",
                      fontWeight: "bold",
                      borderWidth: "2px",
                      '&:hover': {
                        borderWidth: "2px"
                      }
                    }}
                  >
                    Check Profile
                  </Button> */}   




<Link to={founder.profileLink} style={{ textDecoration: "none" }}>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ alignSelf: "flex-start", marginTop: "16px" }}
  >
    <Button
      variant="outlined"
      color={founder.buttonColor}
      size="small"
      startIcon={founder.icon}
      sx={{
        borderRadius: "20px",
        fontWeight: "bold",
        borderWidth: "2px",
        '&:hover': {
          borderWidth: "2px"
        }
      }}
    >
      Check Profile
    </Button>
  </motion.div>
</Link>

                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Shared Vision */}
      <motion.div
        variants={scaleUp}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "900px",
          margin: "40px auto 0",
          background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
          borderRadius: "16px",
          padding: isMobile ? "20px" : "30px",
          boxShadow: "0 20px 40px rgba(63,81,181,0.2)",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
        sx={{
          '&::after': {
            content: '""',
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%"
          }
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          zIndex: 2
        }}>
          Our Shared Vision
        </Typography>

        <Typography variant={isMobile ? "body1" : "h6"} sx={{
          mb: 3,
          fontStyle: "italic",
          textAlign: "center",
          zIndex: 2,
          fontSize: isMobile ? "0.875rem" : "1.1rem"
        }}>
          &ldquo;We dreamt of building a sanctuary of holistic healing — where every soul discovers peace, purpose, and power through yoga and wellness.&rdquo;
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", zIndex: 2 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <Button
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              endIcon={<WhatshotIcon />}
              sx={{
                borderRadius: "20px",
                px: 4,
                fontWeight: "bold",
                background: "white",
                color: "primary.main",
                '&:hover': {
                  background: "white",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }
              }}
            >
              Meet Our Community

            </Button> */}  


            <Link to="https://www.facebook.com/dibakar.yogarathi.institute" style={{ textDecoration: "none" }}>
          
          

            <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ alignSelf: "flex-start", marginTop: "16px" }}
  >   
    <Button
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              endIcon={<WhatshotIcon />}
              sx={{
                borderRadius: "20px",
                px: 4,
                fontWeight: "bold",
                background: "white",
                color: "primary.main",
                '&:hover': {
                  background: "white",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }
              }}
            >
              Meet Our Community

            </Button>   
  </motion.div>
            </Link>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Founders;

































// import { Box, CardMedia, Typography, useMediaQuery, useTheme, Button, Grid,  } from "@mui/material";
// import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import SpaIcon from '@mui/icons-material/Spa';
// import SchoolIcon from '@mui/icons-material/School';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import StarIcon from '@mui/icons-material/Star';
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } }
// };

// const slideInLeft = {
//   hidden: { x: -50, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const slideInRight = {
//   hidden: { x: 50, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const scaleUp = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
// };

// function Founders() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const foundersData = [
//     {
//       name: "Mr. Arun Patra",
//       title: "Principal | Consultant of Yoga and Physiotherapy",
//       image: "/img/arun.jpg",
//       quote: `"Discipline and consistency are the foundation of wellness."`,
//       qualifications: "D.Y.S., M.M.W.Y.S., A.P.R.T.",
//       achievements: [
//         "National Yoga Judge",
//         "Pioneer in Integrative Yoga Therapy",
//         "Renowned Speaker on Yogic Rehabilitation"
//       ],
//       contributions: "He has developed core modules for therapeutic yoga and wellness education across the nation, empowering hundreds of students.",
//       icon: <SpaIcon />,
//       buttonColor: "primary",
//       profileLink: "https://www.facebook.com/arun.patra.9250595"
//     },
//     {
//       name: "Grand Master Mr. Barun Patra",
//       title: "Vice-Principal | International Yoga Coach & Judge",
//       image: "/img/barun.jpg",
//       quote: `"Yoga is the journey of the self, through the self, to the self."`,
//       qualifications: "D.Y.S., TTC 200 HR (India), TTC 300 HR (Vietnam)",
//       achievements: [
//         "International Yoga Judge & Coach",
//         "Conducted 100+ Global Yoga Retreats",
//         "Mentor for International Yoga Federations"
//       ],
//       contributions: "Mr. Barun has been instrumental in elevating Indian yogic practices globally, mentoring coaches and leading world-class yoga championships.",
//       icon: <EmojiNatureIcon />,
//       buttonColor: "secondary",
//       profileLink: "https://www.facebook.com/barun.patra.58511276"
//     }
//   ];

//   return (
//     <Box mt={8} sx={{
//       background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
//       py: isMobile ? 4 : 8,
//       px: { xs: 2, sm: 3, md: 4 },
//       position: "relative",
//       overflow: "hidden",
//       '&::before': {
//         content: '""',
//         position: "absolute",
//         top: 0, left: 0,
//         width: "100%", height: "100%",
//         backgroundImage: "url('/img/yoga-pattern.png')",
//         backgroundRepeat: "repeat",
//         opacity: 0.03,
//         zIndex: 0
//       }
//     }}>
//       <motion.div variants={fadeIn} initial="hidden" animate="visible">
//         <Typography
//           variant={isMobile ? "h4" : "h3"}
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "primary.main",
//             mb: isMobile ? 4 : 6,
//             position: "relative",
//             zIndex: 1,
//             '&::after': {
//               content: '""',
//               display: "block",
//               width: "100px",
//               height: "4px",
//               background: "linear-gradient(to right, #3f51b5, #9c27b0)",
//               margin: isMobile ? "12px auto 0" : "20px auto 0",
//               borderRadius: "4px"
//             }
//           }}
//         >
//           Our Visionary Founders
//         </Typography>
//       </motion.div>

//       <Grid container spacing={isMobile ? 2 : 6} sx={{ position: "relative", zIndex: 1 }}>
//         {foundersData.map((founder, i) => (
//           <Grid item xs={12} md={6} key={founder.name}>
//             <motion.div
//               variants={i % 2 === 0 ? slideInLeft : slideInRight}
//               initial="hidden"
//               animate="visible"
//               whileHover={{ y: -5 }}
//               style={{
//                 height: "100%",
//                 background: "white",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row"
//               }}
//             >
//               {/* Image Block */}
//               <Box sx={{
//                 width: isMobile ? "100%" : "40%",
//                 height: isMobile ? "300px" : "100%",
//                 minHeight: isMobile ? "300px" : "400px",
//                 position: "relative",
//                 overflow: "hidden"  


//                 // width: isMobile ? "100%" : "40%",
//                 //                height: isMobile ? "300px" : "auto",
//                 //                position: "relative",
//                 //                overflow: "hidden"
//               }}>
//                 <CardMedia
//                   component="img"
//                   image={founder.image}
//                   alt={founder.name}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     objectPosition: "top center",
//                     transition: "transform 0.5s ease",
//                     '&:hover': {
//                       transform: isMobile ? "none" : "scale(1.05)"
//                     }
//                   }}
//                 />
//                 <Box sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   background: "linear-gradient(to top, rgba(63,81,181,0.8), transparent)",
//                   color: "white",
//                   p: 2,
//                   textAlign: "center"
//                 }}>
//                   <Typography variant="h6" sx={{ fontWeight: "bold" }}>{founder.name}</Typography>
//                   <Typography variant="body2">{founder.title}</Typography>
//                 </Box>
//               </Box>

//               {/* Info Block */}
//               <Box sx={{
//                 width: isMobile ? "100%" : "60%",
//                 p: isMobile ? 2 : 3,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center"
//               }}>
//                 <Typography variant="body1" color="text.secondary" sx={{
//                   fontStyle: "italic",
//                   mb: 2,
//                   fontSize: isMobile ? "0.875rem" : "1rem"
//                 }}>
//                   {founder.quote}
//                 </Typography>

//                 {/* Enhanced Qualifications */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: "primary.main",
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <SchoolIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
//                     QUALIFICATIONS
//                   </Typography>
//                   <Box sx={{
//                     backgroundColor: theme.palette.primary.light + '10',
//                     borderRadius: 1,
//                     p: 1.5,
//                     borderLeft: `3px solid ${theme.palette.primary.main}`
//                   }}>
//                     <Typography variant="body1" sx={{ 
//                       fontWeight: 500,
//                       color: theme.palette.text.primary
//                     }}>
//                       {founder.qualifications}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Enhanced Achievements */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: "secondary.main",
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <WorkspacePremiumIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
//                     KEY ACHIEVEMENTS
//                   </Typography>
//                   <Box component="ul" sx={{ 
//                     pl: 0,
//                     m: 0,
//                     listStyle: 'none'
//                   }}>
//                     {founder.achievements.map((achieve, index) => (
//                       <Box 
//                         component="li" 
//                         key={index}
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'flex-start',
//                           mb: 1.5,
//                           p: 1,
//                           backgroundColor: theme.palette.grey[100],
//                           borderRadius: 1,
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             transform: 'translateX(5px)',
//                             boxShadow: theme.shadows[1]
//                           }
//                         }}
//                       >
//                         <StarIcon sx={{ 
//                           color: 'secondary.main', 
//                           mr: 1, 
//                           mt: '2px',
//                           fontSize: '1rem'
//                         }} />
//                         <Typography variant="body1" sx={{ flex: 1 }}>
//                           {achieve}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>

//                 {/* Enhanced Contributions */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: theme.palette.success.dark,
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <EmojiNatureIcon sx={{ mr: 1, fontSize: '1.1rem' }} />
//                     NOTABLE CONTRIBUTIONS
//                   </Typography>
//                   <Box sx={{
//                     backgroundColor: theme.palette.success.light + '10',
//                     borderRadius: 1,
//                     p: 1.5,
//                     borderLeft: `3px solid ${theme.palette.success.main}`
//                   }}>
//                     <Typography variant="body1">
//                       {founder.contributions}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Profile Button */}
//                 <Link to={founder.profileLink} style={{ textDecoration: "none" }}>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     style={{ alignSelf: "flex-start", marginTop: "16px" }}
//                   >
//                     <Button
//                       variant="outlined"
//                       color={founder.buttonColor}
//                       size="small"
//                       startIcon={founder.icon}
//                       sx={{
//                         borderRadius: "20px",
//                         fontWeight: "bold",
//                         borderWidth: "2px",
//                         '&:hover': {
//                           borderWidth: "2px"
//                         }
//                       }}
//                     >
//                       Check Profile
//                     </Button>
//                   </motion.div>
//                 </Link>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Shared Vision */}
//       <motion.div
//         variants={scaleUp}
//         initial="hidden"
//         animate="visible"
//         style={{
//           maxWidth: "900px",
//           margin: "40px auto 0",
//           background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
//           borderRadius: "16px",
//           padding: isMobile ? "20px" : "30px",
//           boxShadow: "0 20px 40px rgba(63,81,181,0.2)",
//           color: "white",
//           position: "relative",
//           zIndex: 1,
//         }}
//         sx={{
//           '&::after': {
//             content: '""',
//             position: "absolute",
//             bottom: "-30px",
//             left: "-30px",
//             width: "100px",
//             height: "100px",
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "50%"
//           }
//         }}
//       >
//         <Typography variant={isMobile ? "h5" : "h4"} sx={{
//           fontWeight: "bold",
//           mb: 3,
//           textAlign: "center",
//           zIndex: 2
//         }}>
//           Our Shared Vision
//         </Typography>

//         <Typography variant={isMobile ? "body1" : "h6"} sx={{
//           mb: 3,
//           fontStyle: "italic",
//           textAlign: "center",
//           zIndex: 2,
//           fontSize: isMobile ? "0.875rem" : "1.1rem"
//         }}>
//           "We dreamt of building a sanctuary of holistic healing — where every soul discovers peace, purpose, and power through yoga and wellness."
//         </Typography>

//         <Box sx={{ display: "flex", justifyContent: "center", zIndex: 2 }}>
//           <Link to="https://www.facebook.com/dibakar.yogarathi.institute" style={{ textDecoration: "none" }}>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{ alignSelf: "flex-start", marginTop: "16px" }}
//             >   
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size={isMobile ? "medium" : "large"}
//                 endIcon={<WhatshotIcon />}
//                 sx={{
//                   borderRadius: "20px",
//                   px: 4,
//                   fontWeight: "bold",
//                   background: "white",
//                   color: "primary.main",
//                   '&:hover': {
//                     background: "white",
//                     boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
//                   }
//                 }}
//               >
//                 Meet Our Community
//               </Button>   
//             </motion.div>
//           </Link>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }

// export default Founders;





















// import { Box, CardMedia, Typography, useMediaQuery, useTheme, Button, Grid, Chip } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import SchoolIcon from '@mui/icons-material/School';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import StarIcon from '@mui/icons-material/Star';
// import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// import SpaIcon from '@mui/icons-material/Spa';
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } }
// };

// const slideInLeft = {
//   hidden: { x: -50, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const slideInRight = {
//   hidden: { x: 50, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const scaleUp = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
// };

// function Founders() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

//   const foundersData = [
//     {
//       name: "Mr. Arun Patra",
//       title: "Principal | Consultant of Yoga and Physiotherapy",
//       image: "/img/arun.jpg",
//       quote: `"Discipline and consistency are the foundation of wellness."`,
//       qualifications: "D.Y.S., M.M.W.Y.S., A.P.R.T.",
//       achievements: [
//         "National Yoga Judge",
//         "Pioneer in Integrative Yoga Therapy",
//         "Renowned Speaker on Yogic Rehabilitation"
//       ],
//       contributions: "He has developed core modules for therapeutic yoga and wellness education across the nation, empowering hundreds of students.",
//       icon: <SpaIcon />,
//       buttonColor: "primary",
//       profileLink: "https://www.facebook.com/arun.patra.9250595"
//     },
//     {
//       name: "Grand Master Mr. Barun Patra",
//       title: "Vice-Principal | International Yoga Coach & Judge",
//       image: "/img/barun.jpg",
//       quote: `"Yoga is the journey of the self, through the self, to the self."`,
//       qualifications: "D.Y.S., TTC 200 HR (India), TTC 300 HR (Vietnam)",
//       achievements: [
//         "International Yoga Judge & Coach",
//         "Conducted 100+ Global Yoga Retreats",
//         "Mentor for International Yoga Federations"
//       ],
//       contributions: "Mr. Barun has been instrumental in elevating Indian yogic practices globally, mentoring coaches and leading world-class yoga championships.",
//       icon: <EmojiNatureIcon />,
//       buttonColor: "secondary",
//       profileLink: "https://www.facebook.com/barun.patra.58511276"
//     }
//   ];

//   return (
//     <Box mt={8} sx={{
//       background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
//       py: isMobile ? 4 : isTablet ? 6 : 8,
//       px: { xs: 2, sm: 3, md: 4, lg: 6 },
//       position: "relative",
//       overflow: "hidden",
//       '&::before': {
//         content: '""',
//         position: "absolute",
//         top: 0, left: 0,
//         width: "100%", height: "100%",
//         backgroundImage: "url('/img/yoga-pattern.png')",
//         backgroundRepeat: "repeat",
//         opacity: 0.03,
//         zIndex: 0
//       }
//     }}>
//       <motion.div variants={fadeIn} initial="hidden" animate="visible">
//         <Typography
//           variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
//           sx={{
//             fontWeight: 800,
//             textAlign: "center",
//             color: "primary.main",
//             mb: isMobile ? 4 : isTablet ? 5 : 6,
//             position: "relative",
//             zIndex: 1,
//             '&::after': {
//               content: '""',
//               display: "block",
//               width: isMobile ? "80px" : "100px",
//               height: "4px",
//               background: "linear-gradient(to right, #3f51b5, #9c27b0)",
//               margin: isMobile ? "12px auto 0" : "20px auto 0",
//               borderRadius: "4px"
//             }
//           }}
//         >
//           Our Visionary Founders
//         </Typography>
//       </motion.div>

//       <Grid container spacing={isMobile ? 2 : isTablet ? 4 : 6} sx={{ position: "relative", zIndex: 1 }}>
//         {foundersData.map((founder, i) => (
//           <Grid item xs={12} md={6} key={founder.name}>
//             <motion.div
//               variants={i % 2 === 0 ? slideInLeft : slideInRight}
//               initial="hidden"
//               animate="visible"
//               whileHover={{ y: isMobile ? 0 : -5 }}
//               style={{
//                 height: "100%",
//                 background: "white",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
//                 display: "flex",
//                 flexDirection: isMobile ? "column" : "row",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease"
//               }}
//             >
//               {/* Optimized Image Block */}
//               <Box sx={{
//                 width: isMobile ? "100%" : isTablet ? "45%" : "40%",
//                 height: isMobile ? "280px" : isTablet ? "320px" : "380px",
//                 minHeight: isMobile ? "280px" : "320px",
//                 position: "relative",
//                 overflow: "hidden",
//                 flexShrink: 0
//               }}>
//                 <CardMedia
//                   component="img"
//                   image={founder.image}
//                   alt={founder.name}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     objectPosition: isMobile ? "top center" : "center center",
//                     transition: "transform 0.5s ease",
//                     '&:hover': {
//                       transform: isMobile ? "none" : "scale(1.03)"
//                     }
//                   }}
//                 />
//                 <Box sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                   color: "white",
//                   p: isMobile ? 1.5 : 2,
//                   textAlign: "center"
//                 }}>
//                   <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ fontWeight: 700 }}>{founder.name}</Typography>
//                   <Typography variant="body2" sx={{ 
//                     fontSize: isMobile ? "0.75rem" : "0.875rem",
//                     opacity: 0.9
//                   }}>
//                     {founder.title}
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Info Block */}
//               <Box sx={{
//                 width: isMobile ? "100%" : isTablet ? "55%" : "60%",
//                 p: isMobile ? 2 : isTablet ? 2.5 : 3,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center"
//               }}>
//                 <Typography variant="body1" color="text.secondary" sx={{
//                   fontStyle: "italic",
//                   mb: 2,
//                   fontSize: isMobile ? "0.875rem" : isTablet ? "0.9375rem" : "1rem"
//                 }}>
//                   {founder.quote}
//                 </Typography>

//                 {/* Qualifications */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: "primary.main",
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                   }}>
//                     <SchoolIcon sx={{ mr: 1, fontSize: isMobile ? "1rem" : "1.1rem" }} />
//                     QUALIFICATIONS
//                   </Typography>
//                   <Box sx={{
//                     backgroundColor: theme.palette.primary.light + '10',
//                     borderRadius: 1,
//                     p: 1.5,
//                     borderLeft: `3px solid ${theme.palette.primary.main}`
//                   }}>
//                     <Typography variant="body1" sx={{ 
//                       fontWeight: 500,
//                       fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                     }}>
//                       {founder.qualifications}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Achievements */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: "secondary.main",
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                   }}>
//                     <WorkspacePremiumIcon sx={{ mr: 1, fontSize: isMobile ? "1rem" : "1.1rem" }} />
//                     KEY ACHIEVEMENTS
//                   </Typography>
//                   <Box component="ul" sx={{ 
//                     pl: 0,
//                     m: 0,
//                     listStyle: 'none'
//                   }}>
//                     {founder.achievements.map((achieve, index) => (
//                       <Box 
//                         component="li" 
//                         key={index}
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'flex-start',
//                           mb: 1.5,
//                           p: 1,
//                           backgroundColor: theme.palette.grey[100],
//                           borderRadius: 1,
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             transform: isMobile ? 'none' : 'translateX(5px)',
//                             boxShadow: theme.shadows[1]
//                           }
//                         }}
//                       >
//                         <StarIcon sx={{ 
//                           color: 'secondary.main', 
//                           mr: 1, 
//                           mt: '2px',
//                           fontSize: isMobile ? "0.875rem" : "1rem"
//                         }} />
//                         <Typography variant="body1" sx={{ 
//                           flex: 1,
//                           fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                         }}>
//                           {achieve}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>

//                 {/* Contributions */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     color: theme.palette.success.dark,
//                     mb: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                   }}>
//                     <EmojiNatureIcon sx={{ mr: 1, fontSize: isMobile ? "1rem" : "1.1rem" }} />
//                     NOTABLE CONTRIBUTIONS
//                   </Typography>
//                   <Box sx={{
//                     backgroundColor: theme.palette.success.light + '10',
//                     borderRadius: 1,
//                     p: 1.5,
//                     borderLeft: `3px solid ${theme.palette.success.main}`
//                   }}>
//                     <Typography variant="body1" sx={{
//                       fontSize: isMobile ? "0.8125rem" : "0.875rem"
//                     }}>
//                       {founder.contributions}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Profile Button */}
//                 <Link to={founder.profileLink} style={{ textDecoration: "none" }}>
//                   <motion.div
//                     whileHover={{ scale: isMobile ? 1 : 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     style={{ alignSelf: "flex-start", marginTop: "16px" }}
//                   >
//                     <Button
//                       variant="outlined"
//                       color={founder.buttonColor}
//                       size={isMobile ? "small" : "medium"}
//                       startIcon={founder.icon}
//                       sx={{
//                         borderRadius: "20px",
//                         fontWeight: "bold",
//                         borderWidth: "2px",
//                         fontSize: isMobile ? "0.75rem" : "0.8125rem",
//                         '&:hover': {
//                           borderWidth: "2px"
//                         }
//                       }}
//                     >
//                       View Full Profile
//                     </Button>
//                   </motion.div>
//                 </Link>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Shared Vision */}
//       <motion.div
//         variants={scaleUp}
//         initial="hidden"
//         animate="visible"
//         style={{
//           maxWidth: "900px",
//           margin: isMobile ? "30px auto 0" : "40px auto 0",
//           background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
//           borderRadius: "16px",
//           padding: isMobile ? "16px" : isTablet ? "24px" : "30px",
//           boxShadow: "0 20px 40px rgba(63,81,181,0.2)",
//           color: "white",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} sx={{
//           fontWeight: "bold",
//           mb: isMobile ? 2 : 3,
//           textAlign: "center",
//           zIndex: 2
//         }}>
//           Our Shared Vision
//         </Typography>

//         <Typography variant={isMobile ? "body1" : "h6"} sx={{
//           mb: isMobile ? 2 : 3,
//           fontStyle: "italic",
//           textAlign: "center",
//           zIndex: 2,
//           fontSize: isMobile ? "0.875rem" : isTablet ? "1rem" : "1.1rem"
//         }}>
//           "We dreamt of building a sanctuary of holistic healing — where every soul discovers peace, purpose, and power through yoga and wellness."
//         </Typography>

//         <Box sx={{ display: "flex", justifyContent: "center", zIndex: 2 }}>
//           <Link to="https://www.facebook.com/dibakar.yogarathi.institute" style={{ textDecoration: "none" }}>
//             <motion.div
//               whileHover={{ scale: isMobile ? 1 : 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >   
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size={isMobile ? "medium" : "large"}
//                 endIcon={<WhatshotIcon />}
//                 sx={{
//                   borderRadius: "20px",
//                   px: isMobile ? 3 : 4,
//                   fontWeight: "bold",
//                   background: "white",
//                   color: "primary.main",
//                   fontSize: isMobile ? "0.8125rem" : "0.875rem",
//                   '&:hover': {
//                     background: "white",
//                     boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
//                   }
//                 }}
//               >
//                 Join Our Community
//               </Button>   
//             </motion.div>
//           </Link>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }

// export default Founders;





















// import { Box, CardMedia, Typography, useMediaQuery, useTheme, Button, Grid, Chip, Avatar } from "@mui/material";
// import { motion } from "framer-motion";
// import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// import SpaIcon from '@mui/icons-material/Spa';
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import GavelIcon from '@mui/icons-material/Gavel';
// import SchoolIcon from '@mui/icons-material/School';
// import PublicIcon from '@mui/icons-material/Public';
// import HealingIcon from '@mui/icons-material/Healing';

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeIn" }
//   }
// };

// const slideInLeft = {
//   hidden: { x: -50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const scaleUp = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "backOut" }
//   }
// };

// const slideInRight = {
//   hidden: { x: 50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// function Founders() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   return (
//     <Box mt={8} sx={{ 
//       background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
//       py: isMobile ? 4 : 8,
//       px: { xs: 2, sm: 3, md: 4, lg: 6 },
//       position: "relative",
//       overflow: "hidden",
//       '&::before': {
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: "url('/img/yoga-pattern.png')",
//         backgroundRepeat: "repeat",
//         opacity: 0.03,
//         zIndex: 0
//       }
//     }}>
//       {/* Section Header */}
//       <motion.div variants={fadeIn}>
//         <Typography
//           variant={isMobile ? "h4" : "h3"}
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "primary.main",
//             mb: isMobile ? 4 : 6,
//             position: "relative",
//             zIndex: 1,
//             '&::after': {
//               content: '""',
//               display: "block",
//               width: isMobile ? "60px" : "100px",
//               height: "4px",
//               background: "linear-gradient(to right, #3f51b5, #9c27b0)",
//               margin: isMobile ? "12px auto 0" : "20px auto 0",
//               borderRadius: "4px"
//             }
//           }}
//         >
//           Our Esteemed Leadership
//         </Typography>
//       </motion.div>

//       <Grid container spacing={isMobile ? 2 : 6} sx={{ position: "relative", zIndex: 1 }}>
//         {/* Arun Patra */}
//         <Grid item xs={12} md={6}>
//           <motion.div
//             variants={slideInLeft}
//             whileHover={{ y: -5 }}
//             style={{
//               height: "100%",
//               background: "white",
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
//               display: "flex",
//               flexDirection: isMobile ? "column" : "row"
//             }}
//           >
//             <Box sx={{
//               width: isMobile ? "100%" : "40%",
//               height: isMobile ? "300px" : "auto",
//               position: "relative",
//               overflow: "hidden"
//             }}>
//               <CardMedia
//                 component="img"
//                 image="/img/arun.jpg"
//                 alt="Arun Patra"
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.5s ease",
//                   '&:hover': {
//                     transform: "scale(1.05)"
//                   }
//                 }}
//               />
//               <Box sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 background: "linear-gradient(to top, rgba(63,81,181,0.8), transparent)",
//                 color: "white",
//                 p: 2,
//                 textAlign: "center"
//               }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>Mr. Arun Patra</Typography>
//                 <Typography variant="body2">Principal | Consultant of Yoga and Physiotherapy</Typography>
//               </Box>
//             </Box>
            
//             <Box sx={{
//               width: isMobile ? "100%" : "60%",
//               p: isMobile ? 2 : 3,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center"
//             }}>
//               <Box sx={{ mb: 2 }}>
//                 <Typography variant="body1" color="text.secondary" sx={{ 
//                   fontStyle: "italic",
//                   mb: 1,
//                   fontSize: isMobile ? "0.875rem" : "1rem"
//                 }}>
//                   "Yoga is the journey of the self, through the self, to the self."
//                 </Typography>
//               </Box>
              
//               <Box sx={{ mb: 2 }}>
//                 <Chip 
//                   icon={<SchoolIcon />} 
//                   label="D.Y.S., M.M.W.Y.S., A.P.R.T." 
//                   size="small" 
//                   sx={{ mr: 1, mb: 1, fontWeight: 'bold' }} 
//                 />
//                 <Chip 
//                   icon={<GavelIcon />} 
//                   label="National Judge" 
//                   color="primary" 
//                   size="small" 
//                   sx={{ mb: 1, fontWeight: 'bold' }} 
//                 />
//               </Box>
              
//               <Typography variant="body1" sx={{ 
//                 mb: 1,
//                 fontSize: isMobile ? "0.875rem" : "1rem"
//               }}>
//                 <b>Specializations:</b> Therapeutic Yoga, Physiotherapy Integration, Yoga for Rehabilitation
//               </Typography>
              
//               <Typography variant="body1" sx={{ 
//                 mb: 1,
//                 fontSize: isMobile ? "0.875rem" : "1rem"
//               }}>
//                 <b>Key Contributions:</b> 
//                 <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
//                   <li>Developed innovative yoga-physiotherapy protocols</li>
//                   <li>Pioneer in adaptive yoga for special needs</li>
//                   <li>Recognized authority in yoga competition judging</li>
//                 </ul>
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
//                 <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>15+</Avatar>
//                 <Typography variant="body2" sx={{ alignSelf: 'center' }}>Years Experience</Typography>
//                 <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32, ml: 1 }}>500+</Avatar>
//                 <Typography variant="body2" sx={{ alignSelf: 'center' }}>Students Trained</Typography>
//               </Box>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{ alignSelf: "flex-start", marginTop: "16px" }}
//               >
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   size="small"
//                   startIcon={<HealingIcon />}
//                   sx={{
//                     borderRadius: "20px",
//                     fontWeight: "bold",
//                     borderWidth: "2px",
//                     '&:hover': {
//                       borderWidth: "2px"
//                     }
//                   }}
//                 >
//                   View Credentials
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Barun Patra */}
//         <Grid item xs={12} md={6}>
//           <motion.div
//             variants={slideInRight}
//             whileHover={{ y: -5 }}
//             style={{
//               height: "100%",
//               background: "white",
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
//               display: "flex",
//               flexDirection: isMobile ? "column" : "row"
//             }}
//           >
//             <Box sx={{
//               width: isMobile ? "100%" : "40%",
//               height: isMobile ? "300px" : "auto",
//               position: "relative",
//               overflow: "hidden"
//             }}>
//               <CardMedia
//                 component="img"
//                 image="/img/barun.jpg"
//                 alt="Barun Patra"
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "transform 0.5s ease",
//                   '&:hover': {
//                     transform: "scale(1.05)"
//                   }
//                 }}
//               />
//               <Box sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 background: "linear-gradient(to top, rgba(156,39,176,0.8), transparent)",
//                 color: "white",
//                 p: 2,
//                 textAlign: "center"
//               }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>Mr. Barun Patra</Typography>
//                 <Typography variant="body2">Vice-Principal | International Yoga Coach & Judge</Typography>
//               </Box>
//             </Box>
            
//             <Box sx={{
//               width: isMobile ? "100%" : "60%",
//               p: isMobile ? 2 : 3,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center"
//             }}>
//               <Box sx={{ mb: 2 }}>
//                 <Typography variant="body1" color="text.secondary" sx={{ 
//                   fontStyle: "italic",
//                   mb: 1,
//                   fontSize: isMobile ? "0.875rem" : "1rem"
//                 }}>
//                   "Yoga transcends borders - it's a universal language of wellness."
//                 </Typography>
//               </Box>
              
//               <Box sx={{ mb: 2 }}>
//                 <Chip 
//                   icon={<SchoolIcon />} 
//                   label="D.Y.S., TTC 200 HR (India)" 
//                   size="small" 
//                   sx={{ mr: 1, mb: 1, fontWeight: 'bold' }} 
//                 />
//                 <Chip 
//                   icon={<PublicIcon />} 
//                   label="TTC 300 HR (Vietnam)" 
//                   color="secondary" 
//                   size="small" 
//                   sx={{ mb: 1, fontWeight: 'bold' }} 
//                 />
//               </Box>
              
//               <Typography variant="body1" sx={{ 
//                 mb: 1,
//                 fontSize: isMobile ? "0.875rem" : "1rem"
//               }}>
//                 <b>Specializations:</b> International Yoga Standards, Competitive Yoga Training, Cross-Cultural Yoga Adaptation
//               </Typography>
              
//               <Typography variant="body1" sx={{ 
//                 mb: 1,
//                 fontSize: isMobile ? "0.875rem" : "1rem"
//               }}>
//                 <b>Global Achievements:</b> 
//                 <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
//                   <li>Certified International Yoga Judge</li>
//                   <li>Conducted workshops in 12+ countries</li>
//                   <li>Developed cross-cultural yoga training programs</li>
//                 </ul>
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
//                 <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>8+</Avatar>
//                 <Typography variant="body2" sx={{ alignSelf: 'center' }}>Countries Worked</Typography>
//                 <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32, ml: 1 }}>200+</Avatar>
//                 <Typography variant="body2" sx={{ alignSelf: 'center' }}>International Students</Typography>
//               </Box>
              
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{ alignSelf: "flex-start", marginTop: "16px" }}
//               >
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="small"
//                   startIcon={<PublicIcon />}
//                   sx={{
//                     borderRadius: "20px",
//                     fontWeight: "bold",
//                     borderWidth: "2px",
//                     '&:hover': {
//                       borderWidth: "2px"
//                     }
//                   }}
//                 >
//                   International Work
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Grid>
//       </Grid>

//       {/* Leadership Joint Message */}
//       <motion.div 
//         variants={scaleUp}
//         style={{
//           maxWidth: "900px",
//           margin: "40px auto 0",
//           background: "linear-gradient(135deg, #3f51b5, #9c27b0)",
//           borderRadius: "16px",
//           padding: isMobile ? "20px" : "30px",
//           boxShadow: "0 20px 40px rgba(63,81,181,0.2)",
//           color: "white",
//           position: "relative",
//           zIndex: 1,
//           overflow: "hidden"
//         }}
//         sx={{
//           '&::before': {
//             content: '""',
//             position: "absolute",
//             top: "-50px",
//             right: "-50px",
//             width: "150px",
//             height: "150px",
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "50%"
//           },
//           '&::after': {
//             content: '""',
//             position: "absolute",
//             bottom: "-30px",
//             left: "-30px",
//             width: "100px",
//             height: "100px",
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "50%"
//           }
//         }}
//       >
//         <Typography variant={isMobile ? "h5" : "h4"} sx={{ 
//           fontWeight: "bold", 
//           mb: 3,
//           textAlign: "center",
//           position: "relative",
//           zIndex: 2
//         }}>
//           Our Combined Vision for Yoga Excellence
//         </Typography>
        
//         <Typography variant={isMobile ? "body1" : "h6"} sx={{ 
//           mb: 3,
//           fontStyle: "italic",
//           textAlign: "center",
//           position: "relative",
//           zIndex: 2,
//           fontSize: isMobile ? "0.875rem" : "1.1rem"
//         }}>
//           "Together we bridge traditional yoga wisdom with modern scientific understanding, creating a holistic approach that honors yoga's roots while meeting contemporary wellness needs."
//         </Typography>
        
//         <Box sx={{ 
//           display: "flex", 
//           justifyContent: "center",
//           position: "relative",
//           zIndex: 2,
//           flexWrap: 'wrap',
//           gap: 2
//         }}>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               size={isMobile ? "medium" : "large"}
//               startIcon={<SchoolIcon />}
//               sx={{
//                 borderRadius: "20px",
//                 px: 4,
//                 fontWeight: "bold",
//                 background: "white",
//                 color: "primary.main",
//                 '&:hover': {
//                   background: "white",
//                   boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
//                 }
//               }}
//             >
//               Our Methodology
//             </Button>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button
//               variant="contained"
//               color="secondary"
//               size={isMobile ? "medium" : "large"}
//               endIcon={<WhatshotIcon />}
//               sx={{
//                 borderRadius: "20px",
//                 px: 4,
//                 fontWeight: "bold",
//                 background: "white",
//                 color: "secondary.main",
//                 '&:hover': {
//                   background: "white",
//                   boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
//                 }
//               }}
//             >
//               Meet The Team
//             </Button>
//           </motion.div>
//         </Box>
        
//         <Box sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           opacity: 0.1,
//           zIndex: 1
//         }}>
//           <SpaIcon sx={{ fontSize: "150px" }} />
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }

// export default Founders;  














































// import { Box, CardMedia, Typography, useMediaQuery, useTheme, Button, Grid, Avatar, Divider } from "@mui/material";
// import { motion } from "framer-motion";
// import { 
//   Spa as SpaIcon, 
//   Public as PublicIcon, 
//   School as SchoolIcon, 
//   Gavel as GavelIcon,
//   Favorite as FavoriteIcon,
//   WorkspacePremium as WorkspacePremiumIcon,
//   Groups as GroupsIcon,
//   Flag as FlagIcon
// } from "@mui/icons-material"; 
// import { Chip } from '@mui/material';
// import { to } from 'react-router-dom';


// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeIn" }
//   }
// };

// const cardAnimation = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const scaleUp = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "backOut" }
//   }
// };

// function Founders() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   return (
//     <Box sx={{ 
//       py: { xs: 6, md: 10 },
//       px: { xs: 2, sm: 4, md: 6 },
//       backgroundColor: theme.palette.background.default,
//       position: 'relative',
//       overflow: 'hidden',
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: -100,
//         right: -100,
//         width: 400,
//         height: 400,
//         borderRadius: '50%',
//         background: `radial-gradient(${theme.palette.primary.light}20, transparent 70%)`,
//         zIndex: 0
//       }
//     }}>
//       {/* Section Header */}
//       <Box sx={{ 
//         maxWidth: 800,
//         mx: 'auto',
//         mb: { xs: 4, md: 8 },
//         textAlign: 'center',
//         position: 'relative',
//         zIndex: 1
//       }}>
//         <motion.div variants={fadeIn}>
//           <Typography 
//             variant="overline" 
//             color="primary"
//             sx={{ 
//               letterSpacing: 2,
//               fontWeight: 'bold',
//               display: 'block',
//               mb: 1
//             }}
//           >
//             MEET OUR LEADERSHIP
//           </Typography>
//           <Typography 
//             variant={isMobile ? "h4" : "h3"} 
//             sx={{ 
//               fontWeight: 800,
//               mb: 2,
//               lineHeight: 1.2
//             }}
//           >
//             Visionary Founders
//           </Typography>
//           <Divider sx={{ 
//             width: 80,
//             height: 4,
//             backgroundColor: theme.palette.primary.main,
//             mx: 'auto',
//             mb: 3
//           }} />
//           <Typography 
//             variant="body1" 
//             color="text.secondary"
//             sx={{ 
//               maxWidth: 600,
//               mx: 'auto',
//               fontSize: isMobile ? '1rem' : '1.1rem'
//             }}
//           >
//             Our founders combine decades of experience with innovative approaches to yoga education and practice.
//           </Typography>
//         </motion.div>
//       </Box>

//       <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
//         {/* Arun Patra */}
//         <Grid item xs={12} md={6}>
//           <motion.div 
//             variants={cardAnimation}
//             whileHover={{ y: -5 }}
//             style={{ height: '100%' }}
//           >
//             <Box sx={{
//               height: '100%',
//               backgroundColor: theme.palette.background.paper,
//               borderRadius: 2,
//               overflow: 'hidden',
//               boxShadow: theme.shadows[4],
//               display: 'flex',
//               flexDirection: isMobile ? 'column' : 'row',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 boxShadow: theme.shadows[8],
//                 transform: 'translateY(-5px)'
//               }
//             }}>
//               <Box sx={{
//                 width: isMobile ? '100%' : '35%',
//                 minHeight: isMobile ? 300 : 'auto',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 backgroundColor: theme.palette.grey[100]
//               }}>
//                 <CardMedia
//                   component="img"
//                   image="/img/arun.jpg"
//                   alt="Arun Patra"
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     objectPosition: 'top center'
//                   }}
//                 />
//                 <Box sx={{
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   p: 2,
//                   background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
//                   color: 'white'
//                 }}>
//                   <Typography variant="h6" sx={{ fontWeight: 700 }}>Arun Patra</Typography>
//                   <Typography variant="body2">Principal & Yoga Physiotherapy Consultant</Typography>
//                 </Box>
//               </Box>
              
//               <Box sx={{
//                 width: isMobile ? '100%' : '65%',
//                 p: 3,
//                 display: 'flex',
//                 flexDirection: 'column'
//               }}>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ 
//                     fontStyle: 'italic',
//                     color: theme.palette.text.secondary,
//                     mb: 2
//                   }}>
//                     "True yoga is not about perfection but about connection - to oneself and to others."
//                   </Typography>
                  
//                   <Box sx={{ 
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     gap: 1,
//                     mb: 2
//                   }}>
//                     <Chip 
//                       icon={<SchoolIcon fontSize="small" />}
//                       label="D.Y.S., M.M.W.Y.S."
//                       size="small"
//                       variant="outlined"
//                     />
//                     <Chip 
//                       icon={<GavelIcon fontSize="small" />}
//                       label="National Judge"
//                       color="primary"
//                       size="small"
//                     />
//                     <Chip 
//                       icon={<FavoriteIcon fontSize="small" />}
//                       label="Therapeutic Specialist"
//                       size="small"
//                       variant="outlined"
//                     />
//                   </Box>
//                 </Box>
                
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     mb: 1,
//                     color: theme.palette.text.primary
//                   }}>
//                     KEY EXPERTISE
//                   </Typography>
//                   <ul style={{ 
//                     paddingLeft: 20,
//                     margin: 0,
//                     listStyleType: 'none'
//                   }}>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="primary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">Pioneer in yoga-physiotherapy integration</Typography>
//                       </Box>
//                     </li>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="primary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">Developed adaptive yoga protocols</Typography>
//                       </Box>
//                     </li>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="primary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">15+ years teaching experience</Typography>
//                       </Box>
//                     </li>
//                   </ul>
//                 </Box>
                
//                 <Box sx={{ mt: 'auto', pt: 2 }}>
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     size="small"
//                     startIcon={<SpaIcon />}
//                     sx={{
//                       borderRadius: 20,
//                       fontWeight: 600,
//                       textTransform: 'none',
//                       px: 3
//                     }}
//                   >
//                     View full profile
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Barun Patra */}
//         <Grid item xs={12} md={6}>
//           <motion.div 
//             variants={cardAnimation}
//             whileHover={{ y: -5 }}
//             style={{ height: '100%' }}
//           >
//             <Box sx={{
//               height: '100%',
//               backgroundColor: theme.palette.background.paper,
//               borderRadius: 2,
//               overflow: 'hidden',
//               boxShadow: theme.shadows[4],
//               display: 'flex',
//               flexDirection: isMobile ? 'column' : 'row',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 boxShadow: theme.shadows[8],
//                 transform: 'translateY(-5px)'
//               }
//             }}>
//               <Box sx={{
//                 width: isMobile ? '100%' : '35%',
//                 minHeight: isMobile ? 300 : 'auto',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 backgroundColor: theme.palette.grey[100]
//               }}>
//                 <CardMedia
//                   component="img"
//                   image="/img/barun.jpg"
//                   alt="Barun Patra"
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     objectPosition: 'top center'
//                   }}
//                 />
//                 <Box sx={{
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   p: 2,
//                   background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
//                   color: 'white'
//                 }}>
//                   <Typography variant="h6" sx={{ fontWeight: 700 }}>Barun Patra</Typography>
//                   <Typography variant="body2">Vice-Principal & International Yoga Coach</Typography>
//                 </Box>
//               </Box>
              
//               <Box sx={{
//                 width: isMobile ? '100%' : '65%',
//                 p: 3,
//                 display: 'flex',
//                 flexDirection: 'column'
//               }}>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ 
//                     fontStyle: 'italic',
//                     color: theme.palette.text.secondary,
//                     mb: 2
//                   }}>
//                     "Yoga is the art of bringing consciousness to movement and stillness alike."
//                   </Typography>
                  
//                   <Box sx={{ 
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     gap: 1,
//                     mb: 2
//                   }}>
//                     <Chip 
//                       icon={<SchoolIcon fontSize="small" />}
//                       label="D.Y.S., TTC 200HR"
//                       size="small"
//                       variant="outlined"
//                     />
//                     <Chip 
//                       icon={<PublicIcon fontSize="small" />}
//                       label="TTC 300HR (Vietnam)"
//                       color="secondary"
//                       size="small"
//                     />
//                     <Chip 
//                       icon={<FlagIcon fontSize="small" />}
//                       label="International Judge"
//                       size="small"
//                       variant="outlined"
//                     />
//                   </Box>
//                 </Box>
                
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" sx={{ 
//                     fontWeight: 600,
//                     mb: 1,
//                     color: theme.palette.text.primary
//                   }}>
//                     GLOBAL ACHIEVEMENTS
//                   </Typography>
//                   <ul style={{ 
//                     paddingLeft: 20,
//                     margin: 0,
//                     listStyleType: 'none'
//                   }}>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="secondary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">Certified International Yoga Judge</Typography>
//                       </Box>
//                     </li>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="secondary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">Conducted workshops in 12+ countries</Typography>
//                       </Box>
//                     </li>
//                     <li style={{ marginBottom: 8 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WorkspacePremiumIcon color="secondary" sx={{ fontSize: 16, mr: 1 }} />
//                         <Typography variant="body2">8+ years international experience</Typography>
//                       </Box>
//                     </li>
//                   </ul>
//                 </Box>
                
//                 <Box sx={{ mt: 'auto', pt: 2 }}>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     size="small"
//                     startIcon={<PublicIcon />}
//                     sx={{
//                       borderRadius: 20,
//                       fontWeight: 600,
//                       textTransform: 'none',
//                       px: 3
//                     }}
//                   >
//                     International work
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </motion.div>
//         </Grid>
//       </Grid>

//       {/* Combined Vision */}
//       <Box sx={{ 
//         maxWidth: 900,
//         mx: 'auto',
//         mt: 8,
//         position: 'relative',
//         zIndex: 1
//       }}>
//         <motion.div variants={scaleUp}>
//           <Box sx={{
//             backgroundColor: theme.palette.primary.dark,
//             color: 'white',
//             borderRadius: 2,
//             p: { xs: 3, md: 5 },
//             position: 'relative',
//             overflow: 'hidden',
//             boxShadow: `0 10px 30px ${theme.palette.primary.dark}30`,
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               right: 0,
//               width: '100%',
//               height: '100%',
//               backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 30%)',
//               pointerEvents: 'none'
//             }
//           }}>
//             <Typography 
//               variant="h5" 
//               sx={{ 
//                 fontWeight: 700,
//                 mb: 2,
//                 position: 'relative',
//                 zIndex: 1
//               }}
//             >
//               Our Shared Philosophy
//             </Typography>
            
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 mb: 3,
//                 position: 'relative',
//                 zIndex: 1,
//                 fontSize: isMobile ? '1rem' : '1.1rem'
//               }}
//             >
//               "We believe yoga should be accessible, scientific, and transformative. Our approach combines traditional wisdom with modern understanding to create practices that are both authentic and relevant to contemporary life."
//             </Typography>
            
//             <Box sx={{ 
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 2,
//               position: 'relative',
//               zIndex: 1
//             }}>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 size={isMobile ? 'medium' : 'large'}
//                 startIcon={<GroupsIcon />}
//                 sx={{
//                   borderRadius: 20,
//                   px: 4,
//                   fontWeight: 600,
//                   color: theme.palette.primary.dark,
//                   textTransform: 'none',
//                   '&:hover': {
//                     backgroundColor: 'white'
//                   }
//                 }}
//               >
//                 Meet Our Team
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 color="inherit"
//                 size={isMobile ? 'medium' : 'large'}
//                 endIcon={<SchoolIcon />}
//                 sx={{
//                   borderRadius: 20,
//                   px: 4,
//                   fontWeight: 600,
//                   textTransform: 'none',
//                   borderWidth: 2,
//                   '&:hover': {
//                     borderWidth: 2,
//                     backgroundColor: 'rgba(255,255,255,0.1)'
//                   }
//                 }}
//               >
//                 Our Methodology
//               </Button>
//             </Box>
            
//             <Box sx={{
//               position: 'absolute',
//               bottom: -20,
//               right: -20,
//               opacity: 0.1,
//               zIndex: 0
//             }}>
//               <SpaIcon sx={{ fontSize: 150 }} />
//             </Box>
//           </Box>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// }

// export default Founders;
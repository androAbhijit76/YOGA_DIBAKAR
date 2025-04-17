// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

// const Footer = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile screens

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#20252D",
//         color: "white",
//         py: 6,
//         mt: "auto", // Push footer to the bottom if used in a layout
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* About Us Section */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Typography variant="h6" gutterBottom>
//               About Us
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Dibakar Yogarathi Institute is dedicated to promoting the ancient
//               practice of yoga for physical, mental, and spiritual well-being.
//               Join us on this transformative journey.
//             </Typography>
//           </Grid>

//           {/* Quick Links Section */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Typography variant="h6" gutterBottom>
//               Quick Links
//             </Typography>
//             <Box>
//               <Link href="/" color="inherit" underline="hover" display="block">
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 color="inherit"
//                 underline="hover"
//                 display="block"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/classes"
//                 color="inherit"
//                 underline="hover"
//                 display="block"
//               >
//                 Classes
//               </Link>
//               <Link
//                 href="/contact"
//                 color="inherit"
//                 underline="hover"
//                 display="block"
//               >
//                 Contact Us
//               </Link>
//             </Box>
//           </Grid>

//           {/* Contact Information Section */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Typography variant="h6" gutterBottom>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//               Laskarpur Peyara Bagan, Kolkata - 700153
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//               Phone: (+91) 9339058372
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//               Email:{" "}
//               <Link
//                 href="mailto:dibakaryogarathiinstitute@gmail.com"
//                 color="inherit"
//                 underline="hover"
//               >
//                 dibakaryogarathiinstitute@gmail.com
//               </Link>
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <IconButton
//                 href="https://facebook.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Facebook />
//               </IconButton>
//               <IconButton
//                 href="https://instagram.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Instagram />
//               </IconButton>
//               <IconButton
//                 href="https://twitter.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Twitter />
//               </IconButton>
//               <IconButton
//                 href="https://youtube.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <YouTube />
//               </IconButton>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Copyright Section */}
//         <Box
//           sx={{
//             borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//             mt: 4,
//             pt: 3,
//             textAlign: isMobile ? "center" : "left", // Center-align on mobile
//           }}
//         >
//           <Typography variant="body2">
//             © {new Date().getFullYear()} Dibakar Yogarathi Institute. All rights
//             reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;         









































// // import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   useTheme,
//   useMediaQuery,
//   Divider,
//   Button
// } from "@mui/material";
// import { 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   YouTube,
//   Email,
//   Phone,
//   LocationOn,
//   Spa,
//   SelfImprovement,
//   Favorite
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const Footer = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

//   // Animation variants
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#0a192f",
//         color: "#e6f1ff",
//         py: 8,
//         position: "relative",
//         overflow: "hidden",
//         '&::before': {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: "4px",
//           background: "linear-gradient(90deg, #64ffda, #3a7bd5)",
//         }
//       }}
//     >
//       {/* Decorative elements */}
//       <Box sx={{
//         position: "absolute",
//         top: "20%",
//         right: "10%",
//         width: "300px",
//         height: "300px",
//         background: "radial-gradient(circle, rgba(100,255,218,0.1) 0%, transparent 70%)",
//         zIndex: 0
//       }} />
      
//       <Container maxWidth="lg">
//         <Grid container spacing={isMobile ? 4 : 6}>
//           {/* About Us Section */}
//           <Grid item xs={12} md={4}>
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={itemVariants}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <Spa color="primary" sx={{ fontSize: 40, mr: 1 }} />
//                 <Typography 
//                   variant="h5" 
//                   sx={{ 
//                     fontWeight: 700,
//                     background: "linear-gradient(90deg, #64ffda, #3a7bd5)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent"
//                   }}
//                 >
//                   Dibakar Yogarathi
//                 </Typography>
//               </Box>
//               <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
//                 Embrace the journey of self-discovery through our holistic yoga programs. 
//                 We blend ancient wisdom with modern techniques to transform your body, 
//                 mind and spirit.
//               </Typography>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 size="small"
//                 endIcon={<SelfImprovement />}
//                 sx={{
//                   borderRadius: "50px",
//                   px: 3,
//                   fontWeight: "bold",
//                   borderWidth: "2px",
//                   '&:hover': {
//                     borderWidth: "2px",
//                     backgroundColor: "rgba(100,255,218,0.1)"
//                   }
//                 }}
//               >
//                 Our Philosophy
//               </Button>
//             </motion.div>
//           </Grid>

//           {/* Quick Links Section */}
//           <Grid item xs={12} sm={6} md={2}>
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={itemVariants}
//             >
//               <Typography 
//                 variant="h6" 
//                 gutterBottom 
//                 sx={{ 
//                   fontWeight: 600,
//                   position: "relative",
//                   display: "inline-block",
//                   '&::after': {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -8,
//                     left: 0,
//                     width: "40px",
//                     height: "3px",
//                     background: "#64ffda",
//                     borderRadius: "3px"
//                   }
//                 }}
//               >
//                 Explore
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
//                 {[
//                   { name: "Home", href: "/" },
//                   { name: "About Us", href: "/about" },
//                   { name: "Classes", href: "/classes" },
//                   { name: "Teachers", href: "/teachers" },
//                   { name: "Events", href: "/events" },
//                   { name: "Blog", href: "/blog" },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <Link
//                       href={item.href}
//                       color="inherit"
//                       underline="none"
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         '&:hover': {
//                           color: "#64ffda"
//                         }
//                       }}
//                     >
//                       <Favorite sx={{ fontSize: 12, mr: 1, color: "#64ffda" }} />
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Programs Section */}
//           <Grid item xs={12} sm={6} md={2}>
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={itemVariants}
//             >
//               <Typography 
//                 variant="h6" 
//                 gutterBottom 
//                 sx={{ 
//                   fontWeight: 600,
//                   position: "relative",
//                   display: "inline-block",
//                   '&::after': {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -8,
//                     left: 0,
//                     width: "40px",
//                     height: "3px",
//                     background: "#64ffda",
//                     borderRadius: "3px"
//                   }
//                 }}
//               >
//                 Programs
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
//                 {[
//                   { name: "Hatha Yoga", href: "/hatha" },
//                   { name: "Vinyasa Flow", href: "/vinyasa" },
//                   { name: "Ashtanga", href: "/ashtanga" },
//                   { name: "Yin Yoga", href: "/yin" },
//                   { name: "Meditation", href: "/meditation" },
//                   { name: "Teacher Training", href: "/teacher-training" },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <Link
//                       href={item.href}
//                       color="inherit"
//                       underline="none"
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         '&:hover': {
//                           color: "#64ffda"
//                         }
//                       }}
//                     >
//                       <Favorite sx={{ fontSize: 12, mr: 1, color: "#64ffda" }} />
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Contact Section */}
//           <Grid item xs={12} md={4}>
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={itemVariants}
//             >
//               <Typography 
//                 variant="h6" 
//                 gutterBottom 
//                 sx={{ 
//                   fontWeight: 600,
//                   position: "relative",
//                   display: "inline-block",
//                   '&::after': {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -8,
//                     left: 0,
//                     width: "40px",
//                     height: "3px",
//                     background: "#64ffda",
//                     borderRadius: "3px"
//                   }
//                 }}
//               >
//                 Connect
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <LocationOn color="primary" sx={{ mr: 2 }} />
//                   <Typography variant="body2">
//                     Laskarpur Peyara Bagan, Kolkata - 700153
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Phone color="primary" sx={{ mr: 2 }} />
//                   <Link 
//                     href="tel:+919339058372" 
//                     color="inherit" 
//                     underline="hover"
//                     sx={{ '&:hover': { color: "#64ffda" } }}
//                   >
//                     (+91) 9339058372
//                   </Link>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Email color="primary" sx={{ mr: 2 }} />
//                   <Link 
//                     href="mailto:dibakaryogarathiinstitute@gmail.com" 
//                     color="inherit" 
//                     underline="hover"
//                     sx={{ '&:hover': { color: "#64ffda" } }}
//                   >
//                     dibakaryogarathiinstitute@gmail.com
//                   </Link>
//                 </Box>
                
//                 {/* Social Media */}
//                 <Box sx={{ mt: 2 }}>
//                   <Typography variant="body2" sx={{ mb: 1.5 }}>
//                     Follow our journey:
//                   </Typography>
//                   <Box sx={{ display: "flex", gap: 1 }}>
//                     {[
//                       { icon: <Facebook />, href: "https://facebook.com" },
//                       { icon: <Instagram />, href: "https://instagram.com" },
//                       { icon: <Twitter />, href: "https://twitter.com" },
//                       { icon: <YouTube />, href: "https://youtube.com" },
//                     ].map((social, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ y: -5, scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <IconButton
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener"
//                           sx={{
//                             color: "#e6f1ff",
//                             backgroundColor: "rgba(100,255,218,0.1)",
//                             '&:hover': {
//                               backgroundColor: "rgba(100,255,218,0.2)"
//                             }
//                           }}
//                         >
//                           {social.icon}
//                         </IconButton>
//                       </motion.div>
//                     ))}
//                   </Box>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Divider */}
//         <Divider sx={{ 
//           my: 6, 
//           backgroundColor: "rgba(230,241,255,0.1)",
//           height: "1px"
//         }} />

//         {/* Copyright and Bottom Links */}
//         <Box sx={{ 
//           display: "flex", 
//           flexDirection: isMobile ? "column" : "row", 
//           justifyContent: "space-between",
//           alignItems: "center"
//         }}>
//           <Typography variant="body2" sx={{ opacity: 0.8, mb: isMobile ? 2 : 0 }}>
//             © {new Date().getFullYear()} Dibakar Yogarathi Institute. All rights reserved.
//           </Typography>
          
//           <Box sx={{ display: "flex", gap: 3 }}>
//             <Link 
//               href="/privacy-policy" 
//               color="inherit" 
//               underline="hover"
//               variant="body2"
//               sx={{ '&:hover': { color: "#64ffda" } }}
//             >
//               Privacy Policy
//             </Link>
//             <Link 
//               href="/terms" 
//               color="inherit" 
//               underline="hover"
//               variant="body2"
//               sx={{ '&:hover': { color: "#64ffda" } }}
//             >
//               Terms of Service
//             </Link>
//             <Link 
//               href="/sitemap" 
//               color="inherit" 
//               underline="hover"
//               variant="body2"
//               sx={{ '&:hover': { color: "#64ffda" } }}
//             >
//               Sitemap
//             </Link>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;   
























































































import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Button
} from "@mui/material";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  YouTube,
  Email,
  Phone,
  LocationOn,
  Spa,
  SelfImprovement,
  Favorite
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(400));

  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0a192f",
        color: "#e6f1ff",
        py: isMobile ? 6 : 8,
        position: "relative",
        overflow: "hidden",
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #64ffda, #3a7bd5)",
        }
      }}
    >
      {/* Decorative elements */}
      <Box sx={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: isMobile ? "150px" : "300px",
        height: isMobile ? "150px" : "300px",
        background: "radial-gradient(circle, rgba(100,255,218,0.1) 0%, transparent 70%)",
        zIndex: 0
      }} />
      
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 4 : 6}>
          {/* About Us Section */}
          <Grid item xs={12} md={4}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
              variants={itemVariants}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Spa color="primary" sx={{ fontSize: isMobile ? 30 : 40, mr: 1 }} />
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  sx={{ 
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #64ffda, #3a7bd5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: isSmallMobile ? "1.1rem" : "inherit"
                  }}
                >
                  Dibakar Yogarathi
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ 
                mb: 3, 
                lineHeight: 1.8,
                fontSize: isSmallMobile ? "0.875rem" : "0.9375rem"
              }}>
                Embrace the journey of self-discovery through our holistic yoga programs. 
                We blend ancient wisdom with modern techniques to transform your body, 
                mind and spirit.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size={isMobile ? "small" : "medium"}
                endIcon={<SelfImprovement />}
                sx={{
                  borderRadius: "50px",
                  px: 3,
                  fontWeight: "bold",
                  borderWidth: "2px",
                  fontSize: isSmallMobile ? "0.75rem" : "0.875rem",
                  '&:hover': {
                    borderWidth: "2px",
                    backgroundColor: "rgba(100,255,218,0.1)"
                  }
                }}
              >
                Our Philosophy
              </Button>
            </motion.div>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
              variants={itemVariants}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  position: "relative",
                  display: "inline-block",
                  fontSize: isSmallMobile ? "1rem" : "1.125rem",
                  '&::after': {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "40px",
                    height: "3px",
                    background: "#64ffda",
                    borderRadius: "3px"
                  }
                }}
              >
                Explore
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Classes", href: "/classes" },
                  { name: "Teachers", href: "/teachers" },
                  { name: "Events", href: "/events" },
                  { name: "Blog", href: "/blog" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      color="inherit"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: isSmallMobile ? "0.8125rem" : "0.875rem",
                        '&:hover': {
                          color: "#64ffda"
                        }
                      }}
                    >
                      <Favorite sx={{ fontSize: 12, mr: 1, color: "#64ffda" }} />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Programs Section */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
              variants={itemVariants}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  position: "relative",
                  display: "inline-block",
                  fontSize: isSmallMobile ? "1rem" : "1.125rem",
                  '&::after': {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "40px",
                    height: "3px",
                    background: "#64ffda",
                    borderRadius: "3px"
                  }
                }}
              >
                Programs
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {[
                  { name: "Hatha Yoga", href: "/hatha" },
                  { name: "Vinyasa Flow", href: "/vinyasa" },
                  { name: "Ashtanga", href: "/ashtanga" },
                  { name: "Yin Yoga", href: "/yin" },
                  { name: "Meditation", href: "/meditation" },
                  { name: "Teacher Training", href: "/teacher-training" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      color="inherit"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: isSmallMobile ? "0.8125rem" : "0.875rem",
                        '&:hover': {
                          color: "#64ffda"
                        }
                      }}
                    >
                      <Favorite sx={{ fontSize: 12, mr: 1, color: "#64ffda" }} />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
              variants={itemVariants}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  position: "relative",
                  display: "inline-block",
                  fontSize: isSmallMobile ? "1rem" : "1.125rem",
                  '&::after': {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "40px",
                    height: "3px",
                    background: "#64ffda",
                    borderRadius: "3px"
                  }
                }}
              >
                Connect
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationOn color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Typography variant="body2" sx={{ fontSize: isSmallMobile ? "0.8125rem" : "0.875rem" }}>
                    Laskarpur Peyara Bagan, Kolkata - 700153
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone color="primary" sx={{ mr: 2 }} />
                  <Link 
                    href="tel:+919339058372" 
                    color="inherit" 
                    underline="hover"
                    sx={{ 
                      '&:hover': { color: "#64ffda" },
                      fontSize: isSmallMobile ? "0.8125rem" : "0.875rem"
                    }}
                  >
                    (+91) 9339058372
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email color="primary" sx={{ mr: 2 }} />
                  <Link 
                    href="mailto:dibakaryogarathiinstitute@gmail.com" 
                    color="inherit" 
                    underline="hover"
                    sx={{ 
                      '&:hover': { color: "#64ffda" },
                      fontSize: isSmallMobile ? "0.8125rem" : "0.875rem",
                      wordBreak: "break-all"
                    }}
                  >
                    dibakaryogarathiinstitute@gmail.com
                  </Link>
                </Box>
                
                {/* Social Media */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ 
                    mb: 1.5,
                    fontSize: isSmallMobile ? "0.8125rem" : "0.875rem"
                  }}>
                    Follow our journey:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {[
                      { icon: <Facebook fontSize={isSmallMobile ? "small" : "medium"} />, href: "https://facebook.com" },
                      { icon: <Instagram fontSize={isSmallMobile ? "small" : "medium"} />, href: "https://instagram.com" },
                      { icon: <Twitter fontSize={isSmallMobile ? "small" : "medium"} />, href: "https://twitter.com" },
                      { icon: <YouTube fontSize={isSmallMobile ? "small" : "medium"} />, href: "https://youtube.com" },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          rel="noopener"
                          size={isSmallMobile ? "small" : "medium"}
                          sx={{
                            color: "#e6f1ff",
                            backgroundColor: "rgba(100,255,218,0.1)",
                            '&:hover': {
                              backgroundColor: "rgba(100,255,218,0.2)"
                            }
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ 
          my: isMobile ? 4 : 6, 
          backgroundColor: "rgba(230,241,255,0.1)",
          height: "1px"
        }} />

        {/* Copyright and Bottom Links */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: isSmallMobile ? "column" : "row", 
          justifyContent: "space-between",
          alignItems: "center",
          gap: isSmallMobile ? 1.5 : 0
        }}>
          <Typography variant="body2" sx={{ 
            opacity: 0.8,
            fontSize: isSmallMobile ? "0.6875rem" : "0.75rem",
            textAlign: isSmallMobile ? "center" : "left"
          }}>
            © {new Date().getFullYear()} Dibakar Yogarathi Institute. All rights reserved.
          </Typography>
          
          <Box sx={{ 
            display: "flex", 
            gap: isSmallMobile ? 1.5 : 3,
            flexWrap: "wrap",
            justifyContent: isSmallMobile ? "center" : "flex-end"
          }}>
            <Link 
              href="/privacy-policy" 
              color="inherit" 
              underline="hover"
              variant="body2"
              sx={{ 
                '&:hover': { color: "#64ffda" },
                fontSize: isSmallMobile ? "0.6875rem" : "0.75rem"
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              color="inherit" 
              underline="hover"
              variant="body2"
              sx={{ 
                '&:hover': { color: "#64ffda" },
                fontSize: isSmallMobile ? "0.6875rem" : "0.75rem"
              }}
            >
              Terms of Service
            </Link>
            <Link 
              href="/sitemap" 
              color="inherit" 
              underline="hover"
              variant="body2"
              sx={{ 
                '&:hover': { color: "#64ffda" },
                fontSize: isSmallMobile ? "0.6875rem" : "0.75rem"
              }}
            >
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
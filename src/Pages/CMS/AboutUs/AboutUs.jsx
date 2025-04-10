// import { Box, Breadcrumbs, Typography, Grid, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { Card } from "react-bootstrap";

// export default function AboutUs() {
//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
//         sx={{
//           width: "100%",
//           overflow: "hidden", // Prevent horizontal overflow
//         }}
//       >
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/final.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover", // Ensures the image covers the container
//               backgroundPosition: "center center", // Centers the image both horizontally and vertically
//               height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" }, // Adjusted height for better responsiveness
//               minHeight: "300px", // Ensures a minimum height for very small screens
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               border: "none", // Explicitly remove borders
//               outline: "none", // Explicitly remove outlines
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//                 padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, // Add padding for better readability
//               }}
//             >
//               About Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   padding: 0, // Remove padding from Breadcrumbs
//                   margin: 0, // Remove margin from Breadcrumbs
//                 },
//                 "& .MuiBreadcrumbs-separator": {
//                   color: "white", // Ensure separator color matches the design
//                 },
//               }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>HOME</b>
//                 </Link>
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>About Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Content Section */}
//       <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Grid container spacing={4}>
//           {/* Image Card */}
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Card
//                 sx={{
//                   maxWidth: 405,
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: 2,
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{ height: { xs: 250, sm: 300, md: 350, lg: 400 } }}
//                   image="/img/prize1.jpg"
//                   alt="green iguana"
//                 />
//               </Card>
//             </Box>
//           </Grid>

//           {/* Text Card */}
//           <Grid item xs={12} md={8}>
//             <Card
//               sx={{
//                 maxWidth: "100%",
//                 height: "auto",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 padding: { xs: 2, sm: 3, md: 4 },
//               }}
//             >
//               <CardContent  sx={{ backgroundColor:"#dcd0ff"}}>
//                 <Typography
//                   gutterBottom
//                   variant="h4"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: { xs: "center", md: "left" },
//                     color: "primary.main",
//                     mb: 3,

//                   }}
//                 >
//                   Who We Are?
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color="text.secondary"
//                   sx={{
//                     fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
//                     lineHeight: 1.6,
//                     textAlign: "justify",

//                   }}
//                 >
//                   At <b>Dibakar Yogarathi Institute</b>, we are dedicated to the holistic well-being of individuals through the ancient practice of yoga, combined with modern therapeutic approaches. Located in Garia, Kolkata, our institute serves as a premier center for yoga education, career training, and wellness programs.
//                   <br />
//                   <br />
//                   With a strong focus on professional development, we offer Yoga Teacher’s Training Courses, Physiotherapy Courses, Advanced Yoga Training, and Rhythmic Yoga Training. Our structured programs are designed to empower aspiring yoga instructors and wellness practitioners with the knowledge, skills, and certifications needed to build a successful career in the field of health and fitness.
//                   <br />
//                   <br />
//                   Our team of experienced instructors ensures that every student receives personalized guidance, fostering both personal growth and professional excellence. Whether you are looking to deepen your yoga practice, start a career in teaching, or explore the healing benefits of physiotherapy and rhythmic yoga, Dibakar Yogarathi Institute provides the perfect environment for your journey.
//                   <br />
//                   <br />
//                   Join us and transform your passion for yoga into a fulfilling career while embracing a healthier, more balanced lifestyle!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// import { Box, Breadcrumbs, Typography, Grid, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { Card } from "react-bootstrap";
// import Animated from "../Animated/Animated";

// export default function AboutUs() {
//   const galleryImages = [
//     "/img/g1.jpg",
//     "/img/g3.jpg",
//     "/img/g2.jpg",
//     "/img/g4.jpg",
//     "/img/g5.jpg",
//     "/img/prize.jpg",
//     "/img/g7.jpg",
//     "/img/g8.jpg",
//     "/img/g11.jpg",

//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
//         sx={{
//           width: "100%",
//           overflow: "hidden", // Prevent horizontal overflow
//         }}
//       >
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/final.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover", // Ensures the image covers the container
//               backgroundPosition: "center center", // Centers the image both horizontally and vertically
//               height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" }, // Adjusted height for better responsiveness
//               minHeight: "300px", // Ensures a minimum height for very small screens
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               border: "none", // Explicitly remove borders
//               outline: "none", // Explicitly remove outlines
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//                 padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, // Add padding for better readability
//               }}
//             >
//               About Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   padding: 0, // Remove padding from Breadcrumbs
//                   margin: 0, // Remove margin from Breadcrumbs
//                 },
//                 "& .MuiBreadcrumbs-separator": {
//                   color: "white", // Ensure separator color matches the design
//                 },
//               }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>HOME</b>
//                 </Link>
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>About Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Content Section */}
//       <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Grid container spacing={4}>
//           {/* Image Card */}
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Card
//                 sx={{
//                   maxWidth: 405,
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: 2,
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{ height: { xs: 270, sm: 300, md: 350, lg: 400 } }}
//                   image="/img/p1.jpg"
//                   alt="green iguana"
//                 />
//               </Card>
//             </Box>
//           </Grid>

//           {/* Text Card */}
//           <Grid item xs={12} md={8}>
//             <Card
//               sx={{
//                 maxWidth: "100%",
//                 height: "auto",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 padding: { xs: 2, sm: 3, md: 4 },
//               }}
//             >
//               <CardContent sx={{ backgroundColor: "#dcd0ff" }}>
//                 <Typography
//                   gutterBottom
//                   variant="h4"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: { xs: "center", md: "left" },
//                     color: "primary.main",
//                     mb: 3,
//                   }}
//                 >
//                   Who We Are?
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color="text.secondary"
//                   sx={{
//                     fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
//                     lineHeight: 1.6,
//                     textAlign: "justify",
//                   }}
//                 >
//                   At <b>Dibakar Yogarathi Institute</b>, we are dedicated to the holistic well-being of individuals through the ancient practice of yoga, combined with modern therapeutic approaches. Located in Garia, Kolkata, our institute serves as a premier center for yoga education, career training, and wellness programs.
//                   <br />
//                   <br />
//                   With a strong focus on professional development, we offer Yoga Teacher’s Training Courses, Physiotherapy Courses, Advanced Yoga Training, and Rhythmic Yoga Training. Our structured programs are designed to empower aspiring yoga instructors and wellness practitioners with the knowledge, skills, and certifications needed to build a successful career in the field of health and fitness.
//                   <br />
//                   <br />
//                   Our team of experienced instructors ensures that every student receives personalized guidance, fostering both personal growth and professional excellence. Whether you are looking to deepen your yoga practice, start a career in teaching, or explore the healing benefits of physiotherapy and rhythmic yoga, Dibakar Yogarathi Institute provides the perfect environment for your journey.
//                   <br />
//                   <br />
//                   Join us and transform your passion for yoga into a fulfilling career while embracing a healthier, more balanced lifestyle!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>

//       <Animated/>

// <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//   <Typography
//     variant="h4"
//     sx={{
//       fontWeight: "bold",
//       textAlign: "center",
//       color: "primary.main",
//       mb: 4,
//     }}
//   >
//     Our Gallery
//   </Typography>
//   <Grid container spacing={2}>
//     {galleryImages.map((image, index) => (
//       <Grid item xs={12} sm={6} md={4} key={index}>
//         <Card
//           sx={{
//             width: "100%",
//             height: "auto",
//             boxShadow: 3,
//             borderRadius: 2,
//             overflow: "hidden",
//             position: "relative", // Required for absolute positioning of the overlay
//             transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: 6,
//             },
//           }}
//         >
//           <CardMedia
//             component="img"
//             sx={{
//               height: { xs: 200, sm: 250, md: 300 },
//               width: "100%",
//               objectFit: "cover", // Ensure the image covers the card
//               transition: "transform 0.3s ease-in-out",
//               "&:hover": {
//                 transform: "scale(1.1)",
//               },
//             }}
//             image={image}
//             alt={`Gallery Image ${index + 1}`}
//           />
//           {/* Text Overlay */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
//               color: "white",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               opacity: 0, // Initially hidden
//               transition: "opacity 0.3s ease-in-out",
//               "&:hover": {
//                 opacity: 1, // Show on hover
//               },
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 padding: 2,
//               }}
//             >
//               {`Image ${index + 1}`} {/* Replace with your custom text */}
//             </Typography>
//           </Box>
//         </Card>
//       </Grid>
//     ))}
//   </Grid>
// </Box>

//     </>
//   );
// }










// import {
//   Box,
//   Breadcrumbs,
//   Typography,
//   Grid,
//   CardMedia,
//   // CardContent,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import YogaIcon from "@mui/icons-material/SelfImprovement";
// import SpaIcon from "@mui/icons-material/Spa";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

// export default function AboutUs() {
//   const galleryImages = [
//     "/img/g1.jpg",
//     "/img/g3.jpg",
//     "/img/g2.jpg",
//     "/img/g4.jpg",
//     "/img/g5.jpg",
//     "/img/prize.jpg",
//     "/img/g7.jpg",
//     "/img/g8.jpg",
//     "/img/g11.jpg",
//   ];

//   const features = [
//     {
//       icon: <YogaIcon fontSize="large" color="primary" />,
//       title: "Holistic Approach",
//       description: "We integrate mind, body and spirit in all our teachings",
//     },
//     {
//       icon: <SpaIcon fontSize="large" color="primary" />,
//       title: "Serene Environment",
//       description: "Our space is designed for peace and tranquility",
//     },
//     {
//       icon: <FitnessCenterIcon fontSize="large" color="primary" />,
//       title: "Expert Instructors",
//       description:
//         "Learn from certified yoga masters with decades of experience",
//     },
//     {
//       icon: <EmojiNatureIcon fontSize="large" color="primary" />,
//       title: "Natural Healing",
//       description: "Harness the power of nature in your wellness journey",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//           position: "relative",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "rgba(0,0,0,0.3)",
//             zIndex: 1,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             backgroundImage: "url(/img/final.jpg)",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
//             minHeight: "300px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box sx={{ zIndex: 2, textAlign: "center", px: 2 }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: {
//                   xs: "1.5rem",
//                   sm: "2rem",
//                   md: "2.5rem",
//                   lg: "3rem",
//                 },
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//                 mb: 2,
//               }}
//             >
//               About Our Yoga Journey
//             </Typography>

//             <Typography
//               variant="subtitle1"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
//                 textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
//                 maxWidth: "800px",
//                 mb: 3,
//               }}
//             >
//               Discover the path to inner peace and physical wellness
//             </Typography>
//           </Box>

//           {/* Breadcrumbs */}
//           <Box
//             mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//             sx={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               zIndex: 2,
//             }}
//           >
//             <Breadcrumbs aria-label="breadcrumb">
//               <Link
//                 to="/"
//                 style={{
//                   textDecoration: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                 }}
//               >
//                 <HomeIcon sx={{ mr: 0.5 }} />
//                 <b>HOME</b>
//               </Link>
//               <Link
//                 to="/about"
//                 style={{
//                   textDecoration: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                 }}
//               >
//                 <WhatshotIcon sx={{ mr: 0.5 }} />
//                 <b>About Us</b>
//               </Link>
//             </Breadcrumbs>
//           </Box>
//         </Box>
//       </Box>

//       {/* Content Section */}
//       <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Grid container spacing={4}>
//           {/* Image Card */}
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   maxWidth: 405,
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   position: "relative",
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     transition: "transform 0.3s ease",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{
//                     height: { xs: 270, sm: 300, md: 350, lg: 400 },
//                     width: "100%",
//                   }}
//                   image="/img/p1.jpg"
//                   alt="Yoga instructor"
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                     p: 2,
//                     color: "white",
//                   }}
//                 >
//                   <Typography variant="h6">Master Dibakar</Typography>
//                   <Typography variant="body2">
//                     Founder & Lead Instructor
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Text Card */}
//           <Grid item xs={12} md={8}>
//             <Box
//               sx={{
//                 maxWidth: "100%",
//                 height: "auto",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 padding: { xs: 2, sm: 3, md: 4 },
//                 background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
//                 borderLeft: "5px solid",
//                 borderColor: "primary.main",
//               }}
//             >
//               <Box sx={{ backgroundColor: "transparent" }}>
//                 <Typography
//                   gutterBottom
//                   variant="h4"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: { xs: "center", md: "left" },
//                     color: "primary.main",
//                     mb: 3,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <SpaIcon fontSize="large" sx={{ mr: 1 }} />
//                   Our Yoga Philosophy
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color="text.secondary"
//                   sx={{
//                     fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
//                     lineHeight: 1.6,
//                     textAlign: "justify",
//                   }}
//                 >
//                   At <b>Dibakar Yogarathi Institute</b>, we believe yoga is more
//                   than physical postures - it's a transformative journey that
//                   harmonizes body, mind and spirit. Nestled in the serene
//                   surroundings of Garia, Kolkata, our sanctuary offers a sacred
//                   space for self-discovery and holistic healing.
//                   <br />
//                   <br />
//                   Our comprehensive curriculum blends ancient wisdom with modern
//                   science, offering:
//                   <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
//                     <li>200+ hour Yoga Teacher Training Certification</li>
//                     <li>Therapeutic Yoga for injury rehabilitation</li>
//                     <li>Meditation and Pranayama masterclasses</li>
//                     <li>Ayurvedic wellness workshops</li>
//                   </ul>
//                   Each program is carefully crafted to honor yoga's rich
//                   tradition while addressing contemporary wellness needs. Our
//                   graduates leave not just as instructors, but as healers and
//                   guides.
//                 </Typography>

//                 <Box mt={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{
//                       borderRadius: "20px",
//                       px: 4,
//                       py: 1.5,
//                       fontWeight: "bold",
//                       textTransform: "none",
//                       fontSize: "1.1rem",
//                       "&:hover": {
//                         boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                       },
//                     }}
//                   >
//                     Begin Your Journey
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Features Section */}
//       <Box
//         mt={8}
//         sx={{
//           background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
//           py: 6,
//           px: { xs: 2, sm: 3, md: 4 },
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "primary.main",
//             mb: 6,
//             position: "relative",
//             "&::after": {
//               content: '""',
//               display: "block",
//               width: "80px",
//               height: "3px",
//               background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
//               margin: "15px auto 0",
//               borderRadius: "3px",
//             },
//           }}
//         >
//           Why Choose Our Institute
//         </Typography>

//         <Grid container spacing={4}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Box
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   textAlign: "center",
//                   p: 3,
//                   borderRadius: "12px",
//                   boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
//                   background: "white",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "translateY(-5px)",
//                     boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: "80px",
//                     height: "80px",
//                     borderRadius: "50%",
//                     backgroundColor: "primary.light",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     mb: 2,
//                   }}
//                 >
//                   {feature.icon}
//                 </Box>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {feature.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Gallery Section */}
//       <Box mt={8} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "primary.main",
//             mb: 6,
//             position: "relative",
//             "&::before": {
//               content: '""',
//               position: "absolute",
//               left: "50%",
//               bottom: "-10px",
//               transform: "translateX(-50%)",
//               width: "100px",
//               height: "4px",
//               background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
//               borderRadius: "2px",
//             },
//           }}
//         >
//           Our Sacred Space
//         </Typography>

//         <Grid container spacing={2}>
//           {galleryImages.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                   position: "relative",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{
//                     height: { xs: 200, sm: 250, md: 300 },
//                     width: "100%",
//                     objectFit: "cover",
//                   }}
//                   image={image}
//                   alt={`Gallery Image ${index + 1}`}
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     color: "white",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     opacity: 0,
//                     transition: "opacity 0.3s ease",
//                     "&:hover": {
//                       opacity: 1,
//                     },
//                   }}
//                 >
//                   <SpaIcon fontSize="large" />
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Testimonial/Quote Section */}
//       <Box
//         mt={8}
//         sx={{
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           py: 8,
//           color: "white",
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: "800px",
//             margin: "0 auto",
//             px: { xs: 2, sm: 3, md: 4 },
//             textAlign: "center",
//           }}
//         >
//           <SpaIcon sx={{ fontSize: "3rem", mb: 2 }} />
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               mb: 3,
//               fontStyle: "italic",
//             }}
//           >
//             "Yoga is the journey of the self, through the self, to the self."
//           </Typography>
//           <Typography variant="h6" sx={{ opacity: 0.9 }}>
//             - The Bhagavad Gita
//           </Typography>
//           <Button
//             variant="outlined"
//             color="inherit"
//             sx={{
//               mt: 4,
//               borderRadius: "20px",
//               px: 4,
//               py: 1.5,
//               fontWeight: "bold",
//               borderWidth: "2px",
//               "&:hover": {
//                 borderWidth: "2px",
//                 backgroundColor: "rgba(255,255,255,0.1)",
//               },
//             }}
//           >
//             Join Our Community
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }













































// import { Box, Breadcrumbs, Typography, Grid, CardMedia, CardContent, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import YogaIcon from '@mui/icons-material/SelfImprovement';
// import SpaIcon from '@mui/icons-material/Spa';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// import { motion } from "framer-motion";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeIn"
//     }
//   }
// };

// const scaleUp = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "backOut"
//     }
//   }
// };

// const slideInLeft = {
//   hidden: { x: -50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const slideInRight = {
//   hidden: { x: 50, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const hoverScale = {
//   scale: 1.03,
//   transition: { duration: 0.3 }
// };

// const tapScale = {
//   scale: 0.98
// };

// export default function AboutUs() {
//   const galleryImages = [
//     "/img/g1.jpg",
//     "/img/g3.jpg",
//     "/img/g2.jpg",
//     "/img/g4.jpg",
//     "/img/g5.jpg",
//     "/img/prize.jpg",
//     "/img/g7.jpg",
//     "/img/g8.jpg",
//     "/img/g11.jpg",
//   ];

//   const features = [
//     {
//       icon: <YogaIcon fontSize="large" color="primary" />,
//       title: "Holistic Approach",
//       description: "We integrate mind, body and spirit in all our teachings"
//     },
//     {
//       icon: <SpaIcon fontSize="large" color="primary" />,
//       title: "Serene Environment",
//       description: "Our space is designed for peace and tranquility"
//     },
//     {
//       icon: <FitnessCenterIcon fontSize="large" color="primary" />,
//       title: "Expert Instructors",
//       description: "Learn from certified yoga masters with decades of experience"
//     },
//     {
//       icon: <EmojiNatureIcon fontSize="large" color="primary" />,
//       title: "Natural Healing",
//       description: "Harness the power of nature in your wellness journey"
//     }
//   ];

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Hero Section */}
//       <Box
//         mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//           position: "relative",
//           '&::before': {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "rgba(0,0,0,0.3)",
//             zIndex: 1
//           }
//         }}
//       >
//         <Box
//           sx={{
//             backgroundImage: "url(/img/final.jpg)",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
//             minHeight: "300px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <motion.div 
//             variants={fadeIn}
//             style={{ zIndex: 2, textAlign: "center", padding: "0 16px" }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//                 mb: 2
//               }}
//             >
//               About Our Yoga Journey
//             </Typography>
            
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
//                 textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
//                 maxWidth: "800px",
//                 mb: 3
//               }}
//             >
//               Discover the path to inner peace and physical wellness
//             </Typography>
//           </motion.div>

//           {/* Breadcrumbs */}
//           <motion.div
//             variants={fadeIn}
//             style={{
//               marginTop: "16px",
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               zIndex: 2,
//             }}
//           >
//             <Breadcrumbs aria-label="breadcrumb">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
//                   <HomeIcon sx={{ mr: 0.5 }} />
//                   <b>HOME</b>
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link to="/about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
//                   <WhatshotIcon sx={{ mr: 0.5 }} />
//                   <b>About Us</b>
//                 </Link>
//               </motion.div>
//             </Breadcrumbs>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Content Section */}
//       <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Grid container spacing={4}>
//           {/* Image Card */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               variants={slideInLeft}
//               style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//             >
//               <motion.div
//                 whileHover={hoverScale}
//                 whileTap={tapScale}
//                 style={{
//                   maxWidth: 405,
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   style={{ height: "auto", width: '100%' }}
//                   image="/img/p1.jpg"
//                   alt="Yoga instructor"
//                 />
//                 <Box sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                   p: 2,
//                   color: "white"
//                 }}>
//                   <Typography variant="h6">Master Dibakar</Typography>
//                   <Typography variant="body2">Founder & Lead Instructor</Typography>
//                 </Box>
//               </motion.div>
//             </motion.div>
//           </Grid>

//           {/* Text Card */}
//           <Grid item xs={12} md={8}>
//             <motion.div
//               variants={slideInRight}
//               style={{
//                 maxWidth: "100%",
//                 height: "auto",
//                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "8px",
//                 padding: "16px",
//                 background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
//                 borderLeft: "5px solid #3f51b5"
//               }}
//             >
//               <Box sx={{ backgroundColor: "transparent" }}>
//                 <motion.div variants={itemVariants}>
//                   <Typography
//                     gutterBottom
//                     variant="h4"
//                     component="div"
//                     sx={{
//                       fontWeight: "bold",
//                       textAlign: { xs: "center", md: "left" },
//                       color: "primary.main",
//                       mb: 3,
//                       display: "flex",
//                       alignItems: "center"
//                     }}
//                   >
//                     <motion.div 
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                       style={{ display: "inline-flex", marginRight: "8px" }}
//                     >
//                       <SpaIcon fontSize="large" />
//                     </motion.div>
//                     Our Yoga Philosophy
//                   </Typography>
//                 </motion.div>
                
//                 <motion.div variants={itemVariants}>
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{
//                       fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
//                       lineHeight: 1.6,
//                       textAlign: "justify",
//                     }}
//                   >
//                     At <b>Dibakar Yogarathi Institute</b>, we believe yoga is more than physical postures - it's a transformative journey that harmonizes body, mind and spirit. Nestled in the serene surroundings of Garia, Kolkata, our sanctuary offers a sacred space for self-discovery and holistic healing.
//                     <br /><br />
//                     Our comprehensive curriculum blends ancient wisdom with modern science, offering:
//                     <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
//                       <li>200+ hour Yoga Teacher Training Certification</li>
//                       <li>Therapeutic Yoga for injury rehabilitation</li>
//                       <li>Meditation and Pranayama masterclasses</li>
//                       <li>Ayurvedic wellness workshops</li>
//                     </ul>
//                     Each program is carefully crafted to honor yoga's rich tradition while addressing contemporary wellness needs. Our graduates leave not just as instructors, but as healers and guides.
//                   </Typography>
//                 </motion.div>
                
//                 <motion.div 
//                   variants={itemVariants}
//                   style={{ marginTop: "24px", textAlign: { xs: "center", md: "left" } }}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(63, 81, 181, 0.3)" }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button 
//                       variant="contained" 
//                       color="primary"
//                       sx={{
//                         borderRadius: "20px",
//                         px: 4,
//                         py: 1.5,
//                         fontWeight: "bold",
//                         textTransform: "none",
//                         fontSize: "1.1rem",
//                       }}
//                     >
//                       Begin Your Journey
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Features Section */}
//       <Box mt={8} sx={{ 
//         background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
//         py: 6,
//         px: { xs: 2, sm: 3, md: 4 },
//       }}>
//         <motion.div variants={fadeIn}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               textAlign: "center",
//               color: "primary.main",
//               mb: 6,
//               position: "relative",
//               '&::after': {
//                 content: '""',
//                 display: "block",
//                 width: "80px",
//                 height: "3px",
//                 background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
//                 margin: "15px auto 0",
//                 borderRadius: "3px"
//               }
//             }}
//           >
//             Why Choose Our Institute
//           </Typography>
//         </motion.div>
        
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <Grid container spacing={4}>
//             {features.map((feature, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <motion.div
//                   variants={itemVariants}
//                   whileHover={{ y: -10, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
//                 >
//                   <Box
//                     sx={{
//                       height: "100%",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       textAlign: "center",
//                       p: 3,
//                       borderRadius: "12px",
//                       boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
//                       background: "white",
//                       transition: "all 0.3s ease",
//                     }}
//                   >
//                     <motion.div
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Box
//                         sx={{
//                           width: "80px",
//                           height: "80px",
//                           borderRadius: "50%",
//                           backgroundColor: "primary.light",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           mb: 2
//                         }}
//                       >
//                         {feature.icon}
//                       </Box>
//                     </motion.div>
//                     <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                       {feature.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {feature.description}
//                     </Typography>
//                   </Box>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Box>

//       {/* Gallery Section */}
//       {/* <Box mt={8} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <motion.div variants={fadeIn}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               textAlign: "center",
//               color: "primary.main",
//               mb: 6,
//               position: "relative",
//               '&::before': {
//                 content: '""',
//                 position: "absolute",
//                 left: "50%",
//                 bottom: "-10px",
//                 transform: "translateX(-50%)",
//                 width: "100px",
//                 height: "4px",
//                 background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
//                 borderRadius: "2px"
//               }
//             }}
//           >
//             Our Sacred Space
//           </Typography>
//         </motion.div>
        
//         <motion.div
//           variants={containerVariants}
//           style={{ width: "100%" }}
//         >
//           <Grid container spacing={2}>
//             {galleryImages.map((image, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <motion.div
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Box
//                     sx={{
//                       width: "100%",
//                       height: "auto",
//                       boxShadow: 3,
//                       borderRadius: "12px",
//                       overflow: "hidden",
//                       position: "relative",
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         height: { xs: 200, sm: 250, md: 300 },
//                         width: "100%",
//                         objectFit: "cover",
//                       }}
//                       image={image}
//                       alt={`Gallery Image ${index + 1}`}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: "rgba(0, 0, 0, 0.5)",
//                         color: "white",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <motion.div
//                         animate={{ y: [0, -10, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       >
//                         <SpaIcon fontSize="large" />
//                       </motion.div>
//                     </motion.div>
//                   </Box>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Box> */}     












//       {/* Gallery Section */}
// <Box mt={8} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//   <motion.div variants={fadeIn}>
//     <Typography
//       variant="h4"
//       sx={{
//         fontWeight: "bold",
//         textAlign: "center",
//         color: "primary.main",
//         mb: 6,
//         position: "relative",
//         '&::before': {
//           content: '""',
//           position: "absolute",
//           left: "50%",
//           bottom: "-10px",
//           transform: "translateX(-50%)",
//           width: "100px",
//           height: "4px",
//           background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
//           borderRadius: "2px"
//         }
//       }}
//     >
//       Our Sacred Space
//     </Typography>
//   </motion.div>
  
//   {/* Updated Gallery with hover text */}
//   <motion.div
//     variants={containerVariants}
//     style={{ width: "100%" }}
//   >
//     <Grid container spacing={2}>
//       {[
//         {
//           image: "/img/g1.jpg",
//           title: "Meditation Hall",
//           description: "Our peaceful meditation space with natural lighting"
//         },
//         {
//           image: "/img/g3.jpg",
//           title: "Yoga Studio",
//           description: "Main practice area with premium mats and props"
//         },
//         {
//           image: "/img/g2.jpg",
//           title: "Outdoor Shala",
//           description: "Open-air practice space surrounded by nature"
//         },
//         {
//           image: "/img/g4.jpg",
//           title: "Reception Area",
//           description: "Welcoming entrance with Ayurvedic tea station"
//         },
//         {
//           image: "/img/g5.jpg",
//           title: "Teacher Training",
//           description: "Certification programs with expert instructors"
//         },
//         {
//           image: "/img/prize.jpg",
//           title: "Achievements",
//           description: "Recognitions for our excellence in yoga education"
//         },
//         {
//           image: "/img/g7.jpg",
//           title: "Group Sessions",
//           description: "Community classes for all skill levels"
//         },
//         {
//           image: "/img/g8.jpg",
//           title: "Private Lessons",
//           description: "One-on-one instruction tailored to your needs"
//         },
//         {
//           image: "/img/g11.jpg",
//           title: "Wellness Library",
//           description: "Resource center with yoga philosophy texts"
//         }
//       ].map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <motion.div
//             variants={itemVariants}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             style={{ height: "100%" }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 boxShadow: 3,
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 position: "relative",
//                 cursor: "pointer"
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 sx={{
//                   height: { xs: 200, sm: 250, md: 300 },
//                   width: "100%",
//                   objectFit: "cover",
//                 }}
//                 image={item.image}
//                 alt={item.title}
//               />
              
//               {/* Hover Overlay with Text */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: "rgba(0, 0, 0, 0.7)",
//                   color: "white",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   opacity: 0,
//                   transition: "opacity 0.3s ease",
//                   padding: 3,
//                   textAlign: "center",
//                   '&:hover': {
//                     opacity: 1
//                   }
//                 }}
//               >
//                 <Typography 
//                   variant="h5" 
//                   sx={{ 
//                     fontWeight: "bold", 
//                     mb: 2,
//                     color: "primary.light"
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body1">
//                   {item.description}
//                 </Typography>
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   style={{ marginTop: "16px" }}
//                 >
//                   <SpaIcon fontSize="large" color="primary" />
//                 </motion.div>
//               </Box>
//             </Box>
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>
//   </motion.div>
// </Box>

//       {/* Testimonial/Quote Section */}
//       <Box mt={8} sx={{ 
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         py: 8,
//         color: "white",
//       }}>
//         <motion.div
//           variants={scaleUp}
//           style={{ 
//             maxWidth: "800px",
//             margin: "0 auto",
//             padding: "0 16px",
//             textAlign: "center"
//           }}
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//           >
//             <SpaIcon sx={{ fontSize: "3rem", mb: 2 }} />
//           </motion.div>
//           <motion.div
//             variants={containerVariants}
//           >
//             <motion.div variants={itemVariants}>
//               <Typography 
//                 variant="h4" 
//                 sx={{ 
//                   fontWeight: "bold", 
//                   mb: 3,
//                   fontStyle: "italic"
//                 }}
//               >
//                 "Yoga is the journey of the self, through the self, to the self."
//               </Typography>
//             </motion.div>
//             <motion.div variants={itemVariants}>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 - The Bhagavad Gita
//               </Typography>
//             </motion.div>
//             <motion.div 
//               variants={itemVariants}
//               style={{ marginTop: "32px" }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   variant="outlined"
//                   color="inherit"
//                   sx={{
//                     borderRadius: "20px",
//                     px: 4,
//                     py: 1.5,
//                     fontWeight: "bold",
//                     borderWidth: "2px",
//                     '&:hover': {
//                       borderWidth: "2px",
//                       backgroundColor: "rgba(255,255,255,0.1)"
//                     }
//                   }}
//                 >
//                   Join Our Community
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </Box>
//     </motion.div>
//   );
// }











import React from 'react';
import { Box, Breadcrumbs, Typography, Grid, CardMedia, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import YogaIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { motion } from "framer-motion"; 
import { useEffect } from 'react';
import Animated from '../Animated/Animated';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

const tapScale = {
  scale: 0.98
};

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const features = [
    {
      icon: <YogaIcon fontSize="large" color="primary" />,
      title: "Holistic Approach",
      description: "We integrate mind, body and spirit in all our teachings"
    },
    {
      icon: <SpaIcon fontSize="large" color="primary" />,
      title: "Serene Environment",
      description: "Our space is designed for peace and tranquility"
    },
    {
      icon: <FitnessCenterIcon fontSize="large" color="primary" />,
      title: "Expert Instructors",
      description: "Learn from certified yoga masters with decades of experience"
    },
    {
      icon: <EmojiNatureIcon fontSize="large" color="primary" />,
      title: "Natural Healing",
      description: "Harness the power of nature in your wellness journey"
    }
  ];

  const galleryItems = [
    {
      image: "/img/g1.jpg",
      title: "Meditation Hall",
      description: "Our peaceful meditation space with natural lighting"
    },
    {
      image: "/img/g3.jpg",
      title: "Yoga Studio",
      description: "Main practice area with premium mats and props"
    },
    {
      image: "/img/g2.jpg",
      title: "Outdoor Shala",
      description: "Open-air practice space surrounded by nature"
    },
    {
      image: "/img/g4.jpg",
      title: "Reception Area",
      description: "Welcoming entrance with Ayurvedic tea station"
    },
    {
      image: "/img/g5.jpg",
      title: "Teacher Training",
      description: "Certification programs with expert instructors"
    },
    {
      image: "/img/prize.jpg",
      title: "Achievements",
      description: "Recognitions for our excellence in yoga education"
    },
    {
      image: "/img/g7.jpg",
      title: "Group Sessions",
      description: "Community classes for all skill levels"
    },
    {
      image: "/img/g8.jpg",
      title: "Private Lessons",
      description: "One-on-one instruction tailored to your needs"
    },
    {
      image: "/img/g11.jpg",
      title: "Wellness Library",
      description: "Resource center with yoga philosophy texts"
    }
  ];  
 


    // Smooth scroll to top on component mount
    // useEffect(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // }, []);   



    useEffect(() => {
      // Instant scroll to top (no animation)
      window.scrollTo(0, 0);
      
      // Alternative method that also works
      // document.documentElement.scrollTop = 0;
    }, []);
  
  
  


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <Box
        mt={{ xs: 6, sm: 8, md: 10, lg: 12 }}
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 1
          }
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/img/final.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" },
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div 
            variants={fadeIn}
            style={{ zIndex: 2, textAlign: "center", padding: "0 16px" }}
          >
            <Typography
              variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                mb: 2,
                px: isMobile ? 1 : 0
              }}
            >
              About Our Yoga Journey
            </Typography>
            
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                color: "white",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                maxWidth: "800px",
                mb: 3,
                px: isMobile ? 2 : 0
              }}
            >
              Discover the path to inner peace and physical wellness
            </Typography>
          </motion.div>

          {/* Breadcrumbs */}
          <motion.div
            variants={fadeIn}
            style={{
              marginTop: "16px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Breadcrumbs 
              aria-label="breadcrumb"
              sx={{
                fontSize: isMobile ? '0.75rem' : '0.875rem'
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                  <HomeIcon sx={{ mr: 0.5, fontSize: isMobile ? '1rem' : '1.25rem' }} />
                  <b>HOME</b>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                  <WhatshotIcon sx={{ mr: 0.5, fontSize: isMobile ? '1rem' : '1.25rem' }} />
                  <b>About Us</b>
                </Link>
              </motion.div>
            </Breadcrumbs>
          </motion.div>
        </Box>
      </Box>

      {/* Content Section */}
      <Box mt={5} sx={{ 
        padding: { 
          xs: 2, 
          sm: 3, 
          md: 4 
        },
        px: isMobile ? 2 : 4
      }}>
        <Grid container spacing={isMobile ? 2 : 4}>
          {/* Image Card */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={slideInLeft}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
            >
              <motion.div
                whileHover={hoverScale}
                whileTap={tapScale}
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: isMobile ? 250 : isTablet ? 300 : 350,
                    width: '100%',
                    objectFit: "cover"
                  }}
                  image="/img/p1.jpg"
                  alt="Yoga instructor"
                />
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  p: 2,
                  color: "white"
                }}>
                  <Typography variant={isMobile ? "subtitle1" : "h6"}>Master Dibakar</Typography>
                  <Typography variant={isMobile ? "caption" : "body2"}>Founder & Lead Instructor</Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Text Card */}
          <Grid item xs={12} md={8}>
            <motion.div
              variants={slideInRight}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: isMobile ? "16px" : "24px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
                borderLeft: "5px solid #3f51b5"
              }}
            >
              <Box>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                      fontWeight: "bold",
                      textAlign: { xs: "center", md: "left" },
                      color: "primary.main",
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isMobile ? "center" : "flex-start"
                    }}
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-flex", marginRight: "8px" }}
                    >
                      <SpaIcon fontSize={isMobile ? "medium" : "large"} />
                    </motion.div>
                    Our Yoga Philosophy
                  </Typography>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: isMobile ? "0.875rem" : "1rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    At <b>Dibakar Yogarathi Institute</b>, we believe yoga is more than physical postures - it's a transformative journey that harmonizes body, mind and spirit. Nestled in the serene surroundings of Garia, Kolkata, our sanctuary offers a sacred space for self-discovery and holistic healing.
                    <br /><br />
                    Our comprehensive curriculum blends ancient wisdom with modern science, offering:
                    <ul style={{ 
                      paddingLeft: isMobile ? "16px" : "20px", 
                      margin: "10px 0",
                      fontSize: isMobile ? "0.875rem" : "1rem"
                    }}>
                      <li>200+ hour Yoga Teacher Training Certification</li>
                      <li>Therapeutic Yoga for injury rehabilitation</li>
                      <li>Meditation and Pranayama masterclasses</li>
                      <li>Ayurvedic wellness workshops</li>
                    </ul>
                    Each program is carefully crafted to honor yoga's rich tradition while addressing contemporary wellness needs. Our graduates leave not just as instructors, but as healers and guides.
                  </Typography>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  style={{ 
                    marginTop: "24px", 
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(63, 81, 181, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="contained" 
                      color="primary"
                      size={isMobile ? "medium" : "large"}
                      sx={{
                        borderRadius: "20px",
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: isMobile ? "0.875rem" : "1rem",
                      }}
                    >
                      Begin Your Journey
                    </Button>
                  </motion.div>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Features Section */}
      <Box mt={8} sx={{ 
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        py: isMobile ? 4 : 6,
        px: { xs: 2, sm: 3, md: 4 },
      }}>
        <motion.div variants={fadeIn}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.main",
              mb: isMobile ? 4 : 6,
              position: "relative",
              '&::after': {
                content: '""',
                display: "block",
                width: "80px",
                height: "3px",
                background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
                margin: isMobile ? "8px auto 0" : "15px auto 0",
                borderRadius: "3px"
              }
            }}
          >
            Why Choose Our Institute
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={isMobile ? 2 : 4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: isMobile ? 0 : -10, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: isMobile ? 2 : 3,
                      borderRadius: "12px",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      background: "white",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: isMobile ? 0 : 10, scale: isMobile ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box
                        sx={{
                          width: isMobile ? "60px" : "80px",
                          height: isMobile ? "60px" : "80px",
                          borderRadius: "50%",
                          backgroundColor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          fontSize: isMobile ? "medium" : "large"
                        })}
                      </Box>
                    </motion.div>
                    <Typography 
                      variant={isMobile ? "subtitle1" : "h6"} 
                      sx={{ 
                        fontWeight: "bold", 
                        mb: 1,
                        fontSize: isMobile ? "1rem" : "1.1rem"
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontSize: isMobile ? "0.8rem" : "0.875rem"
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      




{/* Founders Section */}
<Box mt={8} sx={{ 
  background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
  py: isMobile ? 4 : 8,
  px: { xs: 2, sm: 3, md: 4 },
  position: "relative",
  overflow: "hidden",
  '&::before': {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/img/yoga-pattern.png')",
    backgroundRepeat: "repeat",
    opacity: 0.03,
    zIndex: 0
  }
}}>
  <motion.div variants={fadeIn}>
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
    {/* Dibakar Das */}
    <Grid item xs={12} md={6}>
      <motion.div
        variants={slideInLeft}
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
        <Box sx={{
          width: isMobile ? "100%" : "40%",
          height: isMobile ? "300px" : "auto",
          position: "relative",
          overflow: "hidden"
        }}>
          <CardMedia
            component="img"
            image="/img/arun.jpg" // Replace with actual image path
            alt="Dibakar Das"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              '&:hover': {
                transform: "scale(1.05)"
              }
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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Mr. Arun Patra</Typography>
            <Typography variant="body2">Co-Founder & Spiritual Guide</Typography>
          </Box>
        </Box>
        
        <Box sx={{
          width: isMobile ? "100%" : "60%",
          p: isMobile ? 2 : 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ 
              fontStyle: "italic",
              mb: 1,
              fontSize: isMobile ? "0.875rem" : "1rem"
            }}>
              "Yoga is not about touching your toes, it's about what you learn on the way down."
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ 
            mb: 1,
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Education:</b> Master's in Yoga Science, RYT 500 Certified, PhD in Yogic Studies
          </Typography>
          
          <Typography variant="body1" sx={{ 
            mb: 1,
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Achievements:</b> 
            <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
              <li>Gold Medalist in International Yoga Championship</li>
              <li>Author of 3 bestselling books on Yoga Philosophy</li>
              <li>Recipient of "Yoga Ratna" National Award</li>
            </ul>
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Contributions:</b> Developed the institute's core curriculum and meditation programs with over 20 years of teaching experience.
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ alignSelf: "flex-start", marginTop: "16px" }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<SpaIcon />}
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                borderWidth: "2px",
                '&:hover': {
                  borderWidth: "2px"
                }
              }}
            >
              Read Biography
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Grid>

    {/* Rupam Das */}
    <Grid item xs={12} md={6}>
      <motion.div
        variants={slideInRight}
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
        <Box sx={{
          width: isMobile ? "100%" : "40%",
          height: isMobile ? "300px" : "auto",
          position: "relative",
          overflow: "hidden"
        }}>
          <CardMedia
            component="img"
            image="/img/barun.jpg" // Replace with actual image path
            alt="Rupam Das"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              '&:hover': {
                transform: "scale(1.05)"
              }
            }}
          />
          <Box sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(156,39,176,0.8), transparent)",
            color: "white",
            p: 2,
            textAlign: "center"
          }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Mr. Varun Patra</Typography>
            <Typography variant="body2">Co-Founder & Therapeutic Specialist</Typography>
          </Box>
        </Box>
        
        <Box sx={{
          width: isMobile ? "100%" : "60%",
          p: isMobile ? 2 : 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ 
              fontStyle: "italic",
              mb: 1,
              fontSize: isMobile ? "0.875rem" : "1rem"
            }}>
              "Healing begins when we listen to our body with compassion."
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ 
            mb: 1,
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Education:</b> MD in Yoga Therapy, Certified Ayurvedic Practitioner, MSc in Sports Science
          </Typography>
          
          <Typography variant="body1" sx={{ 
            mb: 1,
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Achievements:</b> 
            <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
              <li>Pioneer in Yoga for Chronic Pain Management</li>
              <li>Developed "Yogic Healing" methodology</li>
              <li>Featured in "Top 40 Under 40" Wellness Leaders</li>
            </ul>
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontSize: isMobile ? "0.875rem" : "1rem"
          }}>
            <b>Contributions:</b> Created the institute's therapeutic yoga programs and established partnerships with medical institutions.
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ alignSelf: "flex-start", marginTop: "16px" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<EmojiNatureIcon />}
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                borderWidth: "2px",
                '&:hover': {
                  borderWidth: "2px"
                }
              }}
            >
              Read Biography
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Grid>
  </Grid>

  {/* Founders' Joint Message */}
  <motion.div 
    variants={scaleUp}
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
      overflow: "hidden",
      '&::before': {
        content: '""',
        position: "absolute",
        top: "-50px",
        right: "-50px",
        width: "150px",
        height: "150px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%"
      }
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
      position: "relative",
      zIndex: 2
    }}>
      Our Shared Vision
    </Typography>
    
    <Typography variant={isMobile ? "body1" : "h6"} sx={{ 
      mb: 3,
      fontStyle: "italic",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
      fontSize: isMobile ? "0.875rem" : "1.1rem"
    }}>
      "Together we envisioned Dibakar Yogarathi Institute as a sanctuary where traditional wisdom meets modern wellness, creating a transformative experience for every seeker."
    </Typography>
    
    <Box sx={{ 
      display: "flex", 
      justifyContent: "center",
      position: "relative",
      zIndex: 2
    }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
          Meet Our Team
        </Button>
      </motion.div>
    </Box>
    
    <Box sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0.1,
      zIndex: 1
    }}>
      <SpaIcon sx={{ fontSize: "150px" }} />
    </Box>
  </motion.div>
</Box>





















    

<Animated/>


    {/* Gallery Section */}
<Box mt={8} sx={{ 
  padding: { 
    xs: 2, 
    sm: 3, 
    md: 4 
  },
  px: isMobile ? 2 : 4
}}>
  <motion.div variants={fadeIn}>
    <Typography
      variant={isMobile ? "h5" : "h4"}
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        color: "primary.main",
        mb: isMobile ? 4 : 6,
        position: "relative",
        '&::before': {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: "-10px",
          transform: "translateX(-50%)",
          width: "80px",
          height: "3px",
          background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
          borderRadius: "2px"
        }
      }}
    >
      Our Sacred Space
    </Typography>
  </motion.div>
  
  <motion.div
    variants={containerVariants}
    style={{ width: "100%" }}
  >
    <Grid container spacing={isMobile ? 1 : 2}>
      {galleryItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: isMobile ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ height: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: 3,
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                aspectRatio: "4/3" // Added aspect ratio to maintain consistent proportions
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: "cover",
                  objectPosition: "center" // Ensure images are centered
                }}
                image={item.image}
                alt={item.title}
              />
              
              {/* Hover Overlay with Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  p: isMobile ? 1 : 2,
                  textAlign: "center",
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <Typography 
                  variant={isMobile ? "subtitle1" : "h5"}
                  sx={{ 
                    fontWeight: "bold", 
                    mb: isMobile ? 1 : 2,
                    color: "primary.light",
                    fontSize: isMobile ? "1rem" : "1.25rem"
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant={isMobile ? "caption" : "body1"}
                  sx={{
                    fontSize: isMobile ? "0.7rem" : "0.875rem"
                  }}
                >
                  {item.description}
                </Typography>
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.1 }}
                  style={{ marginTop: isMobile ? "8px" : "16px" }}
                >
                  <SpaIcon fontSize={isMobile ? "medium" : "large"} color="primary" />
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Box>

      {/* Testimonial/Quote Section */}
      <Box mt={8} sx={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: isMobile ? 4 : 8,
        color: "white",
      }}>
        <motion.div
          variants={scaleUp}
          style={{ 
            maxWidth: "800px",
            margin: "0 auto",
            padding: isMobile ? "0 16px" : "0 24px",
            textAlign: "center"
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <SpaIcon sx={{ 
              fontSize: isMobile ? "2rem" : "3rem", 
              mb: isMobile ? 1 : 2 
            }} />
          </motion.div>
          <motion.div
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography 
                variant={isMobile ? "h5" : "h4"}
                sx={{ 
                  fontWeight: "bold", 
                  mb: isMobile ? 2 : 3,
                  fontStyle: "italic",
                  fontSize: isMobile ? "1.25rem" : "1.5rem"
                }}
              >
                "Yoga is the journey of the self, through the self, to the self."
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                sx={{ 
                  opacity: 0.9,
                  fontSize: isMobile ? "0.875rem" : "1rem"
                }}
              >
                - The Bhagavad Gita
              </Typography>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              style={{ marginTop: isMobile ? "16px" : "32px" }}
            >
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    borderRadius: "20px",
                    px: isMobile ? 3 : 4,
                    py: isMobile ? 1 : 1.5,
                    fontWeight: "bold",
                    borderWidth: "2px",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    '&:hover': {
                      borderWidth: "2px",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  Join Our Community
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
}


























































// import { Box, Breadcrumbs, Typography, Grid, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { Card } from "react-bootstrap";
// import { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import Animated from "../Animated/Animated";

// export default function AboutUs() {

//   const [isOpen, setIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);
//   const galleryImages = [
//     "/img/abc.jpg",
//     "/img/back1.jpg",
//     "/img/back2.jpg",
//     "/img/final.jpg",
//     "/img/prize1.jpg",
//     "/img/contact.jpg",
//     "/img/banner1.jpg",
//     "/img/back21.jpg",
//     "/img/benefites1.jpg",
//     "/img/prize.jpg",
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
//         sx={{
//           width: "100%",
//           overflow: "hidden", // Prevent horizontal overflow
//         }}
//       >
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/final.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover", // Ensures the image covers the container
//               backgroundPosition: "center center", // Centers the image both horizontally and vertically
//               height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" }, // Adjusted height for better responsiveness
//               minHeight: "300px", // Ensures a minimum height for very small screens
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               border: "none", // Explicitly remove borders
//               outline: "none", // Explicitly remove outlines
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//                 padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, // Add padding for better readability
//               }}
//             >
//               About Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   padding: 0, // Remove padding from Breadcrumbs
//                   margin: 0, // Remove margin from Breadcrumbs
//                 },
//                 "& .MuiBreadcrumbs-separator": {
//                   color: "white", // Ensure separator color matches the design
//                 },
//               }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>HOME</b>
//                 </Link>
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
//                     textDecoration: "none", // Remove underline from Link
//                   }}
//                   to="/"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>About Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Content Section */}
//       <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Grid container spacing={4}>
//           {/* Image Card */}
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Card
//                 sx={{
//                   maxWidth: 405,
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: 2,
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{ height: { xs: 250, sm: 300, md: 350, lg: 400 } }}
//                   image="/img/prize1.jpg"
//                   alt="green iguana"
//                 />
//               </Card>
//             </Box>
//           </Grid>

//           {/* Text Card */}
//           <Grid item xs={12} md={8}>
//             <Card
//               sx={{
//                 maxWidth: "100%",
//                 height: "auto",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 padding: { xs: 2, sm: 3, md: 4 },
//               }}
//             >
//               <CardContent sx={{ backgroundColor: "#dcd0ff" }}>
//                 <Typography
//                   gutterBottom
//                   variant="h4"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: { xs: "center", md: "left" },
//                     color: "primary.main",
//                     mb: 3,
//                   }}
//                 >
//                   Who We Are?
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color="text.secondary"
//                   sx={{
//                     fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
//                     lineHeight: 1.6,
//                     textAlign: "justify",
//                   }}
//                 >
//                   At <b>Dibakar Yogarathi Institute</b>, we are dedicated to the holistic well-being of individuals through the ancient practice of yoga, combined with modern therapeutic approaches. Located in Garia, Kolkata, our institute serves as a premier center for yoga education, career training, and wellness programs.
//                   <br />
//                   <br />
//                   With a strong focus on professional development, we offer Yoga Teacher’s Training Courses, Physiotherapy Courses, Advanced Yoga Training, and Rhythmic Yoga Training. Our structured programs are designed to empower aspiring yoga instructors and wellness practitioners with the knowledge, skills, and certifications needed to build a successful career in the field of health and fitness.
//                   <br />
//                   <br />
//                   Our team of experienced instructors ensures that every student receives personalized guidance, fostering both personal growth and professional excellence. Whether you are looking to deepen your yoga practice, start a career in teaching, or explore the healing benefits of physiotherapy and rhythmic yoga, Dibakar Yogarathi Institute provides the perfect environment for your journey.
//                   <br />
//                   <br />
//                   Join us and transform your passion for yoga into a fulfilling career while embracing a healthier, more balanced lifestyle!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>

//        <Animated/>

//       {/* Image Gallery Section */}
//        {/* <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "primary.main",
//             mb: 4,
//           }}
//         >
//           Our Gallery
//         </Typography>
//         <Grid container spacing={2}>
//           {galleryImages.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <Card
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   boxShadow: 3,
//                   borderRadius: 2,
//                   overflow: "hidden", // Ensures the image doesn't overflow the card
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{
//                     height: { xs: 200, sm: 250, md: 300, lg: 350 },
//                     width: "100%",
//                     objectFit: "cover", // Ensures the image covers the entire card
//                   }}
//                   image={image}
//                   alt={`Gallery Image ${index + 1}`}
//                 />
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>  */}

//  <Box sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
//       <Typography
//         variant="h4"
//         sx={{ fontWeight: "bold", textAlign: "center", color: "primary.main", mb: 4 }}
//       >
//         Image Gallery
//       </Typography>
//       <Grid container spacing={2}>
//         {galleryImages.map((image, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 cursor: "pointer",
//               }}
//               onClick={() => {
//                 setCurrentImage(index);
//                 setIsOpen(true);
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 sx={{ height: { xs: 200, sm: 250, md: 300, lg: 350 }, width: "100%", objectFit: "cover" }}
//                 image={image}
//                 alt={`Gallery Image ${index + 1}`}
//               />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {isOpen && (
//         <Lightbox
//           mainSrc={galleryImages[currentImage]}
//           nextSrc={galleryImages[(currentImage + 1) % galleryImages.length]}
//           prevSrc={galleryImages[(currentImage + galleryImages.length - 1) % galleryImages.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setCurrentImage((currentImage + galleryImages.length - 1) % galleryImages.length)
//           }
//           onMoveNextRequest={() => setCurrentImage((currentImage + 1) % galleryImages.length)}
//         />
//       )}
//     </Box>

//     </>
//   );
// }



// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Box,
//   Breadcrumbs,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Paper,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7gwmvm8", // Replace with your EmailJS service ID
//         "template_to7c3mh", // Replace with your EmailJS template ID
//         form.current,
//         {
//           publicKey: "o5biHbQnnVZOktGRF", // Replace with your EmailJS public key
//         }
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           toast.success("Message sent successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//           form.current.reset(); // Reset the form after successful submission
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           toast.error("Failed to send the message. Please try again.", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//         }
//       );
//   };

//   return (
//     <>
//       {/* Toast Container for Notifications */}
//       <ToastContainer />

//       {/* Hero Section */}
//       <Box mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/back21.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "90vh" },
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
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
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//               sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
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
//                   }}
//                   to="/"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>Contact Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Contact Information and Form Section */}
//       <Box mt={4} mb={4} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
//         <Grid container spacing={4}>
//           {/* Left Column - Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {/* Address Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Address
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     Laskarpur Peyara Bagan,Kol-700153
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Phone Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Phone
//                   </Typography>
//                   <Typography color="white" variant="body1">
//                     (+91) 9339058372
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Email Box */}
//                <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Email
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     <Link >dibakaryogarathiinstitute@gmail.com</Link>
//                   </Typography>
//                 </Box>
//               </Grid> 





//               {/* Email Box */}
//    {/* <Grid item xs={12}>
//   <Box
//     sx={{
//       backgroundColor: "#20252D",
//       p: { xs: 2, sm: 3, md: 4 },
//       borderRadius: 4,
//       textAlign: "center",
//       mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//     }}
//   >
//     <Typography variant="h6" gutterBottom color="white">
//       Email
//     </Typography>
//     <Typography variant="body1" color="white">
//       <a
//         href="mailto:dibakaryogarathiinstitute@gmail.com"
//         style={{ color: "white", textDecoration: "none" }}
//       >
//         dibakaryogarathiinstitute@gmail.com
//       </a>
//     </Typography>
//   </Box>
// </Grid> */}

//               {/* Opening Hours Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Opening Hours
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     Morning:7.00 AM - 10.00 AM <br />
//                     Evening:4.00 PM -8.00 PM
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Right Column - Get in Touch Form */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: { xs: 2, sm: 3, md: 4 },
//                 backgroundColor: "#E6E6FA",
//                 borderRadius: 4,
//                 mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//               }}
//             >
//               <Typography variant="h5" gutterBottom>
//                 Get in Touch
//               </Typography>
//               <form ref={form} onSubmit={sendEmail}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   name="name"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   name="email"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
//                   name="message"
//                   required
//                   multiline
//                   rows={4}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                 >
//                   Submit
//                 </Button>
//               </form>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Responsive Map Section */}
//         <Box mt={4}>
//           <Grid container>
//             <Grid item xs={12}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   overflow: "hidden",
//                   width: "100%",
//                   paddingTop: "56.25%", // 16:9 aspect ratio (height/width)
//                 }}
//               >
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     border: 0,
//                   }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Contact;   















// import { useRef, useState } from "react"; // Import useState
// import emailjs from "@emailjs/browser";
// import {
//   Box,
//   Breadcrumbs,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Paper,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

// const Contact = () => {
//   const form = useRef();
//   const [isSending, setIsSending] = useState(false); // State to track sending status

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true); // Set sending state to true

//     emailjs
//       .sendForm(
//         "service_7gwmvm8", // Replace with your EmailJS service ID
//         "template_to7c3mh", // Replace with your EmailJS template ID
//         form.current,
//         {
//           publicKey: "o5biHbQnnVZOktGRF", // Replace with your EmailJS public key
//         }
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           toast.success("Message sent successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//           form.current.reset(); // Reset the form after successful submission
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           toast.error("Failed to send the message. Please try again.", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//         }
//       )
//       .finally(() => {
//         setIsSending(false); // Reset sending state regardless of success or failure
//       });
//   };

//   return (
//     <>
//       {/* Toast Container for Notifications */}
//       <ToastContainer />

//       {/* Hero Section */}
//       <Box mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/back21.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "90vh" },
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
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
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
//               sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
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
//                   }}
//                   to="/"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>Contact Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Contact Information and Form Section */}
//       <Box mt={4} mb={4} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
//         <Grid container spacing={4}>
//           {/* Left Column - Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {/* Address Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Address
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     Laskarpur Peyara Bagan,Kol-700153
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Phone Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Phone
//                   </Typography>
//                   <Typography color="white" variant="body1">
//                     (+91) 9339058372
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Email Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Email
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     <a
//                       href="mailto:dibakaryogarathiinstitute@gmail.com"
//                       style={{ color: "white", textDecoration: "none" }}
//                     >
//                       dibakaryogarathiinstitute@gmail.com
//                     </a>
//                   </Typography>
//                 </Box>
//               </Grid>

//               {/* Opening Hours Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: { xs: 2, sm: 3, md: 4 },
//                     borderRadius: 4,
//                     textAlign: "center",
//                     mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Opening Hours
//                   </Typography>
//                   <Typography variant="body1" color="white">
//                     Morning:7.00 AM - 10.00 AM <br />
//                     Evening:4.00 PM -8.00 PM
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Right Column - Get in Touch Form */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: { xs: 2, sm: 3, md: 4 },
//                 backgroundColor: "#E6E6FA",
//                 borderRadius: 4,
//                 mx: { xs: 1, sm: 2, md: 4, lg: 6 },
//               }}
//             >
//               <Typography variant="h5" gutterBottom>
//                 Get in Touch
//               </Typography>
//               <form ref={form} onSubmit={sendEmail}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   name="name"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   name="email"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
//                   name="message"
//                   required
//                   multiline
//                   rows={4}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                   disabled={isSending} // Disable the button while sending
//                 >
//                   {isSending ? "Sending..." : "Submit"} {/* Change button text */}
//                 </Button>
//               </form>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Responsive Map Section */}
//         <Box mt={4}>
//           <Grid container>
//             <Grid item xs={12}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   overflow: "hidden",
//                   width: "100%",
//                   paddingTop: "56.25%", // 16:9 aspect ratio (height/width)
//                 }}
//               >
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     border: 0,
//                   }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Contact;
















// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Box,
//   Breadcrumbs,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Paper,
//   Container,
//   Avatar,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import { motion } from "framer-motion";
// import { styled } from "@mui/system";

// // Styled components with theme fallbacks
// const FloatingContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette?.background?.paper || "rgba(32, 37, 45, 0.9)",
//   padding: theme.spacing?.(3) || "24px",
//   borderRadius: 16,
//   textAlign: "center",
//   margin: theme.spacing?.(2) || "16px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
//   },
// }));

// const ContactIcon = styled(Avatar)(({ theme }) => ({
//   width: 60,
//   height: 60,
//   margin: "0 auto",
//   marginBottom: theme.spacing?.(2) || "16px",
//   backgroundColor: theme.palette?.primary?.main || "#1976d2",
// }));

// const Contact = () => {
//   const form = useRef();
//   const [isSending, setIsSending] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints?.down?.("sm") || "600px");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);

//     emailjs
//       .sendForm(
//         "service_7gwmvm8",
//         "template_to7c3mh",
//         form.current,
//         {
//           publicKey: "o5biHbQnnVZOktGRF",
//         }
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//           form.current.reset();
//         },
//         (error) => {
//           toast.error("Failed to send the message. Please try again.", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//         }
//       )
//       .finally(() => {
//         setIsSending(false);
//       });
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   // Fallback colors if theme is not available
//   const primaryColor = theme.palette?.primary?.main || "#1976d2";
//   const textPrimary = theme.palette?.text?.primary || "#000000";
//   const textSecondary = theme.palette?.text?.secondary || "#666666";

//   return (
//     <>
//       <ToastContainer />

//       {/* Hero Section with Parallax Effect */}
//       <Box
//         sx={{
//           position: "relative",
//           height: { xs: "40vh", sm: "60vh", md: "80vh" },
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: "url(/img/back21.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//             zIndex: -1,
//             "&::before": {
//               content: '""',
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0,0,0,0.3)",
//             },
//           }}
//         />
        
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Container maxWidth="lg">
//             <Typography
//               variant="h2"
//               sx={{
//                 color: "white",
//                 fontSize: {
//                   xs: "2.5rem",
//                   sm: "3.5rem",
//                   md: "4.5rem",
//                 },
//                 fontWeight: 700,
//                 textAlign: "center",
//                 textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
//                 mb: 2,
//                 fontFamily: "'Playfair Display', serif",
//               }}
//             >
//               Connect With Us
//             </Typography>
            
//             <Breadcrumbs
//               aria-label="breadcrumb"
//               sx={{
//                 justifyContent: "center",
//                 "& .MuiBreadcrumbs-ol": {
//                   justifyContent: "center",
//                 },
//               }}
//             >
//               <Link
//                 underline="hover"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   color: "white",
//                   fontSize: { xs: "0.9rem", sm: "1rem" },
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
//                   fontSize: { xs: "0.9rem", sm: "1rem" },
//                   fontWeight: 500,
//                 }}
//               >
//                 <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                 Contact
//               </Typography>
//             </Breadcrumbs>
//           </Container>
//         </motion.div>
//       </Box>

//       {/* Peaceful Message Section */}
//       <Box
//         sx={{
//           py: 8,
//           background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
//           textAlign: "center",
//         }}
//       >
//         <Container maxWidth="md">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 mb: 3,
//                 fontWeight: 400,
//                 fontFamily: "'Playfair Display', serif",
//                 color: textPrimary,
//               }}
//             >
//               "Yoga is the journey of the self, through the self, to the self."
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 color: textSecondary,
//                 fontStyle: "italic",
//               }}
//             >
//               - The Bhagavad Gita
//             </Typography>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Contact Information and Form Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <Grid container spacing={6}>
//             {/* Left Column - Contact Information */}
//             <Grid item xs={12} md={6}>
//               <motion.div variants={itemVariants}>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     mb: 4,
//                     fontWeight: 500,
//                     fontFamily: "'Playfair Display', serif",
//                     color: primaryColor,
//                   }}
//                 >
//                   Our Contact Details
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ mb: 4, color: textSecondary }}
//                 >
//                   We'd love to hear from you! Whether you're interested in our
//                   yoga classes, have questions about our programs, or just want
//                   to say hello, feel free to reach out.
//                 </Typography>

//                 <Grid container spacing={3}>
//                   {/* Address */}
//                   <Grid item xs={12} sm={6}>
//                     <motion.div whileHover={{ scale: 1.03 }}>
//                       <FloatingContainer>
//                         <ContactIcon>
//                           <LocationOnIcon fontSize="large" />
//                         </ContactIcon>
//                         <Typography variant="h6" gutterBottom color="white">
//                           Our Ashram
//                         </Typography>
//                         <Typography variant="body1" color="white">
//                           Laskarpur Peyara Bagan, Kolkata - 700153
//                         </Typography>
//                       </FloatingContainer>
//                     </motion.div>
//                   </Grid>

//                   {/* Phone */}
//                   <Grid item xs={12} sm={6}>
//                     <motion.div whileHover={{ scale: 1.03 }}>
//                       <FloatingContainer>
//                         <ContactIcon>
//                           <PhoneIcon fontSize="large" />
//                         </ContactIcon>
//                         <Typography variant="h6" gutterBottom color="white">
//                           Call Us
//                         </Typography>
//                         <Typography variant="body1" color="white">
//                           (+91) 9339058372
//                         </Typography>
//                       </FloatingContainer>
//                     </motion.div>
//                   </Grid>

//                   {/* Email */}
//                   <Grid item xs={12} sm={6}>
//                     <motion.div whileHover={{ scale: 1.03 }}>
//                       <FloatingContainer>
//                         <ContactIcon>
//                           <EmailIcon fontSize="large" />
//                         </ContactIcon>
//                         <Typography variant="h6" gutterBottom color="white">
//                           Email Us
//                         </Typography>
//                         <Typography variant="body1" color="white">
//                           <a
//                             href="mailto:dibakaryogarathiinstitute@gmail.com"
//                             style={{
//                               color: "white",
//                               textDecoration: "none",
//                               wordBreak: "break-word",
//                             }}
//                           >
//                             dibakaryogarathiinstitute@gmail.com
//                           </a>
//                         </Typography>
//                       </FloatingContainer>
//                     </motion.div>
//                   </Grid>

//                   {/* Hours */}
//                   <Grid item xs={12} sm={6}>
//                     <motion.div whileHover={{ scale: 1.03 }}>
//                       <FloatingContainer>
//                         <ContactIcon>
//                           <ScheduleIcon fontSize="large" />
//                         </ContactIcon>
//                         <Typography variant="h6" gutterBottom color="white">
//                           Class Hours
//                         </Typography>
//                         <Typography variant="body1" color="white">
//                           Morning: 7.00 AM - 10.00 AM
//                           <br />
//                           Evening: 4.00 PM - 8.00 PM
//                         </Typography>
//                       </FloatingContainer>
//                     </motion.div>
//                   </Grid>
//                 </Grid>
//               </motion.div>
//             </Grid>

//             {/* Right Column - Contact Form */}
//             <Grid item xs={12} md={6}>
//               <motion.div variants={itemVariants}>
//                 <Paper
//                   elevation={isMobile ? 0 : 6}
//                   sx={{
//                     p: { xs: 3, md: 5 },
//                     borderRadius: 4,
//                     background: "linear-gradient(145deg, #f9f9ff 0%, #e6e6fa 100%)",
//                     border: "1px solid rgba(255, 255, 255, 0.5)",
//                   }}
//                 >
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       mb: 4,
//                       fontWeight: 500,
//                       fontFamily: "'Playfair Display', serif",
//                       color: primaryColor,
//                     }}
//                   >
//                     Send Us a Message
//                   </Typography>
//                   <form ref={form} onSubmit={sendEmail}>
//                     <TextField
//                       fullWidth
//                       label="Your Name"
//                       variant="outlined"
//                       margin="normal"
//                       name="name"
//                       required
//                       sx={{
//                         "& .MuiOutlinedInput-root": {
//                           borderRadius: 2,
//                           "& fieldset": {
//                             borderColor: "#e0e0e0",
//                           },
//                           "&:hover fieldset": {
//                             borderColor: primaryColor,
//                           },
//                         },
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Email Address"
//                       variant="outlined"
//                       margin="normal"
//                       name="email"
//                       required
//                       type="email"
//                       sx={{
//                         "& .MuiOutlinedInput-root": {
//                           borderRadius: 2,
//                         },
//                       }}
//                     />
//                     <TextField
//                       fullWidth
//                       label="Your Message"
//                       variant="outlined"
//                       margin="normal"
//                       name="message"
//                       required
//                       multiline
//                       rows={6}
//                       sx={{
//                         "& .MuiOutlinedInput-root": {
//                           borderRadius: 2,
//                         },
//                       }}
//                     />
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         size="large"
//                         fullWidth
//                         sx={{
//                           mt: 3,
//                           py: 1.5,
//                           borderRadius: 2,
//                           fontSize: "1rem",
//                           fontWeight: 500,
//                           textTransform: "none",
//                           letterSpacing: "1px",
//                           boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//                           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                           "&:hover": {
//                             boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
//                           },
//                         }}
//                         disabled={isSending}
//                       >
//                         {isSending ? "Sending..." : "Send Message"}
//                       </Button>
//                     </motion.div>
//                   </form>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>

//       {/* Map Section */}
//       <Box sx={{ py: 6, backgroundColor: "#f9f9ff" }}>
//         <Container maxWidth="lg">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography
//               variant="h3"
//               sx={{
//                 mb: 6,
//                 textAlign: "center",
//                 fontWeight: 500,
//                 fontFamily: "'Playfair Display', serif",
//                 color: primaryColor,
//               }}
//             >
//               Find Us
//             </Typography>
//             <Box
//               sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 width: "100%",
//                 paddingTop: "50%",
//                 borderRadius: 4,
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//                 border: "1px solid rgba(0,0,0,0.1)",
//               }}
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin"
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   border: 0,
//                 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               />
//             </Box>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box sx={{ py: 8, backgroundColor: "#fff" }}>
//         <Container maxWidth="lg">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography
//               variant="h3"
//               sx={{
//                 mb: 6,
//                 textAlign: "center",
//                 fontWeight: 500,
//                 fontFamily: "'Playfair Display', serif",
//                 color: primaryColor,
//               }}
//             >
//               What Our Students Say
//             </Typography>
            
//             <Grid container spacing={4}>
//               {[
//                 {
//                   quote: "The instructors at Dibakar Yogarathi Institute are truly knowledgeable. My practice has improved dramatically since joining.",
//                   author: "Priya Sharma",
//                 },
//                 {
//                   quote: "A peaceful sanctuary in the city. The classes have transformed both my body and mind.",
//                   author: "Rahul Mehta",
//                 },
//                 {
//                   quote: "The perfect balance of traditional yoga and modern teaching methods. Highly recommended!",
//                   author: "Ananya Das",
//                 },
//               ].map((testimonial, index) => (
//                 <Grid item xs={12} md={4} key={index}>
//                   <motion.div
//                     whileHover={{ y: -10 }}
//                     style={{ height: "100%" }}
//                   >
//                     <Paper
//                       elevation={3}
//                       sx={{
//                         p: 4,
//                         height: "100%",
//                         borderRadius: 3,
//                         backgroundColor: "#f8f9fa",
//                         position: "relative",
//                         "&::before": {
//                           content: '"“"',
//                           position: "absolute",
//                           top: 20,
//                           left: 20,
//                           fontSize: "5rem",
//                           color: "#e0e0e0",
//                           fontFamily: "serif",
//                           lineHeight: 1,
//                         },
//                       }}
//                     >
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           mb: 3,
//                           fontStyle: "italic",
//                           color: textSecondary,
//                           position: "relative",
//                           zIndex: 1,
//                           pt: 4,
//                         }}
//                       >
//                         {testimonial.quote}
//                       </Typography>
//                       <Typography
//                         variant="subtitle1"
//                         sx={{
//                           fontWeight: 600,
//                           color: primaryColor,
//                         }}
//                       >
//                         — {testimonial.author}
//                       </Typography>
//                     </Paper>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </motion.div>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Contact;





































































import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Breadcrumbs,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Container,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { motion } from "framer-motion";
import { styled } from "@mui/system";  




// Styled components with theme fallbacks
const FloatingContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette?.background?.paper || "rgba(32, 37, 45, 0.9)",
  padding: theme.spacing?.(3) || "24px",
  borderRadius: 16,
  textAlign: "center",
  margin: theme.spacing?.(2) || "16px",
  transition: "all 0.3s ease",
  minHeight: 220,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 180,
    padding: theme.spacing(2),
  },
}));

const ContactIcon = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  margin: "0 auto",
  marginBottom: theme.spacing?.(2) || "16px",
  backgroundColor: theme.palette?.primary?.main || "#1976d2",
  [theme.breakpoints.down("sm")]: {
    width: 50,
    height: 50,
  },
}));

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_7gwmvm8",
        "template_to7c3mh",
        form.current,
        {
          publicKey: "o5biHbQnnVZOktGRF",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send the message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Fallback colors if theme is not available
  const primaryColor = theme.palette?.primary?.main || "#1976d2";
  const textPrimary = theme.palette?.text?.primary || "#000000";
  const textSecondary = theme.palette?.text?.secondary || "#666666";  

  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <>
      <ToastContainer />

     
      {/* Hero Section with Parallax Effect - Fixed Version */}
<Box
  sx={{
    position: "relative",
    height: { xs: "50vh", sm: "60vh", md: "70vh" }, // Adjusted heights
    minHeight: { xs: 300, sm: 400 }, // Added minimum heights
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url(/img/back21.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: { xs: "scroll", sm: "fixed" }, // Disable parallax on mobile
      zIndex: -1,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    }}
  />
  
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      width: "100%", // Ensure full width
      padding: "0 16px", // Add some padding on sides
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: {
            xs: "2rem",  // Smaller on mobile
            sm: "3rem",
            md: "4rem",
          },
          fontWeight: 700,
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          mb: 2,
          fontFamily: "'Playfair Display', serif",
          lineHeight: {
            xs: 1.2,  // Better line height for mobile
            sm: 1.3,
          },
        }}
      >
        Connect With Us
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
                Contact
              </Typography>
            </Breadcrumbs>
    </Container>
  </motion.div>
</Box>

      {/* Peaceful Message Section */}
      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 400,
                fontFamily: "'Playfair Display', serif",
                color: textPrimary,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                px: 2,
              }}
            >
              &ldqo;Yoga is the journey of the self, through the self, to the self.&rdqo;
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: textSecondary,
                fontStyle: "italic",
              }}
            >
              - The Bhagavad Gita
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information and Form Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
            {/* Left Column - Contact Information */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 4,
                    fontWeight: 500,
                    fontFamily: "'Playfair Display', serif",
                    color: primaryColor,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  Our Contact Details
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 4, 
                    color: textSecondary,
                    fontSize: { xs: "0.9rem", md: "1rem" }
                  }}
                >
                  We&#39;d love to hear from you! Whether you&#39;re interested in our
                  yoga classes, have questions about our programs, or just want
                  to say hello, feel free to reach out.
                </Typography>

                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  {/* Address */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <LocationOnIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Our Ashram
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          Laskarpur Peyara Bagan, Kolkata - 700153
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <PhoneIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Call Us
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          (+91) 9339058372
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <EmailIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Email Us
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          <a
                            href="mailto:dibakaryogarathiinstitute@gmail.com"
                            style={{
                              color: "white",
                              textDecoration: "none",
                              wordBreak: "break-word",
                            }}
                          >
                            dibakaryogarathiinstitute@gmail.com
                          </a>
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Hours */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <ScheduleIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Class Hours
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          Morning: 7.00 AM - 10.00 AM
                          <br />
                          Evening: 4.00 PM - 8.00 PM
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            {/* Right Column - Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={isMobile ? 0 : 6}
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #f9f9ff 0%, #e6e6fa 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 4,
                      fontWeight: 500,
                      fontFamily: "'Playfair Display', serif",
                      color: primaryColor,
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <form ref={form} onSubmit={sendEmail}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      name="name"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "#e0e0e0",
                          },
                          "&:hover fieldset": {
                            borderColor: primaryColor,
                          },
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      margin="normal"
                      name="email"
                      required
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      margin="normal"
                      name="message"
                      required
                      multiline
                      rows={isMobile ? 4 : 6}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size={isMobile ? "medium" : "large"}
                        fullWidth
                        sx={{
                          mt: 3,
                          py: isMobile ? 1 : 1.5,
                          borderRadius: 2,
                          fontSize: isMobile ? "0.9rem" : "1rem",
                          fontWeight: 500,
                          textTransform: "none",
                          letterSpacing: "1px",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          "&:hover": {
                            boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
                          },
                        }}
                        disabled={isSending}
                      >
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Map Section */}
      <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, backgroundColor: "#f9f9ff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: { xs: 4, sm: 5, md: 6 },
                textAlign: "center",
                fontWeight: 500,
                fontFamily: "'Playfair Display', serif",
                color: primaryColor,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Find Us
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: { xs: "100%", sm: "70%", md: "50%" },
                borderRadius: { xs: 2, sm: 3, md: 4 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: { xs: 4, sm: 5, md: 6 },
                textAlign: "center",
                fontWeight: 500,
                fontFamily: "'Playfair Display', serif",
                color: primaryColor,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              What Our Students Say
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {[
                {
                  quote: "The instructors at Dibakar Yogarathi Institute are truly knowledgeable. My practice has improved dramatically since joining.",
                  author: "Priya Sharma",
                },
                {
                  quote: "A peaceful sanctuary in the city. The classes have transformed both my body and mind.",
                  author: "Rahul Mehta",
                },
                {
                  quote: "The perfect balance of traditional yoga and modern teaching methods. Highly recommended!",
                  author: "Ananya Das",
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{ height: "100%" }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        height: "100%",
                        borderRadius: 3,
                        backgroundColor: "#f8f9fa",
                        position: "relative",
                        "&::before": {
                          content: '"“"',
                          position: "absolute",
                          top: 20,
                          left: 20,
                          fontSize: "5rem",
                          color: "#e0e0e0",
                          fontFamily: "serif",
                          lineHeight: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontStyle: "italic",
                          color: textSecondary,
                          position: "relative",
                          zIndex: 1,
                          pt: 4,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {testimonial.quote}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: primaryColor,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        — {testimonial.author}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
























































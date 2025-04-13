

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





































































import { useEffect} from "react";
// import emailjs from "@emailjs/browser";
import {
  // Box,
  // Breadcrumbs,
  // Typography,
  // Grid,
  // TextField,
  // Button,
  // Paper,
  // Container,
  // Avatar,
  // useTheme,
  // Avatar,
  // useMediaQuery,
} from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import { motion } from "framer-motion";
// import { styled } from "@mui/system";    






// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp"; 


import ContactForm from "../ContactForm/ContactForm";
import FAQ from "../FAQ/FAQ";
import SocialMedia from "../SocialMedia/SocialMedia";
import Map from "../Map/Map";
import HeroContact from "../HeroContact/HeroContact";
import PeaceMessage from "../PeaceMessage/PeaceMessage";














// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Styled components with theme fallbacks
// const FloatingContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette?.background?.paper || "rgba(32, 37, 45, 0.9)",
//   padding: theme.spacing?.(3) || "24px",
//   borderRadius: 16,
//   textAlign: "center",
//   margin: theme.spacing?.(2) || "16px",
//   transition: "all 0.3s ease",
//   minHeight: 220,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     minHeight: 180,
//     padding: theme.spacing(2),
//   },
// }));

// const ContactIcon = styled(Avatar)(({ theme }) => ({
//   width: 60,
//   height: 60,
//   margin: "0 auto",
//   marginBottom: theme.spacing?.(2) || "16px",
//   backgroundColor: theme.palette?.primary?.main || "#1976d2",
//   [theme.breakpoints.down("sm")]: {
//     width: 50,
//     height: 50,
//   },
// }));

const Contact = () => {    



  // const faqData = [
  //   {
  //     question: "What should I bring to my first yoga class?",
  //     answer: "We recommend bringing comfortable clothing, a water bottle, and a towel. While we provide yoga mats, you're welcome to bring your own if you prefer. Avoid eating a heavy meal 2 hours before class."
  //   },
  //   {
  //     question: "Do I need prior yoga experience to join?",
  //     answer: "Not at all! We welcome practitioners of all levels. Our classes are designed to accommodate beginners while offering challenges for more experienced students. Our instructors will provide modifications as needed."
  //   },
  //   {
  //     question: "What style of yoga do you teach?",
  //     answer: "We offer various styles including Hatha, Vinyasa, Ashtanga, and Yin yoga. We also conduct specialized sessions in Pranayama (breathwork) and meditation. Each class description indicates the style and intensity level."
  //   },
  //   {
  //     question: "How often should I practice yoga?",
  //     answer: "For beginners, we recommend starting with 2-3 sessions per week to allow your body to adapt. Regular practitioners may attend daily. Even 15 minutes of daily practice at home can be beneficial when combined with studio classes."
  //   },
  //   {
  //     question: "Are there age restrictions for your classes?",
  //     answer: "We accept students aged 12 and above. For younger children, we offer special family classes on weekends. There's no upper age limit - we have students in their 70s who practice regularly!"
  //   },
  //   {
  //     question: "What if I have an injury or medical condition?",
  //     answer: "Please inform your instructor before class about any injuries or health concerns. Many postures can be modified to accommodate physical limitations. We also offer therapeutic yoga sessions for specific conditions."
  //   }
  // ];
  
  // Now use this faqData in your component as shown in the previous example
  // const form = useRef();
  // const [isSending, setIsSending] = useState(false);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setIsSending(true);

  //   emailjs
  //     .sendForm(
  //       "service_7gwmvm8",
  //       "template_to7c3mh",
  //       form.current,
  //       {
  //         publicKey: "o5biHbQnnVZOktGRF",
  //       }
  //     )
  //     .then(
  //       () => {
  //         toast.success("Message sent successfully!", {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //         });
  //         form.current.reset();
  //       },
  //       () => {
  //         toast.error("Failed to send the message. Please try again.", {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //         });
  //       }
  //     )
  //     .finally(() => {
  //       setIsSending(false);
  //     });
  // };

  // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };

  // Fallback colors if theme is not available
  // const primaryColor = theme.palette?.primary?.main || "#1976d2";
  // const textPrimary = theme.palette?.text?.primary || "#000000";
  // const textSecondary = theme.palette?.text?.secondary || "#666666";  

  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <>
      <ToastContainer />

     
      {/* Hero Section with Parallax Effect - Fixed Version */}
{/* <Box
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
</Box> */}


<HeroContact/>


      {/* Peaceful Message Section */}   

<PeaceMessage/>

      {/* <Box
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
  &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
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
      </Box> */}

      {/* Contact Information and Form Section */}




    <ContactForm/>     






      {/* Map Section */}  


     <Map/>




      {/* <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, backgroundColor: "#f9f9ff" }}>
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
      </Box> */}

      {/* Testimonials Section */}
      {/* <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#fff" }}>
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
      </Box> */}    







      {/* FAQ Section */}
{/* <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#fff" }}>
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
        Frequently Asked Questions
      </Typography>
      
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {[
          {
            question: "What are your class timings?",
            answer: "We offer morning classes from 7:00 AM to 10:00 AM and evening classes from 4:00 PM to 8:00 PM. Special workshops may have different timings.",
          },
          {
            question: "Do I need to bring my own yoga mat?",
            answer: "We provide all necessary equipment including yoga mats, but you're welcome to bring your own if you prefer.",
          },
          {
            question: "How soon can I expect a response to my message?",
            answer: "We typically respond within 24 hours during weekdays. For urgent matters, please call us directly.",
          },
        ].map((faq, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              style={{ height: "100%" }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2, sm: 3 },
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "#f8f9fa",
                  borderLeft: `4px solid ${primaryColor}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: primaryColor,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                  }}
                >
                  {faq.question}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: textSecondary,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {faq.answer}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: textSecondary,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Didn&#39;t find what you were looking for?
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: 2,
            px: 4,
            fontWeight: 500,
            textTransform: "none",
          }}
          component={Link}
          to="/faq"
        >
          View All FAQs
        </Button>
      </Box>
    </motion.div>
  </Container>
</Box>     */}   













{/* FAQ Accordion Section */}  



{/* <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#fff" }}>
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
        Frequently Asked Questions
      </Typography>

      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {[
          {
            question: "What should I bring to my first yoga class?",
            answer: "We recommend bringing comfortable clothing, a water bottle, and a towel. While we provide yoga mats, you're welcome to bring your own if you prefer. Avoid eating a heavy meal 2 hours before class."
          },
          {
            question: "Do I need prior yoga experience to join?",
            answer: "Not at all! We welcome practitioners of all levels. Our classes are designed to accommodate beginners while offering challenges for more experienced students. Our instructors will provide modifications as needed."
          },
          {
            question: "What style of yoga do you teach?",
            answer: "We offer various styles including Hatha, Vinyasa, Ashtanga, and Yin yoga. We also conduct specialized sessions in Pranayama (breathwork) and meditation. Each class description indicates the style and intensity level."
          },
          {
            question: "How often should I practice yoga?",
            answer: "For beginners, we recommend starting with 2-3 sessions per week to allow your body to adapt. Regular practitioners may attend daily. Even 15 minutes of daily practice at home can be beneficial when combined with studio classes."
          },
          {
            question: "Are there age restrictions for your classes?",
            answer: "We accept students aged 12 and above. For younger children, we offer special family classes on weekends. There's no upper age limit - we have students in their 70s who practice regularly!"
          },
          {
            question: "What if I have an injury or medical condition?",
            answer: "Please inform your instructor before class about any injuries or health concerns. Many postures can be modified to accommodate physical limitations. We also offer therapeutic yoga sessions for specific conditions."
          }
        ].map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: '8px !important',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:before': { display: 'none' },
              overflow: 'hidden'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#f8f9fa',
                borderLeft: `4px solid ${primaryColor}`,
                '&:hover': {
                  backgroundColor: '#f0f0f0'
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: primaryColor,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#fff',
                borderTop: '1px solid #eee',
                py: 3
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: textSecondary,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: textSecondary,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Didn't find what you were looking for?
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: 2,
            px: 4,
            fontWeight: 500,
            textTransform: "none",
          }}
          component={Link}
          to="/faq"
        >
          View All FAQs
        </Button>
      </Box>
    </motion.div>
  </Container>
</Box> */}    












{/* <Box sx={{ 
  py: { xs: 6, sm: 8, md: 10 },
  backgroundColor: "#fafafa",
  backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)"
}}>
  <Container maxWidth="lg">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 5, sm: 6, md: 7 },
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          background: "linear-gradient(45deg, #3f51b5, #2196f3)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
          letterSpacing: { sm: "0.5px", md: "1px" },
          lineHeight: 1.2,
          px: 2
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box sx={{ 
        maxWidth: 800, 
        mx: "auto",
        position: "relative",
        '&:before': {
          content: '""',
          position: "absolute",
          top: -20,
          left: { xs: 10, sm: 0 },
          width: { xs: "calc(100% - 20px)", sm: "100%" },
          height: "100%",
          borderRadius: { xs: 12, sm: 16 },
          backgroundColor: "rgba(63, 81, 181, 0.05)",
          zIndex: 0
        }
      }}>
        {[
          {
            question: "What should I bring to my first yoga class?",
            answer: "We recommend bringing comfortable clothing, a water bottle, and a towel. While we provide yoga mats, you're welcome to bring your own if you prefer. Avoid eating a heavy meal 2 hours before class."
          },
          {
            question: "Do I need prior yoga experience to join?",
            answer: "Not at all! We welcome practitioners of all levels. Our classes are designed to accommodate beginners while offering challenges for more experienced students. Our instructors will provide modifications as needed."
          },
          {
            question: "What style of yoga do you teach?",
            answer: "We offer various styles including Hatha, Vinyasa, Ashtanga, and Yin yoga. We also conduct specialized sessions in Pranayama (breathwork) and meditation. Each class description indicates the style and intensity level."
          },
          {
            question: "How often should I practice yoga?",
            answer: "For beginners, we recommend starting with 2-3 sessions per week to allow your body to adapt. Regular practitioners may attend daily. Even 15 minutes of daily practice at home can be beneficial when combined with studio classes."
          },
          {
            question: "Are there age restrictions for your classes?",
            answer: "We accept students aged 12 and above. For younger children, we offer special family classes on weekends. There's no upper age limit - we have students in their 70s who practice regularly!"
          },
          {
            question: "What if I have an injury or medical condition?",
            answer: "Please inform your instructor before class about any injuries or health concerns. Many postures can be modified to accommodate physical limitations. We also offer therapeutic yoga sessions for specific conditions."
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion
              sx={{
                mb: { xs: 2, sm: 3 },
                borderRadius: "12px !important",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                transition: "all 0.3s ease",
                '&:hover': {
                  boxShadow: "0 6px 24px rgba(63, 81, 181, 0.15)",
                  transform: "translateY(-2px)"
                },
                '&:before': { display: 'none' },
                borderLeft: "4px solid transparent",
                '&.Mui-expanded': {
                  borderLeft: `4px solid #3f51b5`
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ 
                    color: "#3f51b5",
                    fontSize: { xs: "1.8rem", sm: "2rem" }
                  }} />
                }
                sx={{
                  backgroundColor: "#ffffff",  

                  
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 2, sm: 3 },
                  '&:hover': {
                    backgroundColor: "#f5f7ff"
                  },
                  '&.Mui-expanded': {
                    backgroundColor: "#f5f7ff",
                    borderBottom: "1px solid rgba(63, 81, 181, 0.1)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#2d3748",
                    fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                    flexShrink: 0,
                    pr: 2,
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#ffffff",
                  py: { xs: 2, sm: 3 },
                  px: { xs: 2, sm: 3, md: 4 }
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4a5568",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.7,
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>

      <Box sx={{ 
        textAlign: "center", 
        mt: { xs: 6, sm: 8 },
        position: "relative",
        zIndex: 1
      }}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "#4a5568",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Didn't find what you were looking for?
        </Typography>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 50,
              px: 5,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              boxShadow: "0 4px 14px rgba(63, 81, 181, 0.3)",
              background: "linear-gradient(45deg, #3f51b5, #2196f3)",
              '&:hover': {
                boxShadow: "0 6px 20px rgba(63, 81, 181, 0.4)",
                background: "linear-gradient(45deg, #3949ab, #1e88e5)"
              }
            }}
            component={Link}
            to="/faq"
          >
            View All FAQs
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  </Container>
</Box> */}






{/* <Box sx={{ 
  py: { xs: 8, sm: 10, md: 12 },
  background: "linear-gradient(135deg, #f5f7ff 0%, #f9fafc 100%)"
}}>
  <Container maxWidth="lg">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Title with gradient text */}
      {/* <Typography
        variant="h2"
        sx={{
          mb: { xs: 6, md: 8 },
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" },
          letterSpacing: "-0.5px",
          lineHeight: 1.2
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ Items */}
      {/* <Box sx={{ 
        maxWidth: 840, 
        mx: "auto",
        position: "relative"
      }}>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion
              sx={{
                mb: 2,
                borderRadius: "12px !important",
                boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
                overflow: "hidden",
                background: "#ffffff",
                transition: "all 0.3s ease",
                borderLeft: "4px solid transparent",
                '&:hover': {
                  boxShadow: "0 6px 24px rgba(99, 102, 241, 0.12)",
                  borderLeft: "4px solid #6366f1"
                },
                '&.Mui-expanded': {
                  borderLeft: "4px solid #6366f1",
                  background: "#f8f9fe"
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ 
                    color: "#6366f1",
                    fontSize: "1.8rem",
                    '&.Mui-expanded': { transform: 'rotate(180deg)' }
                  }} />
                }
                sx={{
                  py: { xs: 2, sm: 2.5 },
                  px: { xs: 3, sm: 4 },
                  '&.Mui-expanded': {
                    borderBottom: "1px solid rgba(99, 102, 241, 0.1)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#1e1b4b",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  py: { xs: 1, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  background: "rgba(248, 249, 254, 0.5)"
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b5563",
                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box> */}

      {/* CTA Section */}
      {/* <Box sx={{ 
        textAlign: "center", 
        mt: { xs: 8, md: 10 },
        px: 2
      }}>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "#4b5563",
            fontSize: { xs: "1.05rem", sm: "1.1rem" },
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Still have questions?
        </Typography>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
              '&:hover': {
                background: "linear-gradient(45deg, #5a5fef, #7c4df5)",
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)"
              }
            }}
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  </Container>
</Box>  */}























{/* <Box sx={{
  py: { xs: 8, sm: 10 },
  background: "radial-gradient(circle at 50% 0%, rgba(255,245,245,0.8) 0%, rgba(255,255,255,1) 100%)"
}}>
  <Container maxWidth="lg">
    <Typography variant="h2" sx={{
      textAlign: "center",
      mb: 6,
      fontSize: { xs: "2.5rem", md: "3.2rem" },
      fontWeight: 800,
      background: "linear-gradient(90deg, #FF6B6B 0%, #FF8E53 50%, #FF6B6B 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.5px"
    }}>
      Frequently Asked Questions
    </Typography>

    <Box sx={{
      display: "grid",
      gap: 3,
      gridTemplateColumns: { md: "repeat(2, 1fr)" }
    }}>
      {[
        {
          question: "What should I bring?",
          answer: "Bring comfortable clothes and water. Mats provided!",
          color: "linear-gradient(135deg, #6E45E2 0%, #89D4CF 100%)"
        },
        {
          question: "Need experience?",
          answer: "All levels welcome! Beginners encouraged.",
          color: "linear-gradient(135deg, #FF7D7D 0%, #FFBD6D 100%)"
        },
        {
          question: "Yoga styles offered?",
          answer: "Hatha, Vinyasa, Yin, and more!",
          color: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)"
        },
        {
          question: "Practice frequency?",
          answer: "Start with 2-3x weekly, adjust as needed.",
          color: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)"
        },
        {
          question: "Age restrictions?",
          answer: "12+ for regular classes, family sessions available.",
          color: "linear-gradient(135deg, #FF61D2 0%, #FE9090 100%)"
        },
        {
          question: "Injuries?",
          answer: "We accommodate all abilities safely.",
          color: "linear-gradient(135deg, #B06AB3 0%, #4568DC 100%)"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Box sx={{
            p: 4,
            borderRadius: 3,
            background: item.color,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            '&:before': {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "rgba(255,255,255,0.3)"
            }
          }}>
            <Typography variant="h4" sx={{
              mb: 2,
              color: "white",
              fontWeight: 700,
              fontSize: "1.5rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {item.question}
            </Typography>
            <Typography sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.1rem",
              lineHeight: 1.6
            }}>
              {item.answer}
            </Typography>
            <Box sx={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)"
            }}/>
          </Box>
        </motion.div>
      ))}
    </Box>

    <Box textAlign="center" mt={8}>
      <Button variant="contained" sx={{
        px: 6,
        py: 1.5,
        borderRadius: 50,
        background: "linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%)",
        fontSize: "1.1rem",
        fontWeight: 600,
        color: "white",
        boxShadow: "0 4px 20px rgba(255,107,107,0.3)",
        '&:hover': {
          transform: "translateY(-2px)",
          boxShadow: "0 6px 24px rgba(255,107,107,0.4)"
        },
        transition: "all 0.3s ease"
      }}>
        More Questions?
      </Button>
    </Box>
  </Container>
</Box> */}

<FAQ/>




{/* Connect With Our Social Media Platforms */}
{/* <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#f9f9ff" }}>
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
        Our Social Media Platforms
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {[
          {
            platform: "Facebook",
            icon: <FacebookIcon fontSize="large" />,
            color: "#3b5998",
            link: "https://facebook.com/yourpage",
          },
          {
            platform: "Instagram",
            icon: <InstagramIcon fontSize="large" />,
            color: "#e1306c",
            link: "https://instagram.com/yourprofile",
          },
          {
            platform: "YouTube",
            icon: <YouTubeIcon fontSize="large" />,
            color: "#ff0000",
            link: "https://youtube.com/yourchannel",
          },
          {
            platform: "WhatsApp",
            icon: <WhatsAppIcon fontSize="large" />,
            color: "#25D366",
            link: "https://wa.me/919339058372",
          },
        ].map((social, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  py: 3,
                  borderRadius: 2,
                  backgroundColor: `${social.color}10`,
                  color: social.color,
                  "&:hover": {
                    backgroundColor: `${social.color}20`,
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {social.icon}
                <Typography sx={{ mt: 1 }}>{social.platform}</Typography>
              </Button>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      
  




    </motion.div>
  </Container>
</Box> */}   



<SocialMedia/>
    </>
  );
};

export default Contact;
























































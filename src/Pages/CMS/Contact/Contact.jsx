

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















import { useRef, useState } from "react"; // Import useState
import emailjs from "@emailjs/browser";
import {
  Box,
  Breadcrumbs,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // State to track sending status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    emailjs
      .sendForm(
        "service_7gwmvm8", // Replace with your EmailJS service ID
        "template_to7c3mh", // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: "o5biHbQnnVZOktGRF", // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
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
        setIsSending(false); // Reset sending state regardless of success or failure
      });
  };

  return (
    <>
      {/* Toast Container for Notifications */}
      <ToastContainer />

      {/* Hero Section */}
      <Box mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: "url(/img/back21.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "90vh" },
              opacity: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Contact Us
            </Typography>

            {/* Breadcrumbs */}
            <Box
              mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                  }}
                  to="/"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  <b>HOME</b>
                </Link>
                <Link
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                  }}
                  to="/"
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  <b>Contact Us</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Information and Form Section */}
      <Box mt={4} mb={4} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Grid container spacing={4}>
          {/* Left Column - Contact Information */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Address Box */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#20252D",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    mx: { xs: 1, sm: 2, md: 4, lg: 6 },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="white">
                    Address
                  </Typography>
                  <Typography variant="body1" color="white">
                    Laskarpur Peyara Bagan,Kol-700153
                  </Typography>
                </Box>
              </Grid>

              {/* Phone Box */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#20252D",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    mx: { xs: 1, sm: 2, md: 4, lg: 6 },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="white">
                    Phone
                  </Typography>
                  <Typography color="white" variant="body1">
                    (+91) 9339058372
                  </Typography>
                </Box>
              </Grid>

              {/* Email Box */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#20252D",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    mx: { xs: 1, sm: 2, md: 4, lg: 6 },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="white">
                    Email
                  </Typography>
                  <Typography variant="body1" color="white">
                    <a
                      href="mailto:dibakaryogarathiinstitute@gmail.com"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      dibakaryogarathiinstitute@gmail.com
                    </a>
                  </Typography>
                </Box>
              </Grid>

              {/* Opening Hours Box */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#20252D",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    mx: { xs: 1, sm: 2, md: 4, lg: 6 },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="white">
                    Opening Hours
                  </Typography>
                  <Typography variant="body1" color="white">
                    Morning:7.00 AM - 10.00 AM <br />
                    Evening:4.00 PM -8.00 PM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column - Get in Touch Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: "#E6E6FA",
                borderRadius: 4,
                mx: { xs: 1, sm: 2, md: 4, lg: 6 },
              }}
            >
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  name="name"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  name="email"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  name="message"
                  required
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  disabled={isSending} // Disable the button while sending
                >
                  {isSending ? "Sending..." : "Submit"} {/* Change button text */}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Responsive Map Section */}
        <Box mt={4}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  paddingTop: "56.25%", // 16:9 aspect ratio (height/width)
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
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

















































// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Debugging: Log form data
//     const formData = new FormData(form.current);
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value); // Check if the data is correct
//     }

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
//           form.current.reset();
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
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Hero Section */}
//       <Box mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundImage: "url(/img/back2.jpg)",
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
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

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
//                     123 Main Street, City, Country
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
//                     +1 234 567 890
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
//                     info@example.com
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
//                     Mon - Fri: 9:00 AM - 5:00 PM
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
//                   Send
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

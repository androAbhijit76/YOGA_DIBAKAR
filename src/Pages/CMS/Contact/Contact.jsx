// // import  { useRef } from 'react';
// // import emailjs from '@emailjs/browser';
// import { Box, Breadcrumbs, Typography } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   // const form = useRef();

//   // const sendEmail = (e) => {
//   //   e.preventDefault();

//   //   emailjs
//   //     .sendForm(
//   //       'service_7gwmvm8', // Replace with your Service ID
//   //       'template_to7c3mh', // Replace with your Template ID
//   //       form.current,
//   //       'o5biHbQnnVZOktGRF' // Replace with your Public Key
//   //     )
//   //     .then(
//   //       (result) => {
//   //         console.log('Email sent successfully!', result.text);
//   //         alert('Message sent successfully!');
//   //       },
//   //       (error) => {
//   //         console.log('Failed to send email:', error.text);
//   //         alert('Failed to send message. Please try again.');
//   //       }
//   //     );
//   // };

//   return (
//     // <div style={{ maxWidth: '400px', marginTop: '10rem', padding: '20px' }}>
//     //   <h1>Contact Us</h1>
//     //   <form ref={form} onSubmit={sendEmail}>
//     //     <label>Name</label>
//     //     <input type="text" name="user_name" required />

//     //     <label>Email</label>
//     //     <input type="email" name="user_email" required />

//     //     <label>Message</label>
//     //     <textarea name="message" required />

//     //     <button type="submit">Send</button>
//     //   </form>
//     // </div>

//     <>
//       <Box mt={12}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/yoga-6723315.jpg)",
//               backgroundRepeat: "no-repeat",

//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: 420,
//               opacity: 1,
//             }}
//           >
//             <Typography
//               variant="h4"
//               mt={10}
//               sx={{ color: "white" }}
//               textAlign="center"
//             >
//               Contact Us
//             </Typography>

//             <Box
//               mt={6}
//               sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{ display: "flex", alignItems: "center", color: "white" }}
//                   to="/"
//                 >
//                   <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>HOME</b>
//                 </Link>
//                 <Link
//                   underline="hover"
//                   sx={{ display: "flex", alignItems: "center", color: "white" }}
//                   to="/department"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>Contact Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Contact;





















// import { Box, Breadcrumbs, Typography, Grid } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
//       <Box mt={{ xs: 10, sm: 12, md: 14 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/contact.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: 300, sm: 350, md: 400, lg: 420 }, // Responsive height
//               opacity: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {/* Heading */}
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 6 }}
//               sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
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
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
//                   }}
//                   to="/department"
//                 >
//                   <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//                   <b>Contact Us</b>
//                 </Link>
//               </Breadcrumbs>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Contact;   




























// import { Box, Breadcrumbs, Typography, Grid } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
//       <Box mt={{ xs: 12, sm: 14, md: 16 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/contact.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover", // Ensures the image covers the container
//               backgroundPosition: "center",
//               height: { xs: "20vh", sm: "40vh", md: "60vh", lg: "80vh" }, // Responsive height
//               opacity: 0.7,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center", 
              
//             }}
//           >
//             {/* Heading */}
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             {/* Breadcrumbs */}
//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 6 }}
//               sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//             >
//               <Breadcrumbs aria-label="breadcrumb">
//                 <Link
//                   underline="hover"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
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
//                     fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
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
//     </>
//   );
// };

// export default Contact;   























// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
//       <Box mt={{ xs: 12, sm: 14, md: 16 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/contact.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "20vh", sm: "40vh", md: "60vh", lg: "80vh" },
//               opacity: 0.7,
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
//                 fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 6 }}
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
//       <Box mt={4} mb={4}>
//         <Grid container spacing={4}>
//           {/* Left Column - Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h5" gutterBottom>
//                 Contact Information
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 <b>Address:</b> 123 Main Street, City, Country
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 <b>Email:</b> info@example.com
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 <b>Phone:</b> +1 234 567 890
//               </Typography>
//               <Typography variant="body1">
//                 <b>Opening Hours:</b> Mon - Fri: 9:00 AM - 5:00 PM
//               </Typography>
//             </Paper>
//           </Grid>

//           {/* Right Column - Get in Touch Form */}
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h5" gutterBottom>
//                 Get in Touch
//               </Typography>
//               <form>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
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
//       </Box>
//     </>
//   );
// };

// export default Contact;  

































// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
//       <Box mt={{ xs: 12, sm: 14, md: 16 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/contact.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "20vh", sm: "40vh", md: "60vh", lg: "80vh" },
//               opacity: 0.7,
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
//                 fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 6 }}
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
//       <Box mt={4} mb={4}>
//         <Grid container spacing={4}>
//           {/* Left Column - Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {/* Address Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: 3,
//                     borderRadius: 2,
//                     textAlign: "center",
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
//                     p: 3,
//                     borderRadius: 2,
//                     textAlign: "center",
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Phone
//                   </Typography>
//                   <Typography color="white" variant="body1">+1 234 567 890</Typography>
//                 </Box>
//               </Grid>

//               {/* Email Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: 3,
//                     borderRadius: 2,
//                     textAlign: "center",
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom color="white">
//                     Email
//                   </Typography>
//                   <Typography variant="body1" color="white">info@example.com</Typography>
//                 </Box>
//               </Grid>

//               {/* Opening Hours Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor:"#20252D",
//                     p: 3,
//                     borderRadius: 2,
//                     textAlign: "center",
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
//           <Grid item xs={12} md={6} >
//             <Paper elevation={3} sx={{ p: 3 ,backgroundColor:"#E6E6FA"}}>
//               <Typography variant="h5" gutterBottom>
//                 Get in Touch
//               </Typography>
//               <form>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
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
//       </Box>
//     </>
//   );
// };

// export default Contact;  




































// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
//       <Box mt={{ xs: 12, sm: 14, md: 16 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             md={12}
//             lg={12}
//             sx={{
//               backgroundImage: "url(/img/back2.jpg)",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "20vh", sm: "40vh", md: "60vh", lg: "80vh" },
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
//                 fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Contact Us
//             </Typography>

//             <Box
//               mt={{ xs: 2, sm: 3, md: 4, lg: 6 }}
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
//       <Box mt={4} mb={4}>
//         <Grid container spacing={4} sx={{ px: { xs: 2, sm: 4, md: 6 } }}> {/* Add padding to the container */}
//           {/* Left Column - Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               {/* Address Box */}
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#20252D",
//                     p: 3,
//                     borderRadius: 4, // Increased border radius for more rounded corners
//                     textAlign: "center",
//                     mx: { xs: 2, sm: 4, md: 6 }, // Add margin on both sides
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
//                     p: 3,
//                     borderRadius: 4, // Increased border radius for more rounded corners
//                     textAlign: "center",
//                     mx: { xs: 2, sm: 4, md: 6 }, // Add margin on both sides
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
//                     p: 3,
//                     borderRadius: 4, // Increased border radius for more rounded corners
//                     textAlign: "center",
//                     mx: { xs: 2, sm: 4, md: 6 }, // Add margin on both sides
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
//                     p: 3,
//                     borderRadius: 4, // Increased border radius for more rounded corners
//                     textAlign: "center",
//                     mx: { xs: 2, sm: 4, md: 6 }, // Add margin on both sides
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
//                 p: 3,
//                 backgroundColor: "#E6E6FA",
//                 borderRadius: 4, // Increased border radius for more rounded corners
//                 mx: { xs: 2, sm: 4, md: 6 }, // Add margin on both sides
//               }}
//             >
//               <Typography variant="h5" gutterBottom>
//                 Get in Touch
//               </Typography>
//               <form>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
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
//       </Box>
//     </>
//   );
// };

// export default Contact;    



















































// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";

// const Contact = () => {
//   return (
//     <>
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
//               <form>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   type="email"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   variant="outlined"
//                   margin="normal"
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
//       </Box>
//     </>
//   );
// };

// export default Contact;    














































// import  { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot"; 
// import { ToastContainer, toast } from "react-toastify";


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
//           // alert("Message sent successfully!"); // Notify the user 
//           // form.current.reset(); // Reset the form fields 

//           toast.success("Message sent successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           }); 
//           form.current.reset()


//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           // alert("Failed to send the message. Please try again."); // Notify the user 
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
//           {/* Toast Container */}
//           <ToastContainer />

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
//                   name="user_name"
//                   required
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   name="user_email"
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
//         <Box mt={4}>
//         <Grid container>
//           <Grid item md={12} lg={12} sm={12} xs={12}>
//             {/* <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58963.71755546857!2d88.28928001465724!3d22.532967429597203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765321b3ac7b%3A0x1202c35f978da22f!2sKothari%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1718464663554!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowfullscreen=""
//               loading="lazy"
//               // referrerpolicy="no-referrer-when-downgrade"
//             ></iframe> */}   

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin" 

// width="100%"
// height="450"
// style={{ border: 0 }}
// allowfullscreen=""
// loading="lazy"
// ></iframe>
//           </Grid>
//         </Grid>
//       </Box>
//       </Box>
//     </>
//   );
// };

// export default Contact;





















































import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Breadcrumbs, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      );
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
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
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
                    (+91)9339058372
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
                    dibakaryogarathiinstitute@gmail.com
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
                    Mon - Fri: 9:00 AM - 5:00 PM
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
                >
                  Send
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





































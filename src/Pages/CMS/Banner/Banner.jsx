// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent scrollbars
//         overflowY:"hidden"
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "100vh", // Full viewport height
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               color: "white",
//               justifyContent:"left",
//               fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//               fontWeight: "bold",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//             }}
//           >
//             WELCOME TO DIBAKAR YOGARATHI INSTITUTE
//           </Typography>

//         </Grid>
//       </Grid>
//     </Box>
//   );
// }   






















// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               color: "white",
//               textAlign: "center",
//               fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//               fontWeight: "bold",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//             }}
//           >
//             WELCOME TO{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#FFD700", // Gold color for "DIBAKAR"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               DIBAKAR
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#00FF00", // Green color for "YOGA"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               YOGA
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#FF4500", // OrangeRed color for "RATHI"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               RATHI
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#1E90FF", // DodgerBlue color for "INSTITUTE"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               INSTITUTE
//             </Box>
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }    













// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "flex-start", // Align content to the left
//             alignItems: "center", // Center vertically
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               color: "white",
//               textAlign: "left", // Align text to the left
//               fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//               fontWeight: "bold",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//             }}
//           >
//             WELCOME TO{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#FFD700", // Gold color for "DIBAKAR"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               DIBAKAR
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#00FF00", // Green color for "YOGA"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               YOGA
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#FF4500", // OrangeRed color for "RATHI"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               RATHI
//             </Box>{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#1E90FF", // DodgerBlue color for "INSTITUTE"
//                 fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//               }}
//             >
//               INSTITUTE
//             </Box>
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }   
















// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "flex-start", // Align content to the left
//             alignItems: "center", // Center vertically
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
//           }}
//         >
//           <Box>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               WELCOME TO
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#FFD700", // Gold color for "DIBAKAR"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 DIBAKAR
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#00FF00", // Green color for "YOGA"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 YOGA
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#FF4500", // OrangeRed color for "RATHI"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 RATHI
//               </Box>
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               INSTITUTE
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
















// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "flex-start", // Align content to the left
//             alignItems: "center", // Center vertically
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start", // Align text to the left  
//               pt: { xs: 8, sm: 12, md: 16, lg: 20 }, // Add padding-top to position the text slightly above the center
//               pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
  
            
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               WELCOME TO
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color:"#800080 ", // Gold color for "DIBAKAR"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 DIBAKAR YOGA RATHI
//               </Box>{" "}
//               {/* <Box
//                 component="span"
//                 sx={{
//                   color: "#00FF00", // Green color for "YOGA"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 YOGA
//               </Box>{" "} */}
//               {/* <Box
//                 component="span"
//                 sx={{
//                   color: "#FF4500", // OrangeRed color for "RATHI"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 RATHI
//               </Box> */}
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#1E90FF", // DodgerBlue color for "INSTITUTE"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 INSTITUTE
//               </Box>
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }    








// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars 
        
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "flex-start", // Align content to the left
//             alignItems: "flex-start", // Align content to the top
//             pt: { xs: 8, sm: 12, md: 16, lg: 20 }, // Add padding-top to position the text slightly above the center
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start", // Align text to the left
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               WELCOME TO
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080 ", // Gold color for "DIBAKAR"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 DIBAKAR
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080 ", // Green color for "YOGA"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 YOGA
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080 ", // OrangeRed color for "RATHI"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 RATHI
//               </Box>
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#1E90FF", // DodgerBlue color for "INSTITUTE"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 INSTITUTE
//               </Box>
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }   

























// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh", // Full viewport height
//         overflowX: "hidden", // Prevent horizontal scrollbars
//         overflowY: "hidden", // Prevent vertical scrollbars
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           sx={{
//             backgroundImage: `url('/img/banner1.jpg')`, // Correct path
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensures the image covers the entire container
//             backgroundPosition: "center", // Centers the image
//             height: "95vh", // Full viewport height
//             display: "flex",
//             justifyContent: "flex-start", // Align content to the left
//             alignItems: "flex-start", // Align content to the top
//             pt: { xs: 20, sm: 22, md: 26, lg: 30 }, // Increase padding-top to push text down
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Add left padding for better spacing
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start", // Align text to the left
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               WELCOME TO
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080", // Purple color for "DIBAKAR"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 DIBAKAR
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080", // Purple color for "YOGA"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 YOGA
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080", // Purple color for "RATHI"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 RATHI
//               </Box>
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "white",
//                 textAlign: "left", // Align text to the left
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#1E90FF", // DodgerBlue color for "INSTITUTE"
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" }, // Larger font size for emphasis
//                 }}
//               >
//                 INSTITUTE
//               </Box>
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




















// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Animation duration in ms
//       once: true, // Animation occurs only once
//     });
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "95vh",
//         overflowX: "hidden",
//         overflowY: "hidden", 
//         mt:"5rem"
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           data-aos="zoom-in-up" // AOS animation
//           sx={{
            
//             backgroundImage: `url('/img/pexels-elly-fairytale-3822864.jpg')`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "95vh",
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "flex-start",
//             pt: { xs: 20, sm: 22, md: 26, lg: 30 },
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             {/* Text with Zoom-In-Up Effect */}
//             <Typography
//               variant="h4"
//             //   data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               WELCOME TO
//             </Typography>

//             <Typography
//               variant="h4"
//               data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" },
//                 }}
//               >
//                 DIBAKAR
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" },
//                 }}
//               >
//                 YOGA
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" },
//                 }}
//               >
//                 RATHI
//               </Box>
//             </Typography>

//             <Typography
//               variant="h4"
//               data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#1E90FF",
//                   fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" },
//                 }}
//               >
//                 INSTITUTE
//               </Box>
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

































// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import { Box, Grid, Typography } from "@mui/material";

// export default function Banner() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Animation duration in ms
//       once: true, // Animation occurs only once
//     });
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: { xs: "50vh", sm: "60vh", md: "75vh", lg: "95vh" }, // Responsive height
//         overflowX: "hidden",
//         overflowY: "hidden",
//         mt: "5rem",
//       }}
//     >
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={12}
//           lg={12}
//           data-aos="zoom-in-up" // AOS animation
//           sx={{
//             backgroundImage: `url('/img/pexels-elly-fairytale-3822864.jpg')`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover", // Ensure the image covers the container
//             backgroundPosition: "center",
//             height: { xs: "50vh", sm: "60vh", md: "75vh", lg: "95vh" }, // Responsive height
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "flex-start",
//             pt: { xs: 10, sm: 15, md: 20, lg: 30 }, // Responsive padding-top
//             pl: { xs: 2, sm: 4, md: 6, lg: 8 }, // Responsive padding-left
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             {/* Text with Zoom-In-Up Effect */}
//             <Typography
//               variant="h4"
//               data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               WELCOME TO
//             </Typography>

//             <Typography
//               variant="h4"
//               data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
//                 }}
//               >
//                 DIBAKAR
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
//                 }}
//               >
//                 YOGA
//               </Box>{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#800080",
//                   fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
//                 }}
//               >
//                 RATHI
//               </Box>
//             </Typography>

//             <Typography
//               variant="h4"
//               data-aos="zoom-in-up" // AOS animation
//               sx={{
//                 color: "white",
//                 textAlign: "left",
//                 fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
//                 fontWeight: "bold",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: "#1E90FF",
//                   fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
//                 }}
//               >
//                 INSTITUTE
//               </Box>
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



























import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Box, Grid, Typography } from "@mui/material";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50vh", sm: "60vh", md: "75vh", lg: "95vh" }, // Responsive height
        overflowX: "hidden",
        overflowY: "hidden",
        mt: "5rem",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          data-aos="zoom-in-up" // AOS animation
          sx={{
            backgroundImage: `url('/img/pexels-elly-fairytale-3822864.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Ensure the image covers the container
            backgroundPosition: "center",
            height: { xs: "50vh", sm: "60vh", md: "75vh", lg: "95vh" }, // Responsive height
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            pt: { xs: 10, sm: 15, md: 20, lg: 30 }, // Responsive padding-top
            pl: { xs: 1, sm: 2, md: 3, lg: 4 }, // Reduced padding-left to move text more to the left
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Text with Zoom-In-Up Effect */}
            <Typography
              variant="h4"
              data-aos="zoom-in-up" // AOS animation
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
                fontWeight: "bold",
                // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              WELCOME TO
            </Typography>

            <Typography
              variant="h4"
              data-aos="zoom-in-up" // AOS animation
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#800080",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
                }}
              >
                DIBAKAR
              </Box>{" "} 
              <br />
              <Box
                component="span"
                sx={{
                  color: "#800080",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
                }}
              >
                YOGA
              </Box>{" "}
              <Box
                component="span"
                sx={{
                  color: "#800080",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
                }}
              >
                RATHI
              </Box>
            </Typography>

            <Typography
              variant="h4"
              data-aos="zoom-in-up" // AOS animation
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#1E90FF",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.3rem", lg: "2.8rem" }, // Responsive font size
                }}
              >
                INSTITUTE
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
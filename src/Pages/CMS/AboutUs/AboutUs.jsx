// import {
//   Box,
//   Breadcrumbs,
//   Typography,
//   Grid,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import { Card } from "react-bootstrap";

// export default function AboutUs() {
//   return (
//     <>
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
//                 fontSize: {
//                   xs: "1.5rem",
//                   sm: "2rem",
//                   md: "2.5rem",
//                   lg: "3rem",
//                 },
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
//               3
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       <Box mt={5}>
//         <Grid container>
//           <Grid item md={4}>
//             <Card sx={{ maxWidth: 405 }}>
//               <CardMedia
//                 sx={{ height: 400 }}
//                 image="/img/prize1.jpg"
//                 title="green iguana"
//                 component="img"
//               />
//               {/* <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
                  
//                   </Typography>
//                 </CardContent> */}
//             </Card>
//           </Grid>

//           <Grid item md={8}>
//             <Typography variant="h4"></Typography>
//             <Card sx={{ maxWidth: 900, height: "33rem" }}>
//               <CardContent>
//                 <Typography
//                   gutterBottom
//                   variant="h5"
//                   component="div"
//                   justifyContent="center"
//                 >
//                   Who We Are?
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   <h5>
//                     At Dibakar Yogarathi Institute, we are dedicated to the
//                     holistic well-being of individuals through the ancient
//                     practice of yoga, combined with modern therapeutic
//                     approaches. Located in Garia, Kolkata, our institute serves
//                     as a premier center for yoga education, career training, and
//                     wellness programs. With a strong focus on professional
//                     development, we offer Yoga Teacher’s Training Courses,
//                     Physiotherapy Courses, Advanced Yoga Training, and Rhythmic
//                     Yoga Training. Our structured programs are designed to
//                     empower aspiring yoga instructors and wellness practitioners
//                     with the knowledge, skills, and certifications needed to
//                     build a successful career in the field of health and
//                     fitness. Our team of experienced instructors ensures that
//                     every student receives personalized guidance, fostering both
//                     personal growth and professional excellence. Whether you are
//                     looking to deepen your yoga practice, start a career in
//                     teaching, or explore the healing benefits of physiotherapy
//                     and rhythmic yoga, Dibakar Yogarathi Institute provides the
//                     perfect environment for your journey. Join us and transform
//                     your passion for yoga into a fulfilling career while
//                     embracing a healthier, more balanced lifestyle!
//                   </h5>
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
























































import { Box, Breadcrumbs, Typography, Grid, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Card } from "react-bootstrap";
import Animated from "../Animated/Animated";

export default function AboutUs() {
  const galleryImages = [
    "/img/g1.jpg",
    "/img/g3.jpg",
    "/img/g2.jpg",
    "/img/g4.jpg",
    "/img/g5.jpg",
    "/img/prize.jpg",
    "/img/g7.jpg",
    "/img/g8.jpg",
    "/img/g11.jpg",
    
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        mt={{ xs: 8, sm: 10, md: 12, lg: 14 }}
        sx={{
          width: "100%",
          overflow: "hidden", // Prevent horizontal overflow
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: "url(/img/final.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center center", // Centers the image both horizontally and vertically
              height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" }, // Adjusted height for better responsiveness
              minHeight: "300px", // Ensures a minimum height for very small screens
              opacity: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "none", // Explicitly remove borders
              outline: "none", // Explicitly remove outlines
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
                padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" }, // Add padding for better readability
              }}
            >
              About Us
            </Typography>

            {/* Breadcrumbs */}
            <Box
              mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                "& .MuiBreadcrumbs-ol": {
                  padding: 0, // Remove padding from Breadcrumbs
                  margin: 0, // Remove margin from Breadcrumbs
                },
                "& .MuiBreadcrumbs-separator": {
                  color: "white", // Ensure separator color matches the design
                },
              }}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                    textDecoration: "none", // Remove underline from Link
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
                    textDecoration: "none", // Remove underline from Link
                  }}
                  to="/"
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  <b>About Us</b>
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Content Section */}
      <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        <Grid container spacing={4}>
          {/* Image Card */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  maxWidth: 405,
                  width: "100%",
                  height: "auto",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: { xs: 270, sm: 300, md: 350, lg: 400 } }}
                  image="/img/p1.jpg"
                  alt="green iguana"
                />
              </Card>
            </Box>
          </Grid>

          {/* Text Card */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                maxWidth: "100%",
                height: "auto",
                boxShadow: 3,
                borderRadius: 2,
                padding: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <CardContent sx={{ backgroundColor: "#dcd0ff" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: { xs: "center", md: "left" },
                    color: "primary.main",
                    mb: 3,
                  }}
                >
                  Who We Are?
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.6,
                    textAlign: "justify",
                  }}
                >
                  At <b>Dibakar Yogarathi Institute</b>, we are dedicated to the holistic well-being of individuals through the ancient practice of yoga, combined with modern therapeutic approaches. Located in Garia, Kolkata, our institute serves as a premier center for yoga education, career training, and wellness programs.
                  <br />
                  <br />
                  With a strong focus on professional development, we offer Yoga Teacher’s Training Courses, Physiotherapy Courses, Advanced Yoga Training, and Rhythmic Yoga Training. Our structured programs are designed to empower aspiring yoga instructors and wellness practitioners with the knowledge, skills, and certifications needed to build a successful career in the field of health and fitness.
                  <br />
                  <br />
                  Our team of experienced instructors ensures that every student receives personalized guidance, fostering both personal growth and professional excellence. Whether you are looking to deepen your yoga practice, start a career in teaching, or explore the healing benefits of physiotherapy and rhythmic yoga, Dibakar Yogarathi Institute provides the perfect environment for your journey.
                  <br />
                  <br />
                  Join us and transform your passion for yoga into a fulfilling career while embracing a healthier, more balanced lifestyle!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>  

      <Animated/>

      {/* Image Gallery Section */}
        {/* <Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "primary.main",
            mb: 4,
          }}
        >
          Our Gallery
        </Typography>
        <Grid container spacing={2}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: "100%",
                  height: "auto",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: { xs: 200, sm: 250, md: 300 } }}
                  image={image}
                  alt={`Gallery Image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>       */}    







<Box mt={5} sx={{ padding: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      textAlign: "center",
      color: "primary.main",
      mb: 4,
    }}
  >
    Our Gallery
  </Typography>
  <Grid container spacing={2}>
    {galleryImages.map((image, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            width: "100%",
            height: "auto",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative", // Required for absolute positioning of the overlay
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: 200, sm: 250, md: 300 },
              width: "100%",
              objectFit: "cover", // Ensure the image covers the card
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            image={image}
            alt={`Gallery Image ${index + 1}`}
          />
          {/* Text Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0, // Initially hidden
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                opacity: 1, // Show on hover
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                padding: 2,
              }}
            >
              {`Image ${index + 1}`} {/* Replace with your custom text */}
            </Typography>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>








      
    </>
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
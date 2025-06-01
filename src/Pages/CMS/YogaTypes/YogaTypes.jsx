// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
// } from "@mui/material";

// const yogaTypes = [
//   // ... (your existing yogaTypes array remains the same)

//   {
//     id: 1,
//     title: "Ashtanga Yoga",
//     description:
//       "Ashtanga Yoga is a dynamic and physically demanding practice involving a set sequence of postures. It links breath with movement to build internal heat and detoxify the body. Practiced in a specific order, it enhances flexibility, strength, and stamina. Ideal for those seeking discipline and structure in their yoga journey.",

//     image: "/img/ashtanga.jpg",
//     benefits: "Builds strength, flexibility, and stamina",
//   },
//   {
//     id: 2,
//     title: "Vinyasa Yoga",
//     description:
//       "Vinyasa Yoga is a flowing style where poses are smoothly linked through breath-synchronized movement. Each class can vary, offering creativity and variety. It builds strength, flexibility, and cardiovascular health. Great for those who enjoy a fast-paced and fluid workout.",
//     image: "/img/vinyasa.jpg",
//     benefits: "Improves cardiovascular health and builds lean muscle",
//   },
//   {
//     id: 3,
//     title: "Power Yoga",
//     description:
//       "Power Yoga is a high-intensity, fitness-based yoga style inspired by Ashtanga. It builds strength, endurance, and flexibility through vigorous flows. Great for improving stamina and burning calories. Suited for those who want a challenging, athletic experience.",
//     image: "/img/power.jpg",
//     benefits: "Builds upper-body strength, increases endurance", 
//   },
//   {
//     id: 4,
//     title: "Pregnancy Yoga",
//     description:
//       "Pregnancy Yoga is tailored for expectant mothers to support a healthy pregnancy and delivery. It includes gentle stretches, breathing, and relaxation techniques. Helps reduce stress, back pain, and improves sleep. Safe and nurturing for both mother and baby.",
//     image: "/img/pregnancy.jpg",
//     benefits:
//       "Pregnancy Yoga is tailored for expectant mothers to support a healthy pregnancy and delivery. It includes gentle stretches, breathing, and relaxation techniques. Helps reduce stress, back pain, and improves sleep. Safe and nurturing for both mother and baby.",
//   },
//   {
//     id: 5,
//     title: "Weightloss Yoga",
//     description:
//       "Weight Loss Yoga combines active poses, dynamic flows, and breathwork to boost metabolism and burn calories. It improves flexibility, tones muscles, and supports a healthy lifestyle. Regular practice promotes fat loss and body awareness. Suitable for those aiming to shed weight holistically.",
//     image: "/img/weightloss.jpg",
//     benefits: "Burns fat, tones muscles, improves metabolism",
//   },
//   {
//     id: 6,
//     title: "Therapeutic Yoga",
//     description:
//       "Therapeutic Yoga is a gentle practice designed to support healing from physical or emotional conditions. It blends breathwork, meditation, and modified poses for specific health concerns. Helps manage stress, pain, and chronic issues. Ideal for recovery and overall wellness.",
//     image: "/img/Therapeutic.jpg",
//     benefits: "Helps recovery, reduces pain, improves mobility",
//   },
//   {
//     id: 7,
//     title: "Core Yoga",
//     description:
//       "Core Yoga strengthens the abdominal and back muscles through focused postures and flows. It improves stability, balance, and posture. Engages deep core layers for enhanced performance in daily movement. Recommended for building inner strength and control.",
//     image: "/img/core.jpg",
//     benefits: "Strengthens core, improves posture",
//   },
//   {
   




//     id: 8,
//     title: "Hatha Yoga",
//     description:
//       "Hatha Yoga focuses on basic postures and breathing techniques to align the body and calm the mind. It’s slower-paced, making it accessible for beginners. Emphasis is on balance, strength, and mindfulness. Perfect for developing a strong foundation in yoga.",
//     image: "/img/hatha.jpg",
//     benefits: "Great for beginners, reduces stress",
//   },
//   {
//     id: 9,
//     title: "Child Yoga",
//     description:
//       "Child Yoga introduces yoga to kids in a fun, engaging, and age-appropriate way. It includes playful poses, stories, and breathing games. Promotes focus, flexibility, and emotional regulation. Nurtures creativity and body awareness in a joyful setting.",
//     image: "/img/child.jpg",
//     benefits: "Improves concentration, builds confidence",
//   },
// ];

// const YogaTypes = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         backgroundColor: "#f8f9fa",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             mb: 4,
//             textAlign: "center",
//             fontWeight: 700,
//             color: "#2c3e50",
//             fontSize: { xs: "2rem", md: "2.5rem" },
//           }}
//         >
//           Explore Different Types of Yoga
//         </Typography>

//         <Grid container spacing={4}>
//           {yogaTypes.map((yoga) => (
//             <Grid item key={yoga.id} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   transition: "transform 0.3s ease-in-out",
//                   "&:hover": {
//                     transform: "translateY(-5px)",
//                     boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   sx={{
//                     height: 280, // Fixed height for all images
//                     width: "100%",
//                     objectFit: "cover", // This ensures the image covers the area while maintaining aspect ratio
//                     objectPosition: "center", // Centers the image within the frame
//                   }}
//                   image={yoga.image}
//                   alt={yoga.title}
//                 />

//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h5" component="h3">
//                     {yoga.title}
//                   </Typography>
//                   <Typography paragraph sx={{ mb: 2 }}>
//                     {yoga.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     size="small"
//                     color="primary"
//                     variant="outlined"
//                     sx={{
//                       fontWeight: 600,
//                       mb: 1,
//                       ml: 1,
//                     }}
//                   >
//                     Read More
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default YogaTypes;

   










































import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom"; 
import { yogaArray } from "../../../Data"; 
import { useState } from "react";


const YogaTypes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
  const [yogadata,setYogadata]=useState(yogaArray) 
  console.log(yogadata);
  

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: { xs: 3, sm: 4 },
            textAlign: "center",
            fontWeight: 700,
            color: "#2c3e50",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            px: 2,
            mx: 'auto'
          }}
        >
          Explore Different Types of Yoga
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {yogadata.map((yoga) => (
            <Grid item key={yoga.id} xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: { xs: 200, sm: 220, md: 240, lg: 260 },
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  image={yoga.image}
                  alt={yoga.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{
                      color: '#3f51b5',
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' }
                    }}
                  >
                    {yoga.title}
                  </Typography>
                  <Typography 
                    paragraph 
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {yoga.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button
                    size={isMobile ? "small" : "medium"}
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      ml: 1,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}
                  >
                    Read More
                  </Button> */}   

{/* // In your YogaTypes component, update the Button component: */}
<Button
  size={isMobile ? "small" : "medium"}
  color="primary"
  variant="outlined"
  sx={{
    fontWeight: 600,
    mb: 1,
    ml: 1,
    fontSize: { xs: '0.75rem', sm: '0.875rem' }
  }}
  component={Link} // Add this
  to={`/course/yoga/${yoga.id}`} // Add this
>
  Read More
</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default YogaTypes;
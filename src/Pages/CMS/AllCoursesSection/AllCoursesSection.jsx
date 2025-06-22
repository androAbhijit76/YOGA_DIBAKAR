



































import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  // Rating,
  Button,
  // Avatar,
  // Stack,
  Container,
  useTheme,
  CardMedia,
  CardActions,
  useMediaQuery,
} from "@mui/material";
// import { styled } from "@mui/material/styles"; 
import { Link } from "react-router-dom";

import {
  // AccessTime as DurationIcon,
  // People as StudentsIcon,
  // Star as StarIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion"; 
import { courses } from "../../../Courses";
import { useState } from "react";

// const CourseCard = styled(Card)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
//   boxShadow: theme.shadows[2],
//   border: "none",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: theme.shadows[8],
//   },
// }));

// const CourseMedia = styled("div")(({ image }) => ({
//   height: "200px",
//   backgroundImage: `url(${image})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background:
//       "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)",
//   },
// }));

   













const AllCourseSection = () => {
  const theme = useTheme();   
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const[courseArray,setcourseArray]=useState(courses) 
  // const navigate = useNavigate(); // Add this line


  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#F8FAFC",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={fadeIn}
          // transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
              maxWidth: "800px",
              mx: "auto",
              px: 2,
            }}
          >
            <Chip
              label="PREMIUM PROGRAMS"
              size="medium"
              icon={<SchoolIcon />}
              sx={{
                mb: 3,
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                fontWeight: 700,
                letterSpacing: 1,
                px: 1.5,
                py: 1,
                fontSize: "0.875rem",
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: "#1E293B",
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Elevate Your Career With Our{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Expert-Led
              </Box>{" "}
              Programs
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: "1.125rem",
                lineHeight: 1.6,
              }}
            >
              Transformative learning experiences designed by industry leaders
              to help you master in-demand skills and achieve professional
              excellence.
            </Typography>
          </Box>
        </motion.div>

              











   <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {courseArray.map((course,index) => (
            <Grid item key={course.id} xs={12} sm={6} md={4} lg={4}>
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
                  image={course.image}
                  alt={course.title}
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
                    {course.title}
                  </Typography>
                  <Typography 
                    paragraph 
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                 
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
  to={`/courseDetailsPage/course/${course.id}`} // Add this
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

export default AllCourseSection;





















































































































// import React, { useMemo } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Chip,
//   Rating,
//   Button,
//   Stack,
//   Container,
//   useTheme,
// } from "@mui/material";
// import { styled } from "@mui/material/styles"; 
// import { Link } from "react-router-dom";
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
// } from "@mui/icons-material";
// import { motion } from "framer-motion"; 
// import { courses } from "../../../Courses";
// import { Grid } from '@mui/material';
// import { Grid } from '@mui/material';

// // Memoized CourseCard component to prevent unnecessary re-renders
// const CourseCard = React.memo(styled(Card)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   boxShadow: theme.shadows[2],
//   border: "none",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: theme.shadows[8],
//   },
// })));

// // Memoized CourseMedia component with lazy loading
// const CourseMedia = React.memo(styled("div", {
//   shouldForwardProp: (prop) => prop !== 'image'
// })(({ image, theme }) => ({
//   height: "200px",
//   backgroundImage: `url(${image})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)",
//   },
// })));

// // Animation variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const MotionGridItem = motion(Grid);

// const AllCourseSection = () => {
//   const theme = useTheme();
  
//   // Memoize courses data
//   const courseList = useMemo(() => courses, []);

//   return (
//     <Box sx={{ py: 10, backgroundColor: "#F8FAFC" }}>
//       <Container maxWidth="xl">
//         {/* Header section - separated into its own component would be better */}
//         <Box sx={{ textAlign: "center", mb: 8, maxWidth: "800px", mx: "auto", px: 2 }}>
//           <Chip
//             label="PREMIUM PROGRAMS"
//             size="medium"
//             icon={<SchoolIcon />}
//             sx={{
//               mb: 3,
//               backgroundColor: theme.palette.primary.light,
//               color: theme.palette.primary.dark,
//               fontWeight: 700,
//               letterSpacing: 1,
//               px: 1.5,
//               py: 1,
//               fontSize: "0.875rem",
//             }}
//           />
//           <Typography variant="h2" component="h2" sx={{
//               fontWeight: 800,
//               mb: 3,
//               color: "#1E293B",
//               lineHeight: 1.2,
//               fontSize: { xs: "2rem", md: "2.75rem" },
//             }}>
//             Elevate Your Career With Our{" "}
//             <Box component="span" sx={{ color: theme.palette.primary.main }}>
//               Expert-Led
//             </Box>{" "}
//             Programs
//           </Typography>
//           <Typography variant="subtitle1" sx={{
//               color: "text.secondary",
//               fontSize: "1.125rem",
//               lineHeight: 1.6,
//             }}>
//             Transformative learning experiences designed by industry leaders
//             to help you master in-demand skills and achieve professional
//             excellence.
//           </Typography>
//         </Box>

//         {/* Courses grid with optimized rendering */}
//         <Grid container spacing={4} justifyContent="center">
//           {courseList.map((course, index) => (
//             <MotionGridItem 
//               item 
//               xs={12} 
//               sm={6} 
//               md={4} 
//               lg={4} 
//               key={course.id}
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//               transition={{ 
//                 duration: 0.4,
//                 delay: index * 0.03 // Very slight stagger
//               }}
//               viewport={{ once: true, margin: "100px" }}
//               layout // Helps with smooth transitions
//             >
//               <CourseCard>
//                 <CourseMedia image={course.image}>
//                   <Chip
//                     label={course.duration}
//                     size="small"
//                     icon={<DurationIcon fontSize="small" />}
//                     sx={{
//                       position: "absolute",
//                       top: 16,
//                       right: 16,
//                       backgroundColor: "rgba(255,255,255,0.95)",
//                       fontWeight: 700,
//                       boxShadow: theme.shadows[1],
//                     }}
//                   />
//                   <Box sx={{
//                     position: "absolute",
//                     bottom: 16,
//                     left: 16,
//                     display: "flex",
//                     alignItems: "center",
//                   }}>
//                     <StarIcon sx={{ color: "#FBBF24", fontSize: "1.2rem" }} />
//                     <Typography variant="body2" sx={{
//                         color: "white",
//                         fontWeight: 700,
//                         ml: 0.5,
//                         textShadow: "0 1px 3px rgba(0,0,0,0.3)",
//                       }}>
//                       {course.rating}
//                     </Typography>
//                   </Box>
//                 </CourseMedia>

//                 <CardContent sx={{ p: 3, pb: 2 }}>
//                   <Typography variant="h6" sx={{
//                       fontWeight: 700,
//                       mb: 1.5,
//                       minHeight: "64px",
//                       color: "#1E293B",
//                       lineHeight: 1.4,
//                     }}>
//                     {course.title}
//                   </Typography>

//                   <Typography variant="body2" sx={{
//                       color: "text.secondary",
//                       mb: 2,
//                       display: "-webkit-box",
//                       WebkitLineClamp: 3,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       minHeight: "100px"
//                     }}>
//                     {course.description}
//                   </Typography>

//                   <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//                     <Stack direction="row" spacing={1} alignItems="center">
//                       <Rating
//                         value={course.rating}
//                         precision={0.1}
//                         readOnly
//                         size="small"
//                         icon={<StarIcon fontSize="inherit" />}
//                         sx={{
//                           color: course.color,
//                           "& .MuiRating-iconFilled": {
//                             color: course.color,
//                           },
//                         }}
//                       />
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {course.rating}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                         ({course.reviews})
//                       </Typography>
//                     </Stack>
//                     <Chip
//                       label={course.level}
//                       size="small"
//                       sx={{
//                         backgroundColor: `${course.color}15`,
//                         color: course.color,
//                         fontWeight: 700,
//                         fontSize: "0.65rem",
//                         height: "22px",
//                       }}
//                     />
//                   </Stack>

//                   <Stack direction="row" spacing={1.5} sx={{
//                       mb: 3,
//                       "& .MuiChip-root": {
//                         borderRadius: "8px",
//                       },
//                     }}>
//                     <Chip
//                       label={course.category}
//                       size="small"
//                       sx={{
//                         backgroundColor: `${course.color}10`,
//                         color: course.color,
//                         fontWeight: 700,
//                         fontSize: "0.75rem",
//                       }}
//                     />
//                     <Chip
//                       icon={<StudentsIcon fontSize="small" />}
//                       label={`${course.students}+ enrolled`}
//                       size="small"
//                       sx={{
//                         backgroundColor: "rgba(0,0,0,0.03)",
//                         fontWeight: 600,
//                         fontSize: "0.75rem",
//                       }}
//                     />
//                   </Stack>

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       backgroundColor: course.color,
//                       py: 1.5,
//                       borderRadius: "10px",
//                       fontWeight: 700,
//                       letterSpacing: 0.5,
//                       fontSize: "0.875rem",
//                       textTransform: "none",
//                       boxShadow: `0 2px 6px ${course.color}60`,
//                       "&:hover": {
//                         backgroundColor: course.color,
//                         boxShadow: `0 4px 12px ${course.color}80`,
//                         transform: "translateY(-1px)",
//                       },
//                       transition: "all 0.3s ease",
//                     }}
//                     component={Link}
//                     to={`/courseDetailsPage/course/${course.id}`}
//                     prefetch="intent" // Helps with navigation performance
//                   >
//                     Read More
//                   </Button>
//                 </CardContent>
//               </CourseCard>
//             </MotionGridItem>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default React.memo(AllCourseSection);
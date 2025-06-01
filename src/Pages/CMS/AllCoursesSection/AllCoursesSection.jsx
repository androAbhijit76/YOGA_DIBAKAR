// // import React from 'react';
// import { 
//   Box, 
//   Typography, 
//   Card, 
//   CardContent, 
//   Grid, 
//   Chip, 
//   Rating,
//   Button,
//   Avatar,
//   Stack,
//   Container
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import {
// //   Spa as SpaIcon,
// //   MedicalServices as MedicalIcon,
// //   Gavel as GavelIcon,
// //   SelfImprovement as YogaIcon,
// //   Favorite as TherapyIcon,
//   AccessTime as DurationIcon,
//   People as StudentsIcon
// } from '@mui/icons-material';

// const CourseCard = styled(Card)(({ theme }) => ({
//   borderRadius: '12px',
//   overflow: 'hidden',
//   transition: 'all 0.3s ease',
//   boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
//   border: '1px solid rgba(0,0,0,0.03)',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
//   },
// }));

// const CourseMedia = styled('div')(({  image }) => ({
//   height: '180px',
//   backgroundImage: `url(${image})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 60%)',
//   },
// }));

// const courses = [
//   {
//     title: 'Yoga Teacher Training',
//     duration: '6 Months',
//     image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     rating: 4.8,
//     reviews: 124,
//     category: 'Yoga',
//     instructor: 'Priya Sharma',
//     instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     color: '#6a5acd', // Slate blue
//     students: 85
//   },
//   {
//     title: 'Massage Therapy Certification',
//     duration: '3 Months',
//     image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     rating: 4.5,
//     reviews: 89,
//     category: 'Therapy',
//     instructor: 'Arjun Patel',
//     instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     color: '#20b2aa', // Light sea green
//     students: 62
//   },
//   {
//     title: 'Professional Physiotherapy',
//     duration: '6 Months',
//     image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     rating: 4.7,
//     reviews: 156,
//     category: 'Medical',
//     instructor: 'Dr. Neha Gupta',
//     instructorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
//     color: '#4682b4', // Steel blue
//     students: 112
//   },
//   {
//     title: 'Diploma in Yoga Therapy',
//     duration: '2 Years',
//     image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     rating: 4.9,
//     reviews: 210,
//     category: 'Yoga',
//     instructor: 'Ravi Mishra',
//     instructorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
//     color: '#daa520', // Goldenrod
//     students: 94
//   },
//   {
//     title: 'Judicial Training Program',
//     duration: '3 Months',
//     image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     rating: 4.3,
//     reviews: 67,
//     category: 'Professional',
//     instructor: 'Justice Verma',
//     instructorAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
//     color: '#cd5c5c', // Indian red
//     students: 48
//   }
// ];

// const AllCourseSection = () => {
//   return (
//     <Box sx={{ 
//       py: 8,
//       backgroundColor: '#f9fafc'
//     }}>
//       <Container maxWidth="lg">
//         <Box sx={{ 
//           textAlign: 'center', 
//           mb: 6,
//           maxWidth: '700px',
//           mx: 'auto'
//         }}>
//           <Chip 
//             label="OUR PROGRAMS" 
//             size="small" 
//             sx={{ 
//               mb: 2, 
//               backgroundColor: 'rgba(106, 90, 205, 0.1)', 
//               color: '#6a5acd',
//               fontWeight: 600,
//               letterSpacing: 1
//             }} 
//           />
//           <Typography 
//             variant="h3" 
//             component="h2" 
//             sx={{ 
//               fontWeight: 700,
//               mb: 2,
//               color: '#2d3748',
//               lineHeight: 1.2
//             }}
//           >
//             Transformative Learning Experiences
//           </Typography>
//           <Typography 
//             variant="body1" 
//             sx={{ 
//               color: 'text.secondary',
//               fontSize: '1.1rem'
//             }}
//           >
//             Professional certification programs designed to help you master new skills and advance your career.
//           </Typography>
//         </Box>
        
//         <Grid container spacing={3}>
//           {courses.map((course, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <CourseCard>
//                 <CourseMedia image={course.image}>
//                   <Chip 
//                     label={course.duration} 
//                     size="small"
//                     icon={<DurationIcon fontSize="small" />}
//                     sx={{ 
//                       position: 'absolute',
//                       top: 16,
//                       right: 16,
//                       backgroundColor: 'rgba(255,255,255,0.9)',
//                       fontWeight: 600
//                     }}
//                   />
//                 </CourseMedia>
                
//                 <CardContent sx={{ p: 3 }}>
//                   <Stack direction="row" spacing={1} alignItems="center" mb={2}>
//                     <Avatar 
//                       src={course.instructorAvatar} 
//                       sx={{ 
//                         width: 40, 
//                         height: 40,
//                         border: `2px solid ${course.color}`
//                       }} 
//                     />
//                     <Box>
//                       <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//                         {course.instructor}
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                         Instructor
//                       </Typography>
//                     </Box>
//                   </Stack>
                  
//                   <Typography 
//                     variant="h6" 
//                     sx={{ 
//                       fontWeight: 700,
//                       mb: 1,
//                       minHeight: '64px',
//                       color: '#2d3748'
//                     }}
//                   >
//                     {course.title}
//                   </Typography>
                  
//                   <Stack direction="row" spacing={1} alignItems="center" mb={2}>
//                     <Rating 
//                       value={course.rating} 
//                       precision={0.1} 
//                       readOnly 
//                       size="small"
//                       sx={{ color: course.color }}
//                     />
//                     <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                       {course.rating}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                       ({course.reviews} reviews)
//                     </Typography>
//                   </Stack>
                  
//                   <Stack 
//                     direction="row" 
//                     spacing={2} 
//                     sx={{ 
//                       mb: 3,
//                       '& .MuiChip-root': {
//                         borderRadius: '6px'
//                       }
//                     }}
//                   >
//                     <Chip 
//                       label={course.category}
//                       size="small"
//                       sx={{ 
//                         backgroundColor: `${course.color}10`,
//                         color: course.color,
//                         fontWeight: 600
//                       }}
//                     />
//                     <Chip 
//                       icon={<StudentsIcon fontSize="small" />}
//                       label={`${course.students} students`}
//                       size="small"
//                       sx={{ 
//                         backgroundColor: 'rgba(0,0,0,0.03)',
//                         fontWeight: 500
//                       }}
//                     />
//                   </Stack>
                  
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       backgroundColor: course.color,
//                       py: 1.5,
//                       borderRadius: '8px',
//                       fontWeight: 600,
//                       letterSpacing: 0.5,
//                       '&:hover': {
//                         backgroundColor: course.color,
//                         boxShadow: `0 4px 12px ${course.color}80`
//                       }
//                     }}
//                   >
//                     Enroll Now
//                   </Button>
//                 </CardContent>
//               </CourseCard>
//             </Grid>
//           ))}
//         </Grid>
        
//         <Box sx={{ textAlign: 'center', mt: 6 }}>
//           <Button 
//             variant="outlined" 
//             size="large"
//             sx={{
//               borderRadius: '8px',
//               px: 5,
//               py: 1.5,
//               fontWeight: 600,
//               borderColor: 'rgba(0,0,0,0.1)',
//               backgroundColor: 'white',
//               color: '#2d3748',
//               '&:hover': {
//                 borderColor: 'rgba(0,0,0,0.2)',
//                 backgroundColor: 'white'
//               }
//             }}
//           >
//             View All Programs
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AllCourseSection;   

















































import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Grid, 
    Chip, 
    Rating,
    Button,
    Avatar,
    Stack,
    Container,
    useTheme
  } from '@mui/material';
  import { styled } from '@mui/material/styles';
  import {
    AccessTime as DurationIcon,
    People as StudentsIcon,
    Star as StarIcon,
    School as SchoolIcon
  } from '@mui/icons-material';
  import { motion } from 'framer-motion';
  
  const CourseCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: theme.shadows[2],
    border: 'none',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
    },
  }));
  
  const CourseMedia = styled('div')(({  image }) => ({
    height: '200px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
    },
  }));
  
  const courses = [
    {
      title: 'Yoga Teacher Training',
      duration: '6 Months',
      image: '/img/training1.jpg',
      rating: 4.8,
      reviews: 124,
      category: 'Yoga',
      // instructor: 'Priya Sharma',
      // instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: '#6366F1', // Indigo
      students: 85,
      level: 'Intermediate'
    },
    {
      title: 'Massage Therapy Certification',
      duration: '3 Months',
      image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 89,
      category: 'Therapy',
      // instructor: 'Arjun Patel',
      // instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      color: '#10B981', // Emerald
      students: 62,
      level: 'Beginner'
    },
    {
      title: 'Professional Physiotherapy',
      duration: '6 Months',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 156,
      category: 'Medical',
      // instructor: 'Dr. Neha Gupta',
      // instructorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      color: '#3B82F6', // Blue
      students: 112,
      level: 'Advanced'
    },
    {
      title: 'Diploma in Yoga Therapy',
      duration: '2 Years',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 210,
      category: 'Yoga',
      // instructor: 'Ravi Mishra',
      // instructorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      color: '#F59E0B', // Amber
      students: 94,
      level: 'Professional'
    },
    {
      title: 'Judicial Training Program',
      duration: '3 Months',
      image: '/img/judges.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Professional',
      // instructor: 'Justice Verma',
      // instructorAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
      color: '#EF4444', // Red
      students: 48,
      level: 'Expert'
    },
    {
      title: 'Advanced Meditation Techniques',
      duration: '4 Months',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 92,
      category: 'Wellness',
      // instructor: 'Ananya Desai',
      // instructorAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      color: '#8B5CF6', // Violet
      students: 76,
      level: 'Intermediate'
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const AllCourseSection = () => {
    const theme = useTheme();
    
    return (
      <Box sx={{ 
        py: 10,
        backgroundColor: '#F8FAFC'
      }}>
        <Container maxWidth="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
              px: 2
            }}>
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
                  fontSize: '0.875rem'
                }} 
              />
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  color: '#1E293B',
                  lineHeight: 1.2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Elevate Your Career With Our <Box component="span" sx={{ color: theme.palette.primary.main }}>Expert-Led</Box> Programs
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.6
                }}
              >
                Transformative learning experiences designed by industry leaders to help you master in-demand skills and achieve professional excellence.
              </Typography>
            </Box>
          </motion.div>
          
          <Grid container spacing={4} justifyContent="center">
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CourseCard>
                    <CourseMedia image={course.image}>
                      <Chip 
                        label={course.duration} 
                        size="small"
                        icon={<DurationIcon fontSize="small" />}
                        sx={{ 
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          fontWeight: 700,
                          boxShadow: theme.shadows[1]
                        }}
                      />
                      <Box sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <StarIcon sx={{ color: '#FBBF24', fontSize: '1.2rem' }} />
                        <Typography variant="body2" sx={{ 
                          color: 'white', 
                          fontWeight: 700,
                          ml: 0.5,
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                        }}>
                          {course.rating}
                        </Typography>
                      </Box>
                    </CourseMedia>
                    
                    <CardContent sx={{ p: 3, pb: 2 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                        {/* <Avatar 
                          src={course.instructorAvatar} 
                          sx={{ 
                            width: 44, 
                            height: 44,
                            border: `2px solid ${course.color}`,
                            boxShadow: `0 2px 8px ${course.color}40`
                          }} 
                        /> */}
                        <Box>
                          {/* <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                            {course.instructor}
                          </Typography> */}
                          {/* <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            Senior Instructor
                          </Typography> */}
                        </Box>
                      </Stack>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          mb: 1.5,
                          minHeight: '64px',
                          color: '#1E293B',
                          lineHeight: 1.4
                        }}
                      >
                        {course.title}
                      </Typography>
                      
                      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Rating 
                            value={course.rating} 
                            precision={0.1} 
                            readOnly 
                            size="small"
                            icon={<StarIcon fontSize="inherit" />}
                            sx={{ 
                              color: course.color,
                              '& .MuiRating-iconFilled': {
                                color: course.color
                              }
                            }}
                          />
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {course.rating}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            ({course.reviews})
                          </Typography>
                        </Stack>
                        <Chip 
                          label={course.level}
                          size="small"
                          sx={{ 
                            backgroundColor: `${course.color}15`,
                            color: course.color,
                            fontWeight: 700,
                            fontSize: '0.65rem',
                            height: '22px'
                          }}
                        />
                      </Stack>
                      
                      <Stack 
                        direction="row" 
                        spacing={1.5} 
                        sx={{ 
                          mb: 3,
                          '& .MuiChip-root': {
                            borderRadius: '8px'
                          }
                        }}
                      >
                        <Chip 
                          label={course.category}
                          size="small"
                          sx={{ 
                            backgroundColor: `${course.color}10`,
                            color: course.color,
                            fontWeight: 700,
                            fontSize: '0.75rem'
                          }}
                        />
                        <Chip 
                          icon={<StudentsIcon fontSize="small" />}
                          label={`${course.students}+ enrolled`}
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(0,0,0,0.03)',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      </Stack>
                      
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          backgroundColor: course.color,
                          py: 1.5,
                          borderRadius: '10px',
                          fontWeight: 700,
                          letterSpacing: 0.5,
                          fontSize: '0.875rem',
                          textTransform: 'none',
                          boxShadow: `0 2px 6px ${course.color}60`,
                          '&:hover': {
                            backgroundColor: course.color,
                            boxShadow: `0 4px 12px ${course.color}80`,
                            transform: 'translateY(-1px)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Enroll Now - Limited Seats
                      </Button>
                    </CardContent>
                  </CourseCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button 
                variant="contained" 
                size="large"
                endIcon={<SchoolIcon />}
                sx={{
                  borderRadius: '12px',
                  px: 6,
                  py: 1.8,
                  fontWeight: 700,
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: theme.shadows[6]
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explore All 24+ Programs
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    );
  };
  
  export default AllCourseSection;
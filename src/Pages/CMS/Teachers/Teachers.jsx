// // components/TeachersSlider.js
// // import React from 'react';
// import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const teachers = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     qualification: 'E-RYT 500, YACEP',
//     experience: '15 years',
//     specialty: 'Hatha & Vinyasa',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     qualification: 'RYT 500, Yoga Therapist',
//     experience: '12 years',
//     specialty: 'Iyengar & Restorative',
//     image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 3,
//     name: 'Priya Patel',
//     qualification: 'E-RYT 200, Ayurveda Specialist',
//     experience: '8 years',
//     specialty: 'Kundalini & Prenatal',
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     qualification: 'RYT 200, Fitness Coach',
//     experience: '6 years',
//     specialty: 'Power Yoga & Ashtanga',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialty: 'Yin & Meditation',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
// ];

// const Teachers = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: '#f9f9f9' }}>
//       <Typography 
//         variant="h3" 
//         component="h2" 
//         sx={{ 
//           textAlign: 'center', 
//           mb: 6, 
//           fontWeight: 'bold',
//           color: 'primary.main'
//         }}
//       >
//         Meet Our Teachers
//       </Typography>
      
//       <Slider {...settings}>
//         {teachers.map((teacher) => (
//           <Box key={teacher.id} sx={{ px: 2 }}>
//             <Card sx={{ 
//               height: '100%', 
//               display: 'flex', 
//               flexDirection: 'column',
//               borderRadius: 3,
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'translateY(-5px)'
//               }
//             }}>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={teacher.image}
//                 alt={teacher.name}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
//                   {teacher.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Qualification:</strong> {teacher.qualification}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Experience:</strong> {teacher.experience}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <strong>Specialty:</strong> {teacher.specialty}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Teachers;   































// import React from 'react';
// import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const teachers = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     qualification: 'E-RYT 500, YACEP',
//     experience: '15 years',
//     specialty: 'Hatha & Vinyasa',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     qualification: 'RYT 500, Yoga Therapist',
//     experience: '12 years',
//     specialty: 'Iyengar & Restorative',
//     image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 3,
//     name: 'Priya Patel',
//     qualification: 'E-RYT 200, Ayurveda Specialist',
//     experience: '8 years',
//     specialty: 'Kundalini & Prenatal',
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     qualification: 'RYT 200, Fitness Coach',
//     experience: '6 years',
//     specialty: 'Power Yoga & Ashtanga',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialty: 'Yin & Meditation',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//   },
// ];

// const Teachers = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000, // Increased from 2000ms to 5000ms
//     pauseOnHover: true, // Added this to pause on hover
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false // Hide arrows on mobile
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ 
//       py: 8, 
//       px: { xs: 2, md: 6 }, 
//       backgroundColor: '#f9f9f9',
//       '& .slick-slide': {
//         padding: '0 10px' // Add some spacing between slides
//       },
//       '& .slick-list': {
//         margin: '0 -10px' // Compensate for the padding
//       }
//     }}>
//       <Typography 
//         variant="h3" 
//         component="h2" 
//         sx={{ 
//           textAlign: 'center', 
//           mb: 6, 
//           fontWeight: 'bold',
//           color: 'primary.main'
//         }}
//       >
//         Meet Our Teachers
//       </Typography>
      
//       <Slider {...settings}>
//         {teachers.map((teacher) => (
//           <Box key={teacher.id}>
//             <Card sx={{ 
//               height: '100%', 
//               display: 'flex', 
//               flexDirection: 'column',
//               borderRadius: 3,
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               mx: 1, // Add horizontal margin
//               '&:hover': {
//                 transform: 'translateY(-5px)'
//               }
//             }}>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={teacher.image}
//                 alt={teacher.name}
//                 sx={{ 
//                   objectFit: 'cover',
//                   borderTopLeftRadius: '12px',
//                   borderTopRightRadius: '12px'
//                 }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
//                   {teacher.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Qualification:</strong> {teacher.qualification}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Experience:</strong> {teacher.experience}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   <strong>Specialty:</strong> {teacher.specialty}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Teachers;












// import React from 'react';
// import { 
//   Box, 
//   Typography, 
//   Card, 
//   CardContent, 
//   CardMedia, 
//   useTheme,
//   useMediaQuery,
//   Avatar,
//   Chip,
//   Stack
// } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { styled } from '@mui/material/styles';

// const teachers = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     qualification: 'E-RYT 500, YACEP',
//     experience: '15 years',
//     specialties: ['Hatha', 'Vinyasa'],
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Yoga is the journey of the self, through the self, to the self.'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     qualification: 'RYT 500, Yoga Therapist',
//     experience: '12 years',
//     specialties: ['Iyengar', 'Restorative'],
//     image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Inhale the future, exhale the past.'
//   },
//   {
//     id: 3,
//     name: 'Priya Patel',
//     qualification: 'E-RYT 200, Ayurveda Specialist',
//     experience: '8 years',
//     specialties: ['Kundalini', 'Prenatal'],
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'The body benefits from movement, and the mind benefits from stillness.'
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     qualification: 'RYT 200, Fitness Coach',
//     experience: '6 years',
//     specialties: ['Power Yoga', 'Ashtanga'],
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Yoga is not about touching your toes, it\'s about what you learn on the way down.'
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialties: ['Yin', 'Meditation'],
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Quiet the mind, and the soul will speak.'
//   },
// ];

// const TeacherCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//   transition: 'all 0.3s ease',
//   margin: '0 8px',
//   '&:hover': {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
//   }
// }));

// const Teachers = () => {
//   const theme = useTheme();
//   const isXs = useMediaQuery(theme.breakpoints.down('sm'));
//   const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
//   const isLg = useMediaQuery(theme.breakpoints.up('lg'));

//   const getSlidesToShow = () => {
//     if (isXs) return 1;
//     if (isSm) return 2;
//     if (isMd) return 2;
//     return 3;
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: getSlidesToShow(),
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     arrows: !isXs,
//     responsive: [
//       {
//         breakpoint: theme.breakpoints.values.lg,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: theme.breakpoints.values.md,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: theme.breakpoints.values.sm,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         }
//       }
//     ]
//   };

//   return (
//     <Box 
//       sx={{ 
//         py: { xs: 4, sm: 6, md: 8 },
//         px: { xs: 2, sm: 3, md: 4, lg: 6 },
//         backgroundColor: theme.palette.background.paper,
//         overflow: 'hidden'
//       }}
//     >
//       <Box sx={{ 
//         maxWidth: '1600px', 
//         margin: '0 auto',
//         position: 'relative'
//       }}>
//         <Typography 
//           variant="h2" 
//           component="h2" 
//           sx={{ 
//             textAlign: 'center', 
//             mb: { xs: 3, sm: 4, md: 5 },
//             fontWeight: 600,
//             color: theme.palette.text.primary,
//             fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
//             lineHeight: 1.2
//           }}
//         >
//           Our Certified Yoga Instructors
//         </Typography>
        
//         <Typography 
//           variant="subtitle1" 
//           sx={{ 
//             textAlign: 'center', 
//             mb: { xs: 4, sm: 5, md: 6 },
//             color: theme.palette.text.secondary,
//             maxWidth: '800px',
//             margin: '0 auto',
//             fontSize: { xs: '1rem', sm: '1.1rem' }
//           }}
//         >
//           Meet our team of experienced and passionate yoga teachers dedicated to your wellness journey
//         </Typography>
        
//         <Box sx={{ 
//           position: 'relative',
//           '& .slick-slide': {
//             padding: '0 8px'
//           },
//           '& .slick-list': {
//             margin: '0 -8px',
//             overflow: 'visible'
//           },
//           '& .slick-dots': {
//             bottom: { xs: '-30px', sm: '-35px' },
//             '& li button:before': {
//               fontSize: { xs: '10px', sm: '12px' }
//             }
//           }
//         }}>
//           <Slider {...settings}>
//             {teachers.map((teacher) => (
//               <Box key={teacher.id} sx={{ height: '100%' }}>
//                 <TeacherCard>
//                   <CardMedia
//                     component="img"
//                     height={isXs ? '250' : '300'}
//                     image={teacher.image}
//                     alt={teacher.name}
//                     sx={{ 
//                       objectFit: 'cover',
//                       width: '100%'
//                     }}
//                   />
//                   <CardContent sx={{ 
//                     flexGrow: 1,
//                     px: { xs: 2, sm: 3 },
//                     py: { xs: 2, sm: 3 }
//                   }}>
//                     <Typography 
//                       gutterBottom 
//                       variant="h5" 
//                       component="h3" 
//                       sx={{ 
//                         fontWeight: 600,
//                         mb: 1.5,
//                         fontSize: { xs: '1.25rem', sm: '1.4rem' },
//                         color: theme.palette.text.primary
//                       }}
//                     >
//                       {teacher.name}
//                     </Typography>
                    
//                     <Typography 
//                       variant="body2" 
//                       sx={{ 
//                         mb: 2,
//                         fontStyle: 'italic',
//                         color: theme.palette.text.secondary,
//                         fontSize: { xs: '0.9rem', sm: '1rem' }
//                       }}
//                     >
//                       "{teacher.quote}"
//                     </Typography>
                    
//                     <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
//                       {teacher.specialties.map((specialty) => (
//                         <Chip 
//                           key={specialty} 
//                           label={specialty} 
//                           size="small"
//                           sx={{ 
//                             mb: 1,
//                             backgroundColor: theme.palette.primary.light,
//                             color: theme.palette.primary.contrastText,
//                             fontSize: { xs: '0.7rem', sm: '0.8rem' }
//                           }}
//                         />
//                       ))}
//                     </Stack>
                    
//                     <Box sx={{ 
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       mt: 'auto',
//                       pt: 1.5,
//                       borderTop: `1px solid ${theme.palette.divider}`
//                     }}>
//                       <div>
//                         <Typography 
//                           variant="caption" 
//                           sx={{ 
//                             display: 'block',
//                             fontWeight: 500,
//                             color: theme.palette.text.secondary
//                           }}
//                         >
//                           Experience
//                         </Typography>
//                         <Typography 
//                           variant="body2" 
//                           sx={{ 
//                             fontWeight: 600,
//                             color: theme.palette.text.primary
//                           }}
//                         >
//                           {teacher.experience}
//                         </Typography>
//                       </div>
                      
//                       <div>
//                         <Typography 
//                           variant="caption" 
//                           sx={{ 
//                             display: 'block',
//                             fontWeight: 500,
//                             color: theme.palette.text.secondary
//                           }}
//                         >
//                           Certification
//                         </Typography>
//                         <Typography 
//                           variant="body2" 
//                           sx={{ 
//                             fontWeight: 600,
//                             color: theme.palette.text.primary,
//                             textAlign: 'right'
//                           }}
//                         >
//                           {teacher.qualification}
//                         </Typography>
//                       </div>
//                     </Box>
//                   </CardContent>
//                 </TeacherCard>
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Teachers;    






























// import React from 'react';
// import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import { Stack } from 'react-bootstrap';

// const teachers = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     qualification: 'E-RYT 500, YACEP',
//     experience: '15 years',
//     specialties: ['Hatha', 'Vinyasa'],
//     image: '/img/t5.jpg',
//     quote: 'Yoga is the journey of the self, through the self, to the self.'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     qualification: 'RYT 500, Yoga Therapist',
//     experience: '12 years',
//     specialties: ['Iyengar', 'Restorative'],
//     image: '/img/t4.jpg',
//     quote: 'Inhale the future, exhale the past.'
//   },
//   {
//     id: 3,
//     name: 'Priya Patel',
//     qualification: 'E-RYT 200, Ayurveda Specialist',
//     experience: '8 years',
//     specialties: ['Kundalini', 'Prenatal'],
//     image: '/img/t6.jpg',
//     quote: 'The body benefits from movement, and the mind benefits from stillness.'
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     qualification: 'RYT 200, Fitness Coach',
//     experience: '6 years',
//     specialties: ['Power Yoga', 'Ashtanga'],
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Yoga is not about touching your toes, it\'s about what you learn on the way down.'
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialties: ['Yin', 'Meditation'],
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//     quote: 'Quiet the mind, and the soul will speak.'
//   },
// ];

// const Teachers = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     arrows: !isMobile,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ 
//       py: 8, 
//       px: { xs: 2, md: 6 }, 
//       backgroundColor: '#f9f9f9',
//       '& .slick-slide': {
//         padding: '0 10px'
//       },
//       '& .slick-list': {
//         margin: '0 -10px'
//       }
//     }}>
//       <Typography 
//         variant="h3" 
//         component="h2" 
//         sx={{ 
//           textAlign: 'center', 
//           mb: 6, 
//           fontWeight: 'bold',
//           color: 'primary.main'
//         }}
//       >
//         Meet Our Teachers
//       </Typography>
      
//       <Slider {...settings}>
//         {teachers.map((teacher) => (
//           <Box key={teacher.id}>
//             <Card sx={{ 
//               height: '100%', 
//               display: 'flex', 
//               flexDirection: 'column',
//               borderRadius: 3,
//               boxShadow: 3,
//               transition: 'transform 0.3s',
//               mx: 1,
//               '&:hover': {
//                 transform: 'translateY(-5px)'
//               }
//             }}>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={teacher.image}
//                 alt={teacher.name}
//                 sx={{ 
//                   objectFit: 'cover',
//                   borderTopLeftRadius: '12px',
//                   borderTopRightRadius: '12px'
//                 }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
//                   {teacher.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Qualification:</strong> {teacher.qualification}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                   <strong>Experience:</strong> {teacher.experience}
//                 </Typography>
//                  <Typography variant="body2" color="text.secondary">
//                   <strong>Specialty:</strong> {teacher.specialties.join(",")}
                 

//                 </Typography> 

// {/* <Typography variant="body2" color="text.secondary">
//   <strong>Specialty:</strong> {teacher.specialties.map((spec, index) => (
//     <span key={index}>
//       {spec}{index < teacher.specialties.length - 1 ? ', ' : ''}
//     </span>
//   ))}
// </Typography> */}

//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Teachers;






// import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, Chip, styled } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const teachers = [
//   {
//     id: 1,
//     name: 'Prof. Dibakar Addy',
//     qualification: 'ALT.MED(Cal), Y.H.(J.U)D.W.Y.S',
//     experience: '15 years',
//     specialties: ['Hatha', 'Vinyasa'],
//     image: '/img/t5.jpg',
//   },
//   {
//     id: 2,
//     name: 'Chandana Guha Roy',
//     qualification: 'Y.T.T.D.Y.I, C.P.T.D.Y.I',
//     experience: '12 years',
//     specialties: ['Iyengar', 'Restorative'],
//     image: '/img/t4.jpg',
//   },
//   {
//     id: 3,
//     name: 'Gour Naskar',
//     qualification: 'A.P.T,C.P.T,D.P.T,Y.T.C,M.M.D.Y.I,D.Y.N.S.U',
//     experience: '8 years',
//     specialties: ['Kundalini', 'Prenatal'],
//     image: '/img/t6.jpg',
//   },
//   {
//     id: 4,
//     name: 'Sipra Saha Patra',
//     qualification: 'Y.T.T.D.Y.I,C.P.T.D.Y.I,M.M.D.Y.I, Yoga Diploma',
//     experience: '6 years',
//     specialties: ['Power Yoga', 'Ashtanga'],
//     image: '/img/t10.jpg',
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialties: ['Yin', 'Meditation'],
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&fit=crop',
//   },
// ];

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: '16px',
//   boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
//   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//   overflow: 'hidden',
//   '&:hover': {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
//   },
// }));

// const TeacherImage = styled(CardMedia)(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   minHeight: '280px',
//   objectFit: 'cover',
//   objectPosition: 'center top',
//   transition: 'transform 0.5s ease',
//   [theme.breakpoints.up('sm')]: {
//     minHeight: '320px',
//   },
//   [theme.breakpoints.up('md')]: {
//     minHeight: '350px',
//   },
//   '&:hover': {
//     transform: 'scale(1.1)',
//   },
// }));

// const SpecialtyChip = styled(Chip)(({ theme }) => ({
//   margin: '4px',
//   backgroundColor: '#f0e6ff',
//   color: theme.palette.primary.dark,
//   fontWeight: 500,
//   fontSize: '0.75rem',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.65rem',
//     margin: '2px',
//   },
// }));

// const Teachers = () => {
//   const isXs = useMediaQuery('(max-width:599px)');
//   const isSm = useMediaQuery('(min-width:600px) and (max-width:899px)');
//   const isMd = useMediaQuery('(min-width:900px) and (max-width:1199px)');
//   const isLg = useMediaQuery('(min-width:1200px)');

//   const getSlidesToShow = () => {
//     if (isXs) return 1;
//     if (isSm) return 2;
//     if (isMd) return 3;
//     return 4;
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: getSlidesToShow(),
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     arrows: !isXs,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ 
//       py: { xs: 6, sm: 8, md: 10 },
//       px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
//       background: 'linear-gradient(to bottom, #ffffff, #f9f5ff)',
//       position: 'relative',
//       overflow: 'hidden',
//       '&:before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundImage: 'radial-gradient(#e0d6ff 1px, transparent 1px)',
//         backgroundSize: '20px 20px',
//         opacity: 0.3,
//         zIndex: 0,
//       },
//       '& .slick-slide': {
//         padding: { xs: '0 8px', sm: '0 12px' },
//         height: 'auto'
//       },
//       '& .slick-list': {
//         margin: { xs: '0 -8px', sm: '0 -12px' },
//         padding: '20px 0',
//       },
//       '& .slick-track': {
//         display: 'flex',
//         alignItems: 'stretch'
//       },
//       '& .slick-dots': {
//         bottom: '0px',
//         '& li button:before': {
//           fontSize: '10px',
//           color: '#b388ff',
//         },
//         '& li.slick-active button:before': {
//           color: '#7c4dff',
//         }
//       },
//     }}>
//       <Box position="relative" zIndex={1}>
//         <Typography 
//           variant="h3" 
//           component="h2" 
//           sx={{ 
//             textAlign: 'center', 
//             mb: { xs: 4, sm: 6 },
//             fontWeight: 800,
//             color: 'primary.main',
//             fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
//             textTransform: 'capitalize',
//             letterSpacing: '0.5px',
//             position: 'relative',
//             display: 'inline-block',
//             mx: 'auto',
//             '&:after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '-10px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80px',
//               height: '4px',
//               background: 'linear-gradient(to right, #7c4dff, #b388ff)',
//               borderRadius: '2px',
//             }
//           }}
//         >
//           Our Expert Teachers
//         </Typography>
        
//         <Slider {...settings}>
//           {teachers.map((teacher) => (
//             <Box key={teacher.id} sx={{ height: '100%', padding: { xs: '4px', sm: '8px' } }}>
//               <StyledCard>
//                 <Box sx={{ 
//                   width: '100%', 
//                   height: { xs: '280px', sm: '320px', md: '350px' },
//                   overflow: 'hidden',
//                   position: 'relative',
//                   '&:after': {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '40%',
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
//                   }
//                 }}>
//                   <TeacherImage
//                     component="img"
//                     image={teacher.image}
//                     alt={teacher.name}
//                     loading="lazy"
//                   />
//                   <Box sx={{
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     width: '100%',
//                     p: { xs: 1.5, sm: 2 },
//                     zIndex: 1,
//                   }}>
//                     <Typography variant="h5" component="h3" sx={{ 
//                       fontWeight: 700, 
//                       color: 'white',
//                       textShadow: '0 2px 4px rgba(0,0,0,0.5)',
//                       mb: 0.5,
//                       fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
//                     }}>
//                       {teacher.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ 
//                       color: 'rgba(255,255,255,0.9)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.5)',
//                       fontSize: { xs: '0.7rem', sm: '0.8rem' }
//                     }}>
//                       {teacher.experience} of experience
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <CardContent sx={{ 
//                   flexGrow: 1,
//                   backgroundColor: 'white',
//                   p: { xs: 2, sm: 3 },
//                 }}>
//                   <Box sx={{ mb: { xs: 1, sm: 2 } }}>
//                     <Typography variant="body2" color="text.secondary" sx={{ 
//                       mb: 1,
//                       display: 'flex',
//                       flexDirection: { xs: 'column', sm: 'row' },
//                       alignItems: { sm: 'flex-start' },
//                       fontSize: { xs: '0.8rem', sm: '0.875rem' },
//                       '& strong': {
//                         minWidth: { xs: 'auto', sm: '90px' },
//                         display: 'inline-block',
//                         color: 'text.primary',
//                         fontWeight: 600,
//                         mb: { xs: 0.5, sm: 0 }
//                       }
//                     }}>
//                       <strong>Qualification:</strong> {teacher.qualification}
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ mt: 'auto' }}>
//                     <Typography variant="subtitle2" sx={{ 
//                       fontWeight: 600,
//                       mb: 1,
//                       color: 'text.primary',
//                       fontSize: { xs: '0.8rem', sm: '0.875rem' }
//                     }}>
//                       Specializes in:
//                     </Typography>
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                       {teacher.specialties.map((specialty, index) => (
//                         <SpecialtyChip 
//                           key={index} 
//                           label={specialty} 
//                           size="small"
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </StyledCard>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Box>
//   );
// };

// export default Teachers;







































import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teachers = [
  {
    id: 1,
    name: 'Prof. Dibakar Addy',
    qualification: 'ALT.MED(Cal), Y.H.(J.U)D.W.Y.S',
    experience: '15 years',
    specialties: ['Hatha', 'Vinyasa'],
    image: '/img/t5.jpg',
    
  },
  {
    id: 2,
    name: 'Chandana Guha Roy',
    qualification: 'Y.T.T.D.Y.I, C.P.T.D.Y.I',
    experience: '12 years',
    specialties: ['Iyengar', 'Restorative'],
    image: '/img/t4.jpg',
  },
  {
    id: 3,
    name: 'Gour Naskar',
    qualification: 'A.P.T,C.P.T,D.P.T,Y.T.C,M.M.D.Y.I,D.Y.N.S.U',
    experience: '8 years',
    specialties: ['Kundalini', 'Prenatal'],
    image: '/img/t6.jpg',
    
  },
  {
    id: 4,
    name: 'Sipra Saha Patra',
    qualification: 'Y.T.T.D.Y.I,C.P.T.D.Y.I,M.M.D.Y.I, Yoga Diploma',
    experience: '6 years',
    specialties: ['Power Yoga', 'Ashtanga'],
    image: '/img/t10.jpg',
    
  },
  {
    id: 5,
    name: 'Priyam Das',
    qualification: 'M.A,D.Y.E,Y.T.T.D.Y.I,M.M.D.Y.I',
    experience: '8 years',
    specialties: ['Yin', 'Meditation'],
    image: '/img/t12.jpg',
  
  },
];

const Teachers = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: !isMobile,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <Box sx={{ 
      py: 8, 
      px: { xs: 2, md: 6 }, 
      backgroundColor: '#f9f9f9',
      '& .slick-slide': {
        padding: '0 10px',
        height: 'auto'
      },
      '& .slick-list': {
        margin: '0 -10px'
      },
      '& .slick-track': {
        display: 'flex',
        alignItems: 'stretch'
      }
    }}>
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 6, 
          fontWeight: 'bold',
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Meet Our Teachers
      </Typography>
      
      <Slider {...settings}>
        {teachers.map((teacher) => (
          <Box key={teacher.id} sx={{ height: '100%' }}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <Box sx={{ 
                width: '100%', 
                height: 400,
                overflow: 'hidden',
                position: 'relative'
              }}>
                <CardMedia
                  component="img"
                  image={teacher.image}
                  alt={teacher.name}
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    // transition: 'transform 0.3s',
                    // '&:hover': {
                    //   transform: 'scale(1.05)'
                    // }
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold',color:'#7F00FF' }}>
                  {teacher.name}
                </Typography>
                <Typography   variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  <strong><b>Qualification:</b></strong> {teacher.qualification}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  <strong><b>Experience:</b></strong> {teacher.experience}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <strong><b>Specialty:</b></strong> {teacher.specialties.join(", ")}
                </Typography>
               
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Teachers;   










































// import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, Chip, styled } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const teachers = [
//   {
//     id: 1,
//     name: 'Prof. Dibakar Addy',
//     qualification: 'ALT.MED(Cal), Y.H.(J.U)D.W.Y.S',
//     experience: '15 years',
//     specialties: ['Hatha', 'Vinyasa'],
//     image: '/img/t5.jpg',
//   },
//   {
//     id: 2,
//     name: 'Chandana Guha Roy',
//     qualification: 'Y.T.T.D.Y.I, C.P.T.D.Y.I',
//     experience: '12 years',
//     specialties: ['Iyengar', 'Restorative'],
//     image: '/img/t4.jpg',
//   },
//   {
//     id: 3,
//     name: 'Gour Naskar',
//     qualification: 'A.P.T,C.P.T,D.P.T,Y.T.C,M.M.D.Y.I,D.Y.N.S.U',
//     experience: '8 years',
//     specialties: ['Kundalini', 'Prenatal'],
//     image: '/img/t6.jpg',
//   },
//   {
//     id: 4,
//     name: 'Sipra Saha Patra',
//     qualification: 'Y.T.T.D.Y.I,C.P.T.D.Y.I,M.M.D.Y.I, Yoga Diploma',
//     experience: '6 years',
//     specialties: ['Power Yoga', 'Ashtanga'],
//     image: '/img/t10.jpg',
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialties: ['Yin', 'Meditation'],
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&fit=crop',
//   },
// ];

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: '16px',
//   boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
//   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//   overflow: 'hidden',
//   '&:hover': {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
//   },
// }));

// const TeacherImage = styled(CardMedia)(({ theme }) => ({
//   width: '100%',
//   height: '320px',
//   objectFit: 'cover',
//   objectPosition: 'center top',
//   transition: 'transform 0.5s ease',
//   '&:hover': {
//     transform: 'scale(1.1)',
//   },
// }));

// const SpecialtyChip = styled(Chip)(({ theme }) => ({
//   margin: '4px',
//   backgroundColor: '#f0e6ff',
//   color: theme.palette.primary.dark,
//   fontWeight: 500,
//   fontSize: '0.75rem',
// }));

// const Teachers = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     arrows: !isMobile,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ 
//       py: 10, 
//       px: { xs: 3, sm: 4, md: 8, lg: 12 }, 
//       background: 'linear-gradient(to bottom, #ffffff, #f9f5ff)',
//       position: 'relative',
//       overflow: 'hidden',
//       '&:before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundImage: 'radial-gradient(#e0d6ff 1px, transparent 1px)',
//         backgroundSize: '20px 20px',
//         opacity: 0.3,
//         zIndex: 0,
//       },
//       '& .slick-slide': {
//         padding: '0 12px',
//         height: 'auto'
//       },
//       '& .slick-list': {
//         margin: '0 -12px',
//         padding: '20px 0',
//       },
//       '& .slick-track': {
//         display: 'flex',
//         alignItems: 'stretch'
//       },
//       '& .slick-dots': {
//         bottom: '0px',
//         '& li button:before': {
//           fontSize: '10px',
//           color: '#b388ff',
//         },
//         '& li.slick-active button:before': {
//           color: '#7c4dff',
//         }
//       },
//     }}>
//       <Box position="relative" zIndex={1}>
//         <Typography 
//           variant="h3" 
//           component="h2" 
//           sx={{ 
//             textAlign: 'center', 
//             mb: 6, 
//             fontWeight: 800,
//             color: 'primary.main',
//             fontSize: { xs: '2.2rem', md: '3rem' },
//             textTransform: 'capitalize',
//             letterSpacing: '0.5px',
//             position: 'relative',
//             display: 'inline-block',
//             mx: 'auto',
//             '&:after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '-10px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80px',
//               height: '4px',
//               background: 'linear-gradient(to right, #7c4dff, #b388ff)',
//               borderRadius: '2px',
//             }
//           }}
//         >
//           Our Expert Teachers
//         </Typography>
        
//         <Slider {...settings}>
//           {teachers.map((teacher) => (
//             <Box key={teacher.id} sx={{ height: '100%', padding: '8px' }}>
//               <StyledCard>
//                 <Box sx={{ 
//                   width: '100%', 
//                   height: '320px',
//                   overflow: 'hidden',
//                   position: 'relative',
//                   '&:after': {
//                     content: '""',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '40%',
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
//                   }
//                 }}>
//                   <TeacherImage
//                     component="img"
//                     image={teacher.image}
//                     alt={teacher.name}
//                   />
//                   <Box sx={{
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     width: '100%',
//                     p: 2,
//                     zIndex: 1,
//                   }}>
//                     <Typography variant="h5" component="h3" sx={{ 
//                       fontWeight: 700, 
//                       color: 'white',
//                       textShadow: '0 2px 4px rgba(0,0,0,0.5)',
//                       mb: 0.5
//                     }}>
//                       {teacher.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ 
//                       color: 'rgba(255,255,255,0.9)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.5)',
//                       fontSize: '0.8rem'
//                     }}>
//                       {teacher.experience} of experience
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <CardContent sx={{ 
//                   flexGrow: 1,
//                   backgroundColor: 'white',
//                   p: 3,
//                 }}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" color="text.secondary" sx={{ 
//                       mb: 1,
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       '& strong': {
//                         minWidth: '90px',
//                         display: 'inline-block',
//                         color: 'text.primary',
//                         fontWeight: 600,
//                       }
//                     }}>
//                       <strong>Qualification:</strong> {teacher.qualification}
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ mt: 'auto' }}>
//                     <Typography variant="subtitle2" sx={{ 
//                       fontWeight: 600,
//                       mb: 1,
//                       color: 'text.primary'
//                     }}>
//                       Specializes in:
//                     </Typography>
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                       {teacher.specialties.map((specialty, index) => (
//                         <SpecialtyChip 
//                           key={index} 
//                           label={specialty} 
//                           size="small"
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </StyledCard>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Box>
//   );
// };

// export default Teachers;















// import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, Chip, Avatar } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { motion } from 'framer-motion';
// import { styled } from '@mui/material/styles';

// const teachers = [
//   {
//     id: 1,
//     name: 'Prof. Dibakar Addy',
//     qualification: 'ALT.MED(Cal), Y.H.(J.U)D.W.Y.S',
//     experience: '15 years',
//     specialties: ['Hatha', 'Vinyasa'],
//     image: '/img/t5.jpg',
//     quote: 'Yoga is the journey of the self, through the self, to the self.'
//   },
//   {
//     id: 2,
//     name: 'Chandana Guha Roy',
//     qualification: 'Y.T.T.D.Y.I, C.P.T.D.Y.I',
//     experience: '12 years',
//     specialties: ['Iyengar', 'Restorative'],
//     image: '/img/t4.jpg',
//     quote: 'Inhale the future, exhale the past.'
//   },
//   {
//     id: 3,
//     name: 'Gour Naskar',
//     qualification: 'A.P.T,C.P.T,D.P.T,Y.T.C,M.M.D.Y.I,D.Y.N.S.U',
//     experience: '8 years',
//     specialties: ['Kundalini', 'Prenatal'],
//     image: '/img/t6.jpg',
//     quote: 'The body benefits from movement, and the mind benefits from stillness.'
//   },
//   {
//     id: 4,
//     name: 'Sipra Saha Patra',
//     qualification: 'Y.T.T.D.Y.I,C.P.T.D.Y.I,M.M.D.Y.I, Yoga Diploma',
//     experience: '6 years',
//     specialties: ['Power Yoga', 'Ashtanga'],
//     image: '/img/t10.jpg',
//     quote: 'Yoga is not about touching your toes, it\'s about what you learn on the way down.'
//   },
//   {
//     id: 5,
//     name: 'Emma Rodriguez',
//     qualification: 'E-RYT 500, Meditation Guide',
//     experience: '10 years',
//     specialties: ['Yin', 'Meditation'],
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&fit=crop',
//     quote: 'Quiet the mind, and the soul will speak.'
//   },
// ];

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: '16px',
//   boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
//   transition: 'all 0.3s ease',
//   overflow: 'hidden',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.15)',
//     '& .MuiCardMedia-root': {
//       transform: 'scale(1.05)'
//     }
//   }
// }));

// const QuoteOverlay = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
//   padding: theme.spacing(3),
//   color: 'white',
//   opacity: 0,
//   transition: 'opacity 0.3s ease',
//   '&:hover': {
//     opacity: 1
//   }
// }));

// const Teachers = () => {
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const isTablet = useMediaQuery('(max-width:900px)');

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     arrows: !isMobile,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: true
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         },
//       },
//     ],
//   };

//   return (
//     <Box 
//       component="section"
//       sx={{ 
//         py: 10, 
//         px: { xs: 2, sm: 4, md: 6, lg: 8 },
//         backgroundColor: '#f9f9f9',
//         backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
//         position: 'relative',
//         overflow: 'hidden',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'url(/img/yoga-pattern.png) repeat',
//           opacity: 0.03,
//           zIndex: 0
//         },
//         '& .slick-slide': {
//           padding: '0 15px',
//           height: 'auto'
//         },
//         '& .slick-list': {
//           margin: '0 -15px',
//           overflow: 'visible'
//         },
//         '& .slick-track': {
//           display: 'flex',
//           alignItems: 'stretch',
//           padding: '20px 0'
//         },
//         '& .slick-dots': {
//           bottom: '-40px',
//           '& li button:before': {
//             fontSize: '12px',
//             color: 'primary.main'
//           },
//           '& li.slick-active button:before': {
//             color: 'primary.main'
//           }
//         }
//       }}
//     >
//       <Box sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Typography 
//             variant="h3" 
//             component="h2" 
//             sx={{ 
//               textAlign: 'center', 
//               mb: 2,
//               fontWeight: 'bold',
//               color: 'primary.main',
//               fontSize: { xs: '2rem', md: '2.8rem' },
//               textTransform: 'uppercase',
//               letterSpacing: '1px'
//             }}
//           >
//             Meet Our Expert Teachers
//           </Typography>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <Typography 
//             variant="body1" 
//             sx={{ 
//               textAlign: 'center', 
//               mb: 6,
//               maxWidth: '700px',
//               mx: 'auto',
//               color: 'text.secondary',
//               fontSize: { xs: '1rem', md: '1.1rem' }
//             }}
//           >
//             Our certified yoga instructors bring years of experience and passion to every class, 
//             guiding you on your journey to wellness and mindfulness.
//           </Typography>
//         </motion.div>

//         <Slider {...settings}>
//           {teachers.map((teacher) => (
//             <Box key={teacher.id} sx={{ height: '100%', padding: '10px 0' }}>
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 style={{ height: '100%' }}
//               >
//                 <StyledCard>
//                   <Box sx={{ 
//                     width: '100%', 
//                     height: { xs: 300, sm: 350, md: 400 },
//                     overflow: 'hidden',
//                     position: 'relative'
//                   }}>
//                     <CardMedia
//                       component="img"
//                       image={teacher.image}
//                       alt={teacher.name}
//                       sx={{ 
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         objectPosition: 'center top',
//                         transition: 'transform 0.5s ease'
//                       }}
//                     />
//                     <QuoteOverlay>
//                       <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
//                         "{teacher.quote}"
//                       </Typography>
//                     </QuoteOverlay>
//                   </Box>
//                   <CardContent sx={{ 
//                     flexGrow: 1,
//                     background: 'white',
//                     padding: { xs: '16px', sm: '20px' }
//                   }}>
//                     <Typography 
//                       gutterBottom 
//                       variant="h5" 
//                       component="h3" 
//                       sx={{ 
//                         fontWeight: 'bold',
//                         color: 'primary.dark',
//                         mb: 2
//                       }}
//                     >
//                       {teacher.name}
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Avatar sx={{ 
//                         width: 24, 
//                         height: 24, 
//                         mr: 1,
//                         bgcolor: 'secondary.main',
//                         fontSize: '0.75rem'
//                       }}>
//                         <i className="fas fa-graduation-cap" style={{ fontSize: '0.7rem' }} />
//                       </Avatar>
//                       <Typography variant="body2" color="text.secondary">
//                         {teacher.qualification}
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Avatar sx={{ 
//                         width: 24, 
//                         height: 24, 
//                         mr: 1,
//                         bgcolor: 'secondary.main',
//                         fontSize: '0.75rem'
//                       }}>
//                         <i className="fas fa-clock" style={{ fontSize: '0.7rem' }} />
//                       </Avatar>
//                       <Typography variant="body2" color="text.secondary">
//                         {teacher.experience} experience
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ mt: 3 }}>
//                       <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
//                         Specializes in:
//                       </Typography>
//                       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                         {teacher.specialties.map((specialty, index) => (
//                           <Chip 
//                             key={index}
//                             label={specialty}
//                             size="small"
//                             sx={{ 
//                               backgroundColor: 'secondary.light',
//                               color: 'secondary.contrastText',
//                               fontWeight: 'medium'
//                             }}
//                           />
//                         ))}
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </StyledCard>
//               </motion.div>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Box>
//   );
// };

// export default Teachers;
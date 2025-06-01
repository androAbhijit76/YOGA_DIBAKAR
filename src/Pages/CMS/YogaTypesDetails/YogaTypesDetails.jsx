// // // src/Pages/CMS/YogaTypesDetails/YogaTypesDetails.jsx
// // // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   Paper,
// //   Button,
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // import { yogaArray } from '../../../Data';

// // const YogaTypesDetails = () => {
// //   const { id } = useParams();
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
// //   // Find the yoga type with the matching ID
// //   const yoga = yogaArray.find(item => item.id.toString() === id);

// //   if (!yoga) {
// //     return (
// //       <Box sx={{ py: 8, textAlign: 'center' }}>
// //         <Typography variant="h4">Yoga type not found</Typography>
// //         <Button component={Link} to="/course" variant="contained" sx={{ mt: 3 }}>
// //           Back to Courses
// //         </Button>
// //       </Box>
// //     );
// //   }

// //   return (
// //     <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
// //       <Container maxWidth="lg">
// //         <Button
// //           component={Link}
// //           to="/course"
// //           variant="outlined"
// //           sx={{ mb: 4 }}
// //         >
// //           ← Back to All Yoga Types
// //         </Button>

// //         <Grid container spacing={4}>
// //           <Grid item xs={12} md={6}>
// //             <Card>
// //               <CardMedia
// //                 component="img"
// //                 image={yoga.image}
// //                 alt={yoga.title}
// //                 sx={{
// //                   height: { xs: 300, sm: 400, md: 500 },
// //                   width: '100%',
// //                   objectFit: 'cover'
// //                 }}
// //               />
// //             </Card>
// //           </Grid>
          
// //           <Grid item xs={12} md={6}>
// //             <Paper elevation={0} sx={{ p: 3, height: '100%' }}>
// //               <Typography 
// //                 variant="h3" 
// //                 gutterBottom 
// //                 sx={{ 
// //                   fontWeight: 700,
// //                   color: theme.palette.primary.main,
// //                   fontSize: isMobile ? '1.8rem' : '2.2rem'
// //                 }}
// //               >
// //                 {yoga.title}
// //               </Typography>
              
// //               <Typography 
// //                 variant="body1" 
// //                 paragraph 
// //                 sx={{ 
// //                   fontSize: '1.1rem',
// //                   lineHeight: 1.8,
// //                   mb: 3
// //                 }}
// //               >
// //                 {yoga.description}
// //               </Typography>
              
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography 
// //                   variant="h5" 
// //                   sx={{ 
// //                     fontWeight: 600,
// //                     mb: 2,
// //                     color: theme.palette.secondary.main
// //                   }}
// //                 >
// //                   Key Benefits:
// //                 </Typography>
// //                 <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
// //                   {yoga.benefits}
// //                 </Typography>
// //               </Box>
              
// //               <Button 
// //                 variant="contained" 
// //                 size="large"
// //                 sx={{
// //                   px: 4,
// //                   py: 1.5,
// //                   fontWeight: 600,
// //                   fontSize: '1.1rem'
// //                 }}
// //               >
// //                 Join This Class
// //               </Button>
// //             </Paper>
// //           </Grid>
// //         </Grid>
        
// //         {/* Additional Information Section */}
// //         <Box sx={{ mt: 6 }}>
// //           <Typography 
// //             variant="h4" 
// //             sx={{ 
// //               fontWeight: 600,
// //               mb: 3,
// //               color: theme.palette.primary.main
// //             }}
// //           >
// //             About {yoga.title}
// //           </Typography>
          
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} md={6}>
// //               <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
// //                 {yoga.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
// //                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
// //                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
// //               </Typography>
// //             </Grid>
// //             <Grid item xs={12} md={6}>
// //               <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
// //                 This style of yoga is particularly good for improving flexibility and strength. 
// //                 Many practitioners find it helps with stress relief and mental clarity. 
// //                 Regular practice can lead to significant improvements in overall well-being.
// //               </Typography>
// //             </Grid>
// //           </Grid>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default YogaTypesDetails;   












































// // // src/Pages/CMS/YogaTypesDetails/YogaTypesDetails.jsx
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   Paper,
// //   Button,
// //   Chip,
// //   Stack,
// //   Divider,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // import { yogaArray } from '../../../Data';

// // const YogaTypesDetails = () => {
// //   const { id } = useParams();
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
// //   // Find the yoga type with the matching ID
// //   const yoga = yogaArray.find(item => item.id.toString() === id);

// //   if (!yoga) {
// //     return (
// //       <Box sx={{ py: 8, textAlign: 'center' }}>
// //         <Typography variant="h4">Yoga type not found</Typography>
// //         <Button component={Link} to="/course" variant="contained" sx={{ mt: 3 }}>
// //           Back to Courses
// //         </Button>
// //       </Box>
// //     );
// //   }

// //   return (
// //     <Box sx={{ 
// //       py: { xs: 4, sm: 6, md: 8 }, 
// //       backgroundColor: '#f8f9fa',
// //       minHeight: '100vh'
// //     }}>
// //       <Container maxWidth="lg">
// //         <Button
// //           component={Link}
// //           to="/course"
// //           variant="outlined"
// //           sx={{ mb: 4 }}
// //           startIcon={
// //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <line x1="19" y1="12" x2="5" y2="12"></line>
// //               <polyline points="12 19 5 12 12 5"></polyline>
// //             </svg>
// //           }
// //         >
// //           Back to All Yoga Types
// //         </Button>

// //         <Grid container spacing={4}>
// //           <Grid item xs={12} md={6} lg={5}>
// //             <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
// //               <CardMedia
// //                 component="img"
// //                 image={yoga.image}
// //                 alt={yoga.title}
// //                 sx={{
// //                   height: { xs: 300, sm: 400, md: 500 },
// //                   width: '100%',
// //                   objectFit: 'cover'
// //                 }}
// //               />
// //             </Card>
// //           </Grid>
          
// //           <Grid item xs={12} md={6} lg={7}>
// //             <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
// //               <Typography 
// //                 variant="h3" 
// //                 gutterBottom 
// //                 sx={{ 
// //                   fontWeight: 700,
// //                   color: theme.palette.primary.main,
// //                   fontSize: isMobile ? '1.8rem' : '2.2rem',
// //                   mb: 2
// //                 }}
// //               >
// //                 {yoga.title}
// //               </Typography>
              
// //               <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
// //                 <Chip 
// //                   label={yoga.difficulty} 
// //                   color="primary" 
// //                   variant="outlined"
// //                   size="small"
// //                 />
// //                 <Chip 
// //                   label={yoga.duration} 
// //                   color="secondary" 
// //                   variant="outlined"
// //                   size="small"
// //                 />
// //               </Stack>
              
// //               <Typography 
// //                 variant="body1" 
// //                 paragraph 
// //                 sx={{ 
// //                   fontSize: '1.1rem',
// //                   lineHeight: 1.8,
// //                   mb: 3
// //                 }}
// //               >
// //                 {yoga.description}
// //               </Typography>
              
// //               <Divider sx={{ my: 3 }} />
              
// //               <Grid container spacing={2} sx={{ mb: 4 }}>
// //                 <Grid item xs={12} sm={6}>
// //                   <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
// //                     Best Time to Practice:
// //                   </Typography>
// //                   <Typography variant="body1">
// //                     {yoga.bestTime}
// //                   </Typography>
// //                 </Grid>
// //                 <Grid item xs={12} sm={6}>
// //                   <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
// //                     Recommended Props:
// //                   </Typography>
// //                   <Typography variant="body1">
// //                     {yoga.props}
// //                   </Typography>
// //                 </Grid>
// //               </Grid>
              
// //               <Button 
// //                 variant="contained" 
// //                 size="large"
// //                 sx={{
// //                   px: 4,
// //                   py: 1.5,
// //                   fontWeight: 600,
// //                   fontSize: '1.1rem',
// //                   mb: 3
// //                 }}
// //                 fullWidth={isMobile}
// //               >
// //                 Join {yoga.title} Class
// //               </Button>
// //             </Paper>
// //           </Grid>
// //         </Grid>
        
// //         {/* Benefits Section */}
// //         <Box sx={{ mt: 6, mb: 4 }}>
// //           <Typography 
// //             variant="h4" 
// //             sx={{ 
// //               fontWeight: 600,
// //               mb: 3,
// //               color: theme.palette.primary.main
// //             }}
// //           >
// //             Key Benefits
// //           </Typography>
          
// //           <List sx={{ 
// //             backgroundColor: theme.palette.background.paper,
// //             borderRadius: 2,
// //             p: 0
// //           }}>
// //             {yoga.benefits.split(';').map((benefit, index) => (
// //               <ListItem key={index} divider={index !== yoga.benefits.split(';').length - 1}>
// //                 <ListItemText 
// //                   primary={benefit.trim()} 
// //                   primaryTypographyProps={{ variant: 'body1' }}
// //                 />
// //               </ListItem>
// //             ))}
// //           </List>
// //         </Box>
        
// //         {/* Tips Section */}
// //         <Box sx={{ mt: 4, mb: 6 }}>
// //           <Typography 
// //             variant="h4" 
// //             sx={{ 
// //               fontWeight: 600,
// //               mb: 3,
// //               color: theme.palette.primary.main
// //             }}
// //           >
// //             Practice Tips
// //           </Typography>
          
// //           <Paper elevation={0} sx={{ 
// //             p: 3,
// //             backgroundColor: theme.palette.secondary.light,
// //             borderRadius: 2
// //           }}>
// //             <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
// //               "{yoga.tips}"
// //             </Typography>
// //           </Paper>
// //         </Box>
        
// //         {/* Additional Information */}
// //         <Box sx={{ mt: 4 }}>
// //           <Typography 
// //             variant="h4" 
// //             sx={{ 
// //               fontWeight: 600,
// //               mb: 3,
// //               color: theme.palette.primary.main
// //             }}
// //           >
// //             About {yoga.title}
// //           </Typography>
          
// //           <Grid container spacing={3}>
// //             <Grid item xs={12} md={6}>
// //               <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
// //                 {yoga.description} This practice has roots in ancient traditions but has been adapted for modern practitioners. The systematic approach helps develop both physical and mental discipline, making it more than just exercise.
// //               </Typography>
// //             </Grid>
// //             <Grid item xs={12} md={6}>
// //               <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
// //                 Regular practice can lead to improved focus, better sleep, and increased energy levels. Many practitioners find it helps create a sense of inner peace and balance in their daily lives.
// //               </Typography>
// //             </Grid>
// //           </Grid>
// //         </Box>
        
// //         {/* Call to Action */}
// //         <Box sx={{ 
// //           mt: 6,
// //           textAlign: 'center',
// //           p: 4,
// //           backgroundColor: theme.palette.primary.light,
// //           borderRadius: 2
// //         }}>
// //           <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
// //             Ready to try {yoga.title}?
// //           </Typography>
// //           <Button 
// //             variant="contained" 
// //             size="large"
// //             sx={{
// //               px: 6,
// //               py: 1.5,
// //               fontWeight: 600,
// //               fontSize: '1.1rem'
// //             }}
// //           >
// //             Book Your First Class
// //           </Button>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default YogaTypesDetails; 








































































// // src/Pages/CMS/YogaTypesDetails/YogaTypesDetails.jsx
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   Button,
// //   Chip,
// //   Stack,
// //   Divider,
// //   List,
// //   ListItem,
// //   ListItemIcon,
  
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // import { yogaArray } from '../../../Data';
// // import {
// //   Schedule,
// //   FitnessCenter,
// //   AccessTime,
// //   Lightbulb,
// //   Spa,
  
// // } from '@mui/icons-material';

// // const YogaTypesDetails = () => {
// //   const { id } = useParams();
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
// //   const yoga = yogaArray.find(item => item.id.toString() === id);

// //   if (!yoga) {
// //     return (
// //       <Box sx={{ py: 8, textAlign: 'center' }}>
// //         <Typography variant="h4">Yoga type not found</Typography>
// //         <Button component={Link} to="/course" variant="contained" sx={{ mt: 3 }}>
// //           Back to Courses
// //         </Button>
// //       </Box>
// //     );
// //   }

// //   return (
// //     <Box sx={{ 
// //       py: { xs: 4, sm: 6, md: 8 },
// //       backgroundColor: theme.palette.background.default,
// //       minHeight: '100vh'
// //     }}>
// //       <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
// //         {/* Back Button */}
// //         <Button
// //           component={Link}
// //           to="/course"
// //           variant="text"
// //           sx={{ 
// //             mb: 4,
// //             color: theme.palette.text.secondary,
// //             '&:hover': {
// //               color: theme.palette.primary.main,
// //               backgroundColor: 'transparent'
// //             }
// //           }}
// //           startIcon={
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <line x1="19" y1="12" x2="5" y2="12"></line>
// //               <polyline points="12 19 5 12 12 5"></polyline>
// //             </svg>
// //           }
// //         >
// //           All Yoga Styles
// //         </Button>

// //         {/* Main Content Grid */}
// //         <Grid container spacing={4}>
// //           {/* Left Column - Image and Quick Facts */}
// //           <Grid item xs={12} md={5} lg={4}>
// //             <Card sx={{ 
// //               borderRadius: 3,
// //               overflow: 'hidden',
// //               boxShadow: theme.shadows[4],
// //               mb: 4
// //             }}>
// //               <CardMedia
// //                 component="img"
// //                 image={yoga.image}
// //                 alt={yoga.title}
// //                 sx={{
// //                   height: { xs: 320, sm: 380, md: 420 },
// //                   width: '100%',
// //                   objectFit: 'cover'
// //                 }}
// //               />
// //             </Card>

// //             {/* Quick Facts Panel */}
// //             <Box sx={{
// //               backgroundColor: theme.palette.background.paper,
// //               borderRadius: 3,
// //               p: 3,
// //               boxShadow: theme.shadows[2]
// //             }}>
// //               <Typography variant="h6" sx={{ 
// //                 mb: 2,
// //                 fontWeight: 600,
// //                 color: theme.palette.text.primary,
// //                 display: 'flex',
// //                 alignItems: 'center'
// //               }}>
// //                 <Schedule sx={{ mr: 1, color: theme.palette.primary.main }} />
// //                 Quick Facts
// //               </Typography>

// //               <Divider sx={{ mb: 2 }} />

// //               <List dense sx={{ py: 0 }}>
// //                 <ListItem sx={{ px: 0 }}>
// //                   <ListItemIcon sx={{ minWidth: 32 }}>
// //                     <FitnessCenter fontSize="small" color="primary" />
// //                   </ListItemIcon>
// //                   <Typography variant="body2">
// //                     <strong>Level:</strong> {yoga.difficulty}
// //                   </Typography>
// //                 </ListItem>

// //                 <ListItem sx={{ px: 0 }}>
// //                   <ListItemIcon sx={{ minWidth: 32 }}>
// //                     <AccessTime fontSize="small" color="primary" />
// //                   </ListItemIcon>
// //                   <Typography variant="body2">
// //                     <strong>Duration:</strong> {yoga.duration}
// //                   </Typography>
// //                 </ListItem>

// //                 <ListItem sx={{ px: 0 }}>
// //                   <ListItemIcon sx={{ minWidth: 32 }}>
// //                     <Spa fontSize="small" color="primary" />
// //                   </ListItemIcon>
// //                   <Typography variant="body2">
// //                     <strong>Best Time:</strong> {yoga.bestTime}
// //                   </Typography>
// //                 </ListItem>
// //               </List>

// //               <Button
// //                 variant="contained"
// //                 fullWidth
// //                 size="large"
// //                 sx={{
// //                   mt: 3,
// //                   py: 1.5,
// //                   borderRadius: 2,
// //                   fontWeight: 600,
// //                   fontSize: '1rem',
// //                   textTransform: 'none',
// //                   boxShadow: 'none',
// //                   '&:hover': {
// //                     boxShadow: theme.shadows[4]
// //                   }
// //                 }}
// //               >
// //                 Book a Class
// //               </Button>
// //             </Box>
// //           </Grid>

// //           {/* Right Column - Main Content */}
// //           <Grid item xs={12} md={7} lg={8}>
// //             <Box sx={{ 
// //               backgroundColor: theme.palette.background.paper,
// //               borderRadius: 3,
// //               p: { xs: 3, sm: 4 },
// //               boxShadow: theme.shadows[2],
// //               mb: 4
// //             }}>
// //               {/* Title and Tags */}
// //               <Typography variant="h2" sx={{ 
// //                 fontWeight: 700,
// //                 mb: 2,
// //                 color: theme.palette.text.primary,
// //                 fontSize: { xs: '2rem', sm: '2.5rem' }
// //               }}>
// //                 {yoga.title}
// //               </Typography>

// //               <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
// //                 <Chip 
// //                   label={yoga.difficulty} 
// //                   color="primary" 
// //                   size="small"
// //                   sx={{ fontWeight: 600 }}
// //                 />
// //                 <Chip 
// //                   label={yoga.duration} 
// //                   color="secondary" 
// //                   size="small"
// //                   sx={{ fontWeight: 600 }}
// //                 />
// //               </Stack>

// //               {/* Description */}
// //               <Typography variant="body1" sx={{ 
// //                 fontSize: '1.1rem',
// //                 lineHeight: 1.8,
// //                 mb: 3,
// //                 color: theme.palette.text.secondary
// //               }}>
// //                 {yoga.description}
// //               </Typography>

// //               <Divider sx={{ my: 3 }} />

// //               {/* Benefits Section */}
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="h5" sx={{ 
// //                   fontWeight: 600,
// //                   mb: 2,
// //                   color: theme.palette.text.primary
// //                 }}>
// //                   Key Benefits
// //                 </Typography>

// //                 <Grid container spacing={2}>
// //                   {yoga.benefits.split(';').map((benefit, index) => (
// //                     <Grid item xs={12} sm={6} key={index}>
// //                       <Box sx={{
// //                         display: 'flex',
// //                         alignItems: 'flex-start',
// //                         p: 2,
// //                         backgroundColor: theme.palette.action.hover,
// //                         borderRadius: 2
// //                       }}>
// //                         <Box sx={{
// //                           backgroundColor: theme.palette.primary.light,
// //                           color: theme.palette.primary.main,
// //                           borderRadius: '50%',
// //                           width: 24,
// //                           height: 24,
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                           mr: 2,
// //                           flexShrink: 0
// //                         }}>
// //                           {index + 1}
// //                         </Box>
// //                         <Typography variant="body1">
// //                           {benefit.trim()}
// //                         </Typography>
// //                       </Box>
// //                     </Grid>
// //                   ))}
// //                 </Grid>
// //               </Box>
// //             </Box>

// //             {/* Props and Tips Section */}
// //             <Grid container spacing={4}>
// //               <Grid item xs={12} md={6}>
// //                 <Box sx={{ 
// //                   backgroundColor: theme.palette.background.paper,
// //                   borderRadius: 3,
// //                   p: { xs: 3, sm: 4 },
// //                   boxShadow: theme.shadows[2],
// //                   height: '100%'
// //                 }}>
// //                   <Typography variant="h5" sx={{ 
// //                     fontWeight: 600,
// //                     mb: 2,
// //                     color: theme.palette.text.primary,
// //                     display: 'flex',
// //                     alignItems: 'center'
// //                   }}>
// //                     <FitnessCenter sx={{ mr: 1, color: theme.palette.primary.main }} />
// //                     Recommended Props
// //                   </Typography>

// //                   <Typography variant="body1" sx={{ 
// //                     color: theme.palette.text.secondary,
// //                     lineHeight: 1.7
// //                   }}>
// //                     {yoga.props}
// //                   </Typography>
// //                 </Box>
// //               </Grid>

// //               <Grid item xs={12} md={6}>
// //                 <Box sx={{ 
// //                   backgroundColor: theme.palette.primary.light,
// //                   borderRadius: 3,
// //                   p: { xs: 3, sm: 4 },
// //                   boxShadow: theme.shadows[2],
// //                   height: '100%'
// //                 }}>
// //                   <Typography variant="h5" sx={{ 
// //                     fontWeight: 600,
// //                     mb: 2,
// //                     color: theme.palette.primary.dark,
// //                     display: 'flex',
// //                     alignItems: 'center'
// //                   }}>
// //                     <Lightbulb sx={{ mr: 1, color: theme.palette.primary.dark }} />
// //                     Pro Tip
// //                   </Typography>

// //                   <Typography variant="body1" sx={{ 
// //                     color: theme.palette.primary.dark,
// //                     lineHeight: 1.7,
// //                     fontStyle: 'italic'
// //                   }}>
// //                     "{yoga.tips}"
// //                   </Typography>
// //                 </Box>
// //               </Grid>
// //             </Grid>

// //             {/* Detailed Information */}
// //             <Box sx={{ 
// //               mt: 4,
// //               backgroundColor: theme.palette.background.paper,
// //               borderRadius: 3,
// //               p: { xs: 3, sm: 4 },
// //               boxShadow: theme.shadows[2]
// //             }}>
             

            

           
// //             </Box>
// //           </Grid>
// //         </Grid>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default YogaTypesDetails;    



























// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Button,
//   Chip,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   useTheme,
//   useMediaQuery,
//   Avatar,
//   Paper
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { yogaArray } from '../../../Data';
// import {
//   Schedule,
//   FitnessCenter,
//   AccessTime,
//   Lightbulb,
//   Spa,
//   ArrowBack,
//   CheckCircle,
//   LocalOffer,
//   People,
  
// } from '@mui/icons-material';

// const YogaTypesDetails = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const yoga = yogaArray.find(item => item.id.toString() === id);

//   if (!yoga) {
//     return (
//       <Box sx={{ 
//         py: 8, 
//         textAlign: 'center',
//         minHeight: '80vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <Typography variant="h4" sx={{ mb: 2, color: theme.palette.error.main }}>
//           Yoga type not found
//         </Typography>
//         <Button 
//           component={Link} 
//           to="/course" 
//           variant="contained" 
//           sx={{ mt: 3 }}
//           startIcon={<ArrowBack />}
//         >
//           Back to Courses
//         </Button>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ 
//       py: { xs: 4, sm: 6, md: 8 },
//       backgroundColor: theme.palette.grey[50],
//       minHeight: '100vh'
//     }}>
//       <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
//         {/* Back Button with improved styling */}
//         <Button
//           component={Link}
//           to="/course"
//           variant="outlined"
//           sx={{ 
//             mb: 4,
//             borderRadius: 2,
//             px: 3,
//             py: 1,
//             textTransform: 'none',
//             borderWidth: 2,
//             '&:hover': {
//               borderWidth: 2,
//               backgroundColor: theme.palette.primary.light
//             }
//           }}
//           startIcon={<ArrowBack />}
//         >
//           All Yoga Styles
//         </Button>

//         {/* Main Content Grid */}
//         <Grid container spacing={4}>
//           {/* Left Column - Image and Quick Facts */}
//           <Grid item xs={12} md={5} lg={4}>
//             {/* Image with subtle hover effect */}
//             <Card sx={{ 
//               borderRadius: 3,
//               overflow: 'hidden',
//               boxShadow: 3,
//               mb: 4,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'translateY(-4px)',
//                 boxShadow: 6
//               }
//             }}>
//               <CardMedia
//                 component="img"
//                 image={yoga.image}
//                 alt={yoga.title}
//                 sx={{
//                   height: { xs: 320, sm: 380, md: 420 },
//                   width: '100%',
//                   objectFit: 'cover'
//                 }}
//               />
//             </Card>

//             {/* Quick Facts Panel with gradient background */}
//             <Paper elevation={3} sx={{
//               borderRadius: 3,
//               p: 3,
//               background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
//               border: `1px solid ${theme.palette.divider}`
//             }}>
//               <Typography variant="h6" sx={{ 
//                 mb: 2,
//                 fontWeight: 700,
//                 color: theme.palette.primary.dark,
//                 display: 'flex',
//                 alignItems: 'center',
//                 fontSize: '1.2rem'
//               }}>
//                 <Schedule sx={{ 
//                   mr: 1.5, 
//                   color: theme.palette.primary.main,
//                   fontSize: '1.8rem'
//                 }} />
//                 Quick Facts
//               </Typography>

//               <Divider sx={{ 
//                 mb: 3,
//                 borderColor: theme.palette.divider,
//                 borderWidth: 1
//               }} />

//               <List dense sx={{ py: 0 }}>
//                 <ListItem sx={{ 
//                   px: 0,
//                   py: 1,
//                   alignItems: 'flex-start'
//                 }}>
//                   <ListItemIcon sx={{ 
//                     minWidth: 40,
//                     mt: '2px'
//                   }}>
//                     <Avatar sx={{ 
//                       width: 28, 
//                       height: 28,
//                       bgcolor: theme.palette.primary.light
//                     }}>
//                       <FitnessCenter fontSize="small" color="primary" />
//                     </Avatar>
//                   </ListItemIcon>
//                   <Box>
//                     <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//                       Level
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                       {yoga.difficulty}
//                     </Typography>
//                   </Box>
//                 </ListItem>

//                 <ListItem sx={{ 
//                   px: 0,
//                   py: 1,
//                   alignItems: 'flex-start'
//                 }}>
//                   <ListItemIcon sx={{ minWidth: 40, mt: '2px' }}>
//                     <Avatar sx={{ 
//                       width: 28, 
//                       height: 28,
//                       bgcolor: theme.palette.secondary.light
//                     }}>
//                       <AccessTime fontSize="small" color="secondary" />
//                     </Avatar>
//                   </ListItemIcon>
//                   <Box>
//                     <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//                       Duration
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                       {yoga.duration}
//                     </Typography>
//                   </Box>
//                 </ListItem>

//                 <ListItem sx={{ 
//                   px: 0,
//                   py: 1,
//                   alignItems: 'flex-start'
//                 }}>
//                   <ListItemIcon sx={{ minWidth: 40, mt: '2px' }}>
//                     <Avatar sx={{ 
//                       width: 28, 
//                       height: 28,
//                       bgcolor: theme.palette.success.light
//                     }}>
//                       <Spa fontSize="small" color="success" />
//                     </Avatar>
//                   </ListItemIcon>
//                   <Box>
//                     <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//                       Best Time
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                       {yoga.bestTime}
//                     </Typography>
//                   </Box>
//                 </ListItem>
//               </List>

//               <Button
//                 variant="contained"
//                 fullWidth
//                 size="large"
//                 sx={{
//                   mt: 3,
//                   py: 1.5,
//                   borderRadius: 2,
//                   fontWeight: 700,
//                   fontSize: '1rem',
//                   textTransform: 'none',
//                   letterSpacing: 0.5,
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: theme.shadows[4]
//                   },
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 Book a Class Now
//               </Button>
//             </Paper>
//           </Grid>

//           {/* Right Column - Main Content */}
//           <Grid item xs={12} md={7} lg={8}>
//             {/* Title Section */}
//             <Paper elevation={2} sx={{ 
//               borderRadius: 3,
//               p: { xs: 3, sm: 4 },
//               mb: 4,
//               background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
//               border: `1px solid ${theme.palette.divider}`
//             }}>
//               <Typography variant="h2" sx={{ 
//                 fontWeight: 800,
//                 mb: 2,
//                 color: theme.palette.primary.dark,
//                 fontSize: { xs: '2rem', sm: '2.5rem' },
//                 letterSpacing: -0.5
//               }}>
//                 {yoga.title}
//               </Typography>

//               <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
//                 <Chip 
//                   label={yoga.difficulty} 
//                   color="primary" 
//                   size="medium"
//                   sx={{ 
//                     fontWeight: 700,
//                     px: 1,
//                     fontSize: '0.8rem'
//                   }}
//                 />
//                 <Chip 
//                   label={yoga.duration} 
//                   color="secondary" 
//                   size="medium"
//                   sx={{ 
//                     fontWeight: 700,
//                     px: 1,
//                     fontSize: '0.8rem'
//                   }}
//                 />
//                 <Chip 
//                   icon={<People fontSize="small" />}
//                   label="Group Class" 
//                   variant="outlined"
//                   size="medium"
//                   sx={{ 
//                     fontWeight: 600,
//                     px: 1,
//                     fontSize: '0.8rem'
//                   }}
//                 />
//               </Stack>

//               {/* Description with improved typography */}
//               <Typography variant="body1" sx={{ 
//                 fontSize: '1.1rem',
//                 lineHeight: 1.9,
//                 mb: 3,
//                 color: theme.palette.text.secondary
//               }}>
//                 {yoga.descriptions}
//               </Typography>

//               <Divider sx={{ 
//                 my: 3,
//                 borderColor: theme.palette.divider,
//                 borderWidth: 1
//               }} />

//               {/* Benefits Section with icon list */}
//               <Box sx={{ mb: 2 }}>
//                 <Typography variant="h5" sx={{ 
//                   fontWeight: 700,
//                   mb: 3,
//                   color: theme.palette.primary.dark,
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}>
//                   <CheckCircle sx={{ 
//                     mr: 1.5, 
//                     color: theme.palette.success.main,
//                     fontSize: '1.8rem'
//                   }} />
//                   Key Benefits
//                 </Typography>

//                 <Grid container spacing={2}>
//                   {yoga.benefits.split(';').map((benefit, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Paper elevation={0} sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         p: 2,
//                         backgroundColor: theme.palette.action.hover,
//                         borderRadius: 2,
//                         height: '100%',
//                         borderLeft: `4px solid ${theme.palette.primary.main}`
//                       }}>
//                         <Box sx={{
//                           backgroundColor: theme.palette.primary.light,
//                           color: theme.palette.primary.main,
//                           borderRadius: '50%',
//                           width: 32,
//                           height: 32,
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           mr: 2,
//                           flexShrink: 0
//                         }}>
//                           {index + 1}
//                         </Box>
//                         <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                           {benefit.trim()}
//                         </Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Paper>

//             {/* Props and Tips Section */}
//             <Grid container spacing={4} sx={{ mb: 4 }}>
//               <Grid item xs={12} md={6}>
//                 <Paper elevation={2} sx={{ 
//                   borderRadius: 3,
//                   p: { xs: 3, sm: 4 },
//                   height: '100%',
//                   borderTop: `4px solid ${theme.palette.info.main}`,
//                   background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`
//                 }}>
//                   <Typography variant="h5" sx={{ 
//                     fontWeight: 700,
//                     mb: 2,
//                     color: theme.palette.info.dark,
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <LocalOffer sx={{ 
//                       mr: 1.5, 
//                       color: theme.palette.info.main,
//                       fontSize: '1.8rem'
//                     }} />
//                     Recommended Props
//                   </Typography>

//                   <Typography variant="body1" sx={{ 
//                     color: theme.palette.text.secondary,
//                     lineHeight: 1.8,
//                     pl: 4.5
//                   }}>
//                     {yoga.props}
//                   </Typography>
//                 </Paper>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <Paper elevation={2} sx={{ 
//                   borderRadius: 3,
//                   p: { xs: 3, sm: 4 },
//                   height: '100%',
//                   background: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.lighter} 100%)`,
//                   borderTop: `4px solid ${theme.palette.warning.main}`
//                 }}>
//                   <Typography variant="h5" sx={{ 
//                     fontWeight: 700,
//                     mb: 2,
//                     color: theme.palette.warning.dark,
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}>
//                     <Lightbulb sx={{ 
//                       mr: 1.5, 
//                       color: theme.palette.warning.main,
//                       fontSize: '1.8rem'
//                     }} />
//                     Expert Tip
//                   </Typography>

//                   <Typography variant="body1" sx={{ 
//                     color: theme.palette.warning.dark,
//                     lineHeight: 1.8,
//                     pl: 4.5,
//                     fontStyle: 'italic'
//                   }}>
//                     &#34;{yoga.tips}&#34;
//                   </Typography>
//                 </Paper>
//               </Grid>
//             </Grid>

//             {/* Additional Information Section */}
//             {/* <Paper elevation={2} sx={{ 
//               borderRadius: 3,
//               p: { xs: 3, sm: 4 },
//               background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
//               border: `1px solid ${theme.palette.divider}`
//             }}>
//               <Typography variant="h4" sx={{ 
//                 fontWeight: 700,
//                 mb: 3,
//                 color: theme.palette.primary.dark,
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <Info sx={{ 
//                   mr: 1.5, 
//                   color: theme.palette.primary.main,
//                   fontSize: '2rem'
//                 }} />
//                 About {yoga.title}
//               </Typography>

//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="body1" sx={{ 
//                     mb: 2,
//                     color: theme.palette.text.secondary,
//                     lineHeight: 1.9
//                   }}>
//                     {yoga.description} This practice has roots in ancient traditions but has been adapted for modern practitioners. The systematic approach helps develop both physical and mental discipline through carefully curated sequences.
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="body1" sx={{ 
//                     mb: 2,
//                     color: theme.palette.text.secondary,
//                     lineHeight: 1.9
//                   }}>
//                     Regular practice can lead to improved focus, better sleep quality, and increased energy levels throughout the day. Many practitioners find it helps create a profound sense of inner peace and balance in their daily lives.
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Paper> */}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default YogaTypesDetails;             





























































import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper,
  Hidden
} from '@mui/material';
import { Link } from 'react-router-dom';
import { yogaArray } from '../../../Data';
import {
  Schedule,
  FitnessCenter,
  AccessTime,
  Lightbulb,
  Spa,
  ArrowBack,
  CheckCircle,
  LocalOffer,
  People,
  
} from '@mui/icons-material';
import { useEffect } from 'react';

const YogaTypesDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));    

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate=useNavigate() 
  const handleGo=()=>{
    navigate(-1)
  }
  
  const yoga = yogaArray.find(item => item.id.toString() === id);

  if (!yoga) {
    return (
      <Box sx={{ 
        py: 8, 
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ 
          mb: 2, 
          color: theme.palette.error.main,
          px: 2
        }}>
          Yoga type not found
        </Typography>
        <Button 
          component={Link} 
          to="/course" 
          variant="contained" 
          sx={{ mt: 3 }}
          startIcon={<ArrowBack />}
          size={isMobile ? 'medium' : 'large'}
        >
          Back to Courses
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      py: { xs: 16, sm: 18, md: 20, lg: 22 },
      backgroundColor: theme.palette.grey[50],
      minHeight: '100vh'
    }}>
      <Container maxWidth="xl" sx={{ 
        px: { 
          xs: 1, 
          sm: 2, 
          md: 3, 
          lg: 4 
        } 
      }}>
        {/* Back Button with responsive sizing */}
        {/* <Button
          component={Link}
          to="/course"
          variant="outlined"
          sx={{ 
            mb: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            textTransform: 'none',
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              backgroundColor: theme.palette.primary.light
            }
          }}
          startIcon={<ArrowBack fontSize={isMobile ? 'small' : 'medium'} />}
          size={isMobile ? 'small' : 'medium'}
        >
          <Hidden xsDown>All Yoga Styles</Hidden>
          <Hidden smUp>Back</Hidden>
        </Button> */}

        {/* Main Content Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4}}>
          {/* Left Column - Image and Quick Facts */}
          <Grid item xs={12} md={5} lg={4}>
            {/* Image with responsive height */}
             <Card sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
              mb: { xs: 2, sm: 3, md: 4 },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                image={yoga.image}
                alt={yoga.title}
                sx={{
                  height: { 
                    xs: 250, 
                    sm: 300, 
                    md: 350, 
                    lg: 400 
                  },
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card> 



            {/* Quick Facts Panel */}
            <Paper elevation={3} sx={{
              borderRadius: 3,
              p: { xs: 2, sm: 3 },
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
              border: `1px solid ${theme.palette.divider}`
            }}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'} sx={{ 
                mb: { xs: 1, sm: 2 },
                fontWeight: 700,
                color: theme.palette.primary.dark,
                display: 'flex',
                alignItems: 'center',
                fontSize: isMobile ? '1rem' : '1.2rem'
              }}>
                <Schedule sx={{ 
                  mr: { xs: 1, sm: 1.5 }, 
                  color: theme.palette.primary.main,
                  fontSize: isMobile ? '1.5rem' : '1.8rem'
                }} />
                Quick Facts
              </Typography>

              <Divider sx={{ 
                mb: { xs: 1, sm: 2, md: 3 },
                borderColor: theme.palette.divider,
                borderWidth: 1
              }} />

              <List dense sx={{ py: 0 }}>
                <ListItem sx={{ 
                  px: 0,
                  py: '4px',
                  alignItems: 'flex-start'
                }}>
                  <ListItemIcon sx={{ 
                    minWidth: { xs: 36, sm: 40 },
                    mt: '2px'
                  }}>
                    <Avatar sx={{ 
                      width: { xs: 24, sm: 28 }, 
                      height: { xs: 24, sm: 28 },
                      bgcolor: theme.palette.primary.light
                    }}>
                      <FitnessCenter fontSize={isMobile ? 'small' : 'medium'} color="primary" />
                    </Avatar>
                  </ListItemIcon>
                  <Box>
                    <Typography variant={isMobile ? 'caption' : 'subtitle2'} sx={{ fontWeight: 600 }}>
                      Level
                    </Typography>
                    <Typography variant={isMobile ? 'caption' : 'body2'} sx={{ color: theme.palette.text.secondary }}>
                      {yoga.difficulty}
                    </Typography>
                  </Box>
                </ListItem>

                <ListItem sx={{ 
                  px: 0,
                  py: '4px',
                  alignItems: 'flex-start'
                }}>
                  <ListItemIcon sx={{ 
                    minWidth: { xs: 36, sm: 40 }, 
                    mt: '2px' 
                  }}>
                    <Avatar sx={{ 
                      width: { xs: 24, sm: 28 }, 
                      height: { xs: 24, sm: 28 },
                      bgcolor: theme.palette.secondary.light
                    }}>
                      <AccessTime fontSize={isMobile ? 'small' : 'medium'} color="secondary" />
                    </Avatar>
                  </ListItemIcon>
                  <Box>
                    <Typography variant={isMobile ? 'caption' : 'subtitle2'} sx={{ fontWeight: 600 }}>
                      Duration
                    </Typography>
                    <Typography variant={isMobile ? 'caption' : 'body2'} sx={{ color: theme.palette.text.secondary }}>
                      {yoga.duration}
                    </Typography>
                  </Box>
                </ListItem>

                <ListItem sx={{ 
                  px: 0,
                  py: '4px',
                  alignItems: 'flex-start'
                }}>
                  <ListItemIcon sx={{ 
                    minWidth: { xs: 36, sm: 40 }, 
                    mt: '2px' 
                  }}>
                    <Avatar sx={{ 
                      width: { xs: 24, sm: 28 }, 
                      height: { xs: 24, sm: 28 },
                      bgcolor: theme.palette.success.light
                    }}>
                      <Spa fontSize={isMobile ? 'small' : 'medium'} color="success" />
                    </Avatar>
                  </ListItemIcon>
                  <Box>
                    <Typography variant={isMobile ? 'caption' : 'subtitle2'} sx={{ fontWeight: 600 }}>
                      Best Time
                    </Typography>
                    <Typography variant={isMobile ? 'caption' : 'body2'} sx={{ color: theme.palette.text.secondary }}>
                      {yoga.bestTime}
                    </Typography>
                  </Box>
                </ListItem>
              </List>

              <Button
                variant="contained"
                fullWidth
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  mt: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  textTransform: 'none',
                  letterSpacing: 0.5,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4]
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {isMobile ? 'Book Now' : 'Book a Class Now'}
              </Button>
            </Paper>
          </Grid>

          {/* Right Column - Main Content */}
          <Grid item xs={12} md={7} lg={8}>
            {/* Title Section */}
            <Paper elevation={2} sx={{ 
              borderRadius: 3,
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 2, sm: 3, md: 4 },
              background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
              border: `1px solid ${theme.palette.divider}`
            }}>
              <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ 
                fontWeight: 800,
                mb: { xs: 1, sm: 2 },
                color: theme.palette.primary.dark,
                fontSize: { 
                  xs: '1.5rem', 
                  sm: '2rem', 
                  md: '2.25rem', 
                  lg: '2.5rem' 
                },
                letterSpacing: -0.5,
                lineHeight: 1.2
              }}>
                {yoga.title}
              </Typography>

              <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                  mb: { xs: 2, sm: 3 },
                  flexWrap: 'wrap',
                  '& > *': {
                    mb: 1
                  }
                }}
              >
                <Chip 
                  label={yoga.difficulty} 
                  color="primary" 
                  size={isMobile ? 'small' : 'medium'}
                  sx={{ 
                    fontWeight: 700,
                    px: { xs: 0.5, sm: 1 },
                    fontSize: isMobile ? '0.7rem' : '0.8rem'
                  }}
                />
                <Chip 
                  label={yoga.duration} 
                  color="secondary" 
                  size={isMobile ? 'small' : 'medium'}
                  sx={{ 
                    fontWeight: 700,
                    px: { xs: 0.5, sm: 1 },
                    fontSize: isMobile ? '0.7rem' : '0.8rem'
                  }}
                />
                <Hidden smDown>
                  <Chip 
                    icon={<People fontSize="small" />}
                    label="Group Class" 
                    variant="outlined"
                    size={isMobile ? 'small' : 'medium'}
                    sx={{ 
                      fontWeight: 600,
                      px: { xs: 0.5, sm: 1 },
                      fontSize: isMobile ? '0.7rem' : '0.8rem'
                    }}
                  />
                </Hidden>
              </Stack>

              {/* Description with responsive typography */}
              <Typography variant="body1" sx={{ 
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: { xs: 1.7, sm: 1.8 },
                mb: { xs: 2, sm: 3 },
                color: theme.palette.text.secondary
              }}>
                {yoga.descriptions}
              </Typography>  
                <Button 
          component={Link} 
          // to="/course" 
          variant="contained" 
          sx={{ mt: 3 }}
          startIcon={<ArrowBack />}
          size={isMobile ? 'medium' : 'large'}  
          onClick={handleGo}
        >
          Back to Types Of Yoga
        </Button>

              <Divider sx={{ 
                my: { xs: 2, sm: 3 },
                borderColor: theme.palette.divider,
                borderWidth: 1
              }} />

              {/* Benefits Section with responsive grid */}
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ 
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 2, md: 3 },
                  color: theme.palette.primary.dark,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <CheckCircle sx={{ 
                    mr: { xs: 1, sm: 1.5 }, 
                    color: theme.palette.success.main,
                    fontSize: isMobile ? '1.5rem' : '1.8rem'
                  }} />
                  Key Benefits
                </Typography>

                <Grid container spacing={{ xs: 1, sm: 2 }}>
                  {yoga.benefits.split(';').map((benefit, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper elevation={0} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: { xs: 1.5, sm: 2 },
                        backgroundColor: theme.palette.action.hover,
                        borderRadius: 2,
                        height: '100%',
                        borderLeft: `4px solid ${theme.palette.primary.main}`
                      }}>
                        <Box sx={{
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.main,
                          borderRadius: '50%',
                          width: { xs: 28, sm: 32 },
                          height: { xs: 28, sm: 32 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: { xs: 1.5, sm: 2 },
                          flexShrink: 0
                        }}>
                          {index + 1}
                        </Box>
                        <Typography variant="body1" sx={{ 
                          fontWeight: 500,
                          fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}>
                          {benefit.trim()}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>

            {/* Props and Tips Section with responsive layout */}
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={2} sx={{ 
                  borderRadius: 3,
                  p: { xs: 2, sm: 3 },
                  height: '100%',
                  borderTop: `4px solid ${theme.palette.info.main}`,
                  background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`
                }}>
                  <Typography variant={isMobile ? 'subtitle1' : 'h6'} sx={{ 
                    fontWeight: 700,
                    mb: { xs: 1, sm: 2 },
                    color: theme.palette.info.dark,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: isMobile ? '1rem' : '1.2rem'
                  }}>
                    <LocalOffer sx={{ 
                      mr: { xs: 1, sm: 1.5 }, 
                      color: theme.palette.info.main,
                      fontSize: isMobile ? '1.5rem' : '1.8rem'
                    }} />
                    Recommended Props
                  </Typography>

                  <Typography variant="body1" sx={{ 
                    color: theme.palette.text.secondary,
                    lineHeight: { xs: 1.7, sm: 1.8 },
                    pl: { xs: 3.5, sm: 4.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}>
                    {yoga.props}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper elevation={2} sx={{ 
                  borderRadius: 3,
                  p: { xs: 2, sm: 3 },
                  height: '100%',
                  background: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.lighter} 100%)`,
                  borderTop: `4px solid ${theme.palette.warning.main}`
                }}>
                  <Typography variant={isMobile ? 'subtitle1' : 'h6'} sx={{ 
                    fontWeight: 700,
                    mb: { xs: 1, sm: 2 },
                    color: theme.palette.warning.dark,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: isMobile ? '1rem' : '1.2rem'
                  }}>
                    <Lightbulb sx={{ 
                      mr: { xs: 1, sm: 1.5 }, 
                      color: theme.palette.warning.main,
                      fontSize: isMobile ? '1.5rem' : '1.8rem'
                    }} />
                    Expert Tip
                  </Typography>

                  <Typography variant="body1" sx={{ 
                    color: theme.palette.warning.dark,
                    lineHeight: { xs: 1.7, sm: 1.8 },
                    pl: { xs: 3.5, sm: 4.5 },
                    fontStyle: 'italic',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}>
                    &ldquo;{yoga.tips}&rdquo;
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Additional Information Section */}
          
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default YogaTypesDetails;
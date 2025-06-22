// // import React from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
  
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
// } from '@mui/icons-material';
// // import { courses } from '../../../Courses'; 
// // import { courses } from '../Courses';  
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
// //   const course = courses[id]; 
//     const courseDetails = courses.find(item => item.id.toString() === id);
  

//   if (!courseDetails) {
//     return <Typography variant="h4">Course not found</Typography>;
//   }

//   return (
//     <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 height: '100%',
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//               }}
//             >
//               <img
//                 src={courseDetails.image}
//                 alt={courseDetails.title}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                 }}
//               />
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Stack spacing={3}>
//               <Box>
//                 <Chip
//                   label={courseDetails.category}
//                   size="medium"
//                   sx={{
//                     // backgroundColor: ${course.color}10,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
//                   {courseDetails.title}
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ color: 'text.secondary', mb: 3 }}
//                 >
//                   {courseDetails.descriptions}
//                 </Typography>
//               </Box>

//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Rating
//                   value={courseDetails.rating}
//                   precision={0.1}
//                   readOnly
//                   icon={<StarIcon fontSize="inherit" />}
//                   sx={{
//                     color: courseDetails.color,
//                     '& .MuiRating-iconFilled': {
//                       color: courseDetails.color,
//                     },
//                   }}
//                 />
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   {courseDetails.rating} ({courseDetails.reviews} reviews)
//                 </Typography>
//               </Stack>

//               <Stack direction="row" spacing={4}>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <DurationIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">{courseDetails.duration}</Typography>
//                 </Stack>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <StudentsIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">
//                     {courseDetails.students}+ students
//                   </Typography>
//                 </Stack>
//                 <Chip
//                   label={courseDetails.level}
//                   size="small"
//                   sx={{
//                     // backgroundColor: ${courseDetails.color}15,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                   }}
//                 />
//               </Stack>

//               <Divider sx={{ my: 2 }} />

//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   What You'll Learn
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={1} alignItems="flex-start">
//                         <Box
//                           sx={{
//                             width: '24px',
//                             height: '24px',
//                             borderRadius: '50%',
//                             // backgroundColor: ${course.color}20,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             mt: 0.5,
//                           }}
//                         >
//                           <SchoolIcon
//                             sx={{ color: courseDetails.color, fontSize: '14px' }}
//                           />
//                         </Box>
//                         <Typography variant="body1">{outcome}</Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Course Syllabus
//                 </Typography>
//                 <List
//                   sx={{
//                     backgroundColor: 'background.paper',
//                     borderRadius: '8px',
//                     p: 0,
//                   }}
//                 >
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem
//                       key={index}
//                       sx={{
//                         borderBottom: '1px solid',
//                         borderColor: 'divider',
//                         '&:last-child': { borderBottom: 'none' },
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                             {item}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Certification
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   {courseDetails.certification}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                   Prerequisites: {courseDetails.prerequisites}
//                 </Typography>
//               </Box>

//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: courseDetails.color,
//                   py: 1.5,
//                   borderRadius: '10px',
//                   fontWeight: 700,
//                   fontSize: '1rem',
//                   textTransform: 'none',
//                 //   boxShadow: 0 2px 6px ${CourseDetails.color}60,
//                   '&:hover': {
//                     backgroundColor: courseDetails.color,
//                     // boxShadow: 0 4px 12px ${course.color}80,
//                   },
//                 }}
//               >
//                 Enroll Now
//               </Button>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default  CourseDetailsPage;   







































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Image Section */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 height: { xs: '300px', sm: '400px', md: '100%' },
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//                 position: 'relative',
//                 '&:hover img': {
//                   transform: 'scale(1.03)',
//                 }
//               }}
//             >
//               <img
//                 src={courseDetails.image}
//                 alt={courseDetails.title}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   transition: 'transform 0.3s ease',
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* Content Section */}
//           <Grid item xs={12} md={6}>
//             <Stack spacing={3}>
//               {/* Title and Basic Info */}
//               <Box>
//                 <Chip
//                   label={courseDetails.category}
//                   size="medium"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}20`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography 
//                   variant="h3" 
//                   sx={{ 
//                     fontWeight: 800, 
//                     mb: 2,
//                     fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
//                   }}
//                 >
//                   {courseDetails.title}
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ color: 'text.secondary', mb: 3 }}
//                 >
//                   {courseDetails.descriptions}
//                 </Typography>
//               </Box>

//               {/* Rating */}
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Rating
//                   value={courseDetails.rating}
//                   precision={0.1}
//                   readOnly
//                   icon={<StarIcon fontSize="inherit" />}
//                   sx={{
//                     color: courseDetails.color,
//                     '& .MuiRating-iconFilled': {
//                       color: courseDetails.color,
//                     },
//                   }}
//                 />
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   {courseDetails.rating} ({courseDetails.reviews} reviews)
//                 </Typography>
//               </Stack>

//               {/* Meta Info */}
//               <Stack 
//                 direction={{ xs: 'column', sm: 'row' }} 
//                 spacing={{ xs: 1, sm: 4 }}
//                 alignItems={{ xs: 'flex-start', sm: 'center' }}
//               >
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <DurationIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">{courseDetails.duration}</Typography>
//                 </Stack>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <StudentsIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">
//                     {courseDetails.students}+ students
//                   </Typography>
//                 </Stack>
//                 <Chip
//                   label={courseDetails.level}
//                   size="small"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}15`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                   }}
//                 />
//               </Stack>

//               <Divider sx={{ my: 2 }} />

//               {/* Learning Outcomes */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   What You'll Learn
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={1} alignItems="flex-start">
//                         <Box
//                           sx={{
//                             width: '24px',
//                             height: '24px',
//                             borderRadius: '50%',
//                             backgroundColor: `${courseDetails.color}20`,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             mt: 0.5,
//                             flexShrink: 0,
//                           }}
//                         >
//                           <SchoolIcon
//                             sx={{ color: courseDetails.color, fontSize: '14px' }}
//                           />
//                         </Box>
//                         <Typography variant="body1">{outcome}</Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               {/* Syllabus */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Course Syllabus
//                 </Typography>
//                 <List
//                   sx={{
//                     backgroundColor: 'background.paper',
//                     borderRadius: '8px',
//                     p: 0,
//                     maxHeight: '300px',
//                     overflow: 'auto',
//                   }}
//                 >
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem
//                       key={index}
//                       sx={{
//                         borderBottom: '1px solid',
//                         borderColor: 'divider',
//                         '&:last-child': { borderBottom: 'none' },
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                             {item}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               {/* Certification */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Certification
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   {courseDetails.certification}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                   Prerequisites: {courseDetails.prerequisites}
//                 </Typography>
//               </Box>

//               {/* Enroll Button */}
//               <Button
//                 variant="contained"
//                 size="large"
//                 fullWidth
//                 sx={{
//                   backgroundColor: courseDetails.color,
//                   py: 1.5,
//                   borderRadius: '10px',
//                   fontWeight: 700,
//                   fontSize: '1rem',
//                   textTransform: 'none',
//                   boxShadow: `0 2px 6px ${courseDetails.color}60`,
//                   '&:hover': {
//                     backgroundColor: courseDetails.color,
//                     boxShadow: `0 4px 12px ${courseDetails.color}80`,
//                   },
//                 }}
//               >
//                 Enroll Now
//               </Button>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;   





































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#F8FAFC', minHeight: '100vh' ,marginTop:"6rem"}}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Image Section - Now with controlled size */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 height: { xs: '250px', sm: '300px', md: '350px' },
//                 width: '100%',
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5',
//                 '&:hover img': {
//                   transform: 'scale(1.03)',
//                 }
//               }}
//             >
//               <img
//                 src={courseDetails.image}
//                 alt={courseDetails.title}
//                 style={{
//                   width: 'auto',
//                   height: '100%',
//                   maxWidth: '100%',
//                   objectFit: 'contain',
//                   transition: 'transform 0.3s ease',
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* Rest of your content remains the same */}
//           <Grid item xs={12} md={6}>
//             {/* ... (keep all your existing content here) ... */}   















//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;  










































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#F8FAFC', minHeight: '100vh',marginTop:"6rem" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Image Section */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 height: { xs: '250px', sm: '300px', md: '350px' },
//                 width: '100%',
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5',
//                 '&:hover img': {
//                   transform: 'scale(1.03)',
//                 }
//               }}
//             >
//               <img
//                 src={courseDetails.image}
//                 alt={courseDetails.title}
//                 style={{
//                   width: 'auto',
//                   height: '100%',
//                   maxWidth: '100%',
//                   objectFit: 'contain',
//                   transition: 'transform 0.3s ease',
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* Content Section */}
//           <Grid item xs={12} md={6}>
//             <Stack spacing={3}>
//               {/* Title and Basic Info */}
//               <Box>
//                 <Chip
//                   label={courseDetails.category}
//                   size="medium"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}20`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography 
//                   variant="h3" 
//                   sx={{ 
//                     fontWeight: 800, 
//                     mb: 2,
//                     fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
//                   }}
//                 >
//                   {courseDetails.title}
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ color: 'text.secondary', mb: 3 }}
//                 >
//                   {courseDetails.descriptions}
//                 </Typography>
//               </Box>

//               {/* Rating */}
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Rating
//                   value={courseDetails.rating}
//                   precision={0.1}
//                   readOnly
//                   icon={<StarIcon fontSize="inherit" />}
//                   sx={{
//                     color: courseDetails.color,
//                     '& .MuiRating-iconFilled': {
//                       color: courseDetails.color,
//                     },
//                   }}
//                 />
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   {courseDetails.rating} ({courseDetails.reviews} reviews)
//                 </Typography>
//               </Stack>

//               {/* Meta Info */}
//               <Stack 
//                 direction={{ xs: 'column', sm: 'row' }} 
//                 spacing={{ xs: 1, sm: 4 }}
//                 alignItems={{ xs: 'flex-start', sm: 'center' }}
//               >
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <DurationIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">{courseDetails.duration}</Typography>
//                 </Stack>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <StudentsIcon sx={{ color: 'text.secondary' }} />
//                   <Typography variant="body1">
//                     {courseDetails.students}+ students
//                   </Typography>
//                 </Stack>
//                 <Chip
//                   label={courseDetails.level}
//                   size="small"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}15`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                   }}
//                 />
//               </Stack>

//               <Divider sx={{ my: 2 }} />

//               {/* Learning Outcomes */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   What You'll Learn
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={1} alignItems="flex-start">
//                         <Box
//                           sx={{
//                             width: '24px',
//                             height: '24px',
//                             borderRadius: '50%',
//                             backgroundColor: `${courseDetails.color}20`,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             mt: 0.5,
//                             flexShrink: 0,
//                           }}
//                         >
//                           <SchoolIcon
//                             sx={{ color: courseDetails.color, fontSize: '14px' }}
//                           />
//                         </Box>
//                         <Typography variant="body1">{outcome}</Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               {/* Syllabus */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Course Syllabus
//                 </Typography>
//                 <List
//                   sx={{
//                     backgroundColor: 'background.paper',
//                     borderRadius: '8px',
//                     p: 0,
//                     maxHeight: '300px',
//                     overflow: 'auto',
//                   }}
//                 >
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem
//                       key={index}
//                       sx={{
//                         borderBottom: '1px solid',
//                         borderColor: 'divider',
//                         '&:last-child': { borderBottom: 'none' },
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                             {item}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               {/* Certification */}
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   Certification
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   {courseDetails.certification}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                   Prerequisites: {courseDetails.prerequisites}
//                 </Typography>
//               </Box>

//               {/* Enroll Button */}
//               <Button
//                 variant="contained"
//                 size="large"
//                 fullWidth
//                 sx={{
//                   backgroundColor: courseDetails.color,
//                   py: 1.5,
//                   borderRadius: '10px',
//                   fontWeight: 700,
//                   fontSize: '1rem',
//                   textTransform: 'none',
//                   boxShadow: `0 2px 6px ${courseDetails.color}60`,
//                   '&:hover': {
//                     backgroundColor: courseDetails.color,
//                     boxShadow: `0 4px 12px ${courseDetails.color}80`,
//                   },
//                 }}
//               >
//                 Enroll Now
//               </Button>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;  






































































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
//   CheckCircle as CheckIcon,
//   MenuBook as SyllabusIcon,
//   CardMembership as CertIcon
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: 4, backgroundColor: '#F8FAFC',marginTop:"8rem" }}>
//       <Container maxWidth="xl">
//         {/* Header Section */}
//         <Box sx={{ mb: 4 }}>
//           <Chip
//             label={courseDetails.category}
//             size="medium"
//             sx={{
//               backgroundColor: `${courseDetails.color}20`,
//               color: courseDetails.color,
//               fontWeight: 700,
//               mb: 2,
//             }}
//           />
//           <Typography 
//             variant="h3" 
//             sx={{ 
//               fontWeight: 800,
//               fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
//               lineHeight: 1.2
//             }}
//           >
//             {courseDetails.title}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{ color: 'text.secondary', mt: 1 }}
//           >
//             {courseDetails.descriptions}
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {/* Main Content Column */}
//           <Grid item xs={12} md={8}>
//             {/* Course Image */}
//             <Card sx={{ mb: 4, borderRadius: 3, overflow: 'hidden' }}>
//               <Box sx={{
//                 height: { xs: '200px', sm: '300px', md: '350px' },
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}>
//                 <img
//                   src={courseDetails.image}
//                   alt={courseDetails.title}
//                   style={{
//                     height: '100%',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </Box>
//             </Card>

//             {/* What You'll Learn */}
//             <Card sx={{ mb: 4, borderRadius: 3 }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
//                   <SchoolIcon color="primary" />
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     What You'll Learn
//                   </Typography>
//                 </Stack>
                
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={2} alignItems="flex-start">
//                         <Avatar sx={{
//                           width: 24,
//                           height: 24,
//                           bgcolor: `${courseDetails.color}20`,
//                           color: courseDetails.color
//                         }}>
//                           <CheckIcon fontSize="small" />
//                         </Avatar>
//                         <Typography>{outcome}</Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>

//             {/* Syllabus */}
//             <Card sx={{ mb: 4, borderRadius: 3 }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
//                   <SyllabusIcon color="primary" />
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     Course Curriculum
//                   </Typography>
//                 </Stack>
                
//                 <List sx={{ 
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   borderRadius: 2
//                 }}>
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem 
//                       key={index}
//                       divider={index < courseDetails.syllabus.length - 1}
//                     >
//                       <ListItemText
//                         primary={
//                           <Stack direction="row" spacing={2} alignItems="center">
//                             <Avatar sx={{
//                               width: 24,
//                               height: 24,
//                               bgcolor: 'action.selected',
//                               color: 'text.secondary'
//                             }}>
//                               {index + 1}
//                             </Avatar>
//                             <Typography>{item}</Typography>
//                           </Stack>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Sidebar Column */}
//           <Grid item xs={12} md={4}>
//             <Card sx={{ position: 'sticky', top: 20, borderRadius: 3 }}>
//               <CardContent>
//                 <Stack spacing={3}>
//                   {/* Pricing and Enrollment */}
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Typography variant="h4" sx={{ fontWeight: 800 }}>
//                       ${courseDetails.price}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       fullWidth
//                       sx={{
//                         mt: 2,
//                         py: 1.5,
//                         borderRadius: 2,
//                         fontWeight: 700,
//                         fontSize: '1rem',
//                         backgroundColor: courseDetails.color,
//                         '&:hover': {
//                           backgroundColor: courseDetails.color,
//                           opacity: 0.9
//                         },
//                       }}
//                     >
//                       Enroll Now
//                     </Button>
//                   </Box>

//                   {/* Course Details */}
//                   <Box>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
//                       Course Details
//                     </Typography>
//                     <Stack spacing={2}>
//                       <Stack direction="row" spacing={2} alignItems="center">
//                         <DurationIcon color="action" />
//                         <Typography>Duration: {courseDetails.duration}</Typography>
//                       </Stack>
//                       <Stack direction="row" spacing={2} alignItems="center">
//                         <StudentsIcon color="action" />
//                         <Typography>Students: {courseDetails.students}+ enrolled</Typography>
//                       </Stack>
//                       <Stack direction="row" spacing={2} alignItems="center">
//                         <StarIcon sx={{ color: courseDetails.color }} />
//                         <Typography>
//                           Rating: {courseDetails.rating} ({courseDetails.reviews} reviews)
//                         </Typography>
//                       </Stack>
//                       <Stack direction="row" spacing={2} alignItems="center">
//                         <SchoolIcon color="action" />
//                         <Typography>Level: {courseDetails.level}</Typography>
//                       </Stack>
//                     </Stack>
//                   </Box>

//                   {/* Certification */}
//                   <Box>
//                     <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
//                       <CertIcon color="primary" />
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                         Certification
//                       </Typography>
//                     </Stack>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                       {courseDetails.certification}
//                     </Typography>
//                   </Box>

//                   {/* Prerequisites */}
//                   <Box>
//                     <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
//                       Prerequisites
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                       {courseDetails.prerequisites}
//                     </Typography>
//                   </Box>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;    


































































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar,
//   Paper
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
//   CheckCircle as CheckIcon,
//   MenuBook as SyllabusIcon,
//   CardMembership as CertIcon,
//   Info as InfoIcon
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ 
//       py: 4, 
//       backgroundColor: '#F8FAFC',
//       marginTop: '8rem',
//       minHeight: 'calc(100vh - 8rem)'
//     }}>
//       <Container maxWidth="xl">
//         {/* Hero Section */}
//         <Paper elevation={0} sx={{ 
//           mb: 6,
//           p: 4,
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${courseDetails.color}10, #ffffff)`,
//           border: `1px solid ${courseDetails.color}20`
//         }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Chip
//                 label={courseDetails.category}
//                 size="medium"
//                 sx={{
//                   backgroundColor: `${courseDetails.color}20`,
//                   color: courseDetails.color,
//                   fontWeight: 700,
//                   mb: 2,
//                 }}
//               />
//               <Typography 
//                 variant="h2" 
//                 sx={{ 
//                   fontWeight: 800,
//                   fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//                   lineHeight: 1.2,
//                   mb: 2
//                 }}
//               >
//                 {courseDetails.title}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ color: 'text.secondary', mb: 3 }}
//               >
//                 {courseDetails.descriptions}
//               </Typography>
              
//               <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
//                 <Rating
//                   value={courseDetails.rating}
//                   precision={0.1}
//                   readOnly
//                   icon={<StarIcon fontSize="inherit" />}
//                   sx={{
//                     color: courseDetails.color,
//                     '& .MuiRating-iconFilled': {
//                       color: courseDetails.color,
//                     },
//                   }}
//                 />
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   {courseDetails.rating} ({courseDetails.reviews} reviews)
//                 </Typography>
//               </Stack>
              
//               <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', rowGap: 2 }}>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <DurationIcon sx={{ color: 'text.secondary' }} />
//                   <Typography>{courseDetails.duration}</Typography>
//                 </Stack>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <StudentsIcon sx={{ color: 'text.secondary' }} />
//                   <Typography>{courseDetails.students}+ students</Typography>
//                 </Stack>
//                 <Chip
//                   label={courseDetails.level}
//                   size="small"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}15`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                   }}
//                 />
//               </Stack>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box sx={{
//                 height: { xs: '250px', md: '350px' },
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}>
//                 <img
//                   src={courseDetails.image}
//                   alt={courseDetails.title}
//                   style={{
//                     height: '100%',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Main Content */}
//         <Grid container spacing={4}>
//           {/* Left Column - Course Content */}
//           <Grid item xs={12} md={8}>
//             {/* Learning Outcomes */}
//             <Card sx={{ mb: 4, borderRadius: 3, boxShadow: theme.shadows[2] }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <SchoolIcon color="primary" sx={{ fontSize: 32 }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                     What You'll Learn
//                   </Typography>
//                 </Stack>
                
//                 <Grid container spacing={3}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Paper elevation={0} sx={{ 
//                         p: 2, 
//                         borderRadius: 2,
//                         backgroundColor: `${courseDetails.color}08`,
//                         height: '100%'
//                       }}>
//                         <Stack direction="row" spacing={2} alignItems="flex-start">
//                           <Avatar sx={{
//                             width: 28,
//                             height: 28,
//                             bgcolor: `${courseDetails.color}20`,
//                             color: courseDetails.color
//                           }}>
//                             <CheckIcon fontSize="small" />
//                           </Avatar>
//                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                             {outcome}
//                           </Typography>
//                         </Stack>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>

//             {/* Curriculum */}
//             <Card sx={{ mb: 4, borderRadius: 3, boxShadow: theme.shadows[2] }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <SyllabusIcon color="primary" sx={{ fontSize: 32 }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                     Course Curriculum
//                   </Typography>
//                 </Stack>
                
//                 <List sx={{ 
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   borderRadius: 2
//                 }}>
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem 
//                       key={index}
//                       divider={index < courseDetails.syllabus.length - 1}
//                       sx={{
//                         '&:hover': {
//                           backgroundColor: 'action.hover'
//                         }
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Stack direction="row" spacing={3} alignItems="center">
//                             <Avatar sx={{
//                               width: 32,
//                               height: 32,
//                               bgcolor: 'primary.main',
//                               color: 'primary.contrastText'
//                             }}>
//                               {index + 1}
//                             </Avatar>
//                             <Typography variant="body1">{item}</Typography>
//                           </Stack>
//                         }
//                         secondary={
//                           <Typography variant="caption" color="text.secondary">
//                             {index % 2 === 0 ? 'Video · 15 min' : 'Reading · 10 min'}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//             </Card>

          
//           </Grid>

//           {/* Right Column - Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ position: 'sticky', top: '6rem' }}>
//               <Card sx={{ borderRadius: 3, boxShadow: theme.shadows[3], mb: 3 }}>
//                 <CardContent>
//                   <Stack spacing={3}>
//                     <Box sx={{ textAlign: 'center' }}>
//                       <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
//                         ${courseDetails.price}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                         One-time payment · Lifetime access
//                       </Typography>
//                       <Button
//                         variant="contained"
//                         size="large"
//                         fullWidth
//                         sx={{
//                           py: 1.5,
//                           borderRadius: 2,
//                           fontWeight: 700,
//                           fontSize: '1.1rem',
//                           backgroundColor: courseDetails.color,
//                           '&:hover': {
//                             backgroundColor: courseDetails.color,
//                             opacity: 0.9
//                           },
//                         }}
//                       >
//                         Enroll Now
//                       </Button>
//                     </Box>

//                     <Divider />

//                     <Box>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                         This Course Includes:
//                       </Typography>
//                       <List dense>
//                         <ListItem sx={{ px: 0 }}>
//                           <ListItemText primary="50+ hours of video content" />
//                         </ListItem>
//                         <ListItem sx={{ px: 0 }}>
//                           <ListItemText primary="Downloadable resources" />
//                         </ListItem>
//                         <ListItem sx={{ px: 0 }}>
//                           <ListItemText primary="Certificate of completion" />
//                         </ListItem>
//                         <ListItem sx={{ px: 0 }}>
//                           <ListItemText primary="Full lifetime access" />
//                         </ListItem>
//                         <ListItem sx={{ px: 0 }}>
//                           <ListItemText primary="Q&A support" />
//                         </ListItem>
//                       </List>
//                     </Box>

//                     <Divider />

//                     <Box>
//                       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                         Certification
//                       </Typography>
//                       <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
//                         <CertIcon color="primary" sx={{ fontSize: 40 }} />
//                         <Typography variant="body1">
//                           {courseDetails.certification}
//                         </Typography>
//                       </Stack>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>

            
//   {/* Requirements */}

//                   <Card sx={{ borderRadius: 3, boxShadow: theme.shadows[2] }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <InfoIcon color="primary" sx={{ fontSize: 32 }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                     Requirements
//                   </Typography>
//                 </Stack>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   {courseDetails.prerequisites}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Don't worry if you're missing some prerequisites - we provide 
//                   introductory materials to get you up to speed.
//                 </Typography>
//               </CardContent>
//             </Card>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;            





















































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar,
//   Paper,
//   useMediaQuery
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
//   CheckCircle as CheckIcon,
//   MenuBook as SyllabusIcon,
//   CardMembership as CertIcon,
//   Info as InfoIcon
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ 
//       py: { xs: 2, sm: 4 }, 
//       backgroundColor: '#F8FAFC',
//       marginTop: { xs: '6rem', sm: '8rem' },
//       minHeight: 'calc(100vh - 8rem)'
//     }}>
//       <Container maxWidth="xl">
//         {/* Hero Section */}
//         <Paper elevation={0} sx={{ 
//           mb: { xs: 3, sm: 6 },
//           p: { xs: 2, sm: 4 },
//           borderRadius: { xs: 2, sm: 4 },
//           background: `linear-gradient(135deg, ${courseDetails.color}10, #ffffff)`,
//           border: `1px solid ${courseDetails.color}20`
//         }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//               <Chip
//                 label={courseDetails.category}
//                 size={isMobile ? 'small' : 'medium'}
//                 sx={{
//                   backgroundColor: `${courseDetails.color}20`,
//                   color: courseDetails.color,
//                   fontWeight: 700,
//                   mb: 2,
//                 }}
//               />
//               <Typography 
//                 variant="h2" 
//                 sx={{ 
//                   fontWeight: 800,
//                   fontSize: { 
//                     xs: '1.75rem', 
//                     sm: '2.25rem', 
//                     md: '2.75rem',
//                     lg: '3rem'
//                   },
//                   lineHeight: 1.2,
//                   mb: 2
//                 }}
//               >
//                 {courseDetails.title}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ 
//                   color: 'text.secondary', 
//                   mb: 3,
//                   fontSize: { xs: '0.875rem', sm: '1rem' }
//                 }}
//               >
//                 {courseDetails.descriptions}
//               </Typography>
              
//               <Stack 
//                 direction={isMobile ? 'column' : 'row'} 
//                 spacing={isMobile ? 1 : 2} 
//                 alignItems={isMobile ? 'flex-start' : 'center'} 
//                 sx={{ mb: 2 }}
//               >
//                 <Rating
//                   value={courseDetails.rating}
//                   precision={0.1}
//                   readOnly
//                   size={isMobile ? 'small' : 'medium'}
//                   icon={<StarIcon fontSize="inherit" />}
//                   sx={{
//                     color: courseDetails.color,
//                     '& .MuiRating-iconFilled': {
//                       color: courseDetails.color,
//                     },
//                   }}
//                 />
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   {courseDetails.rating} ({courseDetails.reviews} reviews)
//                 </Typography>
//               </Stack>
              
//               <Stack 
//                 direction="row" 
//                 spacing={isMobile ? 1 : 3} 
//                 sx={{ 
//                   flexWrap: 'wrap', 
//                   rowGap: 2,
//                   alignItems: 'center'
//                 }}
//               >
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <DurationIcon sx={{ 
//                     color: 'text.secondary',
//                     fontSize: isMobile ? '1rem' : '1.25rem'
//                   }} />
//                   <Typography variant={isMobile ? 'body2' : 'body1'}>
//                     {courseDetails.duration}
//                   </Typography>
//                 </Stack>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <StudentsIcon sx={{ 
//                     color: 'text.secondary',
//                     fontSize: isMobile ? '1rem' : '1.25rem'
//                   }} />
//                   <Typography variant={isMobile ? 'body2' : 'body1'}>
//                     {courseDetails.students}+ students
//                   </Typography>
//                 </Stack>
//                 <Chip
//                   label={courseDetails.level}
//                   size="small"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}15`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                   }}
//                 />
//               </Stack>
//             </Grid>
            
//             <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//               <Box sx={{
//                 height: { xs: '200px', sm: '250px', md: '350px' },
//                 borderRadius: { xs: 2, sm: 3 },
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[4],
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5',
//                 mb: { xs: 2, md: 0 }
//               }}>
//                 <img
//                   src={courseDetails.image}
//                   alt={courseDetails.title}
//                   style={{
//                     height: '100%',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Main Content */}
//         <Grid container spacing={3}>
//           {/* Left Column - Course Content */}
//           <Grid item xs={12} md={8}>
//             {/* Learning Outcomes */}
//             <Card sx={{ 
//               mb: { xs: 3, sm: 4 }, 
//               borderRadius: { xs: 2, sm: 3 }, 
//               boxShadow: theme.shadows[2] 
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <SchoolIcon color="primary" sx={{ fontSize: { xs: 28, sm: 32 } }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
//                     What You'll Learn
//                   </Typography>
//                 </Stack>
                
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Paper elevation={0} sx={{ 
//                         p: 2, 
//                         borderRadius: 2,
//                         backgroundColor: `${courseDetails.color}08`,
//                         height: '100%'
//                       }}>
//                         <Stack direction="row" spacing={2} alignItems="flex-start">
//                           <Avatar sx={{
//                             width: 28,
//                             height: 28,
//                             bgcolor: `${courseDetails.color}20`,
//                             color: courseDetails.color
//                           }}>
//                             <CheckIcon fontSize="small" />
//                           </Avatar>
//                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//                             {outcome}
//                           </Typography>
//                         </Stack>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>

//             {/* Curriculum */}
//             <Card sx={{ 
//               mb: { xs: 3, sm: 4 }, 
//               borderRadius: { xs: 2, sm: 3 }, 
//               boxShadow: theme.shadows[2] 
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <SyllabusIcon color="primary" sx={{ fontSize: { xs: 28, sm: 32 } }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
//                     Course Curriculum
//                   </Typography>
//                 </Stack>
                
//                 <List sx={{ 
//                   border: '1px solid',
//                   borderColor: 'divider',
//                   borderRadius: 2
//                 }}>
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem 
//                       key={index}
//                       divider={index < courseDetails.syllabus.length - 1}
//                       sx={{
//                         '&:hover': {
//                           backgroundColor: 'action.hover'
//                         }
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Stack direction="row" spacing={2} alignItems="center">
//                             <Avatar sx={{
//                               width: { xs: 28, sm: 32 },
//                               height: { xs: 28, sm: 32 },
//                               bgcolor: 'primary.main',
//                               color: 'primary.contrastText',
//                               fontSize: { xs: '0.875rem', sm: '1rem' }
//                             }}>
//                               {index + 1}
//                             </Avatar>
//                             <Typography variant={isMobile ? 'body2' : 'body1'}>
//                               {item}
//                             </Typography>
//                           </Stack>
//                         }
//                         secondary={
//                           <Typography variant="caption" color="text.secondary">
//                             {index % 2 === 0 ? 'Video · 15 min' : 'Reading · 10 min'}
//                           </Typography>
//                         }
//                         sx={{
//                           '& .MuiListItemText-primary': {
//                             mb: 0.5
//                           }
//                         }}
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//             </Card>

//             {/* Requirements */}
//             <Card sx={{ 
//               display: { xs: 'block', md: 'none' },
//               mb: { xs: 3, sm: 4 }, 
//               borderRadius: { xs: 2, sm: 3 }, 
//               boxShadow: theme.shadows[2] 
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                   <InfoIcon color="primary" sx={{ fontSize: { xs: 28, sm: 32 } }} />
//                   <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
//                     Requirements
//                   </Typography>
//                 </Stack>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   {courseDetails.prerequisites}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Don't worry if you're missing some prerequisites - we provide 
//                   introductory materials to get you up to speed.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Column - Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ 
//               position: { xs: 'static', md: 'sticky' },
//               top: '6rem',
//               mb: { xs: 3, md: 0 }
//             }}>
//               <Card sx={{ 
//                 borderRadius: { xs: 2, sm: 3 }, 
//                 boxShadow: theme.shadows[3], 
//                 mb: 3 
//               }}>
//                 <CardContent>
//                   <Stack spacing={3}>
//                     <Box sx={{ textAlign: 'center' }}>
                   
//                       <Button
//                         variant="contained"
//                         size={isMobile ? 'medium' : 'large'}
//                         fullWidth
//                         sx={{
//                           py: isMobile ? 1 : 1.5,
//                           borderRadius: 2,
//                           fontWeight: 700,
//                           fontSize: isMobile ? '1rem' : '1.1rem',
//                           backgroundColor: courseDetails.color,
//                           '&:hover': {
//                             backgroundColor: courseDetails.color,
//                             opacity: 0.9
//                           },
//                         }}
//                       >
//                         Enroll Now
//                       </Button>
//                     </Box>

//                     <Divider />

                  

//                     <Divider />

//                     <Box>
//                       <Typography variant="h5" sx={{ 
//                         fontWeight: 700, 
//                         mb: 2,
//                         fontSize: { xs: '1.25rem', sm: '1.5rem' }
//                       }}>
//                         Certification
//                       </Typography>
//                       <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
//                         <CertIcon color="primary" sx={{ fontSize: { xs: 32, sm: 40 } }} />
//                         <Typography variant={isMobile ? 'body2' : 'body1'}>
//                           {courseDetails.certification}
//                         </Typography>
//                       </Stack>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>

//               {/* Requirements (Desktop only) */}
//               <Card sx={{ 
//                 display: { xs: 'none', md: 'block' },
//                 borderRadius: 3, 
//                 boxShadow: theme.shadows[2] 
//               }}>
//                 <CardContent>
//                   <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
//                     <InfoIcon color="primary" sx={{ fontSize: 32 }} />
//                     <Typography variant="h4" sx={{ fontWeight: 700 }}>
//                       Requirements
//                     </Typography>
//                   </Stack>
//                   <Typography variant="body1" sx={{ mb: 2 }}>
//                     {courseDetails.prerequisites}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Don't worry if you're missing some prerequisites - we provide 
//                     introductory materials to get you up to speed.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;                   































































// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar,
//   Paper,
//   useMediaQuery
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
//   CheckCircle as CheckIcon,
//   MenuBook as SyllabusIcon,
//   CardMembership as CertIcon,
//   Info as InfoIcon
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const courseDetails = courses.find(item => item.id.toString() === id);

//   if (!courseDetails) {
//     return (
//       <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
//         <Typography variant="h4">Course not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ 
//       py: { xs: 2, md: 4 },
//       backgroundColor: '#F8FAFC',
//       marginTop: '8rem',
//       minHeight: 'calc(100vh - 8rem)'
//     }}>
//       <Container maxWidth="lg">
//         {/* Hero Section */}
//         <Paper elevation={0} sx={{ 
//           mb: { xs: 3, md: 6 },
//           p: { xs: 2, md: 4 },
//           borderRadius: { xs: 2, md: 3 },
//           background: `linear-gradient(135deg, ${courseDetails.color}10, #ffffff)`,
//           border: `1px solid ${courseDetails.color}20`
//         }}>
//           <Grid container spacing={3} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Stack spacing={2}>
//                 <Chip
//                   label={courseDetails.category}
//                   size="small"
//                   sx={{
//                     backgroundColor: `${courseDetails.color}20`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                     alignSelf: 'flex-start'
//                   }}
//                 />
//                 <Typography 
//                   variant="h1" 
//                   sx={{ 
//                     fontWeight: 800,
//                     fontSize: { 
//                       xs: '1.75rem', 
//                       md: '2.5rem'
//                     },
//                     lineHeight: 1.2
//                   }}
//                 >
//                   {courseDetails.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ color: 'text.secondary' }}
//                 >
//                   {courseDetails.descriptions}
//                 </Typography>
                
//                 <Stack direction="row" spacing={2} alignItems="center">
//                   <Rating
//                     value={courseDetails.rating}
//                     precision={0.1}
//                     readOnly
//                     size="small"
//                     icon={<StarIcon fontSize="inherit" />}
//                     sx={{
//                       color: courseDetails.color,
//                       '& .MuiRating-iconFilled': {
//                         color: courseDetails.color,
//                       },
//                     }}
//                   />
//                   <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                     {courseDetails.rating} ({courseDetails.reviews} reviews)
//                   </Typography>
//                 </Stack>
                
//                 <Stack direction="row" spacing={2} flexWrap="wrap" rowGap={1}>
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <DurationIcon sx={{ color: 'text.secondary', fontSize: '1rem' }} />
//                     <Typography variant="body2">{courseDetails.duration}</Typography>
//                   </Stack>
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <StudentsIcon sx={{ color: 'text.secondary', fontSize: '1rem' }} />
//                     <Typography variant="body2">{courseDetails.students}+ students</Typography>
//                   </Stack>
//                   <Chip
//                     label={courseDetails.level}
//                     size="small"
//                     sx={{
//                       backgroundColor: `${courseDetails.color}15`,
//                       color: courseDetails.color,
//                       fontWeight: 700,
//                     }}
//                   />
//                 </Stack>
//               </Stack>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box sx={{
//                 height: { xs: '240px', md: '320px' },
//                 borderRadius: 2,
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[2],
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5'
//               }}>
//                 <img
//                   src={courseDetails.image}
//                   alt={courseDetails.title}
//                   style={{
//                     height: '100%',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Main Content */}
//         <Grid container spacing={3}>
//           {/* Left Column - Course Content */}
//           <Grid item xs={12} md={8}>
//             {/* Learning Outcomes */}
//             <Card sx={{ mb: 3, borderRadius: 2, boxShadow: theme.shadows[1] }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
//                   <SchoolIcon color="primary" />
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     What You'll Learn
//                   </Typography>
//                 </Stack>
                
//                 <Grid container spacing={2}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={1.5} alignItems="flex-start">
//                         <CheckIcon fontSize="small" sx={{ 
//                           color: courseDetails.color,
//                           mt: '2px'
//                         }} />
//                         <Typography variant="body2">
//                           {outcome}
//                         </Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>

//             {/* Curriculum */}
//             <Card sx={{ mb: 3, borderRadius: 2, boxShadow: theme.shadows[1] }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
//                   <SyllabusIcon color="primary" />
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     Course Curriculum
//                   </Typography>
//                 </Stack>
                
//                 <List sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem 
//                       key={index}
//                       divider={index < courseDetails.syllabus.length - 1}
//                       sx={{ py: 1.5 }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Typography variant="body2">
//                             {index + 1}. {item}
//                           </Typography>
//                         }
//                         secondary={
//                           <Typography variant="caption" color="text.secondary">
//                             {index % 2 === 0 ? 'Video · 15 min' : 'Reading · 10 min'}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//             </Card>

//             {/* Requirements (Mobile only) */}
//             <Card sx={{ 
//               display: { xs: 'block', md: 'none' },
//               mb: 3,
//               borderRadius: 2,
//               boxShadow: theme.shadows[1]
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
//                   <InfoIcon color="primary" />
//                   <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                     Requirements
//                   </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   {courseDetails.prerequisites}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Column - Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ position: { xs: 'static', md: 'sticky' }, top: '6rem' }}>
//               <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[2], mb: 3 }}>
//                 <CardContent>
//                   <Stack spacing={3}>
//                     <Box sx={{ textAlign: 'center' }}>
//                       <Button
//                         variant="contained"
//                         size="large"
//                         fullWidth
//                         sx={{
//                           py: 1.5,
//                           borderRadius: 1,
//                           fontWeight: 700,
//                           backgroundColor: courseDetails.color,
//                           '&:hover': {
//                             backgroundColor: courseDetails.color,
//                             opacity: 0.9
//                           },
//                         }}
//                       >
//                         Enroll Now
//                       </Button>
//                     </Box>

//                     <Divider />

//                     <Box>
//                       <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
//                         Certification
//                       </Typography>
//                       <Stack direction="row" spacing={2} alignItems="center">
//                         <CertIcon color="primary" />
//                         <Typography variant="body2">
//                           {courseDetails.certification}
//                         </Typography>
//                       </Stack>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>

//               {/* Requirements (Desktop only) */}
//               <Card sx={{ 
//                 display: { xs: 'none', md: 'block' },
//                 borderRadius: 2,
//                 boxShadow: theme.shadows[1]
//               }}>
//                 <CardContent>
//                   <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
//                     <InfoIcon color="primary" />
//                     <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                       Requirements
//                     </Typography>
//                   </Stack>
//                   <Typography variant="body2" sx={{ mb: 1 }}>
//                     {courseDetails.prerequisites}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;             

























































// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Chip,
//   Rating,
//   Stack,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   useTheme,
//   Card,
//   CardContent,
//   Avatar,
    

//   Paper,
//   useMediaQuery
// } from '@mui/material';
// import {
//   AccessTime as DurationIcon,
//   People as StudentsIcon,
//   Star as StarIcon,
//   School as SchoolIcon,
//   CheckCircle as CheckIcon,
//   MenuBook as SyllabusIcon,
//   CardMembership as CertIcon,
//   Info as InfoIcon,
  
// } from '@mui/icons-material';
// import { courses } from '../../../Courses';

// const CourseDetailsPage = () => {
//   const { id } = useParams();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
//   const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px
//   const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // > 1200px

//   const courseDetails = courses.find(item => item.id.toString() === id);
    

 

   



//   if (!courseDetails) {
//       return (
//         <Box sx={{ 
//           py: 8, 
//           textAlign: 'center',
//           minHeight: '80vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           // mt:'5rem'
//         }}>
//           <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ 
//             mb: 2, 
//             color: theme.palette.error.main,
//             px: 2
//           }}>
//             The page can’t be found.

//           </Typography>
        
//         </Box>
//       );
//     }
  

//   return (
//     <Box sx={{ 
//       py: { xs: 2, sm: 3, md: 4 },
//       backgroundColor: '#F8FAFC',
//       marginTop: { xs: '90px', sm: '95px' },
//       minHeight: 'calc(100vh - 40px)',
      
//     }}>
//       <Container maxWidth={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}>
//         {/* Hero Section */}
//         <Paper elevation={0} sx={{ 
//           mb: { xs: 2, sm: 3, md: 4 },
//           p: { xs: 2, sm: 3, md: 4 },
//           borderRadius: { xs: 1, sm: 2, md: 3 },
//           background: `linear-gradient(135deg, ${courseDetails.color}10, #ffffff)`,
//           border: `1px solid ${courseDetails.color}20`
//         }}>
//           <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
//             <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//               <Stack spacing={{ xs: 1.5, md: 2 }}>
//                 <Chip
//                   label={courseDetails.category}
//                   size={isMobile ? 'small' : 'medium'}
//                   sx={{
//                     backgroundColor: `${courseDetails.color}20`,
//                     color: courseDetails.color,
//                     fontWeight: 700,
//                     alignSelf: 'flex-start'
//                   }}
//                 />
                
//                 <Typography 
//                   variant="h1" 
//                   sx={{ 
//                     fontWeight: 800,
//                     fontSize: { 
//                       xs: '1.5rem',   // Mobile
//                       sm: '1.75rem',  // Tablet
//                       md: '2rem',     // Laptop
//                       lg: '2.25rem'   // Desktop
//                     },
//                     lineHeight: 1.2
//                   }}
//                 >
//                   {courseDetails.title}
//                 </Typography>
                
//                 <Typography
//                   variant={isMobile ? 'body2' : 'body1'}
//                   sx={{ color: 'text.secondary' }}
//                 >
//                   {courseDetails.descriptions}
//                 </Typography>
                
//                 <Stack 
//                   direction="row" 
//                   spacing={1.5} 
//                   alignItems="center"
//                   flexWrap="wrap"
//                   rowGap={1}
//                 >
//                   <Rating
//                     value={courseDetails.rating}
//                     precision={0.1}
//                     readOnly
//                     size={isMobile ? 'small' : 'medium'}
//                     icon={<StarIcon fontSize="inherit" />}
//                     sx={{
//                       color: courseDetails.color,
//                       '& .MuiRating-iconFilled': {
//                         color: courseDetails.color,
//                       },
//                     }}
//                   />
//                   <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ fontWeight: 600 }}>
//                     {courseDetails.rating} ({courseDetails.reviews} reviews)
//                   </Typography>
//                 </Stack>
                
//                 <Stack 
//                   direction="row" 
//                   spacing={{ xs: 1.5, md: 2 }} 
//                   flexWrap="wrap" 
//                   rowGap={1}
//                   alignItems="center"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <DurationIcon sx={{ 
//                       color: 'text.secondary', 
//                       fontSize: isMobile ? '1rem' : '1.25rem' 
//                     }} />
//                     <Typography variant={isMobile ? 'body2' : 'body1'}>
//                       {courseDetails.duration}
//                     </Typography>
//                   </Stack>
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <StudentsIcon sx={{ 
//                       color: 'text.secondary', 
//                       fontSize: isMobile ? '1rem' : '1.25rem' 
//                     }} />
//                     <Typography variant={isMobile ? 'body2' : 'body1'}>
//                       {courseDetails.students}+ students
//                     </Typography>
//                   </Stack>
//                   <Chip
//                     label={courseDetails.level}
//                     size={isMobile ? 'small' : 'medium'}
//                     sx={{
//                       backgroundColor: `${courseDetails.color}15`,
//                       color: courseDetails.color,
//                       fontWeight: 700,
//                     }}
//                   />
//                 </Stack>
//               </Stack>
//             </Grid>
            
//             <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//               <Box sx={{
//                 height: { 
//                   xs: '200px',  // Mobile
//                   sm: '250px',  // Tablet
//                   md: '300px', // Laptop
//                   lg: '350px'   // Desktop
//                 },
//                 borderRadius: { xs: 1, sm: 2 },
//                 overflow: 'hidden',
//                 boxShadow: theme.shadows[2],
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: '#f5f5f5',
//                 marginTop:"1.5rem"
//               }}>
//                 <img
//                   src={courseDetails.image}
//                   alt={courseDetails.title}
//                   style={{
//                     height: '100%',
//                     width: 'auto',
//                     maxWidth: '100%',
//                     objectFit: "contain"
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Main Content */}
//         <Grid container spacing={{ xs: 2, md: 3 }}>
//           {/* Left Column - Course Content */}
//           <Grid item xs={12} md={8}>
//             {/* Learning Outcomes */}
//             <Card sx={{ 
//               mb: { xs: 2, sm: 3 },
//               borderRadius: { xs: 1, sm: 2 },
//               boxShadow: theme.shadows[1]
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
//                   <SchoolIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
//                   <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
//                     What You'll Learn
//                   </Typography>
//                 </Stack>
                
//                 <Grid container spacing={1.5}>
//                   {courseDetails.learningOutcomes.map((outcome, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Stack direction="row" spacing={1.5} alignItems="flex-start">
//                         <CheckIcon 
//                           fontSize={isMobile ? 'small' : 'medium'} 
//                           sx={{ color: courseDetails.color, mt: '2px' }} 
//                         />
//                         <Typography variant={isMobile ? 'body2' : 'body1'}>
//                           {outcome}
//                         </Typography>
//                       </Stack>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>

//             {/* Curriculum */}
//             <Card sx={{ 
//               mb: { xs: 2, sm: 3 },
//               borderRadius: { xs: 1, sm: 2 },
//               boxShadow: theme.shadows[1]
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
//                   <SyllabusIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
//                   <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
//                     Course Curriculum
//                   </Typography>
//                 </Stack>
                
//                 <List sx={{ 
//                   border: '1px solid', 
//                   borderColor: 'divider', 
//                   borderRadius: 1 
//                 }}>
//                   {courseDetails.syllabus.map((item, index) => (
//                     <ListItem 
//                       key={index}
//                       divider={index < courseDetails.syllabus.length - 1}
//                       sx={{ 
//                         py: { xs: 1, sm: 1.5 },
//                         '&:hover': {
//                           backgroundColor: 'action.hover'
//                         }
//                       }}
//                     >
//                       <ListItemText
//                         primary={
//                           <Typography variant={isMobile ? 'body2' : 'body1'}>
//                             {index + 1}. {item}
//                           </Typography>
//                         }
//                         // secondary={
//                         //   <Typography variant="caption" color="text.secondary">
//                         //     {index % 2 === 0 ? 'Video · 15 min' : 'Reading · 10 min'}
//                         //   </Typography>
//                         // }
//                         sx={{
//                           '& .MuiListItemText-primary': {
//                             mb: 0.5
//                           }
//                         }}
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </CardContent>
//             </Card>

//             {/* Requirements (Mobile only) */}
//             <Card sx={{ 
//               display: { xs: 'block', md: 'none' },
//               mb: { xs: 2, sm: 3 },
//               borderRadius: { xs: 1, sm: 2 },
//               boxShadow: theme.shadows[1]
//             }}>
//               <CardContent>
//                 <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
//                   <InfoIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
//                   <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
//                     Requirements
//                   </Typography>
//                 </Stack>
//                 <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ mb: 1 }}>
//                   {courseDetails.prerequisites}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Column - Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ 
//               position: { xs: 'static', md: 'sticky' },
//               top: { md: '80px' },
//               mb: { xs: 2, md: 0 }
//             }}>
//               <Card sx={{ 
//                 borderRadius: { xs: 1, sm: 2 },
//                 boxShadow: theme.shadows[2],
//                 mb: { xs: 2, sm: 3 }
//               }}>
//                 <CardContent>
//                   <Stack spacing={2.5}>
//                     <Box sx={{ textAlign: 'center' }}>
//                       <Button
//                         variant="contained"
//                         size={isMobile ? 'medium' : 'large'}
//                         fullWidth
//                         sx={{
//                           py: { xs: 1, sm: 1.25, md: 1.5 },
//                           borderRadius: 1,
//                           fontWeight: 700,
//                           fontSize: {
//                             xs: '0.875rem',
//                             sm: '0.9375rem',
//                             md: '1rem'
//                           },
//                           backgroundColor: courseDetails.color,
//                           '&:hover': {
//                             backgroundColor: courseDetails.color,
//                             opacity: 0.9
//                           },
//                         }}
//                       >
//                         Enroll Now
//                       </Button>
//                     </Box>

//                     <Divider />

//                     <Box>
//                       <Typography 
//                         variant={isMobile ? 'h6' : 'h5'} 
//                         sx={{ fontWeight: 700, mb: 1 }}
//                       >
//                         Certification
//                       </Typography>
//                       <Stack direction="row" spacing={1.5} alignItems="center">
//                         <CertIcon 
//                           color="primary" 
//                           fontSize={isMobile ? 'small' : 'medium'} 
//                         />
//                         <Typography variant={isMobile ? 'body2' : 'body1'}>
//                           {courseDetails.certification}
//                         </Typography>
//                       </Stack>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>

//               {/* Requirements (Desktop only) */}
//               <Card sx={{ 
//                 display: { xs: 'none', md: 'block' },
//                 borderRadius: { xs: 1, sm: 2 },
//                 boxShadow: theme.shadows[1]
//               }}>
//                 <CardContent>
//                   <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
//                     <InfoIcon color="primary" fontSize="medium" />
//                     <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                       Requirements
//                     </Typography>
//                   </Stack>
//                   <Typography variant="body1" sx={{ mb: 1 }}>
//                     {courseDetails.prerequisites}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CourseDetailsPage;   













































import {  useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Grid,
  Chip,
  Rating,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  Card,
  CardContent,
  // Avatar,
  Paper,
  useMediaQuery
} from '@mui/material';
import {
  AccessTime as DurationIcon,
  People as StudentsIcon,
  Star as StarIcon,
  School as SchoolIcon,
  CheckCircle as CheckIcon,
  MenuBook as SyllabusIcon,
  CardMembership as CertIcon,
  Info as InfoIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { courses } from '../../../Courses';
import { useEffect } from 'react';
// import { Typography } from '@mui/material';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
  // const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // > 1200px

  const courseDetails = courses.find(item => item.id.toString() === id); 
  const handleCourse=()=>{
    navigate(-1)
  }

  if (!courseDetails) {
    return (
      <Box sx={{ 
        py: 8, 
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ 
          mb: 2, 
          color: theme.palette.error.main,
          px: 2
        }}>
          The page can't be found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      py: { xs: 2, sm: 3, md: 4 },
      backgroundColor: '#F8FAFC',
      marginTop: { xs: '90px', sm: '95px' },
      minHeight: 'calc(100vh - 40px)',
    }}>
      <Container maxWidth={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}>
        {/* Back Button */}
        
        
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleCourse}
          sx={{
            mb: 2,
            mt:4,
           backgroundColor:"blueviolet",
           color:'white'
          }}
        >
          Back to Courses
        </Button>
      

        {/* Hero Section */}
        <Paper elevation={0} sx={{ 
          mb: { xs: 2, sm: 3, md: 4 },
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: { xs: 1, sm: 2, md: 3 },
          background: `linear-gradient(135deg, ${courseDetails.color}10, #ffffff)`,
          border: `1px solid ${courseDetails.color}20`
        }}>
          <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Stack spacing={{ xs: 1.5, md: 2 }}>
                <Chip
                  label={courseDetails.category}
                  size={isMobile ? 'small' : 'medium'}
                  sx={{
                    backgroundColor: `${courseDetails.color}20`,
                    color: courseDetails.color,
                    fontWeight: 700,
                    alignSelf: 'flex-start'
                  }}
                />
                
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { 
                      xs: '1.5rem',   // Mobile
                      sm: '1.75rem',  // Tablet
                      md: '2rem',     // Laptop
                      lg: '2.25rem'   // Desktop
                    },
                    lineHeight: 1.2
                  }}
                >
                  {courseDetails.title}
                </Typography>
                
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  sx={{ color: 'text.secondary' }}
                >
                  {courseDetails.descriptions}
                </Typography>
                
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  alignItems="center"
                  flexWrap="wrap"
                  rowGap={1}
                >
                  <Rating
                    value={courseDetails.rating}
                    precision={0.1}
                    readOnly
                    size={isMobile ? 'small' : 'medium'}
                    icon={<StarIcon fontSize="inherit" />}
                    sx={{
                      color: courseDetails.color,
                      '& .MuiRating-iconFilled': {
                        color: courseDetails.color,
                      },
                    }}
                  />
                  <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ fontWeight: 600 }}>
                    {courseDetails.rating} ({courseDetails.reviews} reviews)
                  </Typography>
                </Stack>
                
                <Stack 
                  direction="row" 
                  spacing={{ xs: 1.5, md: 2 }} 
                  flexWrap="wrap" 
                  rowGap={1}
                  alignItems="center"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <DurationIcon sx={{ 
                      color: 'text.secondary', 
                      fontSize: isMobile ? '1rem' : '1.25rem' 
                    }} />
                    <Typography variant={isMobile ? 'body2' : 'body1'}>
                      {courseDetails.duration}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <StudentsIcon sx={{ 
                      color: 'text.secondary', 
                      fontSize: isMobile ? '1rem' : '1.25rem' 
                    }} />
                    <Typography variant={isMobile ? 'body2' : 'body1'}>
                      {courseDetails.students}+ students
                    </Typography>
                  </Stack>
                  <Chip
                    label={courseDetails.level}
                    size={isMobile ? 'small' : 'medium'}
                    sx={{
                      backgroundColor: `${courseDetails.color}15`,
                      color: courseDetails.color,
                      fontWeight: 700,
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box sx={{
                height: { 
                  xs: '200px',  // Mobile
                  sm: '250px',  // Tablet
                  md: '300px', // Laptop
                  lg: '350px'   // Desktop
                },
                borderRadius: { xs: 1, sm: 2 },
                overflow: 'hidden',
                boxShadow: theme.shadows[2],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                marginTop:"1.5rem"
              }}>
                <img
                  src={courseDetails.image}
                  alt={courseDetails.title}
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {/* Left Column - Course Content */}
          <Grid item xs={12} md={8}>
            {/* Learning Outcomes */}
            <Card sx={{ 
              mb: { xs: 2, sm: 3 },
              borderRadius: { xs: 1, sm: 2 },
              boxShadow: theme.shadows[1]
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <SchoolIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
                  <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
                    What You'll Learn
                  </Typography>
                </Stack>
                
                <Grid container spacing={1.5}>
                  {courseDetails.learningOutcomes.map((outcome, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckIcon 
                          fontSize={isMobile ? 'small' : 'medium'} 
                          sx={{ color: courseDetails.color, mt: '2px' }} 
                        />
                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                          {outcome}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card sx={{ 
              mb: { xs: 2, sm: 3 },
              borderRadius: { xs: 1, sm: 2 },
              boxShadow: theme.shadows[1]
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <SyllabusIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
                  <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
                    Course Curriculum
                  </Typography>
                </Stack>
                
                <List sx={{ 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 1 
                }}>
                  {courseDetails.syllabus.map((item, index) => (
                    <ListItem 
                      key={index}
                      divider={index < courseDetails.syllabus.length - 1}
                      sx={{ 
                        py: { xs: 1, sm: 1.5 },
                        '&:hover': {
                          backgroundColor: 'action.hover'
                        }
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant={isMobile ? 'body2' : 'body1'}>
                            {index + 1}. {item}
                          </Typography>
                        }
                        sx={{
                          '& .MuiListItemText-primary': {
                            mb: 0.5
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Requirements (Mobile only) */}
            <Card sx={{ 
              display: { xs: 'block', md: 'none' },
              mb: { xs: 2, sm: 3 },
              borderRadius: { xs: 1, sm: 2 },
              boxShadow: theme.shadows[1]
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <InfoIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
                  <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700 }}>
                    Requirements
                  </Typography>
                </Stack>
                <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ mb: 1 }}>
                  {courseDetails.prerequisites}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              position: { xs: 'static', md: 'sticky' },
              top: { md: '80px' },
              mb: { xs: 2, md: 0 }
            }}>
              <Card sx={{ 
                borderRadius: { xs: 1, sm: 2 },
                boxShadow: theme.shadows[2],
                mb: { xs: 2, sm: 3 }
              }}>
                <CardContent>
                  <Stack spacing={2.5}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        size={isMobile ? 'medium' : 'large'}
                        fullWidth
                        sx={{
                          py: { xs: 1, sm: 1.25, md: 1.5 },
                          borderRadius: 1,
                          fontWeight: 700,
                          fontSize: {
                            xs: '0.875rem',
                            sm: '0.9375rem',
                            md: '1rem'
                          },
                          backgroundColor: courseDetails.color,
                          '&:hover': {
                            backgroundColor: courseDetails.color,
                            opacity: 0.9
                          },
                        }}
                      >
                        Enroll Now
                      </Button>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography 
                        variant={isMobile ? 'h6' : 'h5'} 
                        sx={{ fontWeight: 700, mb: 1 }}
                      >
                        Certification
                      </Typography>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <CertIcon 
                          color="primary" 
                          fontSize={isMobile ? 'small' : 'medium'} 
                        />
                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                          {courseDetails.certification}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Requirements (Desktop only) */}
              <Card sx={{ 
                display: { xs: 'none', md: 'block' },
                borderRadius: { xs: 1, sm: 2 },
                boxShadow: theme.shadows[1]
              }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                    <InfoIcon color="primary" fontSize="medium" />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Requirements
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {courseDetails.prerequisites}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseDetailsPage;









































// import React from 'react';
// import { 
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardHeader,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button,
//   Avatar,
//   useTheme,
//   useMediaQuery,
//   createTheme,
//   ThemeProvider
// } from '@mui/material';
// import {
//   Home as HomeIcon,
//   Business as BusinessIcon,
//   School as SchoolIcon,
//   Favorite as FavoriteIcon,
//   CalendarToday as CalendarIcon,
//   People as PeopleIcon
// } from '@mui/icons-material';
// import { styled } from '@mui/system';

// // Default theme fallbacks
// const defaultTheme = createTheme();

// // Safe theme accessor function
// const getThemeValue = (theme, path, fallback) => {
//   try {
//     return path.split('.').reduce((obj, key) => obj?.[key], theme) ?? fallback;
//   } catch {
//     return fallback;
//   }
// };

// // Styled components with proper fallbacks
// const StyledCard = styled(Card, {
//   shouldForwardProp: (prop) => prop !== 'highlighted',
// })(({ theme, highlighted }) => {
//   const secondaryColor = getThemeValue(theme, 'palette.secondary.main', '#1976d2');
//   const shadow = getThemeValue(theme, 'shadows.6', '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14)');
//   const white = getThemeValue(theme, 'palette.common.white', '#ffffff');
  
//   return {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-10px)',
//       boxShadow: shadow
//     },
//     ...(highlighted && {
//       border: `2px solid ${secondaryColor}`,
//       position: 'relative',
//       '&::before': {
//         content: '"Most Popular"',
//         position: 'absolute',
//         top: getThemeValue(theme, 'spacing(-1.5)', '-12px'),
//         right: getThemeValue(theme, 'spacing(2.5)', '20px'),
//         backgroundColor: secondaryColor,
//         color: white,
//         padding: getThemeValue(theme, 'spacing(0.5, 2)', '4px 16px'),
//         borderRadius: '20px',
//         fontSize: '0.8rem',
//         fontWeight: 'bold',
//         zIndex: 1
//       }
//     })
//   };
// });

// const ServiceIcon = styled(Avatar)(({ theme }) => {
//   const secondaryLight = getThemeValue(theme, 'palette.secondary.light', '#42a5f5');
//   const secondaryMain = getThemeValue(theme, 'palette.secondary.main', '#1976d2');
  
//   return {
//     width: 60,
//     height: 60,
//     margin: getThemeValue(theme, 'spacing(0, auto, 2)', '0 auto 16px'),
//     backgroundColor: secondaryLight,
//     color: secondaryMain
//   };
// });

// const ServicesComponent = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const services = [
//     {
//       title: 'Home Visit Yoga',
//       icon: <HomeIcon fontSize="large" />,
//       description: 'Personalized yoga sessions in the comfort of your own home. Perfect for individuals or small groups.',
//       features: [
//         { icon: <FavoriteIcon />, text: 'Customized to your needs' },
//         { icon: <CalendarIcon />, text: 'Flexible scheduling' },
//         { icon: <PeopleIcon />, text: 'Private or small group' }
//       ],
//       cta: 'Book a Session'
//     },
//     {
//       title: 'Corporate Yoga',
//       icon: <BusinessIcon fontSize="large" />,
//       description: 'Boost productivity and reduce workplace stress with on-site yoga sessions for your team.',
//       features: [
//         { icon: <FavoriteIcon />, text: 'Stress reduction' },
//         { icon: <CalendarIcon />, text: 'Lunchtime or after-work sessions' },
//         { icon: <PeopleIcon />, text: 'Team building through yoga' }
//       ],
//       cta: 'Inquire Now',
//       highlighted: true
//     },
//     {
//       title: 'School Yoga Programs',
//       icon: <SchoolIcon fontSize="large" />,
//       description: 'Age-appropriate yoga for students to improve focus, flexibility, and emotional regulation.',
//       features: [
//         { icon: <FavoriteIcon />, text: 'Improves concentration' },
//         { icon: <CalendarIcon />, text: 'Regular school programs' },
//         { icon: <PeopleIcon />, text: 'Whole class participation' }
//       ],
//       cta: 'Learn More'
//     }
//   ];

//   // Safe theme values
//   const grey100 = getThemeValue(theme, 'palette.grey.100', '#f5f5f5');
//   const textPrimary = getThemeValue(theme, 'palette.text.primary', 'rgba(0, 0, 0, 0.87)');
//   const textSecondary = getThemeValue(theme, 'palette.text.secondary', 'rgba(0, 0, 0, 0.6)');

//   return (
//     <Box sx={{ 
//       py: getThemeValue(theme, 'spacing(10)', '80px'),
//       backgroundColor: grey100
//     }}>
//       <Container maxWidth="lg">
//         <Box textAlign="center" mb={getThemeValue(theme, 'spacing(6)', '48px')}>
//           <Typography 
//             variant="h3" 
//             component="h2" 
//             gutterBottom
//             sx={{ 
//               fontWeight: 700,
//               color: textPrimary
//             }}
//           >
//             Our Yoga Services
//           </Typography>
//           <Typography 
//             variant="subtitle1"
//             sx={{
//               color: textSecondary
//             }}
//           >
//             Tailored yoga experiences for every need
//           </Typography>
//         </Box>

//         <Grid container spacing={getThemeValue(theme, 'spacing(4)', '32px')}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <StyledCard highlighted={service.highlighted}>
//                 <CardHeader
//                   avatar={
//                     <ServiceIcon>
//                       {service.icon}
//                     </ServiceIcon>
//                   }
//                   sx={{
//                     '& .MuiCardHeader-content': {
//                       display: 'flex',
//                       justifyContent: 'center'
//                     }
//                   }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography 
//                     variant="h5" 
//                     component="h3" 
//                     gutterBottom
//                     textAlign="center"
//                     sx={{
//                       fontWeight: 600
//                     }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography 
//                     variant="body1" 
//                     paragraph
//                     textAlign="center"
//                     sx={{
//                       color: textSecondary,
//                       mb: getThemeValue(theme, 'spacing(3)', '24px')
//                     }}
//                   >
//                     {service.description}
//                   </Typography>
                  
//                   <List dense>
//                     {service.features.map((feature, i) => (
//                       <ListItem key={i} disableGutters>
//                         <ListItemIcon sx={{ 
//                           minWidth: 36, 
//                           color: getThemeValue(theme, 'palette.secondary.main', '#1976d2')
//                         }}>
//                           {feature.icon}
//                         </ListItemIcon>
//                         <ListItemText 
//                           primary={feature.text} 
//                           primaryTypographyProps={{
//                             variant: 'body2'
//                           }}
//                         />
//                       </ListItem>
//                     ))}
//                   </List>
//                 </CardContent>
//                 <Box sx={{ 
//                   p: getThemeValue(theme, 'spacing(2)', '16px'), 
//                   textAlign: 'center' 
//                 }}>
//                   <Button 
//                     variant="contained" 
//                     color="secondary"
//                     size={isMobile ? 'medium' : 'large'}
//                     fullWidth
//                   >
//                     {service.cta}
//                   </Button>
//                 </Box>
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// // Wrap with ThemeProvider for safety
// const Services = () => {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <ServicesComponent />
//     </ThemeProvider>
//   );
// };

// export default Services;   





































































// // import React from 'react';
// import { 
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardHeader,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button,
//   Avatar,
//   useTheme,
//   useMediaQuery,
//   createTheme,
//   ThemeProvider,
//   Zoom,
//   Fade
// } from '@mui/material';
// import {
//   Home as HomeIcon,
//   Business as BusinessIcon,
//   School as SchoolIcon,
//   Favorite as FavoriteIcon,
//   CalendarToday as CalendarIcon,
//   People as PeopleIcon,
//   Spa as SpaIcon
// } from '@mui/icons-material';
// import { styled, keyframes } from '@mui/system';

// // Floating animation for cards
// const floatAnimation = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `;

// // Pulse animation for featured card
// const pulseAnimation = keyframes`
//   0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
//   70% { box-shadow: 0 0 0 15px rgba(25, 118, 210, 0); }
//   100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
// `;

// const StyledCard = styled(Card, {
//   shouldForwardProp: (prop) => prop !== 'highlighted',
// })(({ theme, highlighted }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   background: theme.palette.background.paper,
//   boxShadow: theme.shadows[4],
//   '&:hover': {
//     animation: `${floatAnimation} 3s ease-in-out infinite`,
//     boxShadow: theme.shadows[8]
//   },
//   ...(highlighted && {
//     border: `3px solid ${theme.palette.secondary.main}`,
//     position: 'relative',
//     animation: `${pulseAnimation} 2s infinite`,
//     '&::before': {
//       content: '"Most Popular"',
//       position: 'absolute',
//       top: theme.spacing(-1.5),
//       right: theme.spacing(2.5),
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.palette.common.white,
//       padding: theme.spacing(0.5, 2),
//       borderRadius: '20px',
//       fontSize: '0.8rem',
//       fontWeight: 'bold',
//       zIndex: 1,
//       boxShadow: theme.shadows[2]
//     }
//   })
// }));

// const ServiceIcon = styled(Avatar)(({ theme }) => ({
//   width: 80,
//   height: 80,
//   margin: theme.spacing(0, 'auto', 2),
//   backgroundColor: theme.palette.mode === 'light' 
//     ? theme.palette.secondary.light 
//     : theme.palette.secondary.dark,
//   color: theme.palette.secondary.main,
//   '& svg': {
//     fontSize: '2.5rem'
//   }
// }));

// const ServicesComponent = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const services = [
//     {
//       title: 'Home Visit Yoga',
//       icon: <HomeIcon />,
//       description: 'Personalized yoga sessions in the comfort of your own home. Perfect for individuals or small groups.',
//       features: [
//         { icon: <FavoriteIcon color="secondary" />, text: 'Customized to your needs' },
//         { icon: <CalendarIcon color="secondary" />, text: 'Flexible scheduling' },
//         { icon: <PeopleIcon color="secondary" />, text: 'Private or small group' }
//       ],
//       cta: 'Book a Session'
//     },
//     {
//       title: 'Corporate Yoga',
//       icon: <BusinessIcon />,
//       description: 'Boost productivity and reduce workplace stress with on-site yoga sessions for your team.',
//       features: [
//         { icon: <FavoriteIcon color="secondary" />, text: 'Stress reduction' },
//         { icon: <CalendarIcon color="secondary" />, text: 'Lunchtime or after-work sessions' },
//         { icon: <PeopleIcon color="secondary" />, text: 'Team building through yoga' }
//       ],
//       cta: 'Inquire Now',
//       highlighted: true
//     },
//     {
//       title: 'School Yoga Programs',
//       icon: <SchoolIcon />,
//       description: 'Age-appropriate yoga for students to improve focus, flexibility, and emotional regulation.',
//       features: [
//         { icon: <FavoriteIcon color="secondary" />, text: 'Improves concentration' },
//         { icon: <CalendarIcon color="secondary" />, text: 'Regular school programs' },
//         { icon: <PeopleIcon color="secondary" />, text: 'Whole class participation' }
//       ],
//       cta: 'Learn More'
//     }
//   ];

//   return (
//     <Box sx={{ 
//       py: 10,
//       background: theme.palette.mode === 'light'
//         ? 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8ed 100%)'
//         : 'linear-gradient(to bottom, #121212 0%, #1e1e1e 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: -100,
//         right: -100,
//         width: 400,
//         height: 400,
//         background: theme.palette.secondary.light,
//         opacity: 0.1,
//         borderRadius: '50%',
//         zIndex: 0
//       }
//     }}>
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <Fade in timeout={1000}>
//           <Box textAlign="center" mb={8}>
//             <Typography 
//               variant="h3" 
//               component="h2" 
//               gutterBottom
//               sx={{ 
//                 fontWeight: 800,
//                 color: 'text.primary',
//                 letterSpacing: '1px'
//               }}
//             >
//               <SpaIcon color="secondary" sx={{ 
//                 verticalAlign: 'middle', 
//                 fontSize: '2.5rem',
//                 mr: 2 
//               }} />
//               Our Yoga Services
//             </Typography>
//             <Typography 
//               variant="subtitle1"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: '700px',
//                 mx: 'auto',
//                 fontSize: '1.1rem'
//               }}
//             >
//               Discover the perfect yoga experience tailored to your needs and lifestyle
//             </Typography>
//           </Box>
//         </Fade>

//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Zoom in timeout={800 + (index * 200)}>
//                 <StyledCard highlighted={service.highlighted}>
//                   <CardHeader
//                     avatar={
//                       <ServiceIcon>
//                         {service.icon}
//                       </ServiceIcon>
//                     }
//                     sx={{
//                       '& .MuiCardHeader-content': {
//                         display: 'flex',
//                         justifyContent: 'center'
//                       }
//                     }}
//                   />
//                   <CardContent sx={{ flexGrow: 1, px: 4 }}>
//                     <Typography 
//                       variant="h5" 
//                       component="h3" 
//                       gutterBottom
//                       textAlign="center"
//                       sx={{
//                         fontWeight: 700,
//                         color: 'text.primary',
//                         mb: 3
//                       }}
//                     >
//                       {service.title}
//                     </Typography>
//                     <Typography 
//                       variant="body1" 
//                       paragraph
//                       textAlign="center"
//                       sx={{
//                         color: 'text.secondary',
//                         mb: 3,
//                         minHeight: '72px'
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
                    
//                     <List dense sx={{ mb: 2 }}>
//                       {service.features.map((feature, i) => (
//                         <ListItem key={i} disableGutters>
//                           <ListItemIcon sx={{ 
//                             minWidth: 36,
//                             color: 'secondary.main'
//                           }}>
//                             {feature.icon}
//                           </ListItemIcon>
//                           <ListItemText 
//                             primary={feature.text} 
//                             primaryTypographyProps={{
//                               variant: 'body2',
//                               sx: { fontWeight: 500 }
//                             }}
//                           />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </CardContent>
//                   <Box sx={{ 
//                     p: 3, 
//                     textAlign: 'center',
//                     pt: 0
//                   }}>
//                     <Button 
//                       variant="contained" 
//                       color="secondary"
//                       size={isMobile ? 'medium' : 'large'}
//                       fullWidth
//                       sx={{
//                         fontWeight: 700,
//                         letterSpacing: '0.5px',
//                         py: 1.5,
//                         borderRadius: '50px',
//                         textTransform: 'none',
//                         fontSize: '1rem'
//                       }}
//                     >
//                       {service.cta}
//                     </Button>
//                   </Box>
//                 </StyledCard>
//               </Zoom>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// const Services = () => {
//   return (
//     <ThemeProvider theme={createTheme()}>
//       <ServicesComponent />
//     </ThemeProvider>
//   );
// };

// export default Services;  
































































// import React from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Zoom,
  Fade
} from '@mui/material';
import {
  Home as HomeIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Favorite as FavoriteIcon,
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Spa as SpaIcon
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/system';

// Floating animation for cards
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// Pulse animation for featured card
const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'highlighted',
})(({ theme, highlighted }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  '&:hover': {
    animation: `${floatAnimation} 3s ease-in-out infinite`,
    boxShadow: theme.shadows[6]
  },
  ...(highlighted && {
    border: `2px solid ${theme.palette.secondary.main}`,
    position: 'relative',
    animation: `${pulseAnimation} 3s infinite`,
    '&::before': {
      content: '"Most Popular"',
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 1.5),
      borderRadius: '16px',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      zIndex: 1,
      boxShadow: theme.shadows[1],
      [theme.breakpoints.up('sm')]: {
        top: theme.spacing(1.5),
        right: theme.spacing(1.5),
        fontSize: '0.75rem',
        padding: theme.spacing(0.5, 2)
      }
    }
  })
}));

const ServiceIcon = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  margin: theme.spacing(0, 'auto', 1.5),
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.palette.secondary.light 
    : theme.palette.secondary.dark,
  color: theme.palette.secondary.main,
  '& svg': {
    fontSize: '2rem'
  },
  [theme.breakpoints.up('sm')]: {
    width: 70,
    height: 70,
    '& svg': {
      fontSize: '2.2rem'
    }
  },
  [theme.breakpoints.up('md')]: {
    width: 80,
    height: 80,
    '& svg': {
      fontSize: '2.5rem'
    }
  }
}));

const ServicesComponent = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const services = [
    {
      title: 'Home Visit Yoga',
      icon: <HomeIcon />,
      description: 'Personalized yoga sessions in the comfort of your own home. Perfect for individuals or small groups.',
      features: [
        { icon: <FavoriteIcon color="secondary" />, text: 'Customized to your needs' },
        { icon: <CalendarIcon color="secondary" />, text: 'Flexible scheduling' },
        { icon: <PeopleIcon color="secondary" />, text: 'Private or small group' }
      ],
      cta: 'Book a Session',
      phone:"+919339058372"
    },
    {
      title: 'Corporate Yoga',
      icon: <BusinessIcon />,
      description: 'Boost productivity and reduce workplace stress with on-site yoga sessions for your team.',
      features: [
        { icon: <FavoriteIcon color="secondary" />, text: 'Stress reduction' },
        { icon: <CalendarIcon color="secondary" />, text: 'Lunchtime or after-work sessions' },
        { icon: <PeopleIcon color="secondary" />, text: 'Team building through yoga' }
      ],
      cta: 'Inquire Now',
      highlighted: true,
      phone:"+919339058372"
    },
    {
      title: 'School Yoga Programs',
      icon: <SchoolIcon />,
      description: 'Age-appropriate yoga for students to improve focus, flexibility, and emotional regulation.',
      features: [
        { icon: <FavoriteIcon color="secondary" />, text: 'Improves concentration' },
        { icon: <CalendarIcon color="secondary" />, text: 'Regular school programs' },
        { icon: <PeopleIcon color="secondary" />, text: 'Whole class participation' }
      ],
      cta: 'Learn More',
      phone:"+919339058372"
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 6, sm: 8, md: 10 },
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8ed 100%)'
        : 'linear-gradient(to bottom, #121212 0%, #1e1e1e 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -100,
        right: -100,
        width: { xs: 200, sm: 300, md: 400 },
        height: { xs: 200, sm: 300, md: 400 },
        background: theme.palette.secondary.light,
        opacity: 0.1,
        borderRadius: '50%',
        zIndex: 0
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={{ xs: 4, sm: 6, md: 8 }}>
            <Typography 
              variant={isXs ? 'h4' : isSm ? 'h3' : 'h3'}
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                color: 'text.primary',
                letterSpacing: { xs: 'normal', sm: '0.5px', md: '1px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SpaIcon color="secondary" sx={{ 
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                mr: { xs: 1, sm: 1.5, md: 2 } 
              }} />
              Our Yoga Services
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Discover the perfect yoga experience tailored to your needs and lifestyle
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Zoom in timeout={800 + (index * 200)} style={{ transitionDelay: `${index * 100}ms` }}>
                <StyledCard highlighted={service.highlighted}>
                  <CardHeader
                    avatar={
                      <ServiceIcon>
                        {service.icon}
                      </ServiceIcon>
                    }
                    sx={{
                      '& .MuiCardHeader-content': {
                        display: 'flex',
                        justifyContent: 'center'
                      },
                      pt: { xs: 2, sm: 3, md: 4 },
                      pb: 0
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1,
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 2 }
                  }}>
                    <Typography 
                      variant={isXs ? 'h6' : 'h5'}
                      component="h3" 
                      gutterBottom
                      textAlign="center"
                      sx={{
                        fontWeight: 600,
                        mb: { xs: 1.5, sm: 2, md: 3 },
                        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph
                      textAlign="center"
                      sx={{
                        color: 'text.secondary',
                        mb: { xs: 1.5, sm: 2, md: 3 },
                        minHeight: { xs: 'none', sm: '72px' },
                        fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' }
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <List dense sx={{ mb: { xs: 1, sm: 2 } }}>
                      {service.features.map((feature, i) => (
                        <ListItem key={i} disableGutters sx={{ py: 0 }}>
                          <ListItemIcon sx={{ 
                            minWidth: { xs: 32, sm: 36 },
                            color: 'secondary.main'
                          }}>
                            {feature.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature.text} 
                            primaryTypographyProps={{
                              variant: 'body2',
                              sx: { 
                                fontWeight: 500,
                                fontSize: { xs: '0.8125rem', sm: '0.875rem' }
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ 
                    p: { xs: 1.5, sm: 2, md: 3 }, 
                    textAlign: 'center',
                    pt: 0
                  }}>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      size={isXs ? 'small' : isSm ? 'medium' : 'large'}
                      fullWidth 
                      href={`https://wa.me/${service.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontWeight: 600,
                        letterSpacing: { xs: 'normal', sm: '0.5px' },
                        py: { xs: 1, sm: 1.25, md: 1.5 },
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {service.cta}
                    </Button>
                  </Box>
                </StyledCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Services = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <ServicesComponent />
    </ThemeProvider>
  );
};

export default Services;






























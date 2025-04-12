// import React from 'react'

import { Box, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Grid } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import { motion } from "framer-motion"; 
// import theme from './../../../../node_modules/.vite/deps_temp_de453764/chunk-BVCLCHM2';




const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };   


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };   
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
export default function Gallery() {   

  const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const galleryItems = [
        {
          image: "/img/g1.jpg",
          title: "Meditation Hall",
          description: "Our peaceful meditation space with natural lighting"
        },
        {
          image: "/img/g3.jpg",
          title: "Yoga Studio",
          description: "Main practice area with premium mats and props"
        },
        {
          image: "/img/g2.jpg",
          title: "Outdoor Shala",
          description: "Open-air practice space surrounded by nature"
        },
        {
          image: "/img/g4.jpg",
          title: "Reception Area",
          description: "Welcoming entrance with Ayurvedic tea station"
        },
        {
          image: "/img/g5.jpg",
          title: "Teacher Training",
          description: "Certification programs with expert instructors"
        },
        {
          image: "/img/prize.jpg",
          title: "Achievements",
          description: "Recognitions for our excellence in yoga education"
        },
        {
          image: "/img/g7.jpg",
          title: "Group Sessions",
          description: "Community classes for all skill levels"
        },
        {
          image: "/img/g8.jpg",
          title: "Private Lessons",
          description: "One-on-one instruction tailored to your needs"
        },
        {
          image: "/img/g11.jpg",
          title: "Wellness Library",
          description: "Resource center with yoga philosophy texts"
        }
      ];  
     
  return (
    <>
    
     {/* Gallery Section */}
<Box mt={8} sx={{ 
  padding: { 
    xs: 2, 
    sm: 3, 
    md: 4 
  },
  px: isMobile ? 2 : 4
}}>
  <motion.div variants={fadeIn}>
    <Typography
      variant={isMobile ? "h5" : "h4"}
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        color: "primary.main",
        mb: isMobile ? 4 : 6,
        position: "relative",
        '&::before': {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: "-10px",
          transform: "translateX(-50%)",
          width: "80px",
          height: "3px",
          background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
          borderRadius: "2px"
        }
      }}
    >
      Our Sacred Space
    </Typography>
  </motion.div>
  
  <motion.div
    variants={containerVariants}
    style={{ width: "100%" }}
  >
    <Grid container spacing={isMobile ? 1 : 2}>
      {galleryItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: isMobile ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ height: "100%" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: 3,
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                aspectRatio: "4/3" // Added aspect ratio to maintain consistent proportions
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: "cover",
                  objectPosition: "center" // Ensure images are centered
                }}
                image={item.image}
                alt={item.title}
              />
              
              {/* Hover Overlay with Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  p: isMobile ? 1 : 2,
                  textAlign: "center",
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <Typography 
                  variant={isMobile ? "subtitle1" : "h5"}
                  sx={{ 
                    fontWeight: "bold", 
                    mb: isMobile ? 1 : 2,
                    color: "primary.light",
                    fontSize: isMobile ? "1rem" : "1.25rem"
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant={isMobile ? "caption" : "body1"}
                  sx={{
                    fontSize: isMobile ? "0.7rem" : "0.875rem"
                  }}
                >
                  {item.description}
                </Typography>
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.1 }}
                  style={{ marginTop: isMobile ? "8px" : "16px" }}
                >
                  <SpaIcon fontSize={isMobile ? "medium" : "large"} color="primary" />
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Box>
    
    </>
  )
}

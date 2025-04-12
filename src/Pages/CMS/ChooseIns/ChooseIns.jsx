// import React from 'react'

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Grid } from '@mui/material'; 
import { motion } from "framer-motion";  
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SpaIcon from '@mui/icons-material/Spa';
import YogaIcon from '@mui/icons-material/SelfImprovement';
import React from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }; 
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
  
export default function ChooseIns() {  
      const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const features = [
    {
      icon: <YogaIcon fontSize="large" color="primary" />,
      title: "Holistic Approach",
      description: "We integrate mind, body and spirit in all our teachings"
    },
    {
      icon: <SpaIcon fontSize="large" color="primary" />,
      title: "Serene Environment",
      description: "Our space is designed for peace and tranquility"
    },
    {
      icon: <FitnessCenterIcon fontSize="large" color="primary" />,
      title: "Expert Instructors",
      description: "Learn from certified yoga masters with decades of experience"
    },
    {
      icon: <EmojiNatureIcon fontSize="large" color="primary" />,
      title: "Natural Healing",
      description: "Harness the power of nature in your wellness journey"
    }
  ];

  return (
    <>
    
      {/* Features Section */}
      <Box mt={8} sx={{ 
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
        py: isMobile ? 4 : 6,
        px: { xs: 2, sm: 3, md: 4 },
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
              '&::after': {
                content: '""',
                display: "block",
                width: "80px",
                height: "3px",
                background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
                margin: isMobile ? "8px auto 0" : "15px auto 0",
                borderRadius: "3px"
              }
            }}
          >
            Why Choose Our Institute
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={isMobile ? 2 : 4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: isMobile ? 0 : -10, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: isMobile ? 2 : 3,
                      borderRadius: "12px",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      background: "white",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: isMobile ? 0 : 10, scale: isMobile ? 1 : 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Box
                        sx={{
                          width: isMobile ? "60px" : "80px",
                          height: isMobile ? "60px" : "80px",
                          borderRadius: "50%",
                          backgroundColor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          fontSize: isMobile ? "medium" : "large"
                        })}
                      </Box>
                    </motion.div>
                    <Typography 
                      variant={isMobile ? "subtitle1" : "h6"} 
                      sx={{ 
                        fontWeight: "bold", 
                        mb: 1,
                        fontSize: isMobile ? "1rem" : "1.1rem"
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontSize: isMobile ? "0.8rem" : "0.875rem"
                      }}
                    >
                      {feature.description}
                    </Typography>
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

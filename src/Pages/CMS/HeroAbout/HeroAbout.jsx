// import React from 'react'
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Breadcrumbs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";


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
export default function HeroAbout() {  
  const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
    
    
      {/* Hero Section */}
      <Box
        mt={{ xs: 6, sm: 8, md: 10, lg: 12 }}
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 1
          }
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/img/final.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" },
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div 
            variants={fadeIn}
            style={{ zIndex: 2, textAlign: "center", padding: "0 16px" }}
          >
            <Typography
              variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                mb: 2,
                px: isMobile ? 1 : 0
              }}
            >
              About Our Yoga Journey
            </Typography>
            
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                color: "white",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                maxWidth: "800px",
                mb: 3,
                px: isMobile ? 2 : 0
              }}
            >
              Discover the path to inner peace and physical wellness
            </Typography>
          </motion.div>

          {/* Breadcrumbs */}
          <motion.div
            variants={fadeIn}
            style={{
              marginTop: "16px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                fontSize: isMobile ? '0.75rem' : '0.875rem'
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                  <HomeIcon sx={{ mr: 0.5, fontSize: isMobile ? '1rem' : '1.25rem' }} />
                  <b>HOME</b>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                  <WhatshotIcon sx={{ mr: 0.5, fontSize: isMobile ? '1rem' : '1.25rem' }} />
                  <b>About Us</b>
                </Link>
              </motion.div>
            </Breadcrumbs>
          </motion.div>
        </Box>
      </Box>
    
    </>
  )
}

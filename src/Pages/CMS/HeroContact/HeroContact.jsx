// import React from 'react'
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
export default function HeroContact() {
  return (  

    <>
    
    <Box
  sx={{
    position: "relative",
    // height: { xs: "50vh", sm: "60vh", md: "70vh" }, // Adjusted heights  
    height: { xs: "60vh", sm: "70vh", md: "80vh", lg: "90vh" },

    minHeight: { xs: 300, sm: 400 }, // Added minimum heights
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url(/img/back21.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: { xs: "scroll", sm: "fixed" }, // Disable parallax on mobile
      zIndex: -1,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    }}
  />
  
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      width: "100%", // Ensure full width
      padding: "0 16px", // Add some padding on sides
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: {
            xs: "2rem",  // Smaller on mobile
            sm: "3rem",
            md: "4rem",
          },
          fontWeight: 700,
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          mb: 2,
          fontFamily: "'Playfair Display', serif",
          lineHeight: {
            xs: 1.2,  // Better line height for mobile
            sm: 1.3,
          },
        }}
      >
        Connect With Us
      </Typography>
      
      <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                justifyContent: "center",
                "& .MuiBreadcrumbs-ol": {
                  justifyContent: "center",
                  flexWrap: "wrap",
                },
              }}
            >
              <Link
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 500,
                }}
                to="/"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 500,
                }}
              >
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Contact
              </Typography>
            </Breadcrumbs>
    </Container>
  </motion.div>
</Box>
    
    </>
  )
}

// import React from 'react'

import { Box, Typography, useTheme } from "@mui/material";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Map() {  
  const theme = useTheme();

    const primaryColor = theme.palette?.primary?.main || "#1976d2";

  return (
    <>
    
    <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, backgroundColor: "#f9f9ff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: { xs: 4, sm: 5, md: 6 },
                textAlign: "center",
                fontWeight: 500,
                fontFamily: "'Playfair Display', serif",
                color: primaryColor,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Find Us
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: { xs: "100%", sm: "70%", md: "50%" },
                borderRadius: { xs: 2, sm: 3, md: 4 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5266277686105!2d88.38275117539447!3d22.446836079581473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027194c8923039%3A0xfb35666e8a686973!2sDibakar%20Yogarathi%20Institute-%20Best%20Yoga%20Institute%7C%20Top%20Yoga%20Institute%7C%20Best%20Yoga%20Classes%7C%20Top%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1741446035466!5m2!1sen!2sin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              />
            </Box>
          </motion.div>
        </Container>
      </Box>
    
    </>
  )
}

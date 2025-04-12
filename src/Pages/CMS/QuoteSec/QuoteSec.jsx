// import React from 'react'

import { Box,Button, Typography, useMediaQuery, useTheme } from "@mui/material";
// import { Button } from "bootstrap";
import { motion } from "framer-motion";  

import SpaIcon from '@mui/icons-material/Spa';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };
export default function QuoteSec() {  

  const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    
    <Box mt={8} sx={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: isMobile ? 4 : 8,
        color: "white",
      }}>
        <motion.div
          variants={scaleUp}
          style={{ 
            maxWidth: "800px",
            margin: "0 auto",
            padding: isMobile ? "0 16px" : "0 24px",
            textAlign: "center"
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <SpaIcon sx={{ 
              fontSize: isMobile ? "2rem" : "3rem", 
              mb: isMobile ? 1 : 2 
            }} />
          </motion.div>
          <motion.div
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{ 
                  fontWeight: "bold", 
                  mb: isMobile ? 2 : 3,
                  fontStyle: "italic",
                  fontSize: isMobile ? "1.25rem" : "1.5rem"
                }}
              >
                &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                sx={{ 
                  opacity: 0.9,
                  fontSize: isMobile ? "0.875rem" : "1rem"
                }}
              >
                - The Bhagavad Gita
              </Typography>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              style={{ marginTop: isMobile ? "16px" : "32px" }}
            >
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    borderRadius: "20px",
                    px: isMobile ? 3 : 4,
                    py: isMobile ? 1 : 1.5,
                    fontWeight: "bold",
                    borderWidth: "2px",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    '&:hover': {
                      borderWidth: "2px",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  Join Our Community
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    
    
    </>
  )
}

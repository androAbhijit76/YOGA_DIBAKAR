// import React from 'react'

import { Box, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Grid ,Button} from '@mui/material'; 
import { motion } from "framer-motion";  
import SpaIcon from '@mui/icons-material/Spa';


const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }; 

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };  


  const hoverScale = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };
  
  const tapScale = {
    scale: 0.98
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
  
export default function Philosophy() {  
      const theme = useTheme();
      const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
     <Box mt={5} sx={{ 
        padding: { 
          xs: 2, 
          sm: 3, 
          md: 4 
        },
        px: isMobile ? 2 : 4
      }}>
        <Grid container spacing={isMobile ? 2 : 4}>
          {/* Image Card */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={slideInLeft}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
            >
              <motion.div
                whileHover={hoverScale}
                whileTap={tapScale}
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: isMobile ? 250 : isTablet ? 300 : 350,
                    width: '100%',
                    objectFit: "cover"
                  }}
                  image="/img/p1.jpg"
                  alt="Yoga instructor"
                />
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  p: 2,
                  color: "white"
                }}>
                  <Typography variant={isMobile ? "subtitle1" : "h6"}>Master Dibakar</Typography>
                  <Typography variant={isMobile ? "caption" : "body2"}>Founder & Lead Instructor</Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Text Card */}
          <Grid item xs={12} md={8}>
            <motion.div
              variants={slideInRight}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: isMobile ? "16px" : "24px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
                borderLeft: "5px solid #3f51b5"
              }}
            >
              <Box>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{
                      fontWeight: "bold",
                      textAlign: { xs: "center", md: "left" },
                      color: "primary.main",
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isMobile ? "center" : "flex-start"
                    }}
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-flex", marginRight: "8px" }}
                    >
                      <SpaIcon fontSize={isMobile ? "medium" : "large"} />
                    </motion.div>
                    Our Yoga Philosophy
                  </Typography>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: isMobile ? "0.875rem" : "1rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    At <b>Dibakar Yogarathi Institute</b>, we believe yoga is more than physical postures - it&#39;s a transformative journey that harmonizes body, mind and spirit. Nestled in the serene surroundings of Garia, Kolkata, our sanctuary offers a sacred space for self-discovery and holistic healing.
                    <br /><br />
                    Our comprehensive curriculum blends ancient wisdom with modern science, offering:
                    <ul style={{ 
                      paddingLeft: isMobile ? "16px" : "20px", 
                      margin: "10px 0",
                      fontSize: isMobile ? "0.875rem" : "1rem"
                    }}>
                      <li>200+ hour Yoga Teacher Training Certification</li>
                      <li>Therapeutic Yoga for injury rehabilitation</li>
                      <li>Meditation and Pranayama masterclasses</li>
                      <li>Ayurvedic wellness workshops</li>
                    </ul>
                    Each program is carefully crafted to honor yoga&#39;s rich tradition while addressing contemporary wellness needs. Our graduates leave not just as instructors, but as healers and guides.
                  </Typography>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  style={{ 
                    marginTop: "24px", 
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(63, 81, 181, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="contained" 
                      color="primary"
                      size={isMobile ? "medium" : "large"}
                      sx={{
                        borderRadius: "20px",
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: isMobile ? "0.875rem" : "1rem",
                      }}
                    >
                      Begin Your Journey
                    </Button>
                  </motion.div>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    
    </>
  )
}

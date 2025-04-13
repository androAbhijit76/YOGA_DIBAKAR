// import React from 'react'

import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Grid, TextField, Typography } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useTheme } from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box,Avatar,Paper,useMediaQuery,useTheme,Button} from "@mui/material";;    
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
// import { Button } from "bootstrap";
import emailjs from "@emailjs/browser";

import { styled } from "@mui/system";    




const FloatingContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette?.background?.paper || "rgba(32, 37, 45, 0.9)",
    padding: theme.spacing?.(3) || "24px",
    borderRadius: 16,
    textAlign: "center",
    margin: theme.spacing?.(2) || "16px",
    transition: "all 0.3s ease",
    minHeight: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 180,
      padding: theme.spacing(2),
    },
  }));   




  const ContactIcon = styled(Avatar)(({ theme }) => ({
    width: 60,
    height: 60,
    margin: "0 auto",
    marginBottom: theme.spacing?.(2) || "16px",
    backgroundColor: theme.palette?.primary?.main || "#1976d2",
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: 50,
    },
  }));
export default function ContactForm() {  
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const theme = useTheme();   

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };   


      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      };   
// const form = useRef();
//   const [isSending, setIsSending] = useState(false);
//   const theme = useTheme();   


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_7gwmvm8",
        "template_to7c3mh",
        form.current,
        {
          publicKey: "o5biHbQnnVZOktGRF",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send the message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

      const primaryColor = theme.palette?.primary?.main || "#1976d2";
    //   const textPrimary = theme.palette?.text?.primary || "#000000";
      const textSecondary = theme.palette?.text?.secondary || "#666666";
  return (
    <>
    
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
            {/* Left Column - Contact Information */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 4,
                    fontWeight: 500,
                    fontFamily: "'Playfair Display', serif",
                    color: primaryColor,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  Our Contact Details
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 4, 
                    color: textSecondary,
                    fontSize: { xs: "0.9rem", md: "1rem" }
                  }}
                >
                  We&#39;d love to hear from you! Whether you&#39;re interested in our
                  yoga classes, have questions about our programs, or just want
                  to say hello, feel free to reach out.
                </Typography>

                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  {/* Address */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <LocationOnIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Our Ashram
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          Laskarpur Peyara Bagan, Kolkata - 700153
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <PhoneIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Call Us
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          (+91) 9339058372
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <EmailIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Email Us
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          <a
                            href="mailto:dibakaryogarathiinstitute@gmail.com"
                            style={{
                              color: "white",
                              textDecoration: "none",
                              wordBreak: "break-word",
                            }}
                          >
                            dibakaryogarathiinstitute@gmail.com
                          </a>
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>

                  {/* Hours */}
                  <Grid item xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <FloatingContainer>
                        <ContactIcon>
                          <ScheduleIcon fontSize={isMobile ? "medium" : "large"} />
                        </ContactIcon>
                        <Typography variant="h6" gutterBottom color="white" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                          Class Hours
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                          Morning: 7.00 AM - 10.00 AM
                          <br />
                          Evening: 4.00 PM - 8.00 PM
                        </Typography>
                      </FloatingContainer>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            {/* Right Column - Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={isMobile ? 0 : 6}
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #f9f9ff 0%, #e6e6fa 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 4,
                      fontWeight: 500,
                      fontFamily: "'Playfair Display', serif",
                      color: primaryColor,
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <form ref={form} onSubmit={sendEmail}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      name="name"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "& fieldset": {
                            borderColor: "#e0e0e0",
                          },
                          "&:hover fieldset": {
                            borderColor: primaryColor,
                          },
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      margin="normal"
                      name="email"
                      required
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      margin="normal"
                      name="message"
                      required
                      multiline
                      rows={isMobile ? 4 : 6}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size={isMobile ? "medium" : "large"}
                        fullWidth
                        sx={{
                          mt: 3,
                          py: isMobile ? 1 : 1.5,
                          borderRadius: 2,
                          fontSize: isMobile ? "0.9rem" : "1rem",
                          fontWeight: 500,
                          textTransform: "none",
                          letterSpacing: "1px",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          "&:hover": {
                            boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
                          },
                        }}
                        disabled={isSending}
                      >
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    
    </>
  )
}














































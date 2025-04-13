// import React from 'react'

import { Box, Typography ,Button} from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

export default function FAQ() {   



// const faqData = [
  //   {
  //     question: "What should I bring to my first yoga class?",
  //     answer: "We recommend bringing comfortable clothing, a water bottle, and a towel. While we provide yoga mats, you're welcome to bring your own if you prefer. Avoid eating a heavy meal 2 hours before class."
  //   },
  //   {
  //     question: "Do I need prior yoga experience to join?",
  //     answer: "Not at all! We welcome practitioners of all levels. Our classes are designed to accommodate beginners while offering challenges for more experienced students. Our instructors will provide modifications as needed."
  //   },
  //   {
  //     question: "What style of yoga do you teach?",
  //     answer: "We offer various styles including Hatha, Vinyasa, Ashtanga, and Yin yoga. We also conduct specialized sessions in Pranayama (breathwork) and meditation. Each class description indicates the style and intensity level."
  //   },
  //   {
  //     question: "How often should I practice yoga?",
  //     answer: "For beginners, we recommend starting with 2-3 sessions per week to allow your body to adapt. Regular practitioners may attend daily. Even 15 minutes of daily practice at home can be beneficial when combined with studio classes."
  //   },
  //   {
  //     question: "Are there age restrictions for your classes?",
  //     answer: "We accept students aged 12 and above. For younger children, we offer special family classes on weekends. There's no upper age limit - we have students in their 70s who practice regularly!"
  //   },
  //   {
  //     question: "What if I have an injury or medical condition?",
  //     answer: "Please inform your instructor before class about any injuries or health concerns. Many postures can be modified to accommodate physical limitations. We also offer therapeutic yoga sessions for specific conditions."
  //   }
  // ];
  






  return (
    <>  











{/* <Box sx={{ 
  py: { xs: 8, sm: 10, md: 12 },
  background: "linear-gradient(135deg, #f5f7ff 0%, #f9fafc 100%)"
}}>
  <Container maxWidth="lg">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Title with gradient text */}
      {/* <Typography
        variant="h2"
        sx={{
          mb: { xs: 6, md: 8 },
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" },
          letterSpacing: "-0.5px",
          lineHeight: 1.2
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ Items */}
      {/* <Box sx={{ 
        maxWidth: 840, 
        mx: "auto",
        position: "relative"
      }}>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion
              sx={{
                mb: 2,
                borderRadius: "12px !important",
                boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
                overflow: "hidden",
                background: "#ffffff",
                transition: "all 0.3s ease",
                borderLeft: "4px solid transparent",
                '&:hover': {
                  boxShadow: "0 6px 24px rgba(99, 102, 241, 0.12)",
                  borderLeft: "4px solid #6366f1"
                },
                '&.Mui-expanded': {
                  borderLeft: "4px solid #6366f1",
                  background: "#f8f9fe"
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ 
                    color: "#6366f1",
                    fontSize: "1.8rem",
                    '&.Mui-expanded': { transform: 'rotate(180deg)' }
                  }} />
                }
                sx={{
                  py: { xs: 2, sm: 2.5 },
                  px: { xs: 3, sm: 4 },
                  '&.Mui-expanded': {
                    borderBottom: "1px solid rgba(99, 102, 241, 0.1)"
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#1e1b4b",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  py: { xs: 1, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  background: "rgba(248, 249, 254, 0.5)"
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b5563",
                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box> */}

      {/* CTA Section */}
      {/* <Box sx={{ 
        textAlign: "center", 
        mt: { xs: 8, md: 10 },
        px: 2
      }}>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "#4b5563",
            fontSize: { xs: "1.05rem", sm: "1.1rem" },
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Still have questions?
        </Typography>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
              '&:hover': {
                background: "linear-gradient(45deg, #5a5fef, #7c4df5)",
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)"
              }
            }}
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  </Container>
</Box>  */}















    
    <Box sx={{
  py: { xs: 8, sm: 10 },
  background: "radial-gradient(circle at 50% 0%, rgba(255,245,245,0.8) 0%, rgba(255,255,255,1) 100%)"
}}>
  <Container maxWidth="lg">
    <Typography variant="h2" sx={{
      textAlign: "center",
      mb: 6,
      fontSize: { xs: "2.5rem", md: "3.2rem" },
      fontWeight: 800,
      background: "linear-gradient(90deg, #FF6B6B 0%, #FF8E53 50%, #FF6B6B 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.5px"
    }}>
      Frequently Asked Questions
    </Typography>

    <Box sx={{
      display: "grid",
      gap: 3,
      gridTemplateColumns: { md: "repeat(2, 1fr)" }
    }}>
      {[
        {
          question: "What should I bring?",
          answer: "Bring comfortable clothes and water. Mats provided!",
          color: "linear-gradient(135deg, #6E45E2 0%, #89D4CF 100%)"
        },
        {
          question: "Need experience?",
          answer: "All levels welcome! Beginners encouraged.",
          color: "linear-gradient(135deg, #FF7D7D 0%, #FFBD6D 100%)"
        },
        {
          question: "Yoga styles offered?",
          answer: "Hatha, Vinyasa, Yin, and more!",
          color: "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)"
        },
        {
          question: "Practice frequency?",
          answer: "Start with 2-3x weekly, adjust as needed.",
          color: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)"
        },
        {
          question: "Age restrictions?",
          answer: "12+ for regular classes, family sessions available.",
          color: "linear-gradient(135deg, #FF61D2 0%, #FE9090 100%)"
        },
        {
          question: "Injuries?",
          answer: "We accommodate all abilities safely.",
          color: "linear-gradient(135deg, #B06AB3 0%, #4568DC 100%)"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Box sx={{
            p: 4,
            borderRadius: 3,
            background: item.color,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            '&:before': {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "rgba(255,255,255,0.3)"
            }
          }}>
            <Typography variant="h4" sx={{
              mb: 2,
              color: "white",
              fontWeight: 700,
              fontSize: "1.5rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {item.question}
            </Typography>
            <Typography sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.1rem",
              lineHeight: 1.6
            }}>
              {item.answer}
            </Typography>
            <Box sx={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)"
            }}/>
          </Box>
        </motion.div>
      ))}
    </Box>

    <Box textAlign="center" mt={8}>
      <Button variant="contained" sx={{
        px: 6,
        py: 1.5,
        borderRadius: 50,
        background: "linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%)",
        fontSize: "1.1rem",
        fontWeight: 600,
        color: "white",
        boxShadow: "0 4px 20px rgba(255,107,107,0.3)",
        '&:hover': {
          transform: "translateY(-2px)",
          boxShadow: "0 6px 24px rgba(255,107,107,0.4)"
        },
        transition: "all 0.3s ease"
      }}>
        More Questions?
      </Button>
    </Box>
  </Container>
</Box>
    
    </>
  )
}

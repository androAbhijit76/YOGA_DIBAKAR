// import React from 'react'

import { Box, Typography, useTheme } from "@mui/material";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function PeaceMessage() {  
  const theme = useTheme();

    const textPrimary = theme.palette?.text?.primary || "#000000";
  const textSecondary = theme.palette?.text?.secondary || "#666666";  
  return (
    <>
    
    <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
           <Typography
  variant="h4"
  sx={{
    mb: 3,
    fontWeight: 400,
    fontFamily: "'Playfair Display', serif",
    color: textPrimary,
    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
    px: 2,
  }}
>
  &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
</Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: textSecondary,
                fontStyle: "italic",
              }}
            >
              - The Bhagavad Gita
            </Typography>
          </motion.div>
        </Container>
      </Box>
    
    </>
  )
}

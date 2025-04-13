
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  const theme = useTheme();

  const primaryColor = theme.palette?.primary?.main || "#1976d2";

  return (
    <>
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#f9f9ff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
              Our Social Media Platforms
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {[
                {
                  platform: "Facebook",
                  icon: <FacebookIcon fontSize="large" />,
                  color: "#3b5998",
                  link: "https://www.facebook.com/dibakar.yogarathi.institute",
                },
                {
                  platform: "Instagram",
                  icon: <InstagramIcon fontSize="large" />,
                  color: "#e1306c",
                  link: "https://instagram.com/yourprofile",
                },
                {
                  platform: "YouTube",
                  icon: <YouTubeIcon fontSize="large" />,
                  color: "#ff0000",
                  link: "https://youtube.com/yourchannel",
                },
                {
                  platform: "WhatsApp",
                  icon: <WhatsAppIcon fontSize="large" />,
                  color: "#25D366",
                  link: "https://wa.me/919339058372",
                },
              ].map((social, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to={social.link}    
                   target="_blank"
                  rel="noopener noreferrer">
                  
                  <Button
                      component="a"
                    
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{
                        py: 3,
                        borderRadius: 2,
                        backgroundColor: `${social.color}10`,
                        color: social.color,
                        "&:hover": {
                          backgroundColor: `${social.color}20`,
                        },
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {social.icon}
                      <Typography sx={{ mt: 1 }}>{social.platform}</Typography>
                    </Button>
                  
                  </Link>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

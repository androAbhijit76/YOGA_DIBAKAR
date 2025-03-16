import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile screens

  return (
    <Box
      sx={{
        backgroundColor: "#20252D",
        color: "white",
        py: 6,
        mt: "auto", // Push footer to the bottom if used in a layout
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Dibakar Yogarathi Institute is dedicated to promoting the ancient
              practice of yoga for physical, mental, and spiritual well-being.
              Join us on this transformative journey.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                display="block"
              >
                About Us
              </Link>
              <Link
                href="/classes"
                color="inherit"
                underline="hover"
                display="block"
              >
                Classes
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                display="block"
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Laskarpur Peyara Bagan, Kolkata - 700153
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: (+91) 9339058372
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email:{" "}
              <Link
                href="mailto:dibakaryogarathiinstitute@gmail.com"
                color="inherit"
                underline="hover"
              >
                dibakaryogarathiinstitute@gmail.com
              </Link>
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                color="inherit"
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            mt: 4,
            pt: 3,
            textAlign: isMobile ? "center" : "left", // Center-align on mobile
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Dibakar Yogarathi Institute. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
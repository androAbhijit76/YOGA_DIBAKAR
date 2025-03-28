// import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Video() {
  return (
    <Box
      sx={{
        width: '100%', // Full width
        maxWidth: '1200px', // Restrict maximum width for larger screens
        margin: '0 auto', // Center the video
        textAlign: 'center', // Center align text
        padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
        }}
      >
        Yoga Video
      </Typography>
      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9 aspect ratio (for responsive height)
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 3, // Add a shadow for better UI
        }}
      >
        <video
          controls
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the video covers the container
          }}
        >
          <source src="/img/yogaV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
}
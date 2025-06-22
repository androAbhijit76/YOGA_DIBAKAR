// import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  Container,
} from "@mui/material";
// import { courses } from "./courses"; // Make sure this path is correct  

import { courses } from "../../../Courses";
import { Link } from "react-router-dom";

const CourseTypes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Courses
      </Typography>

      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 4,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {course.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {course.description.slice(0, 120)}...
                </Typography> */}  


                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
  {course.description}
</Typography>

                <Rating
                  value={course.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                />
              </CardContent>
              <Box sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    backgroundColor: course.color || "primary.main",
                    ":hover": {
                      backgroundColor: course.color || "primary.dark",
                    },
                  }} 
                  component={Link} 
                  to={`/courseDetailsPage/course/${course.id}`} 
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseTypes;

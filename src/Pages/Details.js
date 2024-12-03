import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Details = () => {
  const theme = useTheme();

  return (
    <Box p={4} sx={{ backgroundColor: theme.palette.background.paper }}>
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          textAlign: "center",
          py: 6,
          backgroundColor: "rgba(0, 43, 91, 0.5)", // Transparent navy blue overlay
          padding: "20px",
          borderRadius: "8px",
          color: "#fff",

          mb: 6,
        }}
      >
        College Details
      </Typography>

      {/* College Overview Section */}
      <Box mb={6}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#002B5B", marginTop: "20px" }}
        >
          Welcome to Sindhu College
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Our institution is known for academic excellence and a strong
          commitment to shaping future leaders. With world-class faculty,
          cutting-edge research facilities, and a dynamic student community, we
          provide an environment that nurtures personal and intellectual growth.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: theme.palette.secondary.main, // Button color from theme
            "&:hover": { backgroundColor: theme.palette.secondary.dark }, // Hover effect
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Images and Descriptions Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Modern Library */}
        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="200"
                image="/images/library.png"
                alt="Library"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  Modern Library
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="center"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  A state-of-the-art library with a vast collection of resources
                  to support your academic journey.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Student Life */}
        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="200"
                image="/images/students.png"
                alt="Students"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  Student Life
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="center"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  A vibrant and dynamic student community that supports your
                  academic, social, and professional growth.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Campus Infrastructure */}
        <Grid item xs={12} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="200"
                image="/images/about-campus.png"
                alt="Campus View"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  Campus Infrastructure
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="center"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  A modern campus with advanced facilities including
                  laboratories, sports grounds, and recreational areas.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Facilities Section */}
      <Box mb={6}>
        <Typography variant="h5" gutterBottom sx={{ color: "#002B5B" }}>
          World-Class Facilities
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Our college is equipped with top-notch facilities to enhance your
          learning experience:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#002B5B" }}
              >
                Laboratories
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ color: theme.palette.text.secondary }}
              >
                Well-equipped labs to provide hands-on learning in various
                fields.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#002B5B" }}
              >
                Sports Complex
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ color: theme.palette.text.secondary }}
              >
                A complete sports complex for both indoor and outdoor games.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#002B5B" }}
              >
                Hostels
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ color: theme.palette.text.secondary }}
              >
                Comfortable living arrangements with all necessary amenities.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Upcoming Events Section */}
      <Box mb={6}>
        <Typography variant="h5" gutterBottom sx={{ color: "#002B5B" }}>
          Upcoming Events
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: theme.palette.text.secondary }}
        >
          Stay tuned for exciting upcoming events, workshops, and seminars:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ color: "#002B5B" }}>
                Annual Tech Fest
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date: March 12, 2024
              </Typography>
              <Typography variant="body2">
                Join us for a tech extravaganza featuring workshops, hackathons,
                and more!
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ color: "#002B5B" }}>
                Cultural Night
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date: April 5, 2024
              </Typography>
              <Typography variant="body2">
                An evening filled with performances, music, and dance showcasing
                the cultural diversity of our campus.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ color: "#002B5B" }}>
                Sports Meet
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date: May 10, 2024
              </Typography>
              <Typography variant="body2">
                A day of sports events and competitions for all students.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Details;

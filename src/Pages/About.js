import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const About = () => {
  // Image Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/home-banner1.png",
    "/images/home-banner3.png",
    "/images/home-banner4.png",
  ];

  // Auto-Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "500px",
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 43, 91, 0.5)", // Transparent navy blue overlay
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h3" gutterBottom>
            About Sindhu College
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 4 }}>
            Empowering Students for a Better Tomorrow
          </Typography>
        </Box>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            color: "#fff",
            transform: "translateY(-50%)",
          }}
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            color: "#fff",
            transform: "translateY(-50%)",
          }}
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      {/* About Section */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ color: "#002B5B", marginTop: "20px" }}
        >
          Welcome to Sindhu College
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#34495E",
            lineHeight: "1.8",
            marginBottom: 4,
          }}
        >
          Sindhu College is a prestigious institution committed to nurturing
          students' academic excellence and holistic development. Our vibrant
          campus is a hub of innovation, community, and growth.
        </Typography>
      </Box>

      {/* Mission and Vision Section */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#ecf0f1",
                boxShadow: 3,
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#002B5B",
                  marginBottom: 2,
                  textAlign: "center",
                }}
              >
                Our Mission
              </Typography>
              <Typography sx={{ color: "#34495E", textAlign: "center" }}>
                To provide transformative education that empowers students with
                knowledge, skills, and values, preparing them for a global
                society.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#ecf0f1",
                boxShadow: 3,
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#002B5B",
                  marginBottom: 2,
                  textAlign: "center",
                }}
              >
                Our Vision
              </Typography>
              <Typography sx={{ color: "#34495E", textAlign: "center" }}>
                To inspire excellence, innovation, and leadership, cultivating
                an environment where students thrive.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            // fontWeight: "bold",
            color: "#002B5B",
            marginBottom: "30px",
          }}
        >
          What Our Students Say
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  padding: 3,
                  backgroundColor: "#fff",
                  boxShadow: 3,
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <Typography
                  sx={{
                    color: "#34495E",
                    fontStyle: "italic",
                    marginBottom: 2,
                  }}
                >
                  "Sindhu College has transformed my life! The faculty and
                  campus provide a perfect learning environment."
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "right",
                    color: "#FFC107",
                  }}
                >
                  - Vaishali More
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          backgroundColor: "#002B5B",
          color: "#FFFFFF",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Ready to Join Us?
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF6347",
            "&:hover": { backgroundColor: "#FF4500" },
            fontSize: "1rem",
            borderRadius: "5px",
          }}
          href="#contact"
        >
          Contact Us Now
        </Button>
      </Box>
    </Box>
  );
};

export default About;

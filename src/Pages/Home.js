import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardContent,
  TextField,
  Container,
} from "@mui/material";
import { ArrowForward, ArrowBack, Star, Event } from "@mui/icons-material";

const Home = () => {
  // Image Slider States
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/home-banner1.png",

    "/images/home-banner3.png",
    "/images/home-banner4.png",
  ];

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "500px",
          background: `url(${images[currentIndex]}) no-repeat center center`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <Box
          ck
          // sx={{
          //   bagroundColor: "rgba(0, 43, 91, 0.1)", // Transparent navy blue overlay
          //   padding: "20px",
          //   borderRadius: "8px",
          // }}
          sx={{
            backgroundColor: "rgba(0, 43, 91, 0.5)", // Transparent navy blue overlay
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Welcome to Sindhu College
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 4, color: "#E3F2FD" }}>
            A Place to Build Your Future
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FFC107", color: "#002B5B" }}
          >
            Apply Now
          </Button>
        </Box>
        {/* Slider Controls */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            color: "#FFFFFF",
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
            color: "#FFFFFF",
            transform: "translateY(-50%)",
          }}
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      <Container
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ color: "#002B5B", marginTop: "20px" }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Why Choose Sindhu College?
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          {[
            {
              icon: <Star />,
              title: "Experienced Faculty",
              description: "Learn from industry-leading educators.",
            },
            {
              icon: <Star />,
              title: "Modern Facilities",
              description: "Access state-of-the-art labs and resources.",
            },
            {
              icon: <Star />,
              title: "Global Opportunities",
              description: "Open doors to global career pathways.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box sx={{ fontSize: "40px", color: "#FFC107" }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Events Section */}
      <Box sx={{ padding: "40px 20px", backgroundColor: "#F4F4F4" }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ color: "#002B5B" }}
        >
          Upcoming Events
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#FFC107" }}>
                    Event Date
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#002B5B" }}
                  >
                    Event Title
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Event Description
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: "40px 20px", backgroundColor: "#F4F4F4" }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ color: "#002B5B" }}
        >
          Explore Our Campus
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            height: "450px",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NtfvEcByA54"
            title="Sindhu College Campus Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              border: "none",
            }}
          ></iframe>
        </Box>
      </Box>

      {/* Newsletter Section */}
      <Box
        sx={{
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: "#002B5B",
          color: "#FFFFFF",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Subscribe to our newsletter for the latest news and updates.
        </Typography>
        <Box sx={{ maxWidth: "600px", margin: "20px auto" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FFC107", color: "#002B5B" }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Footer */}
    </Box>
  );
};

export default Home;

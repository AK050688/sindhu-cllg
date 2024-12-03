import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <Box p={4} sx={{ backgroundColor: "#f4f4f4" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          py: 6,
          color: "#FFFFFF",
          backgroundColor: "rgba(0, 43, 91, 0.5)",
          borderRadius: "8px",
          mb: 6,
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={2}>
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                // padding: "40px 20px",
                // textAlign: "center",
                backgroundColor: "#002B5B",
                color: "#FFFFFF",
              }}
              fullWidth
            >
              Submit
            </Button>
          </Paper>
        </Grid>

        {/* Address and Map Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <LocationOnIcon color="primary" fontSize="large" />
              <Typography variant="h6">Address:</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Sindhu College, Sarua, Shyam Bazar, Baunsi, India, 813104
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <iframe
                title="Sindhu College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.8124884013596!2d87.00612907514771!3d24.733316978012546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0fb951aad06e7%3A0x74047883b6a735d0!2sSindhu%20College%2CSarua%2C%20Shyam%20Bazar%2C%20Baunsi!5e0!3m2!1sen!2sin!4v1732965391294!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;

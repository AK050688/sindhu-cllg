import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Sindhu College. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

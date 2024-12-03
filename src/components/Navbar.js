// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   // const logo = "/images/logo.png"; // Path to your logo image

//   // Using MUI's theme for responsive design
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar
//         sx={{
//           justifyContent: isSmallScreen ? "space-between" : "center", // Center for larger screens
//           display: "flex",
//           flexWrap: "wrap", // Allow wrapping on smaller screens
//         }}
//       >
//         {/* Center-Aligned Navigation Buttons */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: isSmallScreen ? 2 : 10, // Reduce spacing on smaller screens
//             flexWrap: "wrap", // Allow buttons to wrap on small screens
//           }}
//         >
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/about">
//             About
//           </Button>
//           <Button color="inherit" component={Link} to="/admission">
//             Admission
//           </Button>
//           <Button color="inherit" component={Link} to="/details">
//             Details
//           </Button>
//           <Button color="inherit" component={Link} to="/contact-us">
//             Contact Us
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#002B5B", // Deep navy blue for a professional look
      }}
    >
      <Toolbar
        sx={{
          justifyContent: isSmallScreen ? "space-between" : "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: isSmallScreen ? 2 : 8, // Adjust spacing based on screen size
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Admission", path: "/admission" },
            { name: "Details", path: "/details" },
            { name: "Contact Us", path: "/contact-us" },
          ].map((link) => (
            <Button
              key={link.name}
              component={Link}
              to={link.path}
              sx={{
                color: location.pathname === link.path ? "#FFC107" : "#FFFFFF", // Gold for active links
                fontWeight: location.pathname === link.path ? "bold" : "normal",
                borderBottom:
                  location.pathname === link.path
                    ? "2px solid #FFC300"
                    : "none",
                "&:hover": {
                  backgroundColor: "#1E3A5F", // Slightly lighter navy on hover
                  color: "#FFC107", // Muted gold on hover
                },
                transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
                padding: "10px 15px", // Consistent padding for buttons
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

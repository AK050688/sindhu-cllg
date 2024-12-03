// import React from "react";
// import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";

// const Header = () => {
//   const logo = "/images/logo.png"; // Path to your logo image

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar
//         sx={{
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: { xs: 2, sm: 3, md: 0 }, // Adjust gaps on smaller screens
//           paddingX: 2,
//         }}
//       >
//         {/* Logo and College Name Section */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flexWrap: "wrap", // Wrap on smaller screens
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src={logo}
//             alt="Sindhu College Logo"
//             style={{
//               height: "100px", // Scaled down for better responsiveness
//               marginRight: "16px",
//             }}
//           />
//           <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
//             <Typography variant="h6" sx={{ marginBottom: 0 }}>
//               PROGRESSIVE EDUCATION SOCIETY'S
//             </Typography>
//             <Typography
//               variant="body1"
//               color="black"
//               sx={{
//                 fontSize: { xs: "12px", sm: "14px" }, // Smaller text on mobile
//               }}
//             >
//               Sindhu College, Sarua, Shyam Bazar, Baunsi
//             </Typography>
//           </Box>
//         </Box>

//         {/* Email Section */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             flexDirection: { xs: "column", sm: "row" }, // Stack vertically on smaller screens
//             textAlign: { xs: "center", sm: "left" },
//           }}
//         >
//           <IconButton color="inherit" aria-label="email">
//             <EmailIcon />
//           </IconButton>
//           <Box>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "14px", sm: "16px" },
//               }}
//             >
//               Email ID
//             </Typography>
//             <Typography
//               variant="body1"
//               color="black"
//               sx={{
//                 fontSize: { xs: "12px", sm: "14px" },
//               }}
//             >
//               info@sindhucollege.edu
//             </Typography>
//           </Box>
//         </Box>

//         {/* Contact Section */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             flexDirection: { xs: "column", sm: "row" }, // Stack vertically on smaller screens
//             textAlign: { xs: "center", sm: "left" },
//           }}
//         >
//           <IconButton color="inherit" aria-label="phone">
//             <PhoneIcon />
//           </IconButton>
//           <Box>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: { xs: "14px", sm: "16px" },
//               }}
//             >
//               Contact No
//             </Typography>
//             <Typography
//               variant="body1"
//               color="black"
//               sx={{
//                 fontSize: { xs: "12px", sm: "14px" },
//               }}
//             >
//               +91 98765 43210
//             </Typography>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Header = () => {
  const logo = "/images/logo.png"; // Path to your logo image

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#002B5B", // Deep navy blue for consistency with Navbar
        color: "#FFFFFF", // White text for contrast
      }}
    >
      <Toolbar
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, sm: 3, md: 0 }, // Adjust gaps on smaller screens
          paddingX: 2,
        }}
      >
        {/* Logo and College Name Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap", // Wrap on smaller screens
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Sindhu College Logo"
            style={{
              height: "80px", // Slightly smaller for better spacing
              marginRight: "16px",
            }}
          />
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 0,
                fontWeight: "bold",
                color: "#FFC107", // Muted gold for emphasis
              }}
            >
              PROGRESSIVE EDUCATION SOCIETY'S
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px" }, // Adjust font size for smaller screens
                color: "#FFFFFF", // White for contrast
              }}
            >
              Sindhu College, Sarua, Shyam Bazar, Baunsi
            </Typography>
          </Box>
        </Box>

        {/* Email Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on smaller screens
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="email"
            sx={{
              color: "#FFC107", // Gold for icon
            }}
          >
            <EmailIcon />
          </IconButton>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                color: "#FFFFFF", // White for header text
              }}
            >
              Email ID
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "#E3F2FD", // Light blue for a softer tone
              }}
            >
              info@sindhucollege.edu
            </Typography>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on smaller screens
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="phone"
            sx={{
              color: "#FFC107", // Gold for icon
            }}
          >
            <PhoneIcon />
          </IconButton>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                color: "#FFFFFF", // White for header text
              }}
            >
              Contact No
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "#E3F2FD", // Light blue for a softer tone
              }}
            >
              +91 98765 43210
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

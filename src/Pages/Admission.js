import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Admission = () => {
  const departments = [
    "Computer Science and Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Information Technology",
    "Artificial Intelligence and Machine Learning",
    "Data Science",
  ];

  const requiredDocuments = [
    "10th Marksheet",
    "12th Marksheet",
    "Transfer Certificate",
    "Migration Certificate",
    "Aadhar Card",
    "Passport Size Photographs",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
  ];

  const faqs = [
    {
      question: "What is the last date to apply for admission?",
      answer:
        "The last date to apply is 30th June 2024. Ensure you complete all steps before the deadline.",
    },
    {
      question: "Is there any scholarship program available?",
      answer:
        "Yes, we offer merit-based and need-based scholarships. Details are available on our scholarships page.",
    },
    {
      question: "Can I apply for multiple departments?",
      answer:
        "Yes, you can list multiple preferences during the application process.",
    },
    {
      question: "How can I check my admission status?",
      answer:
        "Once submitted, you can track your application status using your registered email and application ID.",
    },
  ];

  return (
    <Box
      p={4}
      sx={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#f9f9f9" }}
    >
      {/* Header Section */}
      <Box
        sx={{
          // backgroundColor: "rgba(0, 43, 91, 0.5)", // Transparent navy blue overlay
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          alignItems: "center",
          color: "#FFFFFF",
          backgroundColor: "rgba(0, 43, 91, 0.5)", // Transparent navy blue overlay
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
          Sindhu College Admissions
        </Typography>
        <Typography variant="h6">
          Step into a brighter future with quality education at Sindhu College.
        </Typography>
      </Box>

      {/* Admission Process */}
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 4,
          color: "#002B5B",
          marginTop: "20px",
        }}
      >
        Admission Process
      </Typography>
      <Grid container spacing={3}>
        {[
          "Fill out the online application form.",
          "Submit necessary documents.",
          "Pay the application fee.",
          "Attend the counseling session.",
        ].map((step, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                border: "1px solid #ddd",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Step {index + 1}
                </Typography>
                <Typography>{step}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Departments Section */}
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 4,
          color: "#002B5B",
          marginTop: "20px",
        }}
      >
        Engineering Departments
      </Typography>
      <Grid container spacing={2}>
        {departments.map((department, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                border: "1px solid #ddd",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#f3f4f6",
                },
              }}
            >
              <CardContent>
                <Typography variant="body1">{department}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Required Documents Section */}
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 4,
          color: "#002B5B",
          marginTop: "20px",
        }}
      >
        Required Documents
      </Typography>
      <List>
        {requiredDocuments.map((document, index) => (
          <ListItem key={index}>
            {/* <ListItemText primary={• ${document}} /> */}
            <ListItemText primary={`• ${document}`} />
          </ListItem>
        ))}
      </List>

      {/* FAQ Section */}
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 4,
          color: "#002B5B",
          marginTop: "20px",
        }}
      >
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Call-to-Action Section */}
      <Box
        sx={{
          mt: 8,
          py: 4,
          textAlign: "center",
          backgroundColor: "#002B5B",
          color: "#FFFFFF",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Ready to Join Sindhu College?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Start your application process today and take the first step toward a
          successful career.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 6, py: 1 }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default Admission;

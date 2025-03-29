import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the form submission, e.g., sending data to a server.
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              {/* Email Field */}
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />

              {/* Message Field */}
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                margin="normal"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />

              {/* Submit Button */}
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "50%",
                    backgroundColor: "rgba(187, 145, 90, 0.7)", // Use rgba() for transparency
                    "&:hover": {
                      backgroundColor: "rgba(187, 145, 90, 0.9)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

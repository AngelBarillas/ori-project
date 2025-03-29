import React from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import {
  StyledBookAptBtn,
  StyledHeroContainer,
  StyledHeroMessage,
} from "/src/components/Hero/BookAptBtn.styles";

const About = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {/* About Section */}
      <Typography variant="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        paragraph
      >
        Welcome! I’m Naith, a passionate lash artist dedicated to enhancing your
        natural beauty and helping you feel your absolute best. I specialize in
        creating customized lash looks that perfectly complement your unique
        style and features. My mission is simple: to provide every client with
        the most luxurious, high-quality lash experience. Whether you're looking
        for the elegant simplicity of Classic Lashes, the voluminous flair of
        Hybrid or Volume Lashes, or the natural lift of a Lash Lift, I’m here to
        bring your lash dreams to life. I take great pride in my work and use
        only the finest products and techniques to ensure your lashes look
        flawless and last longer. My goal is to provide a relaxing and enjoyable
        experience, leaving you feeling rejuvenated and confident every time you
        leave my studio. In addition to lashes, I also offer Brow Lamination to
        sculpt and define your brows, giving you the perfect frame to match your
        stunning lashes. Every set I create is tailored to your personal style
        and preferences, so whether you’re after a subtle enhancement or a bold,
        glamorous look, I’ve got you covered! Thank you for trusting me with
        your beauty needs. I can't wait to help you achieve the perfect lashes
        that make you feel fabulous!
      </Typography>

      {/* Owner Image and Introduction */}
      <Grid container spacing={4} justifyContent="center">
        <Grid display={"flex"} gap={5} item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: "500px", // Set a specific height to help with layout
              width: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src="/about.png" // Path to the image in public folder
              alt="Lash Artist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensure the image covers the box area
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box
            sx={{
              height: "500px", // Set a specific height to help with layout
              width: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src="/aboutlashes.png" // Path to the image in public folder
              alt="Working on lashes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensure the image covers the box area
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <br />
      <StyledHeroContainer>
        <StyledBookAptBtn to="/Bookingpage" variant="contained">
          SEE AVAILABLE DATES
        </StyledBookAptBtn>
      </StyledHeroContainer>
      {/* Lash Lift */}
    </Container>
  );
};

export default About;

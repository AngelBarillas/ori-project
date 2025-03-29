import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Grid,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Sitemap = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sitemap
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Here’s a list of all the pages on our website. Feel free to explore the
        sections below.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Home
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/about"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    About Us
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/services"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Services
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/contact"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Contact
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/bookingpage"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Booking Page
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/privacy-policy"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Privacy Policy
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/terms-of-service"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Terms of Service
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link
                    component={RouterLink}
                    to="/Sitemap"
                    variant="h6"
                    underline="hover"
                    sx={{ color: "rgb(187, 145, 90, 0.7)" }} // Custom color applied
                  >
                    Sitemap
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sitemap;

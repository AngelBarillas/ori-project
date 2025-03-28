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

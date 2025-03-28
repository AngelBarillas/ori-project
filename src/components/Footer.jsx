import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#212121", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Left Section: Brand & Copyright */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ALOA BEAUTY
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              © {new Date().getFullYear()} ALOA BEAUTY. All rights reserved.
            </Typography>
          </Grid>

          {/* Middle Section: Navigation Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Grid container direction="column" spacing={1}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Quick Links
              </Typography>
              <Grid item>
                <Link href="/" color="inherit" variant="body2">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="/about" color="inherit" variant="body2">
                  About
                </Link>
              </Grid>
              <Grid item>
                <Link href="/services" color="inherit" variant="body2">
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link href="/contact" color="inherit" variant="body2">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section: Social Media */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <Box sx={{ marginTop: 1 }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/aloabeauty_?igsh=d2UydTNnbGpwdWQy"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section: Terms & Privacy Links */}
        <Box sx={{ marginTop: 4, borderTop: "1px solid #333", paddingTop: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link
                component={RouterLink}
                to="/privacy-policy"
                variant="body2"
                color="inherit"
                underline="hover"
              >
                Privacy Policy
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/terms-of-service"
                variant="body2"
                color="inherit"
                underline="hover"
              >
                Terms of Service
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/Sitemap"
                variant="body2"
                color="inherit"
                underline="hover"
              >
                Sitemap
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

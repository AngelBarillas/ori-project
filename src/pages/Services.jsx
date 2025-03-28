import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import classicImage from "/src/assets/classiclashes.jpeg";
import hybridImage from "/src/assets/hybridlashes.jpeg";
import volumeImage from "/src/assets/volumelashes.jpg";
import wispyImage from "/src/assets/wispylashes.jpg";
import liftImage from "/src/assets/lashlift.jpg";
import browImage from "/src/assets/browlamination.jpg";
import { StyledBookAptBtn } from "/src/components/Hero/BookAptBtn.styles.js";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Grid
        container
        spacing={20}
        height={"50vh"}
        justifyContent="center"
        alignItems="center"
        padding={6}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/Bookingpage">
              <CardMedia
                component="img"
                height="200"
                image={classicImage}
                alt="classic lashes"
              />
              <CardContent sx={{ minHeight: "100px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Classic Lashes
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Enhance your natural beauty with Classic Lashes, where each
                  extension is applied to a single natural lash for a clean,
                  elegant look that’s effortlessly chic.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/Bookingpage">
              <CardMedia
                component="img"
                height="200"
                image={hybridImage}
                alt="hybrid lashes"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hybrid Lashes
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  For a perfect balance between natural and voluminous, Hybrid
                  Lashes mix Classic and Volume techniques to give you a fuller,
                  textured look with beautiful depth and dimension.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/bookingpage">
              <CardMedia
                component="img"
                image={volumeImage}
                alt="volume lashes"
                sx={{
                  objectFit: "cover", // Ensures the image fits within the container
                  objectPosition: "center", // Centers the image within the container
                  width: "100%", // Ensures it takes full width
                  height: "200px", // Ensures it takes full height
                }}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Volume Lashes
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Go bold with Volume Lashes! Multiple lightweight extensions
                  are applied to each natural lash for a dramatic, voluminous
                  effect that turns heads.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/Bookingpage">
              <CardMedia
                component="img"
                image={wispyImage}
                alt="volume lashes"
                sx={{
                  objectFit: "cover", // Ensures the image fits within the container
                  objectPosition: "center", // Centers the image within the container
                  width: "100%", // Ensures it takes full width
                  height: "200px", // Ensures it takes full height
                }}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Wispy Lashes
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Achieve the perfect flutter with Wispy Lashes, combining
                  delicate, feathery extensions for a light, airy look that’s
                  full of texture and volume.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/Bookingpage">
              <CardMedia
                component="img"
                image={liftImage}
                alt="volume lashes"
                sx={{
                  objectFit: "cover", // Ensures the image fits within the container
                  objectPosition: "center", // Centers the image within the container
                  width: "100%", // Ensures it takes full width
                  height: "200px", // Ensures it takes full height
                }}
              />
              <CardContent sx={{ minHeight: "100px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Lash Lift
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lift, curl, and define your natural lashes with a Lash
                  Lift—creating a longer, more voluminous look without the need
                  for extensions.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea component={Link} to="/Bookingpage">
              <CardMedia
                component="img"
                image={browImage}
                alt="volume lashes"
                sx={{
                  objectFit: "cover", // Ensures the image fits within the container
                  objectPosition: "center", // Centers the image within the container
                  width: "100%", // Ensures it takes full width
                  height: "200px", // Ensures it takes full height
                }}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brow Lamination
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Get perfectly sculpted brows with Brow Lamination, smoothing
                  and setting your brows into a fuller, more defined shape that
                  lasts.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StyledBookAptBtn
                variant="contained"
                to="/Bookingpage"
                sx={{
                  fontWeight: "bold",
                }}
              >
                BOOK APPOINTMENT
              </StyledBookAptBtn>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;

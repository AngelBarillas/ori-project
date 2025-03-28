import { React, useState } from "react";
import "/src/App.css";
import {
  StyledBookAptBtn,
  StyledHeroContainer,
  StyledHeroMessage,
} from "./BookAptBtn.styles";
import { BookingPage } from "../../pages";

const Hero = () => {
  return (
    <section className="hero ">
      <StyledHeroContainer>
        <StyledHeroMessage
          variant="h2"
          sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
        >
          Welcome to the Magic of Beauty Transformation.
        </StyledHeroMessage>

        <StyledHeroMessage
          variant="h6"
          sx={{
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.6,
            letterSpacing: "1px",
            mb: 3,
            opacity: 0.85, // Slightly faded text effect
          }}
        >
          "Wake Up Beautiful Every Day" Effortless, luxurious lashes designed to
          make you feel amazing. Book your appointment and transform your look.
        </StyledHeroMessage>
        <StyledBookAptBtn variant="contained" to="/Bookingpage">
          SEE AVAILABLE DATES
        </StyledBookAptBtn>
      </StyledHeroContainer>
    </section>
  );
};

export default Hero;

import { React, useState } from "react";
import "../../styles/App.css";
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
        <StyledHeroMessage variant="h4">
          Welcome to the Magic of Beauty Transformation.
        </StyledHeroMessage>
        <StyledHeroMessage variant="h4">
          Can't wait to see you shine even more. Lets add some spark to your
          life.
        </StyledHeroMessage>
        <StyledBookAptBtn to="/Bookingpage" variant="contained">
          BOOK APPOINTMENT
        </StyledBookAptBtn>
      </StyledHeroContainer>
    </section>
  );
};

export default Hero;

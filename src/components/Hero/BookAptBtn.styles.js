import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledHeroContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  height: 50%;
  text-align: center;
  max-width: 100%;
  padding: 0 2rem;
`;

export const StyledHeroMessage = styled(Typography)`
  color: white;
  font-weight: 700;
  font-size: {xs:"2rem", sm: "3rem", md: "4rem"};
  letter-spacing: 2px;
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 2);
`;

export const StyledBookAptBtn = styled(Link)`
  background-color: rgb(187, 145, 90, 0.7);
  text-decoration: none;
  color: white;
  padding: 1rem;
  margin-top: 8rem;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
  color: white;
  box-shadow: 0 0 0 0px white inset;
  :hover {
    transform: translateY(-2px);
  }
`;

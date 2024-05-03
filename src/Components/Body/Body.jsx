import React from "react";
import { ContainerInfo, Destaque, PrincipalSection } from "./StyleBody";
import Card from "../Card/Card";
import Login from "../Login/Login";
import About from "../SecondSection/SectionTwo";
import { TextPrincipal } from "./StyleBody";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecondSection from "../SecondSection/SectionTwo";
import SectionTwo from "../SecondSection/SectionTwo";
import Benefits from "../ThirdSection/Benefits";
import Info from "./Info";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Body() {
  const ResponsiveButton = styled(Link)`
    @media (max-width: 1300px) {
      width: 100%;

    }
  `;

  const Responsive = styled(Button)`
    display: flex;
    justify-content: space-between;
    width: 25vw;
    @media (max-width: 1300px) {
      width: 70vw;
    }
  `;
  return (
    <>
      <PrincipalSection>
        <ContainerInfo>
          <TextPrincipal>
            Mude para o SamThunder e enriqueça rápido como um{" "}
            <Destaque>Trovão </Destaque>{" "}
          </TextPrincipal>
          <ResponsiveButton style={{ textDecoration: "none" }} to="/Sign-Up">
            <Responsive variant="contained" color="error" size="large">
              Abra sua conta <ArrowForwardIcon />{" "}
            </Responsive>
          </ResponsiveButton>
        </ContainerInfo>

        <Card />
        {/* <Login/> */}
      </PrincipalSection>
      <SectionTwo></SectionTwo>
      <Info></Info>
      <Benefits></Benefits>
    </>
  );
}

import React from "react";
import { ContainerInfo, Destaque, PrincipalSection } from "./StyleBody";
import Card from "../Card/Card";
import Login from "../Login/Login";
import About from "../SecondSection/SectionTwo";
import { TextPrincipal } from './StyleBody';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecondSection from "../SecondSection/SectionTwo";
import SectionTwo from "../SecondSection/SectionTwo";
import Benefits from "../ThirdSection/Benefits";
import Info from "./Info";

export default function Body() {
  return (
    <>
      <PrincipalSection>
        <ContainerInfo>
          <TextPrincipal>Mude para o SamThunder e enriqueça rápido como um <Destaque>Trovão </Destaque> </TextPrincipal>
        <Button variant="contained" color="error" size="large" style={{
          display:"flex",
          justifyContent:"space-around",
          width: "25%"
        }}>Abra sua conta <ArrowForwardIcon/> </Button>
        </ContainerInfo>

        <Card />
        {/* <Login/> */}
      </PrincipalSection>
        <SectionTwo></SectionTwo>
        <Info>
          
        </Info>
        <Benefits></Benefits>
    </>
  );
}

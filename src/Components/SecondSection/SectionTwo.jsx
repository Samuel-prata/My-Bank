import React from "react";
import {
  ContainerAbout,
  ContainerText,
  ImageTwo,
  SecondSection,
  TextAbout,
  TitleAbout,
} from "./SecondStyle";
import cartao from './Image-About/cartaoSamthunder.png'

export default function SectionTwo() {
  return (
    <>
      <SecondSection>
        <ContainerAbout>
          <ContainerText>
            <TitleAbout>O retorno que os clientes amam</TitleAbout>
            <TextAbout>
              No SamThunder você tem Cashback 100% em compras feitas pelo
              aplicativo e em pegamentos realizados pelo boleto
            </TextAbout>
          </ContainerText>
        </ContainerAbout>
        <ImageTwo src={cartao} />
      </SecondSection>
    </>
  );
}

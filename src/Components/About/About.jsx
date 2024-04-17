import React from "react";
import {
  ContainerAbout,
  ContainerText,
  ImageTwo,
  SecondSection,
  TextAbout,
  TitleAbout,
} from "./AboutStyle";
import Image2 from "./Image-About/2.png";

export default function About() {
  return (
    <>
      <SecondSection>
        <ImageTwo src={Image2} />
        <ContainerAbout>
          <TitleAbout> Sobre nós</TitleAbout>
          <ContainerText>
            <TextAbout>
              Somos um banco especializado em enriquecer pessoas, dentre nossos
              clientes temos os mortais mais ricos e poderosos do mundo.
              Nascidos em 2017 pela mente brilhante de nosso CEO, Amarildo.
              Com a crise financeira e a inflação nas alturas, SamThunder financia os sonhos das pessoas.
              Com até 100% Cashback em pagamentos por boleto e 200% a.m para empréstimos
            </TextAbout>
          </ContainerText>
        </ContainerAbout>
      </SecondSection>
    </>
  );
}

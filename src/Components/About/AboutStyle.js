import styled from "styled-components";

export const SecondSection = styled.div`
  background-color: #b9030a;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageTwo = styled.img`
  width: 50%;
  height: 80vh;
  border-radius: 50px;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const ContainerAbout = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
`;

export const ContainerText = styled.div`
  width: 50%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const TitleAbout = styled.h1`
  color: orange;
`;
export const TextAbout = styled.p`
  color: white;
`;

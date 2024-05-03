import styled from "styled-components";

export const SecondSection = styled.div`
  background-color: #b9030a;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;

export const ImageTwo = styled.img`
  width: 60%;
  height: 100%;
  /* border-radius: 50px; */
  @media (max-width: 1300px) {
    display: flex;
    width: 100%;
    height: 50vh;
  }
`;
export const ContainerAbout = styled.div`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

 
`;

export const ContainerText = styled.div`
  width: 70%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1300px) {
    width: 180%;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;

  }
`;

export const TitleAbout = styled.h1`
  color: white;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1300px) {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`;
export const TextAbout = styled.p`
  color: white;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1300px) {
    font-size: 20px
  }
`;

import { styled, css } from "styled-components";

const CenterAll = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyRegister = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ScreenRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
  height: 70vh;
  border-radius: 20px;
  -webkit-box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);
  -moz-box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);
  box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);

  @media (max-width: 1300px) {
    display: flex;
    width: 80%;
    height: 80vh;
    margin-top: 70px;
  }
`;

export const ContainerInformation = styled.form`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: left !important;
  border: 1px solid black;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100vh;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ImageRegister = styled.img`
  width: 100%;
`;
export const NavRegister = styled.nav`
  height: 10vh;
  background-color: #b9030a;
  display: flex;
  align-items: center;
`;

export const Back = styled.h2`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(120%);
  }
`;

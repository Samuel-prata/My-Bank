import styled, { createGlobalStyle, css } from "styled-components";

const DisplayFlexAuto = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigator = styled.nav`
  background-color: #f5f9ff;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`;

export const Navbar = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    cursor: pointer;
    font-size: 25px;
    background-color: #b9030a;
    color: white;
    border-radius: 10px;
    padding: 1%;
  }

`;

export const LineNav = styled.li`
  color: #b9030a ;
  list-style: none;
  font-size: x-large;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const LogoImage = styled.h2`
  color: #b9030a;
  ${DisplayFlexAuto}
  span {
    padding-top: 5px;
    color: orange;
  }

  &:hover {
    cursor: pointer;
    transform: scale(120%);
  }
`;

export const Hamburguer = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
    &:hover {
      cursor: pointer;
      color: gold;
      transform: scale(120%);
    }
  }
`;

export const LoginOption = styled.div`
  display: none;
  @media (max-width: 1300px) {
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;

    &:hover {
      color: gold;
      transform: scale(120%);
    }
  }
`;

export const Functions = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

@media (max-width: 1300px) {
  display: none;
}
`


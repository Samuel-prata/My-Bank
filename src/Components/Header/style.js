import styled, { createGlobalStyle, css } from "styled-components";

const DisplayFlexAuto = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigator = styled.nav`
  background-color: #b9030a;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`;

export const Navbar = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    color: gold;
    cursor: pointer;
  }
`;

export const LineNav = styled.li`
  list-style: none;
  color: white;
  font-size: x-large;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const LogoImage = styled.h2`
  color: white;
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
    display: block;
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

import styled from "styled-components";

export const NavPerfil = styled.nav`
  height: 10vh;
  background-color: #b9030a;
`;

export const ContainerPerfil = styled.section`
  height: 80vh;
  display: flex;
`;

export const ContainerOperation = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Itens = styled.h3`
  color: white;
  font-size: 20px;
`;

export const HelloMessage = styled.h1`
  color: white;
  width: 15%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const DataAccount = styled.h2`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
  width: 80vh;
`;

export const ContainerAmount = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-around;
  align-items: center;
  color: black;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
`;

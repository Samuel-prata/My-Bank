import { styled, css } from "styled-components";

const CenterAll = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScreenLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
  height: 50vh;
  border-radius: 20px;
  -webkit-box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);
  -moz-box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);
  box-shadow: -9px 7px 130px 0px rgba(185, 3, 10, 0.41);

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ContainerInformation = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ContainerTitle = styled.div`
  ${CenterAll}
`;

export const InputEmail = styled.input`
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  border-style: none;
`;

export const InputPassword = styled.input`
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  border-style: none;
`;

export const ButtonSignIn = styled.button`
  background-color: white;
  color: black;
  padding: 20px;
  width: 20%;
  border-radius: 10px;
  border-style: none;
  &:hover {
    cursor: pointer;
    background-color: #3ea035;
    transform: scale(110%);
  }
`;

export const ButtonSignUp = styled.button`
  background-color: #1e90ff;
  color: white;
  padding: 20px;
  width: 20%;
  border-radius: 10px;
  border-style: none;
  &:hover {
    cursor: pointer;
    transform: scale(110%);
  }
`;

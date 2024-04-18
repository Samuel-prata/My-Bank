import {styled,css} from "styled-components";


const CenterAll = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyRegister = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
`
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

export const ContainerInformation = styled.div`
  height: 40vh;
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

export const ImageContainer = styled.div`
  width: 50%;
  height: 100vh;
  @media (max-width: 1300px) {
    display: none;
  }
`

export const ImageRegister = styled.img`
  width: 100%;
`


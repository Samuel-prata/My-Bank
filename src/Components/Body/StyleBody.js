import styled from "styled-components";

export const PrincipalSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #F5F9FF;
  width: 100%;
  height: 80vh;

  @media (max-width: 1300px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const ContainerInfo = styled.div`
height: 40%;
width: 55%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-around;
@media (max-width: 1300px) {
    width: 90%;
    align-items: center;
    height: 70%;
}

`

export const Destaque = styled.span`
color: orange;
`
export const TextPrincipal = styled.h1`
color:#b9030a ;
font-size: 60px;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 1300px) {
    font-size: 30px;
}
`
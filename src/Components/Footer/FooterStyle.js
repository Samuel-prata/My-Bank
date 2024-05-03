import styled from "styled-components";

export const FootBar = styled.section`
  height: 20vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;
export const Contact = styled.span`
  color: red;
  font-size: 20px;
  font-weight: bolder;
  padding: 10px;
`;
export const ContainerNumberContact = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
   @media (max-width: 1300px) {
    width:50%;

   }
`;

export const NumberContact = styled.h2`
  font-size: 20px;
    @media (max-width: 1300px) {
    font-size: 15px;

   }
`;

export const InformationContainerFooter = styled.div`
  width: 20%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
    @media (max-width: 1300px) {
      display: none;
   }
`;
export const InformationListFooter = styled.ul`
  height: 15vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 30px;
  list-style: none;
`;

export const InformationLine = styled.li`
text-align: center;

&:hover{
    cursor: pointer;
    color: orange;
    transform: scale(120%);
}
`;

export const ContainerInformationDeveloper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InformationDeveloper = styled.h3`
color: black;
  @media (max-width: 1300px) {
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
   }
`
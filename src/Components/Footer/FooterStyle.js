import styled from "styled-components";

export const FootBar = styled.section`
  height: 20vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
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
`;

export const NumberContact = styled.h2`
  font-size: 20px;
`;

export const InformationContainerFooter = styled.div`
  border: 5px solid black;
  width: 20%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InformationDeveloper = styled.h2`
    color: black
`
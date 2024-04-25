import styled from "styled-components";

export const CardContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #f5f9ff;
  @media (max-width: 1300px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageOne = styled.img`
  width: 100%;
  height: 80vh;
  border-radius: 50px;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 50vh;
  }
`;


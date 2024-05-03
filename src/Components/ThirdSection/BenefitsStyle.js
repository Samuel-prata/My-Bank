import styled from "styled-components";


export const Section = styled.section`
height: 100vh;
background-color: #b9030a;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`

export const ContainerPromotion = styled.div`
width: 50%;
height: 30vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 1300px) {
    width: 95%;

}
`

export const TitleBenefits = styled.h1`
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 50px;
width: 100%;
@media (max-width: 1300px) {
    font-size: 30px;
}
`

export const TypeBenefits = styled.h3`
font-size: 25px;
font-weight: lighter;

@media (max-width: 1300px) {
    font-size: 15px;
    
}
`
import React from "react";
import { CardContainer, ImageOne } from "./Card-style";
import foto1 from './Image-Card/1.png'
import ImageCard from './Image-Card/ImageCard.jpg';
import person from './Image-Card/imagePerson.jpg'



export default function Card() {
 
  return (
    <>
      <CardContainer>
        <ImageOne src={person}/>
      </CardContainer>
    </>
  );
}

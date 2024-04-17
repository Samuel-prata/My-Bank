import React from "react";
import { PrincipalSection } from "./StyleBody";
import Card from "../Card/Card";
import Login from "../Login/Login";
import About from '../About/About'

export default function Body() {
  return (
    <>
    <PrincipalSection>
        <Card/>
        <Login/>
    </PrincipalSection>
    <About>
      
    </About>
    </>
  );
}

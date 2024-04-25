import React, { useState } from "react";
import { CardContact, ContainerContact, ContainerInputKey, Title } from "./KeyPixStyle";
import { TextField } from "@mui/material";
import CardContactPix from "../Card/CardContactPix";

export default function KeyPix() {
  const [key, setKey] = useState("");

  const handleChange = (event) => {
    setKey(event.target.value);
    console.log(key);
  };

  return (
    <>
      <ContainerInputKey>
        <Title>Digite a chave pix</Title>
        <TextField
          id="outlined-basic"
          label="Chave pix"
          variant="outlined"
          style={{
            width: "50%",
          }}
          value={key}
          onChange={handleChange}
        />
      </ContainerInputKey>
      <ContainerContact>
        <CardContact>
          <CardContactPix/>
        </CardContact>
      </ContainerContact>
    </>
  );
}

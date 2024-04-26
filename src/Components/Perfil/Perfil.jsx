import React, { useEffect, useState } from "react";
import api from "../../Services/api";

//MUI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  ContainerDataAccount,
  ContainerOperation,
  ContainerPerfil,
  DataAccount,
  HelloMessage,
  NavPerfil,
} from "./PerfilStyle";
import PaperOperation from "./PaperOperation";
import PaperOperationTwo from "./PixArea";
import { ClickAwayListener } from "@mui/material";
import { toast } from "react-toastify";

export default function Perfil() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/user/25")
      .then((response) => setUser(response.data))
      .catch((err) => {
        toast.error("Erro ao pegar dados", {
          theme: "colored",
        });
      });
  }, []);

  return (
    <>
      <NavPerfil>
        <HelloMessage> Olá, {user?.name}</HelloMessage>
      </NavPerfil>
   
      <ContainerPerfil>
      <ContainerDataAccount>
        <DataAccount>
          {user?.amount}
        </DataAccount>
        </ContainerDataAccount>
        <ContainerOperation>
          <PaperOperation></PaperOperation>
        </ContainerOperation>
      </ContainerPerfil>
    </>
  );
}

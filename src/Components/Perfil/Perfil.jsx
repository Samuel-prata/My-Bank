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
  ContainerAmount,
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
import { useLocation } from "react-router-dom";
import ResponsivePerfil from "./ReponsivePerfil";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const dadosUsuario = location.state.dadosUsuario;
    if (dadosUsuario) {
      api
        .get(`/user/${dadosUsuario.cpf}`)
        .then((response) => setUser(response.data))
        .catch((err) => {
          toast.error("Erro ao pegar dados", {
            theme: "colored",
          });
        });
    }
  }, [location]);
  console.log(user);

  return (
    <>
      <NavPerfil>
        <HelloMessage> Olá, {user?.name}</HelloMessage>
      </NavPerfil>

      <ContainerPerfil>
        <ContainerOperation>
          <ContainerAmount>
            <DataAccount>
              <h2> Agencia: {user?.dataAccount.agency}</h2>
              <h2>Numero da conta: {user?.dataAccount.numberAccount}</h2>
            </DataAccount>
            Seu saldo é R$ {user?.amount}
          </ContainerAmount>
          <PaperOperation></PaperOperation>
          <ResponsivePerfil></ResponsivePerfil>
        </ContainerOperation>
      </ContainerPerfil>
    </>
  );
}

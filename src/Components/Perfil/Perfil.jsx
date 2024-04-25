import React, { useEffect, useState } from "react";
import api from "../../Services/api";

//MUI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ContainerOperation, ContainerPerfil } from "./PerfilStyle";
import PaperOperation from "./PaperOperation";
import PaperOperationTwo from "./PixArea";

export default function Perfil() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/user/9")
      .then((response) => setUser(response.data))
      .catch((err) => {
        // alert("Error to catch data from user");
      });
  }, []);

  return (
    <>
      <ContainerPerfil>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            backgroundColor: " #b9030a",
            width:"30%"
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={
              user?.photo != null
                ? user?.photo
                : "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg"
              }
              style={{
                width:"100%",
                height:"40vh"
              }}
            title="Photo User"
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {user?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
            <Typography
              variant="body2"
              backgroundColor="white"
              color="green"
              style={{ fontSize: "larger", fontWeight: "bolder" }}
            >
              R$ {user?.amount}
            </Typography>
          </CardContent>
        </Card>

        <ContainerOperation>
          <PaperOperation></PaperOperation>
        </ContainerOperation>
      </ContainerPerfil>
    </>
  );
}

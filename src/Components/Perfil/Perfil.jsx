import React, { useEffect, useState } from "react";
import api from "../../Services/api";

//MUI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Perfil() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/user/6")
      .then((response) => setUser(response.data))
      .catch((err) => {
        alert("Error to catch data from user");
      });
  }, []);

  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={user?.photo != null ? user?.photo: 'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg'}
          title="Photo User"
        />
        <CardContent style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {user?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
          <Typography variant="body2" color="green" style={{fontSize:"larger", fontWeight:'bolder'}}>
           R$ {user?.amount}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Depositar</Button>
          <Button size="small">Sacar</Button>
          <Button size="small">Pagar</Button>
          <Button size="small">Tranferir</Button>
        </CardActions>
      </Card>
    </>
  );
}

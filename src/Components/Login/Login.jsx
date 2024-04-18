import React from "react";
import {
  ScreenLogin,
  ContainerInformation,
  ContainerButton,
  ContainerTitle,
} from "./LoginStyle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


export default function Login() {

  const SendMessage  = () =>{
    <Alert severity="success">This is a success Alert.</Alert>
  }
  return (
    <>
      <ScreenLogin>
        <ContainerTitle>
        <PersonIcon style={{fontSize:'50px'}}/>  <h1 style={{ color: " black" }}> Sign in</h1>
        </ContainerTitle>
        <ContainerInformation>
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"60%"}}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" style={{width:"60%"}}/>
        </ContainerInformation>

        <ContainerButton>
          <Button variant="outlined" style={{padding:"15px"}}>Sign in</Button>
          <Link to="/Sign-Up">
          <Button variant="contained" style={{padding:"15px"}}> Sign Up</Button>
          </Link>
         
        </ContainerButton>
      </ScreenLogin>
    </>
  );
}

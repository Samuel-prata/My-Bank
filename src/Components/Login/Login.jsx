import React, { useState } from "react";
import api from "../../Services/api";
import {
  ScreenLogin,
  ContainerInformation,
  ContainerButton,
  ContainerTitle,
} from "./LoginStyle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Login() {
  const SendMessage = () => {
    <Alert severity="success">This is a success Alert.</Alert>;
  };

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    try{
      const response =  await api.post("http://localhost:8080/operations/login")
     setUserLogin(response.data)
     alert('Login realizado com sucesso')
      console.log(userLogin)
    }catch(error) {
      alert("Dados incorretos ou inexistentes")
      console.log("Erro: " + error)
    }
  }

  

  return (
    <>
      <ScreenLogin>
        <ContainerTitle>
          <PersonIcon style={{ fontSize: "50px" }} />{" "}
          <h1 style={{ color: " black" }}> Sign in</h1>
        </ContainerTitle>
        <ContainerInformation onSubmit={handleSubmit}>
          <TextField
            id="inputEmail"
            name="email"
            label="Email"
            variant="outlined"
            style={{ width: "60%" }}
            onChange={handleChange}
            value={userLogin.email}
          />
          <TextField
            id="inputPassword"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            style={{ width: "60%" }}
            value={userLogin.password}
            onChange={handleChange}
          />
          <ContainerButton>
            <Button variant="outlined" style={{ padding: "15px" }} type="submit">
              Sign in
            </Button>
            <Link to="/Sign-Up">
              <Button variant="contained" style={{ padding: "15px" }}>
                Sign Up
              </Button>
            </Link>
          </ContainerButton>
        </ContainerInformation>
      </ScreenLogin>
    </>
  );
}

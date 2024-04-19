import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Foto1 from "./Register-Images/1.png";
import {
  BodyRegister,
  ContainerButton,
  ContainerInformation,
  ContainerTitle,
  ImageContainer,
  ImageRegister,
  ScreenRegister,
} from "./RegisterStyle";
import { LogoImage, Navbar, Navigator } from "../Header/style";
import { Link, NavLink } from "react-router-dom";
import api from "../../Services/api";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    console.log(`nome:${userData.name}`)
    console.log(`email:${userData.email}`)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    try {
      const response = await api.post(`http://localhost:8080/operations`, userData)
      .then((response) => setUserData(response.data))
      alert("Usuario cadastrado com sucesso!");
      console.log("Cadastro com sucesso");
    } catch (error) {
      console.log(userData);
      console.log(error);
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <>
      <Navbar style={{ width: "100%" }}>
        <Navigator style={{ width: "100%", alignItems: "center" }}>
          <NavLink to="/" style={{ textDecoration: "none", padding: "20px" }}>
            {" "}
            <LogoImage>
              ⚡Sam<span>Thunder</span>
            </LogoImage>{" "}
          </NavLink>
        </Navigator>
      </Navbar>
      <BodyRegister>
        <ImageContainer>
          <ImageRegister src={Foto1} />
        </ImageContainer>
        <ScreenRegister>
          <ContainerTitle>
            <PersonIcon style={{ fontSize: "50px" }} />{" "}
            <h1 style={{ color: " black" }}> Sign Up</h1>
          </ContainerTitle>

          <ContainerInformation onSubmit={handleSubmit}>
            <TextField
              id="inputName"
              name="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              value={userData.name}
              style={{ width: "60%" }}
            />

            <TextField
              onChange={handleChange}
              id="inputCpf"
              name="cpf"
              label="CPF"
              variant="outlined"
              style={{ width: "60%" }}
              value={userData.cpf}
            />
            <TextField
              id="inputPhoto"
              name="photo"
              label="Photo"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              style={{ width: "60%" }}
            />
            <TextField
              id="inputEmail"
              name="email"
              label="Email"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              style={{ width: "60%" }}
            />
            <TextField
              id="inputPassword"
              name="password"
              label="Password"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              type="password"
              style={{ width: "60%" }}
            />
            <ContainerButton>
              <Button
                variant="contained"
                color="success"
                style={{ padding: "15px" }}
                type="submit"
              >
                Sign Up
              </Button>
            </ContainerButton>
          </ContainerInformation>
        </ScreenRegister>
      </BodyRegister>
    </>
  );
}

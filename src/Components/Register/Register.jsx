import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Foto1 from "./Register-Images/1.png";
import {
  Back,
  BodyRegister,
  ContainerButton,
  ContainerInformation,
  ContainerTitle,
  ImageContainer,
  ImageRegister,
  NavRegister,
  ScreenRegister,
} from "./RegisterStyle";
import { NavLink } from "react-router-dom";
import api from "../../Services/api";
import { ArrowBack } from "@mui/icons-material";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    photo: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    console.log(`nome:${userData.name}`);
    console.log(`email:${userData.email}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    try {
      const response = await api
        .post(`http://localhost:8080/operations`, userData)
        .then((response) => {
          toast.success("Cadastro realizado com sucesso", {
            position:'top-right',
            theme:'colored'
          })
          setUserData(response.data);
        });

      console.log("Cadastro com sucesso");
    } catch (error) {
      toast.error("Erro ao cadastrar usuário", {
        position:"top-right",
        theme:"colored"
      })
    }
  };



  return (
    <>
      <NavRegister>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Back>
            {" "}
            <ArrowBack sx={{ color: "white", fontSize: "30px" }} />
            Voltar
          </Back>
        </NavLink>
      </NavRegister>
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
                Cadastrar
              </Button>
            </ContainerButton>
            <ToastContainer/>
          </ContainerInformation>
        </ScreenRegister>
      </BodyRegister>
    </>
  );
}

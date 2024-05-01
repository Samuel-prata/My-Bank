import React, { useState } from "react";
import api from "../../Services/api";
import {
  ScreenLogin,
  ContainerInformation,
  ContainerButton,
  ContainerTitle,
  ContainerImage,
  BodyLogin,
  ImageLogin,
} from "./LoginStyle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import foto from "./Login-Image/foto1.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Perfil from "../Perfil/Perfil";

export default function Login() {
const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    cpf: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("http://localhost:8080/operations/login", userLogin);
      setUserLogin(response.data);
      toast.success("Login realizado com sucesso", {
        position: "top-right",
        theme: "colored",
      });
      navigate('/User', {state: {dadosUsuario: userLogin}})
    } catch (error) {
      toast.error("Erro ao realizar login", {
        position: "top-right",
        theme: "colored",
      });
      console.log("Erro: " + error);
      console.log(userLogin)
    }
  };

  const notify = () => {
    toast.info("Funcionalidade em desenvolvimento", {
      theme:'colored',
      position:'top-right'
    })
  }

  return (
    <>
      <BodyLogin>
        <ScreenLogin>
          <ContainerTitle>
            <h1 style={{ color: " black" }}> Acesse sua conta</h1>
          </ContainerTitle>
          <ContainerInformation onSubmit={handleSubmit}>
            <TextField
              id="inputCpf"
              name="cpf"
              label="CPF"
              variant="outlined"
              style={{ width: "60%" }}
              onChange={handleChange}
              value={userLogin.cpf}
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
              <Button
                variant="contained"
                color="error"
                style={{ padding: "15px", width: "60%" }}
                type="submit"
              >
                Entrar
              </Button>
              <Button
                variant="text"
                color="error"
                style={{
                  padding: "15px",
                  width: "60%",
                  textDecoration: "underline",
                }}
                onClick={notify}
              >
                Esqueci minha senha
              </Button>
              <ToastContainer />
            </ContainerButton>
          </ContainerInformation>
        </ScreenLogin>
        <ContainerImage>
          <ImageLogin src={foto} />
        </ContainerImage>
      </BodyLogin>
    </>
  );
}

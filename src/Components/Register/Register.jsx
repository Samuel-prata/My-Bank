import React from "react";
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
export default function Register() {
  return (
    <>
      <Navbar style={{ width: "100%" }}>
        <Navigator style={{ width: "100%", alignItems:"center" }}>
          <NavLink to="/" style={{textDecoration:"none", padding:"20px"}}>
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

          <ContainerInformation>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "60%" }}
            />
            <TextField
              id="outlined-basic"
              label="Photo"
              variant="outlined"
              style={{ width: "60%" }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "60%" }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              style={{ width: "60%" }}
            />
          </ContainerInformation>
          <ContainerButton>
            <Button
              variant="contained"
              color="success"
              style={{ padding: "15px" }}
              onClick={{ Link: "/Sign-Up" }}
            >
              Sign Up
            </Button>
          </ContainerButton>
        </ScreenRegister>
      </BodyRegister>
    </>
  );
}

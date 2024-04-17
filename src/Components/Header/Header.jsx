import React from "react";
import {
  Hamburguer,
  LineNav,
  LoginOption,
  LogoImage,
  Navbar,
  Navigator,
} from "./style";
import logo from "/src/assets/Logo-Samthunder.png";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

function Header() {
  return (
    <>
      <Navigator>
        <LogoImage>
          ⚡Sam<span>Thunder</span>
        </LogoImage>
        <Navbar>
          <LineNav>Sobre nós</LineNav>
          <LineNav>Contato</LineNav>
          <LineNav>Filiais</LineNav>
          <Hamburguer>
            <MenuIcon style={{ color: "white" }} />
          </Hamburguer>
          <LoginOption>
            {" "}
            <LoginIcon />
            <p>Login</p>
          </LoginOption>
        </Navbar>
      </Navigator>
    </>
  );
}
export default Header;

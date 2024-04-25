import React from "react";
import {
  Functions,
  Hamburguer,
  LineNav,
  LoginOption,
  LogoImage,
  Navbar,
  Navigator,
} from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navigator>
        <LogoImage>
          ⚡Sam<span>Thunder</span>
        </LogoImage>
        <Navbar>
          <LineNav>Para vocês</LineNav>
          <LineNav>Para empresas</LineNav>
          <LineNav>Para MEI</LineNav>
          <Hamburguer>
            <MenuIcon style={{ color: "white" }} />
          </Hamburguer>
          <LoginOption>
            {" "}
            <LoginIcon />
            <p>Login</p>
          </LoginOption>
        </Navbar>
        <Functions>
          <Button variant="outlined #b9030a" sx={{height:'50px', color:'#b9030a'}}>Entrar</Button>
          <NavLink to="/Sign-Up">
          <Button variant="contained" color="error" sx={{height:'50px', backgroundColor:'#b9030a'}}> Cadastrar</Button>
          </NavLink>
        </Functions>
      </Navigator>
    </>
  );
}
export default Header;

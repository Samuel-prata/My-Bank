import { Fab } from "@mui/material";
import React from "react";
import {
  BodyOperations,
  FirstSection,
  SecondSection,
} from "./ResponsivePerfilStyled";
import { SendToMobileOutlined } from "@mui/icons-material";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import QrCodeScanner from "@mui/icons-material/QrCodeScanner";
import CarRental from "@mui/icons-material/CarRental";

export default function ResponsivePerfil() {
  return (
    <>
      <FirstSection>
        {" "}
        <Fab
          style={{ height: "15vh", width: "25vw", backgroundColor: "#b9030a" }}
        >
          {" "}
          <SendToMobileOutlined style={{ color: "white" }} />
        </Fab>
        <Fab
          style={{ height: "15vh", width: "25vw", backgroundColor: "#b9030a" }}
        >
          {" "}
          <AccountBalanceWallet style={{ color: "white" }} />
       
        </Fab>
      </FirstSection>
      <SecondSection>
        <Fab
          style={{ height: "15vh", width: "25vw", backgroundColor: "#b9030a" }}
        >
          {" "}
          <QrCodeScanner style={{ color: "white" }} />
        </Fab>
        <Fab
          style={{ height: "15vh", width: "25vw", backgroundColor: "#b9030a" }}
        >
          {" "}
          <CarRental style={{ color: "white" }} />
        </Fab>
      </SecondSection>
    </>
  );
}

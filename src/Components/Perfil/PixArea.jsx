import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SendToMobileSharpIcon from "@mui/icons-material/SendToMobileSharp";
import { Itens } from "./PerfilStyle";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 320,
  height: 220,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function PixArea() {
  return (
    <>
    <Stack direction="row" spacing={2}>
      <DemoPaper
        variant="elevation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <SendToMobileSharpIcon />
        <Itens>QR Code</Itens>
      </DemoPaper>
      <DemoPaper
        variant="outlined"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <AccountBalanceWalletIcon />
        <Itens>Pix copia e cola</Itens>
      </DemoPaper>
      <DemoPaper
        variant="outlined"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <QrCodeScannerIcon />
        <Itens>Chave pix</Itens>
      </DemoPaper>
      <DemoPaper
        variant="outlined"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <CarRentalIcon />
        <Itens>Multas</Itens>
      </DemoPaper>
    </Stack>


    </>
  );
}

import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CarRentalIcon from "@mui/icons-material/CarRental";
import CopyAllSharpIcon from "@mui/icons-material/CopyAllSharp";
import { Itens } from "./PerfilStyle";
import { QrCode2Outlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
            cursor: "pointer",
            backgroundColor: " #b9030a",
          }}
        >
          <QrCode2Outlined />
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
            cursor: "pointer",
            backgroundColor: " #b9030a",
          }}
        >
          <CopyAllSharpIcon />
          <Itens>Pix copia e cola</Itens>
        </DemoPaper>

        <Link to="/PixArea/Key">
          <DemoPaper
            variant="outlined"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              justifyContent: "space-evenly",
              cursor: "pointer",
              backgroundColor: " #b9030a",
            }}
          >
            <VpnKeyOutlinedIcon />
            <Itens>Chave pix</Itens>
          </DemoPaper>
        </Link>
        <DemoPaper
          variant="outlined"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            cursor: "pointer",
            backgroundColor: " #b9030a",
          }}
        >
          <CarRentalIcon />
          <Itens>Multas</Itens>
        </DemoPaper>
      </Stack>
    </>
  );
}

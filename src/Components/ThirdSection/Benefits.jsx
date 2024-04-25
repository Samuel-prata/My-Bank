import React from "react";
import {
  ContainerPromotion,
  Section,
  TitleBenefits,
  TypeBenefits,
} from "./BenefitsStyle";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowOutward } from "@mui/icons-material";

export default function Benefits() {
  return (
    <>
      <Section>
        <ContainerPromotion>
          <TitleBenefits>#Beneficios ?
             É com a gente mesmo</TitleBenefits>
             <ArrowDownwardIcon sx={{color:"white", fontSize:'100px'}}/>
        </ContainerPromotion>
        <Box
          sx={{
            width: "40%",
            height: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                borderLeft: "2px solid white",
                height: "20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <LocalGroceryStoreIcon
                style={{ color: "white" }}
                sx={{ fontSize: "50px" }}
              />
              <TypeBenefits>
                Desconto nos produtos na loja do perigo, nosso apoiador
              </TypeBenefits>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                borderLeft: "2px solid white",
                height: "20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <AirplanemodeActiveIcon sx={{ fontSize: "50px" }} />
              <TypeBenefits>
                Acumulo de milhas quando compram coxinha com pepsi
              </TypeBenefits>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                borderLeft: "2px solid white",
                height: "20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <KeyboardTabIcon sx={{ fontSize: "50px" }} />
              <TypeBenefits>Transferência realizada na hora</TypeBenefits>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                borderLeft: "2px solid white",
                height: "20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                color: "white",
              }}
            >
              <ReceiptLongIcon sx={{ fontSize: "50px" }} />

              <TypeBenefits>Parcelamento no crédito em até 48x</TypeBenefits>
            </Grid>
          </Grid>
        </Box>
      </Section>
    </>
  );
}

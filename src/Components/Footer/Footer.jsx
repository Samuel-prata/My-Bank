import React from "react";
import {
  Contact,
  ContainerInformationDeveloper,
  ContainerNumberContact,
  FootBar,
  InformationContainerFooter,
  InformationDeveloper,
  InformationLine,
  InformationListFooter,
  NumberContact,
} from "./FooterStyle";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BusinessIcon from "@mui/icons-material/Business";

export default function Footer() {
  return (
    <>
      <FootBar>
        <ContainerNumberContact>
          <Contact>
            <CallIcon />{" "}
          </Contact>{" "}
          <NumberContact> (12) 4002-8922</NumberContact>
        </ContainerNumberContact>
        <InformationContainerFooter>
          <InformationListFooter>
            <InformationLine>
              {" "}
              <GroupsIcon /> Equipe
            </InformationLine>
            <InformationLine>
              {" "}
              <HandshakeIcon /> Parceiros
            </InformationLine>
            <InformationLine>
              {" "}
              <BusinessIcon /> Locais
            </InformationLine>
          </InformationListFooter>
        </InformationContainerFooter>
        <InformationDeveloper>
          <ContainerInformationDeveloper>
            <InformationDeveloper>Silverio, 2024</InformationDeveloper>
          </ContainerInformationDeveloper>
        </InformationDeveloper>
      </FootBar>
    </>
  );
}

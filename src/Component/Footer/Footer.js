import React from "react";
import { styled } from "@mui/system";
import { Paragraph } from "../Typography";

const FooterBox = styled("div")(({ theme }) => ({
  padding: "10px 0px",
  backgroundColor: theme.palette.primary.dark,
  "& p": {
    margin: 0,
    color: "rgb(158, 157, 154)",
    textAlign: "center",
  },
}));

const Footer = () => {
  return (
    <FooterBox>
      <Paragraph>© Jamir 2021, all rights reserved.</Paragraph>
    </FooterBox>
  );
};

export default Footer;

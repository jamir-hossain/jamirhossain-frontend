import React from "react";
import { H3, Paragraph } from "../Typography";
import { useTheme } from "@mui/system";
import FlexBox from "../FlexBox";
import CustomBox from "../CustomBox";
import CustomCard from "../CustomCard";
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";
import Typed from "react-typed";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
import CustomImage from "../CustomImage";

const IconBox = styled("div")(({ theme }) => ({
  "& svg": {
    color: "white",
    fontSize: "22px",
    transition: "all 0.3s",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.2)",
    },
  },
}));

const StyledImage = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
  maxWidth: "70%",
  marginTop: "40px",
}));

const ProfileCard = () => {
  const { palette } = useTheme();
  const { primary } = palette;

  return (
    <CustomCard>
      <FlexBox
        alignItems="center"
        justifyContent="center"
        sx={{ pt: "1rem", pb: "3rem" }}
      >
        <StyledImage src="/assets/jamiredited.jpg" alt="" />
      </FlexBox>

      <CustomBox
        textAlign="center"
        sx={{ p: "20px", background: primary[400] }}
      >
        <H3>Jamir Hossain</H3>
        <Paragraph fontSize="18px" color="secondary.main">
          <Typed
            strings={[
              "Programmer",
              "Front-end Developer",
              "MERN Stack Developer",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </Paragraph>
        <IconBox>
          <IconButton
            href="https://web.facebook.com/jamirhossain203/"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://github.com/Jamir45" target="_blank">
            <GithubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/jamir-hossain/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </IconBox>
      </CustomBox>
    </CustomCard>
  );
};

export default ProfileCard;

import React from "react";
import FlexBox from "../FlexBox";
import { styled } from "@mui/system";
import CustomBox from "../CustomBox";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";
import navList from "../../utils/navList";
import { navBarWidth } from "../../utils/constant";
import { AppBar, Container, useMediaQuery } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  minHeight: navBarWidth,
  background: theme.palette.primary.dark,
  boxShadow: theme.shadows[1],
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: navBarWidth,
}));

const commonLinkStyle = (theme) => {
  return {
    textAlign: "center",
    transition: "all 0.3s",
    padding: "2px 20px",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      padding: "2px 10px",
      fontSize: "14px",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(0.95)",
    },
  };
};

const InternalLink = styled(Link)(({ theme }) => ({
  ...commonLinkStyle(theme),
  "&.Resume": {
    padding: "2px 10px",
    margin: "0px 10px",
    borderRadius: "8px",
    transform: "scale(0.9)",
    border: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px",
    },
    "&:hover": {
      color: "white !important",
      backgroundColor: "#3f51b5 !important",
      borderColor: "#3f51b5 !important",
    },
  },
}));

const ExternalLink = styled("a")(({ theme }) => ({
  ...commonLinkStyle(theme),
  "&.Resume": {
    padding: "2px 10px",
    margin: "0px 10px",
    borderRadius: "8px",
    transform: "scale(0.9)",
    border: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px",
    },
    "&:hover": {
      color: "white !important",
      backgroundColor: "#3f51b5 !important",
      borderColor: "#3f51b5 !important",
    },
  },
}));

const NavItemBox = styled(FlexBox)(({ theme, mobileScreen }) => ({
  ...(mobileScreen && {
    width: "100%",
    justifyContent: "space-between",
  }),
}));

const AppHeader = () => {
  const mobileScreen = useMediaQuery("(max-width:630px)");

  return (
    <CustomBox sx={{ mb: `${navBarWidth}px` }}>
      <StyledAppBar position="fixed">
        <StyledContainer>
          {!mobileScreen && (
            <CustomLink sx={{ fontSize: "1.25rem" }} to="/">
              Jamir <strong style={{ color: "#fff454" }}>Hossain</strong>
            </CustomLink>
          )}

          <NavItemBox mobileScreen={mobileScreen}>
            {navList.map((item) => {
              const { Icon, title, url } = item;
              if (title === "Resume") {
                return (
                  <ExternalLink className={title} href={url}>
                    <Icon /> <br />
                    {title}
                  </ExternalLink>
                );
              } else {
                return (
                  <InternalLink className={title} to={url}>
                    <Icon /> <br />
                    {title}
                  </InternalLink>
                );
              }
            })}
          </NavItemBox>
        </StyledContainer>
      </StyledAppBar>
    </CustomBox>
  );
};

export default AppHeader;

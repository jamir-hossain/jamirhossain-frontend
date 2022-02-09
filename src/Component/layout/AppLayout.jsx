import React from "react";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";
import { appFooterHeight, appHeaderHeight } from "../../utils/constant";
import CustomScrollbar from "../CustomScrollbar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Box } from "@mui/material";

const ContextBox = styled("div")(({ theme }) => ({
  width: "100%",
  background: theme.palette.primary.main,
  minHeight: `calc(100vh - 60px)`,
}));

const AppLayout = () => {
  const totalHeight = appHeaderHeight + appFooterHeight;
  return (
    <>
      <AppHeader />
      <ContextBox>
        <CustomScrollbar
          sx={{
            height: `calc(100vh - ${totalHeight}px)`,
          }}
        >
          <Box py="3rem">
            <Outlet />
          </Box>
        </CustomScrollbar>
        <AppFooter />
      </ContextBox>
    </>
  );
};

export default AppLayout;

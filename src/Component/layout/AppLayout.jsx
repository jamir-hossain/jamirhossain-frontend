import { styled } from "@mui/system";
import React from "react";
import { navBarWidth } from "../../utils/constant";
import AppHeader from "./AppHeader";

const ContextBox = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: `calc(100vh - ${navBarWidth}px)`,
  background: theme.palette.primary.main,
}));

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <ContextBox>{children}</ContextBox>
    </>
  );
};

export default AppLayout;

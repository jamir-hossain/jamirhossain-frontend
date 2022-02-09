import { FC, ReactNode } from "react";
import Simplebar from "simplebar-react";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/material";
import "simplebar/dist/simplebar.min.css";

const ScrollBar = styled(Simplebar)(({ theme, barcolor }) => ({
  "& .simplebar-track.simplebar-vertical .simplebar-scrollbar:before": {
    backgroundColor: barcolor && theme.palette.primary.main,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before": {
    backgroundColor: barcolor && theme.palette.primary.main,
  },
}));

const CustomScrollbar = (props) => {
  const { children, barColor, sx } = props;
  return (
    <ScrollBar sx={sx} barcolor={barColor}>
      {children}
    </ScrollBar>
  );
};

export default CustomScrollbar;

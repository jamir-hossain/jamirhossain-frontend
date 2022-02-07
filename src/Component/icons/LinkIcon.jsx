import React from "react";
import { SvgIcon } from "@mui/material";

const LinkIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 12 16">
      <path d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z" />
    </SvgIcon>
  );
};

export default LinkIcon;

import React from "react";
import { SvgIcon } from "@mui/material";

const UserIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" />
    </SvgIcon>
  );
};

export default UserIcon;

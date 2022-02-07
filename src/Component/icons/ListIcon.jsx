import React from "react";
import { SvgIcon } from "@mui/material";

const ListIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g data-name="list">
        <rect
          width="24"
          height="24"
          opacity="0"
          transform="rotate(180 12 12)"
        />
        <circle cx="4" cy="7" r="1" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="4" cy="17" r="1" />
        <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94" />
        <rect width="14" height="2" x="7" y="16" rx=".94" ry=".94" />
        <rect width="14" height="2" x="7" y="6" rx=".94" ry=".94" />
      </g>
    </SvgIcon>
  );
};

export default ListIcon;

import React from "react";
import { Grid } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { H3, Span } from "../Typography";
import OutlinedButton from "../OutlinedButton";

const TestBox = styled("div")(() => ({
  textAlign: "right",
  zIndex: 100,
  "&::before": {
    content: '""',
    display: "block",
    height: "1px",
    width: "100%",
    backgroundColor: "#fff454",
    position: "relative",
    right: 0,
    top: "20px",
  },
}));

const Breadcrumb = (props) => {
  const { palette } = useTheme();
  const { firstWord, secondWord, buttonText } = props;

  return (
    <Grid container sx={{ py: "2rem" }}>
      <Grid item xs={12} lg={7} container>
        <Grid item xs={12} lg={5}>
          <H3 className="text-white">
            {firstWord} <Span sx={{ color: "#fff454" }}>{secondWord}</Span>
          </H3>
        </Grid>

        <Grid item xs={12} lg={7}>
          <TestBox>
            <OutlinedButton
              color="secondary"
              sx={{ background: palette.primary.main }}
            >
              {buttonText}
            </OutlinedButton>
          </TestBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Breadcrumb;

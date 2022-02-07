import React from "react";
import CustomImage from "../CustomImage";
import { Container, Grid } from "@mui/material";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Achievement = () => {
  const achievement = [
    "/assets/jamir hossain certificate.png",
    "/assets/spondon-cerficate.png",
  ];

  const firstWord = "My ";
  const secondWord = "Achievement";
  const buttonText = "Certificate";

  return (
    <>
      <Container>
        <Breadcrumb
          firstWord={firstWord}
          secondWord={secondWord}
          buttonText={buttonText}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            {achievement.map((img) => (
              <CustomImage
                src={img}
                alt=""
                sx={{ my: "12px", width: "100%", borderRadius: "8px" }}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Achievement;

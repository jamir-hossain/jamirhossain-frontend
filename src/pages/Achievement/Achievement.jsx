import React from "react";
import { Container, Grid } from "@mui/material";
import CustomImage from "../../Component/CustomImage";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

const Achievement = () => {
  return (
    <Container>
      <Breadcrumb
        firstWord="My "
        secondWord="Achievements"
        buttonText="Certificates"
      />
      <Grid mt={1} container spacing={3}>
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
  );
};

const achievement = [
  "/assets/jamir hossain certificate.png",
  "/assets/spondon-cerficate.png",
];

export default Achievement;

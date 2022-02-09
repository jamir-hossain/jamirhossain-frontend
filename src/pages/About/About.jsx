import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import { H2, Paragraph, Span } from "../../Component/Typography";
import { useTheme } from "@mui/system";
import FlexBox from "../../Component/FlexBox";
import OutlinedButton from "../../Component/OutlinedButton";
import CustomBox from "../../Component/CustomBox";
import ProfileCard from "./ProfileCard";

const About = () => {
  const { palette } = useTheme();
  const { secondary, primary } = palette;

  return (
    <>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}
        params={{
          particles: {
            number: { value: 60 },
            size: { value: 5 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />

      <Container sx={{ position: "relative", minHeight: "100vh" }}>
        <Grid mt={5} container spacing={3}>
          <Grid container item xs={12} md={5}>
            <Grid item xs={1} md={1} lg={2}></Grid>
            <Grid item xs={10} md={10} lg={9} sx={{ p: 0 }}>
              <ProfileCard />
            </Grid>
          </Grid>

          <Grid container item xs={12} md={7}>
            <Grid item xs={12} lg={10}>
              <CustomBox sx={{ mt: "4rem", p: "2rem" }}>
                <Paragraph sx={{ color: secondary.main }}>Hello, I'm</Paragraph>
                <H2>
                  Jamir <Span sx={{ color: secondary.main }}>Hossain</Span>
                </H2>
                <Paragraph sx={{ my: "1rem", textAlign: "justify" }}>
                  A Self-Taught, Tech enthusiast, and Creative Front-end & MERN
                  stack web developer with a deep interest in JavaScript. I have
                  been involved with programming to gain confidence and
                  excellence using my potential in the field of “Web
                  Development”, and express my innovative creative skills for
                  self and company growth.
                </Paragraph>

                <FlexBox
                  sx={{
                    flexWrap: "wrap",
                    "& a": { my: "12px", mr: "24px" },
                  }}
                >
                  <Link to="/contact">
                    <Button variant="contained" color="info">
                      CONTACT
                    </Button>
                  </Link>
                  <Link to="/achievement">
                    <Button variant="contained" color="info">
                      ACHIEVEMENT
                    </Button>
                  </Link>
                  <a href="https://github.com/Jamir45/jamirhossain-frontend/raw/608668ea78d98674513fa59fcfe45d854b21624c/CV%20of%20Jamir%20Hossain.pdf">
                    <OutlinedButton color="secondary">RESUME</OutlinedButton>
                  </a>
                </FlexBox>
              </CustomBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

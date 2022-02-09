import React from "react";
import { useTheme } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import Particles from "react-particles-js";
import FlexBox from "../../Component/FlexBox";
import { Button, Container, Grid } from "@mui/material";
import OutlinedButton from "../../Component/OutlinedButton";
import { H2, Paragraph, Span } from "../../Component/Typography";
import CustomBox from "../../Component/CustomBox";
import ProfileCard from "./ProfileCard";

const About = () => {
  const navigate = useNavigate();
  const { palette, breakpoints } = useTheme();
  const { secondary } = palette;

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

      <Container
        sx={{ position: "relative", minHeight: "calc(100vh - 100px)" }}
      >
        <Grid
          mt={2}
          container
          spacing={3}
          sx={{ [breakpoints.down("sm")]: { mt: 0 } }}
        >
          <Grid container item xs={12} md={5}>
            <Grid item xs={1} md={1} lg={2}></Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={10}
              lg={9}
              sx={{ p: 0, [breakpoints.down("sm")]: { px: "24px" } }}
            >
              <ProfileCard />
            </Grid>
          </Grid>

          <Grid container item xs={12} md={7}>
            <Grid item xs={12} lg={10}>
              <CustomBox
                sx={{
                  mt: "4rem",
                  p: "2rem",
                  [breakpoints.down("sm")]: { px: "24px" },
                }}
              >
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
                    alignItems: "center",
                    "& button": { my: "12px", mr: "16px" },
                  }}
                >
                  <Button
                    color="info"
                    variant="contained"
                    onClick={() => navigate("/contact")}
                  >
                    CONTACT
                  </Button>
                  <Button
                    color="info"
                    variant="contained"
                    onClick={() => navigate("/achievement")}
                  >
                    ACHIEVEMENT
                  </Button>

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

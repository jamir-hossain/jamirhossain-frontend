import React from "react";
import SkillData from "./SkillData";
import skillsData from "../../File/skillsData";
import ProfileCard from "../About/ProfileCard";
import { Container, Grid } from "@mui/material";
import Breadcrumb from "./Breadcrumb";

const Skills = () => {
  const firstWord = "All of";
  const secondWord = "My Skills";
  const buttonText = "My Skills";

  return (
    <Container>
      <Breadcrumb
        firstWord={firstWord}
        secondWord={secondWord}
        buttonText={buttonText}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>

        <Grid item xs={12} md={1} />

        <Grid item xs={12} md={6}>
          {skillsData.map((data) => (
            <SkillData Data={data}></SkillData>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
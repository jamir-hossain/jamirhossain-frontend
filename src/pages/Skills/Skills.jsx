import React from "react";
import SkillData from "./SkillData";
import ProfileCard from "../About/ProfileCard";
import { Container, Grid } from "@mui/material";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import skillsData from "../../utils/skillsData";

const Skills = () => {
  return (
    <Container>
      <Breadcrumb
        firstWord="All of"
        secondWord="My Skills"
        buttonText="My Skills"
      />
      <Grid mt={4} container spacing={3}>
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

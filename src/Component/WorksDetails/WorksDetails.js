import React from "react";
import { Box } from "@mui/system";
import Title from "../Title/Title";
import CustomCard from "../CustomCard";
import CustomImage from "../CustomImage";
import LinkIcon from "../icons/LinkIcon";
import { Paragraph } from "../Typography";
import { useParams } from "react-router-dom";
import GithubIcon from "../icons/GithubIcon";
import { Divider, Grid } from "@mui/material";
import worksData from "../../utils/worksData";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { ItemsContainer, SkillsItem, StyledA } from "../Works/SingleWork";

const WorksDetails = () => {
  const param = useParams();

  const project =
    worksData && worksData.find((data) => data.id === parseFloat(param.id));

  const firstWord = "Details";
  const secondWord = "Of Project";
  const link = "Details";

  return (
    <div className="container">
      <Breadcrumb
        firstWord={firstWord}
        secondWord={secondWord}
        buttonText={link}
      />
      <Grid container>
        <Grid item xs={12} md={2} />
        <Grid item xs={12} md={8}>
          <CustomCard>
            <CustomImage width="100%" src={project.image} alt="" />

            <Box sx={{ p: "16px" }}>
              <Title>{project.title}</Title>
              <Paragraph sx={{ mt: "12px", textAlign: "justify" }}>
                {project.description}
              </Paragraph>

              {project.features.length !== 0 && (
                <Box sx={{ my: 2 }}>
                  <Title afterWidth="20%">App Features</Title>

                  <Box mt="12px" component="ul">
                    {project.features.map((data) => {
                      return (
                        <div>
                          <li> {data} </li>
                        </div>
                      );
                    })}
                  </Box>
                </Box>
              )}
              <ItemsContainer>
                {project.tools.map((data) => {
                  return (
                    <SkillsItem>
                      <span> {data} </span>
                    </SkillsItem>
                  );
                })}
              </ItemsContainer>
            </Box>
            <Divider />

            <Box sx={{ p: "16px", "& a": { mx: "8px" } }}>
              <StyledA href={project.githubUrl} target="_blank">
                <GithubIcon />
              </StyledA>
              <StyledA href={project.siteUrl} target="_blank">
                <LinkIcon />
              </StyledA>
            </Box>
          </CustomCard>
        </Grid>
        <Grid item xs={12} md={2} />
      </Grid>
    </div>
  );
};

export default WorksDetails;

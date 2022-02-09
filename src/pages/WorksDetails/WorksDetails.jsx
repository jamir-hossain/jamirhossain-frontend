import {
  StyledA,
  SkillsItem,
  ItemsContainer,
} from "../../Component/Works/SingleWork";
import React from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import worksData from "../../utils/worksData";
import Title from "../../Component/Title/Title";
import { Container, Divider } from "@mui/material";
import CustomCard from "../../Component/CustomCard";
import CustomImage from "../../Component/CustomImage";
import LinkIcon from "../../Component/icons/LinkIcon";
import { Paragraph } from "../../Component/Typography";
import GithubIcon from "../../Component/icons/GithubIcon";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import FlexBox from "../../Component/FlexBox";

const WorksDetails = () => {
  const param = useParams();

  const project =
    worksData && worksData.find((data) => data.id === parseFloat(param.id));

  return (
    <Container>
      <Breadcrumb
        firstWord="Details"
        secondWord="Of Project"
        buttonText="Details"
      />
      <FlexBox mt={6} mb={4} justifyContent="center">
        <CustomCard sx={{ width: "100%", maxWidth: "700px" }}>
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
      </FlexBox>
    </Container>
  );
};

export default WorksDetails;

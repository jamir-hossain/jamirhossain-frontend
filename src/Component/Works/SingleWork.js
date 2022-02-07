import React from "react";
import Title from "../Title/Title";
import { styled } from "@mui/system";
import CustomBox from "../CustomBox";
import CustomCard from "../CustomCard";
import { Link } from "react-router-dom";
import LinkIcon from "../icons/LinkIcon";
import CustomImage from "../CustomImage";
import GithubIcon from "../icons/GithubIcon";
import { Box, Divider } from "@mui/material";
import { Paragraph } from "../Typography";

export const ItemsContainer = styled("div")(() => ({
  paddingTop: "1.5em",
  paddingBottom: "1.5em",
  paddingLeft: 0,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
}));

export const SkillsItem = styled("div")(({ theme }) => ({
  color: "#FFF",
  margin: "2px",
  fontSize: "13px",
  borderRadius: "4px",
  padding: "0.3em 0.6em",
  background: theme.palette.primary.light,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.main,
  "&:hover": {
    color: theme.palette.secondary.main,
    textDecoration: "underline #fff454",
  },
}));

export const StyledA = styled("a")(({ theme }) => ({
  cursor: "pointer",
  color: "white",
  transition: "all 0.3s",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.1) !important",
  },
}));

const SingleWork = (props) => {
  const work = props.data;

  return (
    <CustomCard sx={{ height: "100%" }}>
      <CustomImage width="100%" src={work.image} alt="" />

      <CustomBox p="20px" pb={0}>
        <Title>{work.title}</Title>
        <Paragraph mt="20px" textAlign="justify">
          {work.description.length > 180 ? (
            <>
              {work.description.slice(0, 185) + "....."}
              <StyledLink to={`/project/${work.id}`}>Read More</StyledLink>
            </>
          ) : (
            work.description
          )}
        </Paragraph>
        <ItemsContainer>
          {work.tools.map((data) => {
            return (
              <SkillsItem>
                <span> {data} </span>
              </SkillsItem>
            );
          })}
        </ItemsContainer>
      </CustomBox>

      <Divider />

      <Box sx={{ p: "16px", "& a": { mx: "8px" } }}>
        <StyledA href={work.githubUrl} target="_blank">
          <GithubIcon />
        </StyledA>
        <StyledA href={work.siteUrl} target="_blank">
          <LinkIcon />
        </StyledA>
      </Box>
    </CustomCard>
  );
};

export default SingleWork;

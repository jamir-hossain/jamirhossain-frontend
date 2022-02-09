import React from "react";
import { styled } from "@mui/system";
import CustomBox from "../../Component/CustomBox";
import Title from "../../Component/Title/Title";

const ItemsContainer = styled("div")(() => ({
  padding: "1em",
  paddingLeft: 0,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
}));

const SkillsItem = styled("div")(({ theme }) => ({
  color: "#FFF",
  margin: "0.2rem",
  fontSize: "1rem",
  borderRadius: "5em",
  padding: "0.3em 1.1em",
  background: theme.palette.primary.light,
}));

const SkillData = (props) => {
  const { skillsName, skills } = props.Data;

  return (
    <CustomBox my={3}>
      <Title afterWidth="25%"> {skillsName} </Title>
      <ItemsContainer>
        {skills.map((data) => {
          return (
            <SkillsItem>
              <span> {data} </span>
            </SkillsItem>
          );
        })}
      </ItemsContainer>
    </CustomBox>
  );
};

export default SkillData;

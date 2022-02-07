import CustomBox from "../CustomBox";
import SingleWork from "./SingleWork";
import React, { useState } from "react";
import UpArrowIcon from "../icons/UpArrowIcon";
import OutlinedButton from "../OutlinedButton";
import { Container, Fab, Grid } from "@mui/material";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import worksData from "../../utils/worksData";

const Works = React.forwardRef((props, ref) => {
  const [moreProject, setMoreProject] = useState(true);

  // To Get ShowMore and ShowLess Button Operation
  const showMore = () => {
    setMoreProject(true);
  };
  const showLess = () => {
    setMoreProject(false);
  };
  const first6 = moreProject
    ? worksData && worksData.slice(0, 6)
    : worksData && worksData;

  const firstWord = "Some of";
  const secondWord = "My Works";
  const buttonText = "My Works";

  return (
    <Container ref={ref}>
      <Breadcrumb
        firstWord={firstWord}
        secondWord={secondWord}
        buttonText={buttonText}
      />

      <Grid container spacing={3}>
        {first6 &&
          first6.map((work) => (
            <Grid item xs={12} md={6} lg={4}>
              <SingleWork data={work} showLess={showLess} showMore={showMore} />
            </Grid>
          ))}
      </Grid>

      <CustomBox my="3rem" textAlign="center" position="relative">
        <OutlinedButton onClick={() => showLess()} color="secondary">
          Show More
        </OutlinedButton>
        <Fab
          size="medium"
          color="secondary"
          onClick={() => props.scrollFunc()}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <UpArrowIcon />
        </Fab>
      </CustomBox>
    </Container>
  );
});

export default Works;

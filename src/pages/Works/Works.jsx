import SingleWork from "./SingleWork";
import React, { useState } from "react";
import CustomBox from "../../Component/CustomBox";
import { Container, Fab, Grid } from "@mui/material";
import UpArrowIcon from "../../Component/icons/UpArrowIcon";
import OutlinedButton from "../../Component/OutlinedButton";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
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

  return (
    <Container ref={ref}>
      <Breadcrumb
        firstWord="Some of"
        secondWord="My Works"
        buttonText="My Works"
      />

      <Grid mt={4} container spacing={3}>
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

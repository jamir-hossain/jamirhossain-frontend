import React, { useEffect, useState } from "react";
import worksData from "../../File/worksData";
import SingleWork from "../Works/SingleWork";
import { Container, Grid } from "@mui/material";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const SomeWorks = () => {
  const [someWorks, setSomeWorks] = useState(null);

  useEffect(() => {
    setSomeWorks(worksData);
  }, []);
  const first3 = someWorks && someWorks.slice(0, 3);

  const firstWord = "Some of";
  const secondWord = "My Works";
  const link = "/works";

  return (
    <Container>
      <Breadcrumb firstWord={firstWord} secondWord={secondWord} link={link} />
      <Grid container spacing={3}>
        {first3 &&
          first3.map((work) => (
            <Grid item xs={12} md={6} lg={4}>
              <SingleWork data={work} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default SomeWorks;

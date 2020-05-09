import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import HomeHeader from "../components/homeHeader";
import HomeService from "../components/homeService";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    width: "65%",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout>
      <HomeHeader />
      <div className={classes.gridContainer}>
        <Grid container direction="row" spacing={4} className={classes.grid}>
          <Grid item>
            <HomeService
              title="INFRASTRUCTURE AUTOMATION"
              description="The DevOps culture at OSL embraces automation in all aspects of infrastructure, network, and cloud operations."
              graphic="/images/computer-code.png"
            />
          </Grid>
          <Grid item>
            <HomeService
              title="LIFECYCLE FOCUSED"
              description="OSL creates solutions for the entire lifecycle of the application, development workflow, and production operations."
              graphic="/images/lifecycle.png"
            />
          </Grid>
          <Grid item>
            <HomeService
              title="CLOUD AGNOSTIC"
              description="Public, Private, Hybrid, and On-Prem – we excel at designing solutions that can be deployed anywhere."
              graphic="/images/cloud-agnostic.png"
            />
          </Grid>
          <Grid item>
            <HomeService
              title="HYPERSCALE SPECIALISTS"
              description="The DevOps culture at OSL embraces automation in all aspects of infrastructure, network, and cloud operations."
              graphic="/images/cloud-archetecture.png"
            />
          </Grid>
          <Grid item>
            <HomeService
              title="ENTERPRISE SUPPORT"
              description="OSL creates solutions for the entire lifecycle of the application, development workflow, and production operations."
              graphic="/images/computer-monitoring.png"
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;

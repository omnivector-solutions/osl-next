import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import HomeHeader from "../components/homeHeader";
import HomeService from "../components/homeService";
import Carousel from "../components/carousel";

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
      <Carousel />
    </Layout>
  );
};

export default Home;

import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../../components/layout";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "7.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: 0,
    },
  },
  marginDiv: {
    height: "1em",
  },
}));

const Logging = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <h1>Logging</h1>
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export default Logging;

import React from "react";

import Container from "@material-ui/core/Container";

import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";

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

const Ceph = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <h1>Ceph</h1>
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export default Ceph;

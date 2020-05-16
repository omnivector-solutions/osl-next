import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CharmsPanel from "../components/charmsPanel";
import Layout from "../components/layout";
import { getCharmMetadata } from "../lib/charmstore";

export async function getStaticProps() {
  const data = await getCharmMetadata();
  return {
    props: {
      charmData: data,
    },
  };
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "8.5em",
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

const Deploy = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <CharmsPanel charms={props.charmData} />
      </Container>
    </Layout>
  );
};

export default Deploy;

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CharmsPanel from "../../components/charmsPanel";
import BundlesPanel from "../../components/bundlesPanel";
import Layout from "../../components/layout";
import { getCharmMetadata, getBundleMetadata } from "../../lib/charmstore";

export async function getStaticProps() {
  let data = {};
  data.charms = await getCharmMetadata();
  data.bundles = await getBundleMetadata();
  return {
    props: {
      charms: data.charms,
      bundles: data.bundles,
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

const Solutions = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <BundlesPanel
              bundles={props.bundles}
              className={classes.gridItem}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CharmsPanel charms={props.charms} />
          </Grid>
        </Grid>
        <div className={classes.marginDiv} />
      </Container>
    </Layout>
  );
};

export default Solutions;

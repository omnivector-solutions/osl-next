import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BundleConfig from "../../../components/bundleConfig";
import Files from "../../../components/Files";
import BundleDetails from "../../../components/bundleDetails";
import Layout from "../../../components/layout";
import { getBundleNames, getOneBundle } from "../../../lib/charmstore";
import Container from "@material-ui/core/Container";

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
  headerText: {
    fontFamily: "Overpass",
    fontSize: "2.2em",
    fontWeight: 600,
    marginLeft: "12px",
    marginTop: "12px",
    color: theme.palette.primary.main,
  },
  titleContainer: {
    display: "flex",
    height: "70px",
  },
  img: {
    marginTop: "20px",
    marginLeft: "12px",
    height: "30px",
  },
}));

const Bundle = (props) => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState("README.md");

  const changeFileSelection = (fileName) => {
    setSelectedFile(fileName);
  };

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <Paper>
          <div className={classes.titleContainer}>
            <Typography className={classes.headerText}>
              {props.bundleData.Meta["id-name"].Name}
            </Typography>
          </div>
        </Paper>
        <BundleDetails meta={props.bundleData.Meta} id={props.bundleData.Id} />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Files
              files={props.bundleData.Meta.manifest}
              id={props.bundleData.Id}
            />
          </Grid>
        </Grid>
        <BundleConfig config={props.bundleData.Meta} />
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const names = await getBundleNames();

  const paths = names.map((name) => {
    return { params: { id: name } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bundleData = await getOneBundle(params.id);
  return {
    props: { bundleData },
  };
}

export default Bundle;

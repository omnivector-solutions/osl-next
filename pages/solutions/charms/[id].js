import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CharmConfig from "../../../components/charmConfig";
import Files from "../../../components/Files";
import CharmDetails from "../../../components/charmDetails";
import Layout from "../../../components/layout";
import { getCharmNames, getOneCharm } from "../../../lib/charmstore";
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

const Charm = (props) => {
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
            <img
              src={`https://api.jujucharms.com/charmstore/v5/${props.charmData.Id.substring(
                3
              )}/icon.svg`}
              alt="icon"
              className={classes.img}
            />
            <Typography className={classes.headerText}>
              {props.charmData.Meta["charm-metadata"].Name}
            </Typography>
          </div>
        </Paper>
        <CharmDetails
          meta={props.charmData.Meta["charm-metadata"]}
          links={props.charmData.Meta["common-info"]}
        />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Files
              id={props.charmData.Id}
              files={props.charmData.Meta.manifest}
            />
          </Grid>
        </Grid>
        <CharmConfig config={props.charmData.Meta["charm-config"].Options} />
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const names = await getCharmNames();
  const paths = names.map((name) => {
    return { params: { id: name } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const charmData = await getOneCharm(params.id);
  return {
    props: { charmData },
  };
}

export default Charm;

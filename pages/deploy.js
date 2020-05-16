import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import Layout from "../components/layout";
import { getCharms } from "../lib/charmstore";

export async function getStaticProps() {
  const data = await getCharms();
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
  root: {
    flexGrow: 1,
  },
  card: {
    height: "300px",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    height: "40px",
    margin: "4px",
  },
  cardHeader: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  },
  name: {
    ...theme.typography.header,
    fontSize: "1.8em",
    color: "black",
    marginLeft: "8px",
  },
  summary: {
    ...theme.typography.header,
    fontSize: "1em",
    marginLeft: "4px",
  },
  summaryContainer: {
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    padding: "8px",
  },
  description: {
    ...theme.typography.header,
    fontSize: "1.8em",
    color: "black",
    marginLeft: "8px",
    textAlign: "left",
  },
}));

const Deploy = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={4}>
          {props.charmData.map((charm, index) => {
            return (
              <Grid key={index} item xs={4}>
                <Paper className={classes.card}>
                  <div className={classes.cardHeader}>
                    <img
                      src={`https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
                        3
                      )}/icon.svg`}
                      alt="icon"
                      className={classes.img}
                    />
                    <Typography className={classes.name}>
                      {charm.data.Name}
                    </Typography>
                  </div>
                  <div className={classes.summaryContainer}>
                    <Typography className={classes.summary}>
                      {charm.data.Summary}
                    </Typography>
                  </div>
                  <div className={classes.description}>
                    <Typography>{charm.data.Description}</Typography>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Deploy;

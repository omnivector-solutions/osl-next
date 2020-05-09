import React from "react";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";

import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: "275px",
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      height: "35px",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Ubuntu",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "1.8em",
  },
  deployText: {
    color: theme.palette.primary.light,
    fontFamily: "Ubuntu",
    fontSize: ".8rem",
    fontWeight: "bold",
  },
  openInNew: {
    fontFamily: "Ubuntu",
    fontWeight: 800,
    fontSize: "14px",
    margin: "8px",
    color: theme.palette.secondary.main,
    textDecoration: "none",
    position: "relative",
    top: "10px",
  },
  discourse: {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: "14px",
    margin: "0 24px",
    color: theme.palette.secondary.main,
    opacity: 0.7,
    height: "36px",
    textDecoration: "none",
    position: "relative",
    top: "-17px",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <a
                href="https://community.omnivector.solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes.discourse}>
                  Discourse
                  <OpenInNewIcon className={classes.openInNew} />
                </div>
              </a>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                item
                to="/big-data"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(1),
                ]}
                className={classes.link}
              >
                Big Data
              </Grid>
              <Grid
                item
                to="/hpc"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(2),
                ]}
                className={classes.link}
              >
                HPC
              </Grid>
              <Grid
                item
                to="/elasticsearch"
                className={classes.link}
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(3),
                ]}
              >
                Elasticsearch
              </Grid>
              <Grid
                item
                to="/redis"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(4),
                ]}
                className={classes.link}
              >
                Redis
              </Grid>
              <Grid
                item
                to="/ceph"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(5),
                ]}
                className={classes.link}
              >
                Ceph
              </Grid>
              <Grid
                item
                to="/devops"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(7),
                ]}
                className={classes.link}
              >
                DevOps Services
              </Grid>
              <Grid
                item
                to="/logging"
                onClick={() => [
                  props.setSelectedValue(1),
                  props.setSelectedIndex(8),
                ]}
                className={classes.link}
              >
                Logging
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/spark-jupyter-core/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span>{" "}
                Spark/Jupyter Core
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/spark-jupyter-conda-extended/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span>{" "}
                Spark/Jupyter Extended
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/elasticsearch-core/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span>{" "}
                Elasticsearch Core
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/elasticsearch-non-uniform/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span>{" "}
                Elasticsearch Extended
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/elk-core/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> ELK Core
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/keg-core/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> KEG Core
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/redis-singleton/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> Redis
                Singleton
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/redis-cluster/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> Redis
                Cluster
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/ceph-core/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> Ceph Core
              </Grid>
              <Grid
                component={"a"}
                href="https://jaas.ai/u/omnivector/ceph-extended/bundle"
                item
                className={classes.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={classes.deployText}>DEPLOY: </span> Ceph
                Extended
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
};

export default Footer;

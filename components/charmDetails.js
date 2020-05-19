import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import Link from "./link";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "16px",
  },
  headerText: {
    ...theme.typography.header,
    color: "white",
    fontSize: "1.5em",
    paddingTop: "4px",
    margin: "12px",
  },
  bodyContainer: {
    display: "flex",
  },
  horizDivider: {
    marginBottom: "8px",
    marginTop: "6px",
  },
  chip: {
    margin: "4px",
  },
  metaContainer: {
    padding: "12px",
    margin: "4px",
  },
  metaTitle: {
    fontWeight: 600,
  },
  linksContainer: {
    margin: ".5em",
    display: "flex",
    flexDirection: "column",
  },
}));

const CharmDetails = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headerContainer}>
        <Typography className={classes.headerText}>Details:</Typography>
      </Paper>

      <div className={classes.bodyContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>Summary:</Typography>
              <Divider className={classes.horizDivider} />
              <Typography>{props.meta.Summary}</Typography>
              <Divider className={classes.horizDivider} />
              <Typography className={classes.metaTitle}>Links:</Typography>
              <div className={classes.linksContainer}>
                <a href={props.links.homepage}>View on Github...</a>
                <a href={props.links.homepage}>Submit a Bug...</a>
                <a href={props.links.homepage}>Deploy on JAAS...</a>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>
                Description:
              </Typography>
              <Divider className={classes.horizDivider} />
              <Typography>{props.meta.Description}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>Tags:</Typography>
              {props.meta.Tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={classes.chip}
                  />
                );
              })}
              <Divider className={classes.horizDivider} />
              <Typography className={classes.metaTitle}>Series:</Typography>
              {props.meta.SupportedSeries.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={classes.chip}
                  />
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>Tags:</Typography>
              <Divider className={classes.horizDivider} />
              {props.meta.Tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={classes.chip}
                  />
                );
              })}
              <Typography className={classes.metaTitle}>Series:</Typography>
              <Divider className={classes.horizDivider} />
              {props.meta.SupportedSeries.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={classes.chip}
                  />
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default CharmDetails;

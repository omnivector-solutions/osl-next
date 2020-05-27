import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import BugReportIcon from "@material-ui/icons/BugReport";
import GitHubIcon from "@material-ui/icons/GitHub";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

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
  button: {
    margin: "4px",
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
                <Button
                  variant="contained"
                  color="default"
                  href={props.links.homepage}
                  className={classes.button}
                  startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  href={`${props.links.homepage}/issues`}
                  className={classes.button}
                  startIcon={<BugReportIcon />}>
                  Issues
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  href={`https://jujucharms.com/new/?deploy-target=${props.id}`}
                  className={classes.button}
                  startIcon={<SystemUpdateAltIcon />}>
                  Deploy
                </Button>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              {props.meta.Provides ? (
                <Fragment>
                  <Typography className={classes.metaTitle}>
                    Provides:
                  </Typography>
                  {Object.keys(props.meta.Provides).map((key, index) => {
                    return (
                      <Chip
                        key={index}
                        label={key}
                        color="primary"
                        size="small"
                        className={classes.chip}
                      />
                    );
                  })}
                  <Divider className={classes.horizDivider} />
                </Fragment>
              ) : null}

              {props.meta.Requires ? (
                <Fragment>
                  <Typography className={classes.metaTitle}>
                    Requires:
                  </Typography>
                  {Object.keys(props.meta.Requires).map((key, index) => {
                    return (
                      <Chip
                        key={index}
                        label={key}
                        color="primary"
                        size="small"
                        className={classes.chip}
                      />
                    );
                  })}
                  <Divider className={classes.horizDivider} />
                </Fragment>
              ) : null}
              {props.meta.Peers ? (
                <Fragment>
                  <Typography className={classes.metaTitle}>Peers:</Typography>
                  {Object.keys(props.meta.Peers).map((key, index) => {
                    return (
                      <Chip
                        key={index}
                        label={key}
                        color="primary"
                        size="small"
                        className={classes.chip}
                      />
                    );
                  })}
                </Fragment>
              ) : null}
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
        </Grid>
      </div>
    </Fragment>
  );
};

export default CharmDetails;

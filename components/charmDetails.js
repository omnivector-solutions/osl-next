import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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
  metaContainer: {
    height: "300px",
    padding: "12px",
    margin: "4px",
    width: "25%",
  },
  horizDivider: {
    marginBottom: "8px",
    marginTop: "6px",
  },
  chip: {
    margin: "4px",
  },
  metaTitle: {
    fontWeight: 600,
  },
  button: {
    width: "175px",
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
        <Paper className={classes.metaContainer}>
          <Typography className={classes.metaTitle}>Summary:</Typography>
          <Divider className={classes.horizDivider} />
          <Typography>{props.meta.Summary}</Typography>
          <Divider className={classes.horizDivider} />
          <Typography className={classes.metaTitle}>Links:</Typography>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="small"
            href={props.links.homepage}>
            View on Github...
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="small"
            href={props.links.homepage}>
            Submit a Bug...
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="small"
            href={props.links.homepage}>
            Deploy on JAAS...
          </Button>
        </Paper>
        <Paper className={classes.metaContainer}>
          <Typography className={classes.metaTitle}>Description:</Typography>
          <Divider className={classes.horizDivider} />
          <Typography>{props.meta.Description}</Typography>
        </Paper>
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
        </Paper>
        <Paper className={classes.metaContainer}>
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
      </div>
    </Fragment>
  );
};

export default CharmDetails;

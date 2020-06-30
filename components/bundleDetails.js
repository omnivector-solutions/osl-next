import React, { Fragment } from "react";
import Link from "./link";

//MUI COMPONENTS
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Chip,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
  img: {
    width: "100%",
  },
}));

const BundleDetails = (props) => {
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
              <img
                src={`https://api.jujucharms.com/charmstore/v5/${props.meta.id.Id.substring(
                  3
                )}/diagram.svg`}
                alt="icon"
                className={classes.img}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>App Config:</Typography>

              <Divider className={classes.horizDivider} />
              <div className={classes.relatedCharmsContainer}>
                {Object.keys(props.meta["bundle-metadata"].applications).map(
                  (key, index) => {
                    return (
                      <Chip
                        key={key}
                        label={key}
                        className={classes.chip}
                        avatar={
                          <Avatar
                            src={`https://api.jujucharms.com/charmstore/v5/${props.meta[
                              "bundle-metadata"
                            ].applications[key].Charm.substring(3)}/icon.svg`}
                          />
                        }
                        component={Link}
                        href={`/charms/${props.meta["id-name"].Name}`}
                        clickable
                        variant="outlined"
                      />
                    );
                  }
                )}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>Links:</Typography>
              <div className={classes.linksContainer}>
                <a href={props.meta["common-info"].homepage}>
                  View on Github...
                </a>
                <a href={props.meta["common-info"]["bugs-url"]}>
                  Submit a Bug...
                </a>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.metaContainer}>
              <Typography className={classes.metaTitle}>Tags:</Typography>
              <Divider className={classes.horizDivider} />
              {props.meta.Tags
                ? props.meta.tags.Tags.map((tag, index) => {
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
                  })
                : null}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default BundleDetails;

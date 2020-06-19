import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterListIcon from "@material-ui/icons/FilterList";
import CodeIcon from "@material-ui/icons/Code";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontSize: "2.2em",
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(15),
    margin: "8px",
  },
  secondaryHeading: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontSize: "2.2em",
    fontWeight: 200,
    fontSize: theme.typography.pxToRem(15),
    margin: "8px",
    color: "black",
  },
  details: {
    alignItems: "center",
  },
  column25: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
  },
  column50: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  img: {
    height: "25px",
    width: "25px",
    margin: "2px",
  },
  chip: {
    margin: "4px",
    alignItems: "left",
  },
  headerContainer: {
    height: "60px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "1em",
    display: "flex",
  },
  headerText: {
    ...theme.typography.header,
    fontSize: "1.5em",
    color: "white",
    padding: ".6em",
  },
  filter: {
    backgroundColor: theme.palette.grey[200],
    margin: "10px",
    borderRadius: "4px",
    marginRight: "8px",
    marginLeft: "auto",
  },
  cli: {
    margin: "10px",
    width: "400px",
  },
  bundleLink: {
    marginRight: "auto",
    marginLeft: "8px",
  },
  deploy: {
    marginRight: "8px",
  },
  relatedCharmsContainer: {
    display: "block",
    maxWidth: "30vw",
  },
  diagram: {
    maxWidth: "100%",
  },
}));

const bundlesPanel = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bundleList, setBundleList] = useState(props.bundles);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const expandPanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filterBundles = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.bundles.filter((bundle) =>
      bundle.Id.toLowerCase().includes(searchTerm)
    );
    setBundleList(results);
  }, [searchTerm]);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography className={classes.headerText}>Bundle Library:</Typography>
        <TextField
          id="outlined-basic"
          type="text"
          size="small"
          variant="outlined"
          placeholder="Filter"
          value={searchTerm}
          onChange={() => filterBundles(event)}
          className={classes.filter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FilterListIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {bundleList.map((bundle, index) => {
        return (
          <ExpansionPanel
            key={bundle.Id}
            expanded={expanded === index}
            onChange={expandPanel(index)}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={bundle.Id}
              id={bundle.Id}>
              <Typography className={clsx(classes.column50, classes.heading)}>
                {bundle.Meta["id-name"].Name}
              </Typography>
              <Typography
                className={clsx(
                  classes.column50,
                  classes.secondaryHeading,
                  classes.divider
                )}>
                {bundle.Meta["bundle-metadata"].Description}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column50}>
                <Typography variant="caption">Description:</Typography>
                <Typography variant="body2">
                  {bundle.Meta.Description}
                </Typography>
                <img
                  src={`https://api.jujucharms.com/charmstore/v5/${bundle.Id.substring(
                    3
                  )}/diagram.svg`}
                  alt="diagram"
                  className={classes.diagram}
                />
              </div>
              <div className={clsx(classes.column25, classes.divider)}>
                <Typography variant="caption">Tags:</Typography>
                <div></div>
              </div>
              <div className={clsx(classes.column25, classes.divider)}>
                <Typography variant="caption">Configuration:</Typography>
                <div className={classes.relatedCharmsContainer}>
                  {Object.keys(bundle.Meta["bundle-metadata"].applications).map(
                    (key, index) => {
                      return (
                        <Chip
                          key={key}
                          label={key}
                          className={classes.chip}
                          // avatar={
                          //   <Avatar
                          //     src={`https://api.jujucharms.com/charmstore/v5/${bundle.Meta[
                          //       "bundle-metadata"
                          //     ].applications[key].Charm.substring(3)}/icon.svg`}
                          //   />
                          // }
                          component="a"
                          href={`/charms/${bundle.Meta["id-name"].Name}`}
                          clickable
                          variant="outlined"
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                startIcon={<CodeIcon />}
                className={classes.bundleLink}
                size="large"
                href={`/solutions/bundles/${bundle.Meta["id-name"].Name}`}>
                Details
              </Button>

              <TextField
                id="outlined-basic"
                label="Deploy with CLI:"
                type="text"
                size="small"
                variant="outlined"
                placeholder="Search"
                value={`juju deploy ${bundle.Id}`}
                className={classes.cli}
              />
              <Button
                size="small"
                color="primary"
                variant="contained"
                className={classes.deploy}
                startIcon={<CloudUploadIcon />}
                size="large"
                href={`https://jujucharms.com/new/?dd=${bundle.Id.substring(
                  3
                )}`}>
                Deploy
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default bundlesPanel;

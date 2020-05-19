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

import Link from "../components/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    width: "250px",
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
    flexBasis: "25%",
    display: "flex",
    flexDirection: "column",
  },
  column50: {
    flexBasis: "50%",
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
    marginRight: "12px",
    height: "30px",
    margin: "4px",
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
  charmLink: {
    marginRight: "auto",
    marginLeft: "8px",
  },
  deploy: {
    marginRight: "8px",
  },
}));

const charmsPanel = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [charmList, setCharmList] = useState(props.charms);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const expandPanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filterCharms = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.charms.filter((charm) =>
      charm.data.Name.toLowerCase().includes(searchTerm)
    );
    setCharmList(results);
  }, [searchTerm]);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography className={classes.headerText}>Charm Library:</Typography>
        <TextField
          id="outlined-basic"
          type="text"
          size="small"
          variant="outlined"
          placeholder="Filter"
          value={searchTerm}
          onChange={() => filterCharms(event)}
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
      {charmList.map((charm, index) => {
        return (
          <ExpansionPanel
            key={charm.Id}
            expanded={expanded === index}
            onChange={expandPanel(index)}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={charm.data.Name}
              id={charm.data.Name}>
              <img
                src={`https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
                  3
                )}/icon.svg`}
                alt="icon"
                className={classes.img}
              />
              <Typography className={classes.heading}>
                {charm.data.Name}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {charm.data.Summary}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <div className={classes.column50}>
                <Typography variant="caption">Description:</Typography>
                <Typography variant="body2">
                  {charm.data.Description}
                </Typography>
              </div>
              <div className={clsx(classes.column25, classes.divider)}>
                <Typography variant="caption">Tags:</Typography>
                <div>
                  {charm.data.Tags.map((tag, index) => {
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
                </div>
              </div>
              <div className={clsx(classes.column25, classes.divider)}>
                <Typography variant="caption">Supported Series:</Typography>
                <div>
                  {charm.data.SupportedSeries.map((series, index) => {
                    return (
                      <Chip
                        key={index}
                        label={series}
                        variant="outlined"
                        color="primary"
                        size="small"
                        className={classes.chip}
                      />
                    );
                  })}
                </div>
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                className={classes.charmLink}
                href={`/charms/${charm.data.Name}`}>
                Charm Details
              </Button>

              <TextField
                id="outlined-basic"
                label="Deploy with CLI:"
                type="text"
                size="small"
                variant="outlined"
                placeholder="Search"
                value={`juju deploy ${charm.Id}`}
                className={classes.cli}
              />
              <Button
                size="small"
                color="primary"
                variant="contained"
                className={classes.deploy}
                href={`https://jujucharms.com/new/?dd=${charm.Id.substring(
                  3
                )}`}>
                Deploy with JAAS
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default charmsPanel;

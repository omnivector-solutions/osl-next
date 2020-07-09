import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "./link";

//MUI COMPONENTS
import {
  useTheme,
  makeStyles,
  Chip,
  Divider,
  Button,
  InputAdornment,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography,
  useMediaQuery,
} from "@material-ui/core/";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CodeIcon from "@material-ui/icons/Code";
import FilterListIcon from "@material-ui/icons/FilterList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    width: "35%",
    fontFamily: "Overpass",
    textTransform: "none",
    fontSize: "1em",
    fontWeight: 600,
    color: theme.palette.primary.main,
    margin: "8px",
  },
  secondaryHeading: {
    fontFamily: "Overpass",
    textTransform: "none",
    fontSize: "1em",
    fontWeight: 200,
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
    marginRight: "6px",
    flexDirection: "column",
    wordWrap: "break-word",
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
  headerContainerSm: {
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: ".3em",
    display: "flex",
    borderRadius: "8px 8px 0 0",
  },
  headerText: {
    ...theme.typography.header,
    fontSize: "1.5em",
    color: "white",
    padding: ".6em",
  },
  headerTextSm: {
    ...theme.typography.header,
    fontSize: "1.5em",
    color: "white",
    padding: ".25em",
    marginLeft: ".4em",
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
    width: "100%",
  },
  button: {
    width: "45%",
    margin: "8px",
  },
}));

const charmsPanel = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  const [searchTerm, setSearchTerm] = useState("");
  const [charmList, setCharmList] = useState(props.charms);

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
      {props.header ? (
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
      ) : null}
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
              <Typography className={clsx(classes.column50, classes.heading)}>
                {charm.data.Name}
              </Typography>
              <Typography
                className={clsx(
                  classes.column50,
                  classes.secondaryHeading,
                  classes.divider
                )}>
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
                className={classes.button}
                startIcon={small ? <CodeIcon /> : null}
                component={Link}
                href={`/solutions/charms/${charm.data.Name}`}>
                Details
              </Button>

              <TextField
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
                className={classes.button}
                startIcon={small ? <CloudUploadIcon /> : null}
                href={`https://jujucharms.com/new/?dd=${charm.Id.substring(
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

export default charmsPanel;

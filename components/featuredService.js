import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import CharmsPanel from "./charmsPanel";
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
  container: {
    width: "100%",
  },
  titleContainer: {
    height: "120px",
    width: "55vw",
    position: "absolute",
    top: "5em",
    marginLeft: "5.5em",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "64px 0 64px 0",
  },
  charmsContainer: {
    height: "300px",
    width: "30vw",
    position: "absolute",
    top: "15em",
    marginLeft: "5.5em",
  },
  title: {
    ...theme.typography.header,
    color: "white",
    fontSize: "3em",
    position: "absolute",
    width: "55vw",
    top: "2.2em",
    marginLeft: "4em",
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.8em",
    },
  },
}));

const FeaturedService = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container} key={props.id}>
      <img src={props.img} alt="icon" />
      <div className={classes.titleContainer} />
      <Typography className={classes.title}>{props.title}</Typography>
      <div className={classes.charmsContainer}>
        <CharmsPanel charms={props.charms} />
      </div>
    </div>
  );
};

export default FeaturedService;

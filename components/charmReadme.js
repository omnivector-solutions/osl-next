import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
  readmeContainer: {
    padding: "1px 18px",
  },
}));

const charmReadme = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headerContainer}>
        <Typography className={classes.headerText}>Read Me:</Typography>
      </Paper>
      <Paper className={classes.readmeContainer}>
        <ReactMarkdown source={props.readme} />
      </Paper>
    </Fragment>
  );
};

export default charmReadme;

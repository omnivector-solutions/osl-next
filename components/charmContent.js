import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

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
  paramText: {
    ...theme.typography.header,
    fontSize: ".9em",
    fontWeight: 200,
    color: "black",
    marginLeft: "8px",
  },
  paramName: {
    ...theme.typography.header,
    color: theme.palette.primary.main,
    fontSize: "1.1em",
    fontWeight: 600,
  },
  paramContainer: {
    padding: "8px",
    display: "flex",
  },

  column25: {
    flexBasis: "25%",
    display: "flex",
    flexDirection: "column",
  },
  column75: {
    flexBasis: "75%",
    display: "flex",
    flexDirection: "column",
  },
  vertDivider: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
}));

const charmContent = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headerContainer}>
        <Typography className={classes.headerText}>
          Omnivector Content Here: (bitches)
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default charmContent;

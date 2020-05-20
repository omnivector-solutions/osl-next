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

const charmConfig = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headerContainer}>
        <Typography className={classes.headerText}>Configuration:</Typography>
      </Paper>
      <Paper>
        {Object.keys(props.config).map((key, index) => {
          const config = props.config;

          return (
            <Fragment key={index}>
              <div className={classes.paramContainer}>
                <div className={classes.column25}>
                  <Typography className={classes.paramName}>{key}</Typography>
                  {props.config[key].Type ? (
                    <Typography className={classes.paramText}>
                      <strong> Type:</strong> {props.config[key].Type}
                    </Typography>
                  ) : null}
                  {props.config[key].Default ? (
                    <Typography className={classes.paramText}>
                      <strong> Default: </strong>
                      {props.config[key].Default.toString()}
                    </Typography>
                  ) : null}
                </div>

                <div className={clsx(classes.column75, classes.vertDivider)}>
                  {props.config[key].Description ? (
                    <Typography className={classes.paramText}>
                      {props.config[key].Description}
                    </Typography>
                  ) : null}
                </div>
              </div>
              <div>
                <Divider className={classes.divider} />
              </div>
            </Fragment>
          );
        })}
      </Paper>
    </Fragment>
  );
};

export default charmConfig;

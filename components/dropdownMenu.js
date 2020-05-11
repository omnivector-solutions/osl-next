import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "150px",
    display: block,
    backgroundColor: "red",
  },
});

const Dropdown = () => {
  const classes = useStyles();

  return <div className={classes.root}>DD</div>;
};

export default Dropdown;

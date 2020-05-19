import React from "react";

import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: "75px",
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      height: "35px",
    },
  },
  mainContainer: {
    position: "absolute",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>TEST</Hidden>
    </footer>
  );
};

export default Footer;

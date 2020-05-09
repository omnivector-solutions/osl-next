import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    width: "100%",
    height: "45vw",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "50 -50px",
  },
  headerImg: {
    width: "100vw",
    objectPosition: "50 -50px",
  },
  headerText: {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    textAlign: "center",
    color: "white",
    margin: 0,
    fontSize: "4vw",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 1)",
  },
  smallHeader: {
    fontFamily: "Ubuntu",
    fontWeight: 400,
    textAlign: "center",
    color: "white",
    margin: "1vw",
    fontStyle: "italic",
    fontSize: "2vw",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 1)",
  },
  headerTextContainer: {
    position: "absolute",
    width: "65vw",
    top: "19vw",
    left: "20vw",
  },
}));

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <img
        src={"/images/homepage.jpg"}
        alt="Header"
        className={classes.headerImg}
      />
      <div className={classes.headerTextContainer}>
        <h5 className={classes.smallHeader}>
          Cloud Computing, Software Engineering, DevOPS, DataOPS.
        </h5>
        <h1 className={classes.headerText}>
          SMART, FLEXIBLE, SCALEABLE. NO STRINGS ATTACHED.
        </h1>
      </div>
    </div>
  );
};

export default HomeHeader;

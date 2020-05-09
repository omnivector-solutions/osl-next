import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  Container: {
    display: "flex",
    margin: "5vw 10vw",
    width: "50%"
  },
  containerImg: {
    objectFit: "cover",
    width: "40vw",
    height: "50vh",
    borderRadius: "36px 0 0 36px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "50vh",
      borderRadius: "36px 36px 36px 36px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, .9)"
    }
  },
  ServiceText: {
    fontSize: "1.9vh",
    fontFamily: "Ubuntu",
    width: "25vw",
    position: "relative",
    marginTop: "-24px",
    marginLeft: "8px",
    color: "black",
    opacity: "0.7",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
      width: "70vw",
      height: "6em",
      textAlign: "justify-left",
      borderRadius: "0px 18px 18px 18px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, .9)",
      position: "absolute",
      top: "80vw",
      margin: "auto",
      left: "20vw",
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, .9)"
    }
  },
  ServiceTitle: {
    borderRadius: "0px 24px 24px 0px",
    fontSize: "4vw",
    fontWeight: "bold",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    width: "50vw",
    position: "relative",
    top: ".05vw",
    left: "-20vw",
    lineHeight: ".9",
    backgroundColor: "rgba(255, 255, 255, .8)",
    color: "black",
    padding: "15px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .3)",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "24px 24px 0px 24px",
      boxShadow: "4px 4px 8px",
      width: "70vw",
      position: "absolute",
      opacity: 1,
      margin: "auto",
      top: "25vw",
      left: "8vw"
    }
  }
}));

const ServiceHeader = props => {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <div className={classes.CardLeft}>
        <img
          src={`${props.serviceImage}`}
          alt={props.serviceName}
          className={classes.containerImg}
        />
      </div>
      <div className={classes.textContainer}>
        <p className={classes.ServiceTitle}>{props.serviceTitle}</p>
        <p className={classes.ServiceText}>{props.serviceText}</p>
      </div>
    </div>
  );
};

export default ServiceHeader;

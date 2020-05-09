import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Contact from "../contact";

const useStyles = makeStyles((theme) => ({
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "8px",
    backgroundColor: theme.palette.secondary.light,
    color: "black",
    margin: "0 30px 0 20px ",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "450px",
    borderRadius: "16px",
    margin: "12px 3vw",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, .5)",
    [theme.breakpoints.down("xs")]: {
      width: "375px",
      margin: "12px 0px",
    },
  },
  headerTitle: {
    ...theme.typography.deploy,
    display: "block",
    textAlign: "left",
    margin: "16px 16px",
    color: "black",
  },
  headerDescription: {
    ...theme.typography.deploy,
    display: "block",
    textAlign: "left",
    margin: "16px 16px",
    color: "black",
    fontWeight: 200,
  },
  footer: {
    ...theme.typography.deploy,
    display: "block",
    margin: "16px 16px",
  },
  jujuCard: {
    margin: "1vw",
  },
  img: {
    width: "100%",
    border: "1px solid lightgrey",
  },
  footerSpacer: {
    height: "36px",
  },
}));

const ServiceCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.card}>
      <div>
        <h4 className={classes.headerTitle}>{props.title}</h4>
        <p className={classes.headerDescription}>{props.description}</p>
      </div>
      <div className={classes.jujuCard}>
        <img
          src={`${props.cardImg}`}
          alt={props.title}
          className={classes.img}
        />
      </div>
      <TextField
        label="Deploy with CLI"
        variant="outlined"
        value={props.cliCommand}
        className={classes.jujuCard}
      />
      <Button
        variant="outlined"
        color="primary"
        href={props.jaasLink}
        className={classes.jujuCard}
      >
        Deploy with JAAS
      </Button>
      <div className={classes.footer}>
        <Contact
          buttonPrefix="Get help with "
          buttonContext={props.title}
          buttonSuffix="..."
          subjectPrefix="I'm interested in finding out more about "
          subjectContext={props.title}
          subjectSuffix="..."
        />
      </div>
    </Grid>
  );
};

export default ServiceCard;

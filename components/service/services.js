import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { configServiceRoutes } from "../../../assets/configData/configServiceRoutes";

import ServiceCard from "./serviceCard/ServiceCard";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  CardContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: "3vw"
  },
  ServiceTitle: {
    fontSize: "3em",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    margin: "8px",
    color: "black"
  },
  ServiceText: {
    fontSize: "1em",
    textAlign: "center",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    color: "black"
  },
  ServiceTextContainer: {
    width: "65vw",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto"
  },
  Link: {
    textDecoration: "none"
  }
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Container>
      {configServiceRoutes.map((service, index) => (
        <div key={index}>
          <div className={classes.ServiceTextContainer}>
            <Link to={service.path} className={classes.Link}>
              <p className={classes.ServiceTitle}> {service.serviceName} </p>
              <p className={classes.ServiceText}>{service.serviceText}</p>
            </Link>
          </div>
          <Grid container className={classes.CardContainer}>
            {service.cardData.map((card, i) => (
              <Grid item>
                <ServiceCard
                  key={i}
                  dataId={card.cardDataId}
                  title={card.cardTitle}
                  cardImg={card.cardImg}
                  jaasLink={card.jaasLink}
                  cliCommand={card.cliCommand}
                  description={card.cardDescription}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Services;

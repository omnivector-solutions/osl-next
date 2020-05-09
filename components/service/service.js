import React from "react";

import ServiceHeader from "./serviceHeader/ServiceHeader";
import ServiceCard from "./serviceCard/ServiceCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  Service: {
    width: "100vw"
  },
  CardContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: "3vw"
  }
}));

const Service = props => {
  const classes = useStyles();

  const serviceCards = props.cardData.map((card, index) => (
    <ServiceCard
      key={index}
      dataId={card.cardDataId}
      title={card.cardTitle}
      cardImg={card.cardImg}
      jaasLink={card.jaasLink}
      cliCommand={card.cliCommand}
      description={card.cardDescription}
    />
  ));
  return (
    <div className={classes.Service}>
      <ServiceHeader
        serviceTitle={props.serviceTitle}
        serviceName={props.serviceName}
        serviceImage={props.serviceImage}
        serviceText={props.serviceText}
      />
      <Grid container className={classes.CardContainer} spacing={4}>
        {serviceCards}
      </Grid>
    </div>
  );
};

export default Service;

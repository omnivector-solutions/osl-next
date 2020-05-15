import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import Link from "./link";

import { configServiceRoutes } from "./configServiceRoutes";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ServiceCard from "./service/ServiceCard";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "7.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: 0,
    },
  },
  container: {
    width: "100%",
    height: "900px",
  },
  text: {
    ...theme.typography.header,
    padding: theme.spacing(3),
    position: "relative",
    top: "-1000px",
  },
  CardContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: "3vw",
  },
  ServiceTitle: {
    fontSize: "3em",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    margin: "8px",
    color: "black",
  },
  ServiceText: {
    fontSize: "1em",
    textAlign: "center",
    fontFamily: "Ubuntu,Arial,libra sans,sans-serif",
    color: "black",
  },
  ServiceTextContainer: {
    width: "65vw",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
  },
  Link: {
    textDecoration: "none",
  },
}));

const Slider = () => {
  const classes = useStyles();

  const services = configServiceRoutes.map((service, index) => (
    <div key={index}>
      <div className={classes.ServiceTextContainer}>
        <Link to={service.path} className={classes.Link}>
          <p className={classes.ServiceTitle}> {service.serviceName} </p>
          <p className={classes.ServiceText}>{service.serviceText}</p>
        </Link>
      </div>
      <Grid container className={classes.CardContainer}>
        {service.cardData.map((card, i) => (
          <Grid item key={i}>
            <ServiceCard
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
  ));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <div className={classes.toolbarMargin} />
      <Carousel
        showDots
        ssr
        arrows={false}
        autoPlay={false}
        keyBoardControl
        autoPlaySpeed={8000}
        draggable
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        responsive={responsive}>
        {services}
      </Carousel>
    </Fragment>
  );
};

export default Slider;

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
}));

const Slider = () => {
  const classes = useStyles();

  const newServices = configServiceRoutes.map((service, index) => (
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
  ));

  const services = configServiceRoutes.map((service, serviceIndex) => {
    return (
      <div key={serviceIndex}>
        <img src={service.serviceImage} />
        <Typography className={classes.text}>{service.serviceTitle}</Typography>
        <Typography className={classes.text}>{service.serviceText}</Typography>
      </div>
    );
  });
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
        infinite
        arrows={false}
        autoPlay
        keyBoardControl
        autoPlaySpeed={8000}
        draggable
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        responsive={responsive}
        className={classes.container}>
        {newServices}
      </Carousel>
    </Fragment>
  );
};

export default Slider;

import React, { Fragment } from "react";
import Slider from "react-slick";
import FeaturedService from "../components/featuredService";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "8.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: 0,
    },
  },
}));

const HomeCarousel = (props) => {
  const classes = useStyles();

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    swipeToSlide: true,
    infinite: true,
  };

  return (
    <div>
      {props.features.map((featuredService) => {
        return (
          <FeaturedService key={featuredService.id} {...featuredService} />
        );
      })}
    </div>
  );
};

export default HomeCarousel;

import React, { Fragment, useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import OVLogo from "../public/images/OVLogoHoriz2color.svg";
import Contact from "./contact";
import Link from "./link";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

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
  toolbar: {
    backgroundColor: "black",
    height: "120px",
    [theme.breakpoints.down("md")]: {
      height: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px",
    },
  },
  toolbarTransparent: {
    backgroundColor: "black",
    height: "120px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50px",
    },
  },
  navButtonsContainer: {
    width: "100%",
    display: "flex",
    alignContent: "flex-end",
    textAlign: "right",
    float: "right",
  },
  logo: {
    height: "6em",
    marginLeft: "24px",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "4px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      margin: "2px",
    },
  },
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "8px",
    width: "100px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 30px 20px 20px ",
  },
  navButton: {
    ...theme.typography.deploy,
    width: "100px",
    margin: "0 30px 20px 20px ",
    alignContent: "flex-end",
    textAlign: "right",
    float: "right",
  },
  navButtonSelected: {
    ...theme.typography.deploy,
    backgroundColor: theme.palette.secondary.main,
    width: "100px",
    margin: "0 30px 20px 20px ",
  },
  hamburger: {
    color: "white",
    height: "30px",
    width: "30px",
    marginRight: "8px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      width: "30vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40vw",
    },
  },
  listItem: {
    ...theme.typography.tab,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: "white",
    opacity: 0.5,
    marginLeft: "auto",
  },
  selectedItem: {
    color: theme.palette.primary.dark,
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    opacity: 0.7,
  },
  servicesLabel: {
    ...theme.typography.tab,
    color: "white",
    width: "20vw",
    marginLeft: "1.5vw",
    textAlign: "center",
    opacity: 0.5,
  },
  servicesIcon: {
    color: "white",
    textAlign: "center",
    opacity: 0.5,
    marginLeft: "15px",
  },
  servicesContainer: {
    width: "20vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  serviceslistItem: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontWeight: 700,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: "white",
    opacity: 0.5,
    marginLeft: "2vw",
  },
  selectedServiceslistItem: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontWeight: 700,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: theme.palette.primary.light,
    opacity: 1,
    marginLeft: "2vw",
  },
  discourseHeaderButton: {
    ...theme.typography.deploy,
    color: theme.palette.secondary.main,
    width: "140px",
    margin: "0 40px 20px 20px ",
  },
  discourseDrawerButton: {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: "16px",
    color: theme.palette.secondary.main,
    opacity: 0.7,
    marginLeft: "3.2vw",
    height: "36px",
    textDecoration: "none",
    position: "relative",
    top: "-10px",
  },
  anchor: {
    color: "black",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
    setSelectedIndex(null);
  };

  const handleDrawerServiceClick = (event) => {
    setSelectedIndex(event);
    setSelectedValue(false);
  };

  const mainRoutes = [
    { name: "Home", link: "/", activeIndex: 0, icon: <HomeIcon /> },
  ];

  const menuOptions = [
    { to: "/big-data", label: "Big Data", activeIndex: 1, selectedIndex: 0 },
    { to: "/hpc", label: "HPC", activeIndex: 1, selectedIndex: 1 },
    {
      to: "/elasticsearch",
      label: "Elasticsearch",
      activeIndex: 1,
      selectedIndex: 2,
    },
    { to: "/redis", label: "Redis", activeIndex: 1, selectedIndex: 3 },
    { to: "/ceph", label: "Ceph", activeIndex: 1, selectedIndex: 4 },
    { to: "/devops", label: "DevOps", activeIndex: 1, selectedIndex: 5 },
    { to: "/logging", label: "Logging", activeIndex: 1, selectedIndex: 6 },
  ];

  const buttons = (
    <Grid container justify="flex-end">
      <Link activeClassName="active" href="/">
        <Button className={classes.navButton}>Home</Button>
      </Link>
      <Link href="/blog">
        <Button className={classes.navButton}>Blog</Button>
      </Link>

      <Link href="/solutions">
        <Button className={classes.navButton}>Solutions</Button>
      </Link>

      <Contact
        buttonPrefix=""
        buttonContext="Contact Us"
        buttonSuffix=""
        subjectPrefix=""
        subjectContext=""
        subjectSuffix=""
        buttonType="text"
      />
      <a
        href="https://community.omnivector.solutions/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.anchor}>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<OpenInNewIcon />}
          className={classes.discourseHeaderButton}>
          Discourse
        </Button>
      </a>
    </Grid>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        classes={{ paper: classes.drawer }}>
        <List dense>
          <div className={classes.toolbarMargin} />
          <ListItem
            onClick={() => [
              setDrawerOpen(false),
              setSelectedValue(0),
              setSelectedIndex(null),
            ]}
            button
            to={"/"}
            className={classes.serviceslistItem}
            selected={selectedValue === 0}
            classes={{ selected: classes.selectedServiceslistItem }}>
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <Divider variant="middle" classes={{ root: classes.divider }} />
          {menuOptions.map((route, index) => (
            <Fragment key={index}>
              <ListItem
                onClick={() => [
                  setDrawerOpen(false),
                  handleDrawerServiceClick(index),
                ]}
                button
                to={route.to}
                selected={index === selectedIndex}
                className={classes.serviceslistItem}
                classes={{ selected: classes.selectedServiceslistItem }}>
                <ListItemText disableTypography>{route.label}</ListItemText>
              </ListItem>
              <Divider variant="middle" classes={{ root: classes.divider }} />
            </Fragment>
          ))}
          <a
            href="https://community.omnivector.solutions/"
            target="_blank"
            rel="noopener noreferrer">
            <div className={classes.discourseDrawerButton}>
              Discourse
              <OpenInNewIcon className={classes.openInNew} />
            </div>
          </a>
          <Divider variant="middle" classes={{ root: classes.divider }} />
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
        disableRipple>
        <MenuIcon className={classes.hamburger} />
      </IconButton>
    </Fragment>
  );
  const currentRoute = "/";

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            disableGutters
            className={
              currentRoute !== "/"
                ? classes.toolbar
                : classes.toolbarTransparent
            }>
            <Button onClick={() => setSelectedValue(false)}>
              <OVLogo className={classes.logo} />
            </Button>
            {matches ? drawer : buttons}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div
        className={currentRoute !== "/" ? classes.toolbarMargin : undefined}
      />
    </Fragment>
  );
}

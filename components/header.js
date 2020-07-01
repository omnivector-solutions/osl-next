import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Button,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
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
  contactContainer: {
    marginRight: "36px",
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
    marginLeft: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    opacity: 0.7,
  },
  discourseHeaderButton: {
    ...theme.typography.deploy,
    color: theme.palette.secondary.main,
    width: "140px",
    margin: "0 40px 20px 20px ",
  },
  discourseDrawerButton: {
    ...theme.typography.deploy,
    color: theme.palette.secondary.main,
    marginTop: "16px",
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

  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <div className={classes.contactContainer}>
        <Contact />
      </div>

      <Button
        variant="outlined"
        color="secondary"
        href="https://community.omnivector.solutions/"
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        className={classes.discourseHeaderButton}>
        Discourse
      </Button>
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
          <ListItem href={"/"} component={Link} className={classes.listItem}>
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <Divider variant="middle" classes={{ root: classes.divider }} />
          <ListItem
            href={"/blog"}
            component={Link}
            className={classes.listItem}>
            <ListItemText disableTypography>Blog</ListItemText>
          </ListItem>
          <Divider variant="middle" classes={{ root: classes.divider }} />
          <ListItem
            href={"/solutions"}
            component={Link}
            className={classes.listItem}>
            <ListItemText disableTypography>Solutions</ListItemText>
          </ListItem>
          <Divider variant="middle" classes={{ root: classes.divider }} />
          <ListItem component={Contact}>
            <ListItemText disableTypography>Contact</ListItemText>
          </ListItem>
          <Divider variant="middle" classes={{ root: classes.divider }} />

          <ListItem>
            <Button
              variant="outlined"
              color="secondary"
              href="https://community.omnivector.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
              className={classes.discourseDrawerButton}>
              Discourse
            </Button>
          </ListItem>
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
            <Button href={"/"}>
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

import React from "react";

import {
  List,
  ListItem,
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import CharmsPanel from "../../components/charmsPanel";
import BundlesPanel from "../../components/bundlesPanel";
import Layout from "../../components/layout";
import { getCharmMetadata, getBundleMetadata } from "../../lib/charmstore";

export async function getStaticProps() {
  let data = {};
  data.charms = await getCharmMetadata();
  data.bundles = await getBundleMetadata();
  return {
    props: {
      charms: data.charms,
      bundles: data.bundles,
    },
  };
}

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
  gridContainer: {
    margin: "0 10vw",
    width: "80vw",
    [theme.breakpoints.down("sm")]: {
      margin: "0 3vw",
      width: "94vw",
    },
  },
  marginDiv: {
    height: "5vh",
  },
  introContainer: {
    margin: "12px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  main: {
    ...theme.typography.body,
    fontSize: "1.4em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2em",
    },
  },
  backgroundImage: {
    backgroundColor: "#f0f0f0",
    backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dbdbdb' fill-opacity='0.62'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    )`,
  },
  title: {
    ...theme.typography.header,
    fontSize: "2.5em",
    color: "black",
    lineHeight: "1.15em",
  },
  body: {
    ...theme.typography.body,
    fontSize: "1.2em",
  },
  cardHeaderContainer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
  },
  cardHeader: {
    ...theme.typography.header,
    fontSize: "1.5em",
    color: "white",
    lineHeight: "1em",
    padding: "12px",
  },
  img: {
    width: "80%",
    margin: "2vw",
    [theme.breakpoints.down("xs")]: {
      width: "0",
    },
  },
}));

const Solutions = (props) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.backgroundImage}>
        <Grid container spacing={2} className={classes.gridContainer}>
          {small ? (
            <Grid item xs={10} sm={5} md={6}>
              <img
                src={"/images/hand.svg"}
                alt="icon"
                className={classes.img}
              />
            </Grid>
          ) : null}
          <Grid item xs={12} sm={7} md={6}>
            <div className={classes.introContainer}>
              <Typography className={classes.title}>
                Application modelling for every cloud
              </Typography>
              <Typography className={classes.main}>
                Juju is an open source application modelling tool that allows us
                to deploy, configure, scale and operate cloud infrastructures
                quickly and efficiently on public clouds such as AWS, GCE, and
                Azure along with private ones such as MAAS, OpenStack, and
                VSphere.
                <br />
                <br />
                One of the main advantages of Juju is its dynamic configuration
                ability, which allows you to re-configure services on the fly,
                add, remove, or change relationships between services, and scale
                in or out with ease, sharing the operational knowledge and
                making the most of the wider community.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.marginDiv} />

          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>Snaps </Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  Snaps are app packages for desktop, cloud and IoT that are
                  easy to install, secure, cross-platform and dependency-free.
                </Typography>
                <List dense>
                  <ListItem>
                    <Typography className={classes.body}>
                      <strong>snap</strong> is both the command line interface
                      and the application package format
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.body}>
                      <strong>snapd</strong> is the background service that
                      manages and maintains snaps
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.body}>
                      <strong>snapcraft </strong> is the command and the
                      framework we use to build snaps
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.body}>
                      <strong>Snap Store </strong>provides a place to upload and
                      distribute snaps
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>Charms</Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  Charms are collections of scripts that contain all the
                  operations necessary to deploy, configure, scale, and maintain
                  cloud applications easily with Juju. Charms encapsulate a
                  single application and all the code and know-how it takes to
                  operate it, such as how to combine and work with other related
                  applications or how to upgrade it.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>Bundles</Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  Bundles are ready-to-run collections of applications which
                  have been modelled to work together — this can include
                  particular configurations and relations between the software
                  to be deployed.
                  <br />
                  Bundles may also be optimised for different deployment
                  scenarios of the same software — for example, a scale-out
                  production ready version like{" "}
                  <a href={"https://jaas.ai/canonical-kubernetes"}>
                    The Canonical Distribution of Kubernetes
                  </a>
                  , or a development friendly test version like{" "}
                  <a href={"https://jaas.ai/kubernetes-core"}>
                    Kubernetes Core.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.marginDiv} />

          <Grid item xs={12} md={6}>
            <BundlesPanel
              header
              bundles={props.bundles}
              className={classes.gridItem}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CharmsPanel charms={props.charms} header={true} />
          </Grid>
        </Grid>
        <div className={classes.marginDiv} />
      </div>
    </Layout>
  );
};

export default Solutions;

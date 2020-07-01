import React from "react";

import {
  makeStyles,
  Container,
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
  marginDiv: {
    height: "5vh",
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
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  body: {
    ...theme.typography.body,
    fontSize: "1.4em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2em",
    },
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "1em",
    },
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
  cardSubHeader: {
    ...theme.typography.header,
    fontSize: "1.3em",
    color: theme.palette.primary.main,
    lineHeight: "1em",
    padding: "12px 0",
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
        <Container maxWidth="lg">
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={12} className={classes.marginDiv} />
            {small ? (
              <Grid item xs={4} className={classes.imgContainer}>
                <img
                  src={"/images/hand.svg"}
                  alt="icon"
                  className={classes.img}
                />
              </Grid>
            ) : null}
            <Grid item sm={8} md={8} className={classes.headerContainer}>
              <Typography className={classes.title}>
                Snaps, Charms and Bundles
              </Typography>
              <Typography className={classes.body}>
                By providing a declarative application deployment and
                operations, Juju enables an infrastructure as code (IaC)
                approach to deploying Slurm, allowing full automation and DevOps
                agility.
                <br />
                <br />
                Bundles are collections of charms. In this case, they represent
                an entire Slurm model, rather than a single application. The
                Slurm bundles provide a declarative devops approach to deploying
                Slurm onto an HPC cluster.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.marginDiv} />

            <Grid item xs={12}>
              <Card>
                <div className={classes.cardHeaderContainer}>
                  <Typography className={classes.cardHeader}>
                    Snaps, Charms and Bundles
                  </Typography>
                </div>
                <CardContent>
                  <Typography className={classes.cardSubHeader}>
                    Slurm on Snapcraft.io
                  </Typography>
                  <Typography className={classes.body}>
                    This snap is a bundle of Slurm and its dependencies that
                    works without modification across many different Linux
                    distributions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <div className={classes.cardHeaderContainer}>
                  <Typography className={classes.cardHeader}>
                    Snaps, Charms and Bundles
                  </Typography>
                </div>
                <CardContent>
                  <Typography className={classes.cardSubHeader}>
                    Slurm on Snapcraft.io
                  </Typography>
                  <Typography className={classes.body}>
                    This snap is a bundle of Slurm and its dependencies that
                    works without modification across many different Linux
                    distributions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <div className={classes.cardHeaderContainer}>
                  <Typography className={classes.cardHeader}>
                    Snaps, Charms and Bundles
                  </Typography>
                </div>
                <CardContent>
                  <Typography className={classes.cardSubHeader}>
                    Slurm on Snapcraft.io
                  </Typography>
                  <Typography className={classes.body}>
                    This snap is a bundle of Slurm and its dependencies that
                    works without modification across many different Linux
                    distributions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} className={classes.marginDiv} />

            <Grid item xs={12} md={6}>
              <BundlesPanel
                bundles={props.bundles}
                className={classes.gridItem}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CharmsPanel charms={props.charms} header={true} />
            </Grid>
          </Grid>
          <div className={classes.marginDiv} />
        </Container>
      </div>
    </Layout>
  );
};

export default Solutions;

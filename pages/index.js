import React from "react";
import Iframe from "react-iframe";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/styles";

import Link from "../components/link";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import SlurmSnapDistros from "../components/slurmSnapDistros";
import {
  getFilteredCharmMetadata,
  getFilteredBundleMetadata,
} from "../lib/charmstore";
import CharmsPanel from "../components/charmsPanel";
import BundlesPanel from "../components/bundlesPanel";

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
    height: "4em",
  },
  backgroundImage: {
    background: `
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23dbdbdb' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: "#f0f0f0",
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
  main: {
    ...theme.typography.body,
    fontSize: "1.4em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2em",
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
  body: {
    ...theme.typography.body,
    fontSize: "1.2em",
  },
  button: {
    ...theme.typography.header,
    fontSize: "1.3em",
    color: theme.palette.primary.main,
    width: "40%",
    margin: "12px 60%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  img: {
    width: "35vw",
    margin: "2vw",
    [theme.breakpoints.down("xs")]: {
      width: "0",
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
  badgeContainer: {
    width: "100vw",
    overflow: "hidden",
  },
  badge: {
    margin: "10vh 0",
    [theme.breakpoints.down("lg")]: {
      objectFit: "cover,",
      objectPosition: "-10vw 0",
      width: "120%",
    },
    [theme.breakpoints.down("md")]: {
      objectFit: "cover,",
      objectPosition: "-50vw 0",
      width: "200%",
    },
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover,",
      objectPosition: "-100vw 0",
      width: "300%",
    },
  },
  introContainer: {
    margin: "12px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  links: {
    width: "250px",
  },
  logo: {
    color: "black",
    width: "100px",
    margin: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "75px",
    },
  },
  logosContainer: {
    display: "flex",
    margin: "row",
    justifyContent: "center",
  },
  card: {
    height: "100%",
  },
  iframe: {
    marginTop: "12px",
  },
}));

export async function getStaticProps() {
  let slurm = {};
  slurm.charms = await getFilteredCharmMetadata([
    { Id: "cs:slurm-controller-3" },
    { Id: "cs:slurm-dbd-0" },
    { Id: "cs:slurm-node-3" },
  ]);
  slurm.bundles = await getFilteredBundleMetadata([
    { Id: "cs:bundle/slurm-core-0" },
    { Id: "cs:bundle/slurm-openfoam-0" },
  ]);
  return {
    props: {
      slurm: slurm,
    },
  };
}

const Home = (props) => {
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
                src={"/images/boxes.png"}
                alt="icon"
                className={classes.img}
              />
            </Grid>
          ) : null}
          <Grid item xs={12} sm={7} md={6}>
            <div className={classes.introContainer}>
              <Typography className={classes.title}>
                Introducing a better way to deploy Slurm Workload Manager
              </Typography>
              <Typography className={classes.main}>
                We are excited to introduce the OmniVector Slurm HPC suite. We
                have cultivated elements from each domain; infrastructure
                lifecycle automation, CICD, user workflow tools and service
                orchestration software, geared toward simplifying the Slurm
                operational lifecycle.
              </Typography>
              <Button
                size="small"
                component={Link}
                href={"/posts/slurm-snap-release-1"}
                className={classes.button}
                startIcon={<NavigateNextIcon />}>
                Read More
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} lg={4} className={classes.gridItem}>
            <Card className={classes.card}>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Snap
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  OmniVector's Slurm snap can be found in the snap store{" "}
                  <a href={"https://www.snapcraft.io/slurm"}>here</a>. We have
                  created an open ecosystem around the packaging and delivery of
                  Slurm itself and supporting software systems.
                </Typography>
                <Iframe
                  url="https://snapcraft.io/slurm/embedded?button=black"
                  width="100%"
                  height="400px"
                  display="initial"
                  position="relative"
                  className={classes.iframe}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} className={classes.gridItem}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Bundles
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  Bundles are ready-to-run collections of applications which
                  have been modelled to work together -- this can include
                  particular configurations and relations between the software
                  to be deployed.
                </Typography>
              </CardContent>
              <BundlesPanel bundles={props.slurm.bundles} header={false} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} className={classes.gridItem}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Charms
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  OmniVector has developed and open sourced Charms for
                  Slurmctld, Slurmnode, Slurmdbd, Slurmrestd. These Charms make
                  it esay to configure how each service is deployed and
                  connected. You can read more about charms here.
                </Typography>
              </CardContent>
              <CharmsPanel
                key={"3244"}
                charms={props.slurm.charms}
                header={false}
              />
            </Card>
          </Grid>
          <Grid item sm={12} lg={7}>
            <Card className={classes.card}>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Snap, Charms and Bundles
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardSubHeader}>
                  Slurm workload manager by SchedMD®
                </Typography>
                <Typography className={classes.body}>
                  SchedMD® (<a href={"https://schedmd.com/"}>website</a>) is
                  the core company behind the Slurm workload manager software, a
                  free open-source workload manager designed specifically to
                  satisfy the demanding needs of high performance computing.
                  Slurm is in widespread use at government laboratories,
                  universities and companies world wide and performs workload
                  management for over half of the top 10 systems in the
                  <a href={"https://www.top500.org/lists/top500/"}> TOP500.</a>
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  Slurm on Snapcraft.io
                </Typography>
                <Typography className={classes.body}>
                  OmniVector's Slurm snap can be found in the snap store here:
                  <a href={"https://www.snapcraft.io/slurm"}>
                    www.snapcraft.io/slurm
                  </a>
                  . We have created an open ecosystem around the packaging and
                  delivery of Slurm itself and supporting software systems.
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  on JAAS.ai:
                </Typography>
                <Typography className={classes.body}>
                  By providing a declarative application deployment and
                  operations, Juju enables an infrastructure as code (IaC)
                  approach to deploying Slurm, allowing full automation and
                  DevOps agility.
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  Juju Charms:
                </Typography>
                <Typography className={classes.body}>
                  The Slurm Charms are software components that contain the
                  entire logic required to install, configure, connect and
                  maintain each Slurm application.
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  Slurm Bundles:
                </Typography>
                <Typography className={classes.body}>
                  Bundles are collections of charms. In this case, they
                  represent an entire Slurm model, rather than a single
                  application. The Slurm bundles provide a declarative devops
                  approach to deploying Slurm onto an HPC cluster.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={5} className={classes.gridItem}>
            <Card className={classes.card}>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Instructions by distro:
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.body}>
                  Choose your Linux distribution to get detailed installation
                  instructions. If yours is not shown, get more details on
                  installing snapd documentation <a href={"/"}> here.</a>
                </Typography>
                <SlurmSnapDistros />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className={classes.badgeContainer}>
          <img src={"/images/badge.svg"} alt="icon" className={classes.badge} />
        </div>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} lg={4}>
            <Card className={classes.card}>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>Links:</Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardSubHeader}>
                  Slurm Workload Manager:
                </Typography>
                <div className={classes.links}>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    href="https://schedmd.com/">
                    SchedMD
                  </Button>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    href="https://schedmd.com/">
                    Slurm Docs
                  </Button>
                </div>
                <Typography className={classes.cardSubHeader}>
                  Slurm Snap:
                </Typography>
                <div className={classes.links}>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    href="https://snapcraft.io/slurm">
                    Snapcraft.io
                  </Button>
                </div>
                <Typography className={classes.cardSubHeader}>
                  Slurm Charms:
                </Typography>
                <div className={classes.links}>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    component={Link}
                    href="/solutions/charms/slurm-controller">
                    Slurm Controller
                  </Button>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    component={Link}
                    href="/solutions/charms/slurm-dbd">
                    Slurm Dbd
                  </Button>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    component={Link}
                    href="/solutions/charms/slurm-node">
                    Slurm Node
                  </Button>
                </div>
                <Typography className={classes.cardSubHeader}>
                  Slurm Bundles:
                </Typography>
                <div className={classes.links}>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    href="https://jaas.ai/slurm-core/bundle/0">
                    Slurm Core
                  </Button>
                  <Button
                    color="secondary"
                    startIcon={<NavigateNextIcon />}
                    href="https://jaas.ai/slurm-openfoam/bundle/0">
                    Slurm OpenFoam
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  JuJu Expert Partners:
                </Typography>
              </div>
              <CardContent>
                <div className={classes.logosContainer}>
                  <img
                    src={"/images/canonicalLogo.png"}
                    alt="icon"
                    className={classes.logo}
                  />
                  <img
                    src={"/images/juju-logo.png"}
                    alt="icon"
                    className={classes.logo}
                  />
                  <img
                    src={"/images/ubuntulogo_3.png"}
                    alt="icon"
                    className={classes.logo}
                  />
                </div>
                <Typography className={classes.body}>
                  OmniVector Solutions partners with Canonical to deliver
                  scaleable and maintainable software. Our connections to this
                  open source community provide our clients a valuable resource
                  when it comes to expediting progress on their JuJu based
                  inititives. Check us out at
                  <a href={"jaas.ai/u/omnivector"}> jaas.ai</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Card className={classes.card}>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Contact us:
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardSubHeader}>
                  Contact Omnivector Solutions:
                </Typography>
                {/* CONTACT FORM */}
                <ContactForm />
                <Typography className={classes.body}>
                  <strong> Email: </strong>
                  <a href="mailto:info@omnivector.solutions">
                    info@omnivector.solutions
                  </a>
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  Community:
                </Typography>
                <a
                  href="https://community.omnivector.solutions/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<OpenInNewIcon />}>
                    Discourse
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;

import React from "react";

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
import SlurmSnapDistros from "../components/slurmSnapDistros";
import { getFilteredCharmMetadata } from "../lib/charmstore";
import CharmsPanel from "../components/charmsPanel";
import ContactForm from "../components/contactForm";

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
    backgroundImage: "url(/images/bggrid.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover",
    width: "100%",
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
  body: {
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
  cardBody: {
    ...theme.typography.body,
    fontSize: "1em",
  },
  button: {
    ...theme.typography.header,
    fontSize: "1.3em",
    color: theme.palette.primary.main,
    width: "40%",
    margin: "12px 60%",
  },
  boxesImg: {
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
  },
  logosContainer: {
    display: "flex",
    margin: "row",
    justifyContent: "center",
  },
}));

export async function getStaticProps() {
  let slurm = {};
  slurm.charms = await getFilteredCharmMetadata([
    { Id: "cs:slurm-controller-3" },
    { Id: "cs:slurm-dbd-0" },
    { Id: "cs:slurm-node-3" },
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
        <Grid container spacing={4} className={classes.gridContainer}>
          {small ? (
            <Grid item xs={10} sm={5} md={6}>
              <img
                src={"/images/boxes.png"}
                alt="icon"
                className={classes.boxesImg}
              />
            </Grid>
          ) : null}
          <Grid item xs={12} sm={7} md={6} className={classes.header}>
            <div className={classes.introContainer}>
              <Typography className={classes.title}>
                Introducing a better way to deploy Slurm Workload Manager
              </Typography>
              <Typography className={classes.main}>
                OmniVector is excited to intruduce an new set of packaging and
                automation tools developed to simplify the deploymet of Slurm
                Workload Manager onto any Linux custer. You want a toe? I can
                get ya a toe. Believe me there are ways dude, you don't even
                wanna know about em believe me. Hell I can get ya a toe by three
                o'clock this afternoon, with nail polish.
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

        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item sm={12} lg={8}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Snap, Charms and Bundles
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardSubHeader}>
                  Slurm workload manager by SchedMD® (
                  <a href={"https://schedmd.com/"}>website</a>)
                </Typography>
                <Typography className={classes.body}>
                  SchedMD® is the core company behind the Slurm workload
                  manager software, a free open-source workload manager designed
                  specifically to satisfy the demanding needs of high
                  performance computing. Slurm is in widespread use at
                  government laboratories, universities and companies world wide
                  and performs workload management for over half of the top 10
                  systems in the
                  <a href={"https://www.top500.org/lists/top500/"}> TOP500.</a>
                </Typography>
                <Typography className={classes.cardSubHeader}>
                  Slurm on Snapcraft.io
                </Typography>
                <Typography className={classes.body}>
                  This snap is a bundle of Slurm and its dependencies that works
                  without modification across many different Linux
                  distributions.
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
                  maintain each Slurm application?!!?!?!?!? .
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
          <Grid item lg={4} className={classes.gridItem}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Instructions by distro:
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardBody}>
                  Choose your Linux distribution to get detailed installation
                  instructions. If yours is not shown, get more details on
                  installing snapd documentation <a href={"/"}> here.</a>
                </Typography>
                <SlurmSnapDistros />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} className={classes.gridItem}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Bundles
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardBody}>
                  OmniVector has developed and open sourced Charms for
                  Slurmctld, Slurmnode, Slurmdbd, Slurmrestd. These Charms make
                  it esay to configure how each service is deployed and
                  connected. You can read more about charms here.
                </Typography>
              </CardContent>
              <CharmsPanel
                key={"12312"}
                charms={props.slurm.charms}
                header={false}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} className={classes.gridItem}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Slurm Charms
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardBody}>
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
        </Grid>

        <div className={classes.badgeContainer}>
          <img src={"/images/badge.svg"} alt="icon" className={classes.badge} />
        </div>
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item sm={12} lg={4}>
            <Card>
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
          <Grid item sm={12} lg={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  JuJu Expert Partners:
                </Typography>
              </div>
              <CardContent>
                <div className={classes.logosContainer}>
                  <img
                    src={"/images/Canonical-logo.png"}
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
          <Grid item sm={12} lg={4}>
            <Card>
              <div className={classes.cardHeaderContainer}>
                <Typography className={classes.cardHeader}>
                  Contact us:
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.cardSubHeader}>
                  Email:
                </Typography>
                <Typography className={classes.body}>
                  info@omnivector.solutions
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

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Link from "../components/link";
import Layout from "../components/layout";
import { getFilteredCharmMetadata } from "../lib/charmstore";
import CharmsPanel from "../components/charmsPanel";

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
  bgContainer: {
    height: "100vh",
  },
  img: {
    width: "45vw",
    marginLeft: "50vw",
  },
  img2: {
    width: "35vw",
    marginTop: "200px",
    marginLeft: "8vw",
  },
  background: {
    opacity: ".3",
  },
  title: {
    ...theme.typography.header,
    fontSize: "3em",
    color: "black",
    marginLeft: "8vw",
  },
  body: {
    ...theme.typography.body,
    fontSize: "1.4em",
    marginLeft: "8vw",
    width: "30vw",
  },
  charmCont: {
    width: "30vw",
    marginLeft: "8vw",
    marginTop: "14px",
  },
  rightDiv: {
    marginLeft: "40vw",
  },
  card: {
    width: "90vw",
    marginLeft: "5vw",
  },
  gridContainer: {
    width: "80vw",
    margin: "10vw",
  },
  gridTitle: {
    ...theme.typography.header,
    fontSize: "1.4em",
    color: "black",
  },
  gridBody: {
    ...theme.typography.body,
    fontSize: "1em",
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
  console.log("HOME: props: ", props.slurm.charms[0]);

  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <Grid container className={classes.bgContainer}>
        <Parallax pages={2.2}>
          <Grid item>
            <ParallaxLayer offset={0} speed={1}>
              <img
                src={"/images/bggrid.jpg"}
                alt="icon"
                className={classes.background}
              />
            </ParallaxLayer>
          </Grid>
          <Grid item>
            <ParallaxLayer offset={0.08} speed={2}>
              <img
                src={"/images/boxes.svg"}
                alt="icon"
                className={classes.img}
              />
            </ParallaxLayer>
          </Grid>

          <Grid item>
            <ParallaxLayer offset={0.75} speed={1.3}>
              <Grid spacing={4} className={classes.gridContainer}>
                <Grid item xs={4}>
                  <CharmsPanel
                    key={"slurm"}
                    charms={props.slurm.charms}
                    header={false}
                    headerText={"Bundles: "}
                  />
                </Grid>
              </Grid>
            </ParallaxLayer>
          </Grid>

          <Grid item>
            <ParallaxLayer offset={0.999} speed={0.6}>
              <img src={"/images/badge.svg"} alt="icon" />
              <Grid container spacing={6} className={classes.gridContainer}>
                <Grid item xs={4}>
                  <Typography className={classes.gridTitle}>
                    Easy man, relax. No physical harm intended..
                  </Typography>
                  <Typography className={classes.gridBody}>
                    The Knutsens told me I should show her this when I found
                    her. It's the family farm. It's outside of Moorhead,
                    Minnesota. They think it'll make her homesick.
                  </Typography>
                  <Link />
                </Grid>

                <Grid item xs={4}>
                  <Typography className={classes.gridTitle}>
                    This is a family restaurant.
                  </Typography>
                  <Typography className={classes.gridBody}>
                    Oh please, dear? For your information, the Supreme Court has
                    roundly rejected prior restraint!
                  </Typography>
                  <Link />
                </Grid>

                <Grid item xs={4}>
                  <Typography className={classes.gridTitle}>
                    The Dude abides
                  </Typography>
                  <Typography className={classes.gridBody}>
                    I don't know about you, but I take comfort in that. It's
                    good knowin' he's out there. The Dude. Takin' 'er easy for
                    all us sinners. Shoosh. I sure hope he makes the finals.
                  </Typography>
                  <Link />
                </Grid>
              </Grid>
            </ParallaxLayer>
          </Grid>

          <Grid item>
            <ParallaxLayer offset={1} speed={0.8}>
              <img
                src={"/images/hand.svg"}
                alt="icon"
                className={classes.img2}
              />
            </ParallaxLayer>
          </Grid>

          <Grid item>
            <ParallaxLayer offset={0.25} speed={0.4}>
              <Typography className={classes.title}>
                Automation tools for deploying Slurm.
              </Typography>
              <Typography className={classes.body}>
                He died, like so many young men of his generation, he died
                before his time. In your wisdom, Lord, you took him, as you took
                so many bright flowering young men at Khe Sanh, at Langdok, at
                Hill 364. These young men gave their lives. And so would Donny.
              </Typography>
            </ParallaxLayer>
          </Grid>

          <Grid item>
            <ParallaxLayer factor={1.5} offset={1.3} speed={0.5}>
              <div className={classes.rightDiv}>
                <Typography className={classes.title}>
                  We create custom solution for you.
                </Typography>
                <Typography className={classes.title}>You pay.</Typography>
                <Typography className={classes.body}>
                  You want a toe? I can get ya a toe. Believe me there are ways
                  dude, you don't even wanna know about em believe me. Hell I
                  can get ya a toe by three o'clock this afternoon, with nail
                  polish.
                </Typography>
                <div className={classes.charmCont}>
                  <CharmsPanel
                    key={"elast"}
                    charms={props.slurm.charms}
                    header={false}
                  />
                </div>
              </div>
            </ParallaxLayer>
          </Grid>
        </Parallax>
      </Grid>
    </Layout>
  );
};

export default Home;

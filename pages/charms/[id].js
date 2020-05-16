import React from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import Layout from "../../components/layout";
import { getCharmIds, getOneCharm } from "../../lib/charmstore";
import Container from "@material-ui/core/Container";

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
    height: "1em",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "300px",
    objectFit: "cover",
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
    filter: "brightness(30%)",
    borderRadius: "8px",
    boxShadow: "2px 2px 1px #aaaaaa",
  },
  headerText: {
    ...theme.typography.header,
    color: theme.palette.primary.light,
    width: "500px",
    position: "absolute",
    top: "5em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.8em",
    },
  },
  subheaderText: {
    ...theme.typography.subheader,
    width: "500px",
    position: "absolute",
    top: "18em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.8em",
    },
  },
  linkText: {
    color: theme.palette.secondary.light,
    width: "500px",
    position: "absolute",
    top: "25em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.8em",
    },
  },
  text: {
    ...theme.typography.header,
    width: "500px",
    position: "absolute",
    top: "4em",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.8em",
    },
  },
}));

const Charm = ({ charmData }) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <Typography className={classes.headerText}>
          {charmData.data.Name}
        </Typography>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const charmIds = await getCharmIds();

  const paths = charmIds.Results.map((charm) => {
    console.log(charm.Id.substring(3));
    return charm.Id.substring(3);
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const charmData = await getOneCharm(params.id);

  return {
    props: { charmData },
  };
}

export default Charm;

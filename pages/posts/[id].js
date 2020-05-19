import React from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
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
  readmeContainer: {
    padding: "24px",
  },
}));

const Post = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <img className={classes.img} src={props.postData.image} />
        <Typography className={classes.headerText}>
          {props.postData.title}
        </Typography>
        <Typography className={classes.subheaderText}>
          {props.postData.description}
        </Typography>
        <Paper className={classes.readmeContainer}>
          <Typography
            className={classes.dateAuthor}
            variant="subtitle2"
            color="textSecondary">
            Author: {props.postData.author}
          </Typography>
          <Typography
            className={classes.dateAuthor}
            variant="subtitle2"
            color="textSecondary">
            Posted: {props.postData.date}
          </Typography>
          <ReactMarkdown source={props.postData.content} />
        </Paper>
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;

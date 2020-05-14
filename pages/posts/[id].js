import React from "react";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Container from "@material-ui/core/Container";

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
  },
  text: {
    ...theme.typography.header,
    width: "500px",
    position: "absolute",
    top: "3.5em",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      top: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "1.5em",
    },
  },
}));

const Post = ({ postData }) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <img className={classes.img} src={postData.image} />
        <Typography className={classes.text}>{postData.title}</Typography>
        <Typography
          className={classes.dateAuthor}
          variant="subtitle2"
          color="textSecondary">
          Author: {postData.author}
        </Typography>
        <Typography
          className={classes.dateAuthor}
          variant="subtitle2"
          color="textSecondary">
          Posted: {postData.date}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
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

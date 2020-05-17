import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "../components/link";
import Container from "@material-ui/core/Container";

import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";

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
  mainPostContainer: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: "200px",
  },

  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  img: {
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
}));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      <div className={classes.marginDiv} />
      <Container maxWidth="lg">
        <main>
          <Link href={`/posts/${props.allPostsData[0].id}`}>
            <img className={classes.img} src={props.allPostsData[0].image} />
            <Typography className={classes.headerText}>
              {props.allPostsData[0].title}
            </Typography>
            <Typography className={classes.subheaderText}>
              {props.allPostsData[0].description}
            </Typography>
            <Typography className={classes.linkText}>
              Continue reading...
            </Typography>
          </Link>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.grid}>
            {props.allPostsData.slice(1).map((post) => (
              <Grid item key={post.id} xs={12} md={6}>
                <Link href={`/posts/${post.id}`}>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography>Continue reading...</Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
      <div className={classes.marginDiv} />
    </Layout>
  );
};

export default Blog;

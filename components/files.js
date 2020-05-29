import React, { Fragment, useState, useEffect } from "react";
import { Treebeard } from "react-treebeard";
import FileContent from "./fileContent";
import filelistToTree from "../lib/filelistToTree";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import style from "./treeviewStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
  headerContainer: {
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "16px",
  },
  headerText: {
    ...theme.typography.header,
    color: "white",
    fontSize: "1.5em",
    paddingTop: "4px",
    margin: "12px",
  },
  bodyContainer: {
    display: "flex",
    padding: "8px",
  },
  readmeContainer: {
    padding: "1px 18px",
  },
}));

const Files = (props) => {
  const classes = useStyles();
  var fileList = filelistToTree(props.files);

  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState(fileList);
  const [fileExtention, setFileExtention] = useState("md");
  const [selected, setSelected] = useState({
    path: "README.md",
    name: "README.md",
  });

  const onToggle = (node, toggled) => {
    if (selected) {
      selected.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setSelected(node);
    setFiles(files);
  };

  useEffect(() => {
    if (!selected.children) {
      fetch(
        `https://api.jujucharms.com/charmstore/v5/${props.id.substring(
          3
        )}/archive/${selected.path}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.text())
        .then((response) => {
          setFileExtention(
            selected.name.substr(selected.name.lastIndexOf(".") + 1)
          );
          setContent(response);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [selected]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Paper className={classes.headerContainer}>
          <Typography className={classes.headerText}>Files:</Typography>
        </Paper>
        <Paper className={classes.bodyContainer}>
          <Treebeard data={files} onToggle={onToggle} style={style} />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.headerContainer}>
          <Typography className={classes.headerText}>
            {selected.name}:
          </Typography>
        </Paper>
        <Paper className={classes.readmeContainer}>
          {isLoading ? (
            <div className={classes.root}>
              <LinearProgress />
              <LinearProgress color="secondary" />
            </div>
          ) : (
            <FileContent ext={fileExtention} content={content} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Files;

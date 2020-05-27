import React, { Fragment, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Treebeard } from "react-treebeard";
import filelistToTree from "../lib/filelistToTree";
import LinearProgress from "@material-ui/core/LinearProgress";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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

const CharmFiles = (props) => {
  const classes = useStyles();
  var treeData = filelistToTree(props.files);

  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(treeData);
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
    setData(data);
  };

  useEffect(() => {
    if (!selected.children) {
      setIsLoading(true);

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
          setContent(response);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [selected, content]);

  return (
    <Grid container spacing={1}>
      <Fragment>
        <Grid item xs={3}>
          <Paper className={classes.headerContainer}>
            <Typography className={classes.headerText}>Files:</Typography>
          </Paper>
          <Paper className={classes.bodyContainer}>
            <Treebeard data={data} onToggle={onToggle} style={style} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.headerContainer}>
            <Typography className={classes.headerText}>
              {selected.name} :
            </Typography>
          </Paper>
          <Paper className={classes.readmeContainer}>
            {isLoading ? (
              <LinearProgress />
            ) : (
              <ReactMarkdown source={`\`\`\`${content}\`\`\``} />
            )}
          </Paper>
        </Grid>
      </Fragment>
    </Grid>
  );
};

export default CharmFiles;

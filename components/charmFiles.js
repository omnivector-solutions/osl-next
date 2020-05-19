import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Treebeard } from "react-treebeard";
import style from "../components/treeviewStyle";
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
}));

const pathsToJson = (paths) => {
  var obj = {};
  paths.forEach((p) =>
    p.Name.split("/").reduce((o, name) => (o[name] = o[name] || {}), obj)
  );

  return obj;
};

const jsonPathsToTree = (obj) =>
  Object.keys(obj).map((key, i) =>
    Object.keys(obj[key]).length
      ? { name: key, id: i.toString(), children: jsonPathsToTree(obj[key]) }
      : { name: key, id: i.toString() }
  );

const CharmFiles = (props) => {
  const classes = useStyles();
  const paths = pathsToJson(props.files);
  var treeData = jsonPathsToTree(paths);
  const [data, setData] = useState(treeData);
  const [cursor, setCursor] = useState(false);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    console.log(node);

    setCursor(node);
    setData(data);
  };

  return (
    <Fragment>
      <Paper className={classes.headerContainer}>
        <Typography className={classes.headerText}>Files:</Typography>
      </Paper>
      <Paper className={classes.bodyContainer}>
        <Treebeard data={data} onToggle={onToggle} style={style} />
      </Paper>
    </Fragment>
  );
};

export default CharmFiles;

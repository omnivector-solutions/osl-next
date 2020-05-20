import _ from "lodash";

const pruneEmpty = (obj) => {
  return (function prune(current) {
    _.forOwn(current, function (value, key) {
      if (
        _.isUndefined(value) ||
        _.isNull(value) ||
        _.isNaN(value) ||
        (_.isString(value) && _.isEmpty(value)) ||
        (_.isObject(value) && _.isEmpty(prune(value)))
      ) {
        delete current[key];
      }
    });
    // remove any leftover undefined values from the delete
    // operation on an array
    if (_.isArray(current)) _.pull(current, undefined);

    return current;
  })(_.cloneDeep(obj)); // Do not modify the original object, create a clone instead
};

const pathsToTree = (paths) => {
  var output = [];

  //repeat for every path in array
  for (var pathIndex = 0; pathIndex < paths.length; pathIndex++) {
    //create array of nodes on current path
    var pathNodes = paths[pathIndex].Name.split("/");

    // get value of output
    var currentNode = output;

    // repeat for every node in pathNodes
    for (var node = 0; node < pathNodes.length; node++) {
      //  get wantedNode value
      var wantedNode = pathNodes[node];

      //  get lastNode value
      var lastNode = currentNode;

      //repeat for all nodes in currentNode
      for (var nodeIndex = 0; nodeIndex < currentNode.length; nodeIndex++) {
        // break if we find the node
        if (currentNode[nodeIndex].name == wantedNode) {
          currentNode = currentNode[nodeIndex].children;
          break;
        }
      }

      // If we couldn't find an item in this list of children
      // that has the right name, create one:
      if (lastNode == currentNode) {
        var newNode = (currentNode[nodeIndex] = {
          name: wantedNode,
          id: pathIndex,
          path: paths[pathIndex].Name,
          children: [],
        });
        currentNode = newNode.children;
      }
    }
  }

  let cleanTree = pruneEmpty(output);

  return cleanTree;
};

export default pathsToTree;

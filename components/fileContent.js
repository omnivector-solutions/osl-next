import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode as code } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const FileContent = (props) => {
  switch (props.ext) {
    case "md":
      return (
        <SyntaxHighlighter language="markdown" showLineNumbers style={code}>
          {props.content}
        </SyntaxHighlighter>
      );
      break;
    case "yaml":
      return (
        <SyntaxHighlighter language="yaml " showLineNumbers style={code}>
          {props.content}
        </SyntaxHighlighter>
      );
      break;
    default:
      return (
        <SyntaxHighlighter language="markdown " showLineNumbers style={code}>
          {props.content}
        </SyntaxHighlighter>
      );
  }
};

export default FileContent;

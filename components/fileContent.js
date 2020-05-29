import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Markdown from "react-markdown";
import { githubGist as code } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const FileContent = (props) => {
  switch (props.ext) {
    case "md":
      return <Markdown source={props.content} />;
      break;
    case "yaml":
      return (
        <SyntaxHighlighter language="yaml " showLineNumbers style={code}>
          {props.content}
        </SyntaxHighlighter>
      );
      break;
    case "sh":
      return (
        <SyntaxHighlighter language="bash " showLineNumbers style={code}>
          {props.content}
        </SyntaxHighlighter>
      );
      break;
    case "py":
      return (
        <SyntaxHighlighter language="python " showLineNumbers style={code}>
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

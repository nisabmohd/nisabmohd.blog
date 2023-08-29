"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code(props: any) {
  return (
    <div className="font-mono">
      <SyntaxHighlighter
        language={props.className.split("-")[1]}
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{
          fontSize: "15px",
          fontWeight: "500",
          borderRadius: "8px",
          padding: "20px 28px",
        }}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}

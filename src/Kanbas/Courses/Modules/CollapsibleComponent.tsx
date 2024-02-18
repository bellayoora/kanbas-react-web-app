import React from "react";
import { useCollapse } from "react-collapsed";
import "./index.css";
import { AiOutlineHolder } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa6";

interface CollapsibleComponentProps {
  module: {
    name: string;
    description: string;
    // Add other properties if needed
  };
  children?: React.ReactNode;
}

function CollapsibleComponent(props: CollapsibleComponentProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <AiOutlineHolder style={{ marginRight: 4 }} />
        <FaCaretRight style={{ marginRight: 4 }} />
        <h5 style={{ padding: 0, margin: 0 }}>{props.module.name}</h5>
      </div>
      <div {...getCollapseProps()}>
        <div>
          <div className="content">{props.module.description}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleComponent;

import { Node } from './types';
import { useState } from 'react';

export interface TreeViewProps {
  data: Node;
}

const NodeView = (props: TreeViewProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <li>
      <span
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {props.data.name}
      </span>
      {expanded && props.data.type === 'directory' && (
        <ul>
          {props.data.children.map((child) => (
            <NodeView key={child.name} data={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const TreeView = ({ data }: TreeViewProps) => {
  return (
    <div>
      Twoje drzewo:
      <ul>
        <NodeView data={data} />
      </ul>
    </div>
  );
};

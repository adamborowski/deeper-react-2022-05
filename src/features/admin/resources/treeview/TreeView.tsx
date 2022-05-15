import cx from 'classnames';
import { FC, useState } from 'react';
import styles from './TreeView.module.css';

export interface File {
  type: 'file';
  name: string;
}

export interface Directory {
  type: 'directory';
  name: string;
  children: Node[];
}

export type Node = Directory | File;

export const TreeNode: FC<{ node: Node }> = ({ node }) => {
  const [expanded, setExpanded] = useState(true);

  const isExpandable = node.type === 'directory' && node.children.length > 0;

  return (
    <li>
      {isExpandable ? (
        <button
          className={cx(styles.node, styles.expandable)}
          onClick={() => setExpanded((value) => !value)}
        >
          {node.name}
        </button>
      ) : (
        <span className={styles.node}>{node.name}</span>
      )}

      {expanded && isExpandable && (
        <ul className={styles.ul}>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const TreeView: FC<{ root: Node }> = ({ root }) => (
  <ul className={styles.ul}>
    <TreeNode node={root} />
  </ul>
);

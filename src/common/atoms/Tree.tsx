import { ReactElement, useState } from "react"
import { TNode } from "./Tree.data";
import styles from './Tree.module.css';

interface TreeProps {
    children: TNode[];
    show: boolean;
};

export const Tree1 = ({children, show}: TreeProps): ReactElement => {

    const [open, setOpen] = useState<{[key: number]: boolean}>({});

    const toggleOpen = (index: number) => {
        console.log(open)
        const newOpen = {...open};
        newOpen[index] = typeof newOpen[index] === 'undefined' ? false : !newOpen[index];
        setOpen(newOpen);
    }

    return <ul className={show ? '' : styles.hidden}>
        {children.map((li, i) => (
            <li key={i}>
                <span onClick={() => toggleOpen(i)}>
                    {li.name}
                    {open[i] !== false || li.type === 'file' ? '' : ' ...'}
                </span>

                {li.type === 'directory' && <Tree1 show={open[i] !== false} children={li.children} />}
            </li>
        ))}
    </ul>
};

interface Tree2Props {
    node: TNode;
};

export const Tree2 = ({node}: Tree2Props): ReactElement => {

    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return <li>
        <span onClick={toggleOpen}>{node.name}</span>
        {!open && node.type === 'directory' && '...'}
        {node.type === 'directory' && <ul className={open ? '' : styles.hidden}>
            {node.children.map((e, index) => (
                <Tree2 key={index} node={e} />
            ))}
        </ul>}
    </li>
};

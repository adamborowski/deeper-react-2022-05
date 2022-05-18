import { ReactElement } from "react"
import { Tree1, Tree2 } from "./Tree"

export default {};

import { data } from "./Tree.data";
import { TreeStatic } from "./TreeStatic";

export const StaticList = (): ReactElement => {
    return <>
        <TreeStatic></TreeStatic>
    </>
}

export const ULRootNode1 = (): ReactElement => {
    return <>
        <Tree1 show={true} children={data}></Tree1>
    </>
}

export const LIRootNode2 = (): ReactElement => {
    return <>
        <ul><Tree2 node={data[0]}></Tree2></ul>
    </>
}

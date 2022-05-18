import { HTMLAttributes, ReactElement } from "react"

interface TreeProps extends HTMLAttributes<HTMLElement> {};

export const TreeStatic = (props: TreeProps): ReactElement => {
    return <ul>
        <li>
            My documnents
            <ul>
                <li>
                    My pictutes
                    <ul>
                        <li>
                            Pictute 1.jpg
                        </li>
                        <li>
                            Pictute 2.jpg
                        </li>
                        <li>
                            Pictute 3.jpg
                        </li>
                    </ul>
                </li>
                <li>
                    My movies
                    <ul>
                        <li>
                            Movie 1.mp4
                        </li>
                        <li>
                            Movie 2.mp4
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
}

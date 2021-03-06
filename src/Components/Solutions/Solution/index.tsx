import {ReactNode} from "react";

import styles from './styles.module.scss';

type PropsType = {
    children: ReactNode;
    title: string;
    text: string;
}

export const Solution = (props: PropsType) => {
    return (
        <div className={styles.container}>
            <div>{props.children}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
        </div>)
};

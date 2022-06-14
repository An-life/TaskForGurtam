import styles from './styles.module.scss';

type PropsType = {
    title: string
}

export const Title = ({title}: PropsType) => {
    return (<h2 className={styles.title}>{title}</h2>)
};

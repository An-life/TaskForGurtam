import {ReactNode} from 'react';

import {CloseIcon} from '../../../assets/icons/CloseIcon';
import {Button} from '../Button';

import styles from './styles.module.scss';

type PropsType = {
    onClick: () => void;
    children: ReactNode;
}

export const PopUp = ({onClick, children}: PropsType) => {
    return (
        <div className={styles.container}>
            <Button className={styles.closeButton} onClick={onClick}><CloseIcon color='#FFFFFF'/></Button>
            <div>{children}</div>
        </div>
    )
}

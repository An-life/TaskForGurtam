import {Button} from '../common/Button';

import styles from './styles.module.scss';

export const OrderForm = () => {

    return (
        <div className={styles.container}>
            <input placeholder='Имя' className={styles.input}/>
            <input placeholder='Телефон' className={styles.input}/>
            <input placeholder='Email ' className={styles.input}/>
            <Button className={styles.button}>Отправить</Button>
        </div>
    )
};

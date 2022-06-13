import {projectOptions} from './constants';

import styles from './styles.module.scss';

export const Projects = () => {

    return (<div className={styles.container}>
            {projectOptions.map(({amount, text}, index) => (
                <div key={index} className={styles.wrapper}>
                    <div className={styles.amount}>{amount}</div>
                    <div className={styles.text}>{text}
                    </div>
                </div>
            ))}
        </div>
    )
};

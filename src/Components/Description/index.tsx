import {Link} from 'react-scroll';

import {Button} from '../common/Button';

import styles from './styles.module.scss';

export const Description = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        <h1 className={styles.title}> GPS/ГЛОНАСС мониторинг и контроль любых
                            объектов с Wialon
                        </h1>
                    </div>

                </div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.text}> Одного решения может быть достаточно, чтобы снизили расходы на топливо,
                    вовремя отправили транспорт на техническое обслуживание и ремонт, ввели систему
                    контроля и поощрения водителей и получили доступ к нужной информации на одном
                    экране. Это решение – Wialon. </p>
                <Link
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <a>
                        <Button className={styles.button}>
                            Найти на карте
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    )
};

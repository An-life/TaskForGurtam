import devicesImg from '../../assets/images/DevicesImg.jpg';

import {devicesOptions} from './constants';
import {Solution} from './Solution/index';
import {Title} from "../common/Title";

import styles from './styles.module.scss';

export const Solutions = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.textContent}>
                        <Title  title='Как работает Wialon с GPS/ГЛОНАСС оборудованием'/>
                        <p className={styles.text}> С системой Wialon интегрировано более 2600 моделей оборудования. И
                            мы
                            постоянно увеличиваем их количество, чтобы вы могли пользоваться трекерами и
                            датчиками от любого производителя, а также перейти на Wialon с тем оборудованием,
                            которое у вас уже есть. </p>
                    </div>
                    <div>
                        <img src={devicesImg} alt='Devices' className={styles.image}/>
                    </div>
                </div>
            </div>
            <div className={styles.deviceContainer}>{devicesOptions.map((option, index: number) => (<div key={index}>
                <Solution title={option.title} text={option.text}>{option.icon}</Solution></div>))}
            </div>
        </div>
    )
}

import {Header} from '../Header';
import {appLinkOptions} from "./constants";

import styles from './App.module.scss';

export const App = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header/>
                {
                    appLinkOptions.map(({id, component}, index) => <div key={index} id={id}>{component}</div>)
                }
            </div>
        </div>
    );
}

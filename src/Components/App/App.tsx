import {Projects} from '../Projects';
import {Solutions} from '../Solutions';
import {Spheres} from '../Spheres';
import {Header} from '../Header';
import {Description} from '../Description';
import {Contacts} from '../Contacts';

import styles from './App.module.scss';

export const App = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header/>
                <div id='Description'><Description/></div>
                <div id='Spheres'><Spheres/></div>
                <div id='Projects'><Projects/></div>
                <div id='Solutions'><Solutions/></div>
                <div id='Contacts'><Contacts/></div>
            </div>
        </div>
    );
}

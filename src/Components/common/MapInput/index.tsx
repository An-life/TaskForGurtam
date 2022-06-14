import {LocationIcon} from '../../../assets/icons/LocationIcon';

import styles from './styles.module.scss';

type PropsType = {
    placeholder: string;
    blur: boolean;
    value: string;
    blurHandler: () => void;
    data: Array<any>;
    buttonHandler: (id: number, name: string) => void;
}

export const MapInput = ({placeholder, blur, value, blurHandler, data, buttonHandler}: PropsType) => {

    return (<div className={blur ? styles.activeInputContainer : styles.inputContainer}>
        <LocationIcon/>
        <input value={value} className={styles.input} placeholder={placeholder}
               onClick={blurHandler}/>
        {blur && data && <div className={styles.options}>
            {data.map((item, index) => <button
                key={index}
                className={styles.option}
                onClick={() => buttonHandler(item.id, item.name)}>{item.name}</button>)}
        </div>}
    </div>)
};

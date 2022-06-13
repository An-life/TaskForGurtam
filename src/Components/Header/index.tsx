import {useState} from 'react';
import {Link} from "react-scroll";

import {linkOptions} from "./constants";
import {Button} from "../common/Button";
import {BurgerMenuIcon} from "../../assets/icons/BurgerMenuIcon";
import {CloseIcon} from "../../assets/icons/CloseIcon";

import styles from './styles.module.scss';
import {PopUp} from "../common/PopUp";
import {OrderForm} from "../OrderForm";

export const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [formIsOpen, setFormIsOpen] = useState(false);

    const openFormHandler = () => setFormIsOpen(!formIsOpen);

    const closeMenuHandler = () => {
        setMenuIsOpen(false)
    }

    return (
        <div>
            <div className={menuIsOpen ? styles.container : styles.containerClosed}
                 onClick={menuIsOpen ? closeMenuHandler : undefined}>
                <Button className={styles.closeButton} onClick={closeMenuHandler}> <CloseIcon color='#242424'/></Button>
                <div className={styles.linksWrapper} onClick={menuIsOpen ? closeMenuHandler : undefined}>
                    {linkOptions.map(({id, linkId, title}) => <Link
                        to={linkId}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={id}
                    >
                        <div className={!id ? styles.logo : styles.link}
                             onClick={menuIsOpen ? closeMenuHandler : undefined}>
                            {title}
                        </div>
                    </Link>)}
                </div>
                <div>
                    <Button className={styles.orderButton} onClick={openFormHandler}>Заказать</Button>
                </div>
            </div>
            <Button className={styles.burgerButton} onClick={() => {
                setMenuIsOpen(true)
            }}><BurgerMenuIcon/> </Button>
            {formIsOpen && <PopUp onClick={openFormHandler}><OrderForm/></PopUp>}
        </div>
    )
};

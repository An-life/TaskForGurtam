import {LogoIcon} from "../../assets/icons/LogoIcon";
import {ReactNode} from "react";

type LinkType = {
    id: number
    linkId: string,
    title: string | ReactNode,
}

export const linkOptions: Array<LinkType> = [
    {
        id: 0,
        linkId: 'Description',
        title: <LogoIcon/>
    },
    {
        id: 1,
        linkId: 'Description',
        title: 'Система Wialon'
    },
    {
        id: 2,
        linkId: 'Spheres',
        title: 'Сферы'
    },
    {
        id: 3,
        linkId: 'Projects',
        title: 'Проекты'
    },
    {
        id: 4,
        linkId: 'Solutions',
        title: 'Решения'
    },

    {
        id: 5,
        linkId: 'Contacts',
        title: 'Контакты'
    }
];

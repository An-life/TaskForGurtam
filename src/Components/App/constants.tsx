import {Description} from "../Description";
import {Spheres} from "../Spheres";
import {Projects} from "../Projects";
import {Solutions} from "../Solutions";
import {Contacts} from "../Contacts";

export const appLinkOptions = [
    {
        id: 'Description',
        component: <Description/>
    },
    {
        id: 'Spheres',
        component: <Spheres/>
    },
    {
        id: 'Projects',
        component: <Projects/>
    },
    {
        id: 'Solutions',
        component: <Solutions/>
    },
    {
        id: '<Solutions/>',
        component: <Contacts/>
    }
];

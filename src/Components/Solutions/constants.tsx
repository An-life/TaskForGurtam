import {TrackerIcon} from '../../assets/icons/TrackerIcon';
import {VideoIcon} from '../../assets/icons/VideoIcon';
import {PhonesIcon} from '../../assets/icons/PhonesIcon';
import {TahografsIcon} from '../../assets/icons/TahografsIcon';
import {ObdIcon} from '../../assets/icons/ObdIcon';
import {TahometrsIcon} from '../../assets/icons/TahometrsIcon';

export const devicesOptions = [
    {
        icon: <TrackerIcon/>,
        title: 'GPS/ГЛОНАСС трекеры',
        text: 'Контроль всех типов транспортных средств 24/7'
    },
    {
        icon: <VideoIcon/>,
        title: 'Видеомониторинг',
        text: 'Передача данных с камер и видеорегистраторов в режиме реального времени'
    },
    {
        icon: <PhonesIcon/>,
        title: 'ПО для смартфонов',
        text: 'Основной функционал Wialon на экране смартфона. Приложение WiaTag для\n' +
            'превращение мобильного устройства в GPS-трекер\n',
    },
    {
        icon: <TahometrsIcon/>,
        title: 'Персональные трекеры',
        text: 'Для контроля удаленных сотрудников и выездных специалистов',
    },
    {
        icon: <TahografsIcon/>,
        title: 'Тахографы ',
        text: 'Регистрация данных по активности водителя и соблюдению режима труда и отдыха\n',
    },
    {
        icon: <ObdIcon/>,
        title: 'OBD-трекеры ',
        text: 'Получение данных с бортового компьютера',
    }
];

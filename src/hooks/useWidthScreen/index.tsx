import {useEffect, useState} from 'react';

export enum DeviceType {
    LargeDesktop = 'LargeDesktop',
    Desktop = 'Desktop',
    Tablet = 'Tablet',
    Mobile = 'Mobile',
}

export const screenBreakpoints = {
    [DeviceType.LargeDesktop]: 1440,
    [DeviceType.Desktop]: 1176,
    [DeviceType.Tablet]: 600,
    [DeviceType.Mobile]: 320,
};

export const useWidthScreen = (): { width: number; deviceType: DeviceType } => {
    const [width, setWidth] = useState(0);

    const widthHandler = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', widthHandler);
        return () => {
            window.removeEventListener('resize', widthHandler);
        };
    }, []);
    if (width >= screenBreakpoints[DeviceType.LargeDesktop])
    {
        return {width, deviceType: DeviceType.LargeDesktop};
    }

    if (width > screenBreakpoints[DeviceType.Desktop])
    {
        return {width, deviceType: DeviceType.Desktop};
    }
    if (width > screenBreakpoints[DeviceType.Tablet]) {
        return {width, deviceType: DeviceType.Tablet};
    }
    if (
        width > screenBreakpoints[DeviceType.Mobile]
    ) {
        return {width, deviceType: DeviceType.Mobile};
    }
    return {width, deviceType: DeviceType.LargeDesktop};
};

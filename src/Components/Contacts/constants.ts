import {DeviceType} from '../../hooks/useWidthScreen';

export const zoomForCity = 10;

export const mapBoxToken = 'pk.eyJ1IjoiYW4tbGlmZTEyMzEyMzEyMyIsImEiOiJjbDJpbmV0M2YwcGg0M2N0cGp5cGU2N2R0In0.6Pznl9pXKWaxd2QTXr0JsA';

export const mapStyle = 'mapbox://styles/an-life123123123/cl4a2i292000x14mi9r1w3h5d';

export const mapSize = {
    [DeviceType.LargeDesktop]: {
        width: 1440,
        height: 720,
    },
    [DeviceType.Desktop]: {
        width: 1176,
        height: 600
    },
    [DeviceType.Tablet]: {
        width: 550,
        height: 300
    },
    [DeviceType.Mobile]: {
        width: 300,
        height: 200
    }
};

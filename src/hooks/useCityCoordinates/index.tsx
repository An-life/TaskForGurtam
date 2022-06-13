import {useEffect, useState} from 'react';

import {API_KEY} from './constants';
import {Coordinates} from '../../types';

export const useCityCoordinates = (cityName: string) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cityCoordinates, setCityCoordinates] = useState<Coordinates | null>(null);

    useEffect(() => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${API_KEY}`).then(res => res.json())
            .then(response => {
                    setIsLoaded(true);
                    setCityCoordinates({
                            lon: response.results[0].geometry.lng,
                            lat: response.results[0].geometry.lat,
                        }
                    )
                }, (error) => {
                    setIsLoaded(true);
                    setCityCoordinates(null);
                    console.log(error);
                }
            )
    }, [cityName])

    return {cityCoordinates, isLoaded}
}

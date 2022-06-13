import {useEffect, useState} from 'react';

type CountryData = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export const useCountriesData = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [countriesData, setCountriesData] = useState<Array<CountryData> | null>(null);

    useEffect(() => {
        fetch('https://cs.wialon.com/svcs/regions/v1/countries?extended=1').then(res => res.json())
            .then(response => {
                    setIsLoaded(true);
                    setCountriesData(
                        response.map(({id, name, latitude, longitude}: CountryData) => ({
                                id, name, latitude, longitude
                            })
                        )
                    )
                }, (error) => {
                    setIsLoaded(true);
                    setCountriesData(null);
                    console.log(error);
                }
            )
    }, []);

    return {countriesData, isLoaded};
}

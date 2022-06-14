import {MutableRefObject, useEffect, useRef, useState} from 'react';

import mapboxgl from 'mapbox-gl';

import {Coordinates} from '../../types';
import {useFetch} from "../../hooks/useFeatch";
import {useWidthScreen} from '../../hooks/useWidthScreen';
import {useCityCoordinates} from '../../hooks/useCityCoordinates';
import {Button} from '../common/Button';
import {Title} from '../common/Title';
import {MapInput} from "../common/MapInput";
import {
    citiesDataUrl,
    countriesDataUrl,
    mapBoxToken,
    mapSize,
    mapStyle,
    zoomForCity,
    zoomForCountry
} from './constants';

import styles from './styles.module.scss';

interface CountryData {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

interface CityData {
    id: number,
    name: string
}

mapboxgl.accessToken = mapBoxToken;

export const Contacts = () => {
    const [coordinates, setCoordinates] = useState({
        lon: 27.5666700,
        lat: 53.9000000
    })
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [countryId, setCountryId] = useState<number | null>(null);
    const [blurForCountryInput, setBlurForCountryInput] = useState<any>(false);
    const [blurForCityInput, setBlurForCityInput] = useState(false);
    const [countryCoordinates, setCountryCoordinates] = useState<Coordinates | null>(null);
    const [zoom,setZoom]=useState(zoomForCountry);

    const countriesData = useFetch<CountryData[]>(countriesDataUrl);
    const citiesData = useFetch<CityData[]>(`${citiesDataUrl}${countryId}`);
    const {cityCoordinates, setCityCoordinates} = useCityCoordinates(city);

    const {deviceType} = useWidthScreen();

    const mapContainer = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(()=>{
        setCity('');
    },[country])

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle,
            center: [coordinates.lon, coordinates.lat],
            zoom: zoom,
        })

        return () => map.remove();
    }, [coordinates])

    const countryOnClickHandler = (id: number, name: string) => {
        let country = countriesData.data?.filter(country => country.id === id);
        setCountryId(id);
        setBlurForCountryInput(false);
        setCountry(name);
        country && setCountryCoordinates({lon: country[0].longitude, lat: country[0].latitude})
    }

    const citiesOnClickHandler = (id: number, name: string) => {
        setCity(name);
        setBlurForCityInput(false);
    }

    const searchButtonHandler = () => {
        if (cityCoordinates && country) {
            setCoordinates(cityCoordinates);
            setCountry('');
            setCity('');
            setCountryId(null);
            setCityCoordinates(null);
            setZoom(zoomForCity);
        } else if (countryCoordinates) {
            setCoordinates(countryCoordinates);
            setCountry('');
            setCountryId(null);
            setZoom(zoomForCountry);
        } else if (city && !cityCoordinates) {
            setCity('');
            setCountry('');
            setCountryId(null);
        }
    };

    return (
        <div className={styles.container} >
            <div className={styles.title}><Title title='Найти офис в своем регионе'/></div>
            <div className={styles.form}>
                <MapInput placeholder='Выберите вашу страну' blur={blurForCountryInput} value={country}
                          blurHandler={() => setBlurForCountryInput(true)}
                          data={countriesData.data ?? []} buttonHandler={countryOnClickHandler}/>
                <MapInput placeholder='Выберите ваш город' blur={blurForCityInput} value={city}
                          blurHandler={() => setBlurForCityInput(true)}
                          data={citiesData.data ?? []} buttonHandler={citiesOnClickHandler}/>
                <Button className={styles.button} onClick={searchButtonHandler} isDisabled={!country&&!!city}>
                    Найти офис
                </Button>
            </div>
            <div className={styles.container}>
                <div ref={mapContainer} style={{width: mapSize[deviceType].width, height: mapSize[deviceType].height}}/>
            </div>
        </div>
    )
};

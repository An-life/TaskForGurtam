import {useEffect, useRef, useState} from 'react';

import mapboxgl from 'mapbox-gl';

import {Coordinates} from '../../types';
import {useCountriesData} from '../../hooks/useCountryData';
import {useCitiesData} from '../../hooks/useCitiesData';
import {useWidthScreen} from '../../hooks/useWidthScreen';
import {useCityCoordinates} from '../../hooks/useCityCoordinates';
import {Button} from '../common/Button';
import {Title} from '../common/Title';
import {LocationIcon} from '../../assets/icons/LocationIcon';
import {mapBoxToken, mapSize, mapStyle, zoomForCity} from './constants';

import styles from './styles.module.scss';


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

    const {countriesData} = useCountriesData();
    const {citiesData} = useCitiesData(countryId);
    const {deviceType} = useWidthScreen();
    const {cityCoordinates} = useCityCoordinates(city);

    const mapContainer = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle,
            center: [coordinates.lon, coordinates.lat],
            zoom: zoomForCity,
        })

        return () => map.remove()
    }, [coordinates])

    const countryOnClickHandler = (id: number, latitude: number, longitude: number, name: string) => {
        setCountryId(id);
        setBlurForCountryInput(false);
        setCountry(name);
        setCountryCoordinates({lon: longitude, lat: latitude})
    }

    const citiesOnClickHandler = (name: string) => {
        setCity(name);
        setBlurForCityInput(false);
    }

    const searchButtonHandler = () => {
        if(countryCoordinates){
            setCoordinates(countryCoordinates);
        }else if( cityCoordinates){
            setCoordinates(cityCoordinates);
            setCountry('');
            setCity('');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}><Title title='Найти офис в своем регионе'/></div>
            <div className={styles.form}>
                <div className={blurForCountryInput ? styles.activeInputContainer : styles.inputContainer}>
                    <LocationIcon/>
                    <input value={country} className={styles.input} placeholder='Выберите вашу страну'
                           onClick={() => setBlurForCountryInput(true)}/>
                    {blurForCountryInput && countriesData && <div className={styles.options}>
                        {countriesData.map(({name, id, latitude, longitude}) => <button
                            key={id}
                            className={styles.option}
                            onClick={() => countryOnClickHandler(id, latitude, longitude, name)}>{name}</button>)}
                    </div>}
                </div>
                <div className={blurForCityInput ? styles.activeInputContainer : styles.inputContainer}>
                    <LocationIcon/>
                    <input className={styles.input} placeholder='Выберите вaш город' value={city}
                           onClick={() => setBlurForCityInput(true)}/>
                    <div className={styles.options}>
                        {blurForCityInput && citiesData && <div className={styles.options}>
                            {citiesData.map((name, index) => <button
                                key={index}
                                className={styles.option}
                                onClick={() => citiesOnClickHandler(name)}>{name}</button>)}
                        </div>}
                    </div>
                </div>
                <Button className={styles.button} onClick={searchButtonHandler}>
                    Найти офис
                </Button>
            </div>
            <div className={styles.container}>
                <div ref={mapContainer} style={{width: mapSize[deviceType].width, height: mapSize[deviceType].height}}/>
            </div>
        </div>
    )
};

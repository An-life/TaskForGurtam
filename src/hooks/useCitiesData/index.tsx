import {useEffect, useState} from 'react';

export const useCitiesData = (id: number | null) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [citiesData, setCitiesData] = useState<Array<string> | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://cs.wialon.com/svcs/regions/v1/cities?country_id=${id}`).then(res => res.json())
                .then(response => {
                        setIsLoaded(true);
                        setCitiesData(
                            response.map(({name}: { name: string }) => name)
                        )
                    }, (error) => {
                        setIsLoaded(true);
                        setCitiesData(null);
                        console.log(error);
                    }
                )
        }
    }, [id]);

    return {citiesData, isLoaded};
}
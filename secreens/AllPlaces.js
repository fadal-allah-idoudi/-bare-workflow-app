import React, { useEffect, useState } from 'react';
import PlacesList from '../comps/Places/PlacesList';
import {useIsFocused} from '@react-navigation/native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { fetchdata, insertImage } from '../comps/DataBase';


function AllPlaces({route}) {
    const [lodedimage, setlodedimage] = useState([]);
    const isFocus = useIsFocused();
    const db = useSQLiteContext();
    useEffect(() => {
        const fetchData = async () => {
             
                try {
                    // Fetching data and awaiting resolution
                    const result = await fetchdata(db);
                    console.log('====================================');
                    console.log(result);
                    console.log('====================================');
                    if ( route.params){
                        const newImage = route.params.imagedata;
                        await insertImage(newImage, db);
                    }
                    setlodedimage(result);

                } catch (error) {
                    console.error(error);
                }
           
        };

        fetchData();
    }, [isFocus, route]);

    return (
        <PlacesList image={lodedimage} />
    );
}

export default AllPlaces;

import React from 'react';
import PlaceForm from '../comps/Places/PlaceForm';
import { View ,Text} from 'react-native';
function Nzw({navigation}) {
    function createimagehundler(imagedata){
        navigation.navigate('AllPlaces',
            {
                imagedata:imagedata
            }
        )
        console.log("newsecrren",imagedata);
        
    }
    return (
        
        <PlaceForm createimagehundler={createimagehundler}/>
        
    );
}

export default Nzw;
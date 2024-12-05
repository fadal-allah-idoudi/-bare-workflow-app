import React,{useState} from 'react';
import { StyleSheet, View,Alert, Platform, Linking, Image } from 'react-native';
import OutlineButton from '../OutlineButton';
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions,getForegroundPermissionsAsync}from 'expo-location'

function LocationPicker(props) {
    [locationPermisionInformation,requestPermison]=useForegroundPermissions()
    const [pickedlocation, setpickedlocation] = useState(null);
    async function verefypemision() {
        const currentPermission = await getForegroundPermissionsAsync();
        if(currentPermission.status=== PermissionStatus.UNDETERMINED){
            const permison= await  requestPermison();
            return permison.granted
         }
          
         if (currentPermission.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions',
                'You need to grant location permissions to use this app.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { 
                        text: 'Allow', 
                        onPress: () => {
                            if (Platform.OS === 'ios') {
                                Linking.openURL('app-settings:');
                            } else {
                                Linking.openSettings();
                            }
                        } 
                    }
                 ]
            );
            
            return ;
        }
         if (locationPermisionInformation.status === PermissionStatus.GRANTED) {
             return true;
         }
    }
    async function locationHundler(){
        
        const haspermison= await verefypemision();
        if(! haspermison){
            const permison= await  requestPermison();
            return permison.granted
        }
        const location=await getCurrentPositionAsync();
        setpickedlocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
        console.log(location);
        
    }
    function pickOnhundler(){}
    return (
        <View>
           
            <View style={styles.actions}>
                <OutlineButton icon={"location"} onPress={locationHundler}>
                    Locate User
                </OutlineButton>
                <OutlineButton icon={"map"} onPress={pickOnhundler}>
                    Pick on map
                </OutlineButton>
            </View>
        </View>
    );
}

export default LocationPicker;
const styles = StyleSheet.create({
    mapPreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a0defb',
        borderRadius:4

    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-around'
    }, container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
})

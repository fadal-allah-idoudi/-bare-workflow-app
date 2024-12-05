import React, { useState } from 'react';
import { Alert, Button, Image, View,Text,StyleSheet} from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import OutlineButton from '../OutlineButton';


function ImagePicker(props) {
    const [pickedimage , setpickedimage] = useState();
    const [CameraPermissionsinformation,requestPermissions]=useCameraPermissions()
  async function takeimagehandler(){
       const haspermison= await verifyPremisson();
       if(! haspermison){
        return;
       }
        const image=await launchCameraAsync({
            allowsEditing:true,
            quality:0.5
        });
         
        setpickedimage(image.assets[0].uri);
        props.onimagetaken(image.assets[0].uri)
    }
        
    async function verifyPremisson(){
        if(CameraPermissionsinformation.status=== PermissionStatus.UNDETERMINED){
           const permison= await  requestPermissions();
           return permison.granted
        }
        if(CameraPermissionsinformation.status=== PermissionStatus.DENIED){
            Alert.alert(
                'insufficient permision',
                'you need to grant camera permesion to use this app'
            )
            return false;
        }
        if (CameraPermissionsinformation.status === PermissionStatus.GRANTED) {
            return true;
        }
    }
    let imagepreview= <Text>no image taken yet</Text>;
    if(pickedimage){
        imagepreview = <Image style={styles.image} source={{uri:pickedimage}}/>   
    }
    return (
        <View>
            <View style={styles.cotainer}>
                {imagepreview}
            </View>
            <OutlineButton icon='camera' onPress={takeimagehandler}>Take image</OutlineButton>
        </View>
    );
}

export default ImagePicker;
const styles = StyleSheet.create({
    image:{
       width:'100%',
       height:'100%',
       resizeMode: 'stretch',
    },
    cotainer:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a0defb',
        borderRadius:4
    }
})
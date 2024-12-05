import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,ScrollView, TextInput } from 'react-native';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm(props) {
    const [entredtext, setentredtext] = useState('');
    const [image, setimage] = useState('');
    function changeTitel(entered){
        setentredtext(entered)
    }
    function takeimageHundler(imageuri){
        setimage(imageuri)
    }
    useEffect(() => {
        if (image && entredtext) {
            createimage();
        }
    }, [image, entredtext]);
    function createimage(){
        const imageData={
            Url:image,
            title:entredtext,
            id:new Date().toString()+Math.random().toString()
        }
        props.createimagehundler(imageData);
    }
    return (
        <ScrollView style={styles.form}>
            <View >
                <Text style={styles.label}>titele</Text>
                <TextInput style={styles.input}
                 onChangeText={changeTitel} 
                 value={entredtext}
                 />
            </View>
            <ImagePicker onimagetaken={takeimageHundler}/>
            <LocationPicker/>
        </ScrollView>
        
    );
}

export default PlaceForm;
const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:24,
    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor:'#1aacf0',
        borderBottomWidth:2,
        backgroundColor:'#a0defb'

    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color:'#1aacf0'
    }
})
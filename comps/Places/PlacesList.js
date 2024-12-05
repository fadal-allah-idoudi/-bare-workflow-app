import React from 'react';
import { FlatList,Image,Pressable,StyleSheet, Text, View } from 'react-native';
function PlacesList(props) {
    function render(itemdata){
        return(
            <Pressable onPress={props.clicked}>
              <Image style={{width:100,height:100}} source={{uri:itemdata.item.imageUri}}/>
              <View>
                <Text>{itemdata.item.title}</Text>
                <Text>{itemdata.item.ids}</Text>
                
              </View>  
            </Pressable>
        )
    }
    // if(!props.image || props.image===0){
    //     return(
    //         <View style={styles.fallbackcontainer}>
    //             <Text style={styles.fallbackText}>No place is Added yet</Text>
    //         </View>
    //     )
    // }
    return (
        <>
        <FlatList data={props.image} keyExtractor={(item)=>item.id} renderItem={render}/>
        {/* <View style={styles.fallbackcontainer}>
                <Text style={styles.fallbackText}>{props.image.imageUri}</Text>
            </View> */}
        </>
    );
}

export default PlacesList;
const styles = StyleSheet.create({
    fallbackcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbackText:{
        fontSize:16,
        color:'#77cff8'
    }
})
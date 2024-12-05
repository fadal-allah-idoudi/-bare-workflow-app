import React, { Children } from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Pressable, Text ,StyleSheet} from 'react-native';
function OutlineButton({onPress,icon,children}) {
    return (
        <Pressable style={({pressed})=>[styles.button,pressed && styles.pressed]} onPress={onPress}>
            <Ionicons style={styles.icon} size={18}color={'#1aacf0'} name={icon}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlineButton;
const styles =StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        margin:4,
        justifyContent:'center',
        alignItems:"center",
        borderWidth:1,
        borderColor:'#1aacf0',
        flexDirection:'row'
    },
    pressed:{
        opacity:0.75,

    },
    icon:{
        marginRight:6,lor:'#1aacf0'
    },
    text:{
        color:'#1aacf0'
    }
});
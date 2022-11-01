import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard

} from 'react-native'
import { fontSizes } from "../constants";
function Appointmentitem(props){
    let {name,begin,end,img,
    }=props.appointment
    let opres=props.onPress
    return <View
    style={{ 
        flex :1,
        height: 110,
        paddingLeft: 10,
        flexDirection: 'row'
    }}>
        <Image style={{
            padding:10,
            flex:20,
            height: 80,
            width: 80,
        }}
            source={{uri:img}} />
        <View style ={{
            //  padding:10,
            paddingStart:5,
             flex: 50,
             marginRight: 10
        }}>
           <Text style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold'
        }}> Bac si:{name}</Text> 
        <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <Text style={{
                fontSize:12,
                color:'black'
            }}>
                bat dau: {begin}
            </Text>
            <Text style={{
                fontSize:12,
                color:'black'
            }}>
                ket thuc:{end} 
            </Text>
            
        </View>
        <TouchableOpacity style={{
          
            justifyContent:'center',
            height:80,
            alignItems:'center',
            flex:30
        }}>
            <Text> huy cuoc hen</Text>
        </TouchableOpacity>

    </View>
}
export default Appointmentitem
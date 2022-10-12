import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from "react-native";
import { fontSizes } from '../constants'

import Icon from 'react-native-vector-icons/EvilIcons'
function Doctoritem(props){
    return <TouchableOpacity style={{
        height: 120,
        width:180,
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row'}}>
            <View style={{
                flexDirection:"column",
                justifyContent:'space-evenly'
            }}>
            <Image style={{height: 50, width: 50, }} source={require('../img/bannerlogin.png')} />
            <TouchableOpacity style={{
                backgroundColor:'#F0F8FF',
                alignItems:'center'
            }}><Text>Dat lich</Text></TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'column'
            }}><Text style={{
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
                paddingStart:10
            }}>Thac si, bac si</Text>
            
            <Text style={{
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold',
                paddingStart:10
            }}>Le Anh Tuan</Text>
            <Text style={{
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold',
                paddingStart:10
            }}>nam khoa * phong kham viet phap</Text>
            </View>
    </TouchableOpacity>
}

export default Doctoritem
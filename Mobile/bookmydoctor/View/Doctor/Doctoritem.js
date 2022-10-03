import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard

} from 'react-native'
import { fontSizes, images } from "../../constants";
function Doctoritem(props){
    
    let {name,clinic,specialty,image,
   }=props.doctor
   let opres=props.onPress

    return  <TouchableOpacity 
    onPress={opres}
    style={{
        height: 150,
        paddingLeft: 10,
        paddingTop: 10, 
        flexDirection: 'row'
    }}>
        <Image style={{
            height: 100,
            width: 100,
        }}
            source={image} />
        <View style={{
            padding:10,
            flex: 1,
            marginRight: 10
        }}>
        <Text style={{
            color: 'black',
            fontSize: fontSizes.h3,
            fontWeight: 'bold'
        }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}>phong kham: 
                </Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}> {clinic}
                </Text>
            </View>
            <Text style={{
                fontSize:fontSizes.h5,
                color:'black'
            }}>
                khoa:{specialty}
            </Text>
        </View>
    </TouchableOpacity>
}
export default Doctoritem
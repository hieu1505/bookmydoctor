import { Icon } from "react-native-vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';
function Messengeritem(props) {
    let { isSender, url, messenger } = props.user
    let opres = props.onPress
    return <View
        onPress={opres}
        style={{
       
            paddingLeft: 8,
            paddingTop: 10,
            flexDirection: 'row'
        }}>
        {isSender == false ? <Image style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: url }} /> : <View style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                marginRight: 10,
                marginStart: 10
            }}></View>}
        <View style={{
            flexDirection: 'row',
            justifyContent:isSender==false?'flex-start':'flex-end',
            flex: 1
        }}>

            <Text style={{
                color: 'black',
                fontSize: 14,
                paddingHorizontal: 7,
                borderRadius: 10,
                backgroundColor: '#66CDAA'
            }}>{messenger}</Text>
        </View>
        {isSender == true ? <Image style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: url }} /> : <View style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                marginRight: 10,
                marginStart: 10
            }}></View>}
            
    </View>
}
export default Messengeritem
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
    let opres=props.onPress
    return <View
        onPress={opres}
        style={{
         
            paddingLeft: 10,
            paddingTop: 10,
            flexDirection: 'row'
        }}>
        <Image style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: url }} />   
            <View style={{flexDirection:'row',
        paddingEnd:20,
        flex:1}}>

            <Text style={{
                color: 'black',
                fontSize: 14,
                paddingHorizontal:7,
                borderRadius:10,
                backgroundColor:'#66CDAA'
            }}>{messenger}</Text>  
            </View>
            
      
       
    </View>
}
export default Messengeritem
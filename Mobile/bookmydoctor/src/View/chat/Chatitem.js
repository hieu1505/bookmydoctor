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
function Chatitem(props) {
    let { name, url, firstmessage } = props.user
    let opres=props.onPress
    return <TouchableOpacity
        onPress={opres}
        style={{
            height: 80,
            paddingLeft: 20,
            paddingTop: 10,
            flexDirection: 'row'
        }}>
        <View><Image style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10
        }}
            source={{ uri: url }} />
            <Text
             style={{ backgroundColor: '#FA8072',
             position:'absolute',
             color:'white',
             right:10,
             fontSize:12,
             borderRadius:10,
             paddingHorizontal:4

        }}>1</Text>
        </View>
        <View style={{
            padding: 10,
        
            marginRight: 10,flexDirection:'column'
        }}>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold'
            }}>{name}</Text>
            <Text style={{
                color: '#B0C4DE',
                fontSize: 18,  
            }}>{firstmessage}</Text>
           
        </View>
        <View style={{
            padding: 10,
            flex: 1,
            justifyContent:'center',
            alignItems:'flex-end',
            marginRight: 10,flexDirection:'column',
            marginRight:10
        }}>
            <Text style={{
                color: 'black',
                fontSize: 12,
              
            }}>4 phut truoc</Text>
           
           
        </View>
    </TouchableOpacity>
}
export default Chatitem
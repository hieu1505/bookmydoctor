import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome5";
import UIHeader from "./UIHeader";
import Chatitem from "./Chatitem";
function Chat({ route, navigation },props){
    const [users,setusers]=useState([ {
        url:'https://randomuser.me/api/portraits/women/58.jpg',
        name:'ngo van b',
        firstmessage:'hello'
    },
    {
        url:'https://randomuser.me/api/portraits/women/53.jpg',
        name:'ngo van dsab',
        firstmessage:'hello'
    },
    {
        url:'https://randomuser.me/api/portraits/women/55.jpg',
        name:'ngo van basd',
        firstmessage:'hello'
    }, {
        url:'https://randomuser.me/api/portraits/women/50.jpg',
        name:'ngo van asb',
        firstmessage:'hello'
    }])
   return <View style={{
    flexDirection:'column',
   }}>
    <UIHeader title={'Notifications'}
    lefIconname={'arrow-left'}
    rightIconname={'search'}
    onpresslefIcon={()=>{
        navigation.goBack()
    }}
    onpressrightIcon={()=>{
        alert('aaaa')
    }}
    />
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginStart:10
    }}> 
    <Text style={{
        color:'black',
        fontSize:16,
    }}>6 unred messages</Text>
    <Icon name="search"
    style={{padding:15}}
    size={15}
    color={'black'}
    onPress={()=>{
        alert('xoa')
    }}
    />
    </View>
    
    <FlatList 
           data={users}
           renderItem={({item})=>< Chatitem
           onPress={()=>{ navigation.navigate('Messenger',{user:item})}}
           user={item} key={item.id}
           />}
           />
    </View>
}

export default Chat
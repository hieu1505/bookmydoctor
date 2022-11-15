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
import Messengeritem from "./Messengeritem";
function Messenger({ route, navigation },props){
    const {url,name}=route.params.user
    const [chathistory,setchathistory]=useState([ {
        url:'https://randomuser.me/api/portraits/women/58.jpg',
        isSender:true,
        messenger:'hello', 
    },
    {
        url:'https://randomuser.me/api/portraits/women/53.jpg',
        isSender:true,
        messenger:'heasdsallasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssso', 
    },
    {
        url:'https://randomuser.me/api/portraits/women/58.jpg',
        isSender:true,
        messenger:'sdaas', 
    },{
        url:'https://randomuser.me/api/portraits/women/53.jpg',
        isSender:true,
        messenger:'hello', 
    }])
   return <View style={{
    flexDirection:'column',
   }}>
    <UIHeader title={name}
    lefIconname={'arrow-left'}
    rightIconname={'ellipsis-v'}
    onpresslefIcon={()=>{
        navigation.goBack()
    }}
    onpressrightIcon={()=>{
        
    }}
    />
 
    <FlatList 
           data={chathistory}
           renderItem={({item})=>< Messengeritem
           onPress={()=>{navi }}
           user={item} key={item.id}
           />}
           />
    </View>
}

export default Messenger
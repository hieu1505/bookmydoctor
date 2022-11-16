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
        isSender:false,
        messenger:'hello', 
    },
    {
        url:'https://randomuser.me/api/portraits/women/53.jpg',
        isSender:true,
        messenger:'heasdsallasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssso', 
    },
    {
        url:'https://randomuser.me/api/portraits/women/58.jpg',
        isSender:false,
        messenger:'sdaas', 
    },{
        url:'https://randomuser.me/api/portraits/women/53.jpg',
        isSender:true,
        messenger:'hello', 
    }])
   return <View style={{
    flexDirection:'column',
    flex:1
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
           <View style={{
                height:50,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
               
            }}>
            <TextInput
            style={{ fontSize: 20,
                color:'black',
            paddingStart:20,
            backgroundColor:'#C0C0C0',
            borderRadius:10,
        width:340}}
            placeholder="hihi"
            placeholderTextColor={'rgba(0,0,0,0.6'}
        ></TextInput>
        <TouchableOpacity><Icon name="paper-plane" size={23} color={'red'} style={{padding:10}}/></TouchableOpacity>
        </View>
    </View>
}

export default Messenger
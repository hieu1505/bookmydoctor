import { Icon } from "react-native-vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,TouchableOpacity
} from 'react-native';
function Messengeritem(props) {
    let { from_user, to_user,image, text,fromUser,toUser } = props.user
    let id=props.id
    
   
    if(from_user==id){
        isSender=true
        img=fromUser.image
        
    }
    else{
        isSender=false
       
        img=fromUser.image
    }
    let opres = props.onPress
    return <View
        
        style={{
            paddingLeft:10,
            paddingTop: 10,
            flexDirection: 'row'
        }}>
        {isSender == true ? 
       <Image style={{
            height: 40,
            width: 40,
            borderRadius: 25,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: img }} />  
             : <View style={{
                height: 40,
                width: 40,
                borderRadius: 25,
                marginRight: 10,
                marginStart: 10
            }}></View>} 
            
        <View style={{
            flexDirection: 'row',
            justifyContent: isSender==true?'flex-start':'flex-end',
            flex: 1
        }}>

           {text!=''?<Text style={{
                color: 'black',
                fontSize: 14,
                paddingHorizontal: 15,
                borderRadius: 10,
                backgroundColor: isSender==true?'#ccc':'#056edf'
            }}>{text}</Text>:<View style={{
                height: 0,
                width: 0,
            }}></View>} 
           {image!=""?<TouchableOpacity onPress={opres}>
           <Image style={{
            height: 50,
            width: 50,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: image }} />
           </TouchableOpacity>:<View style={{
                height: 0,
                width: 0,
            }}></View> }  
        </View>
        
        
        {isSender == false ? 
         <Image style={{
            height: 40,
            width: 40,
            borderRadius: 25,
            marginRight: 10,
            marginStart: 10
        }}
            source={{ uri: img }} /> 
              : <View style={{
                height: 40,
                width: 40,
                borderRadius: 25,
                marginRight: 10,
                marginStart: 10
            }}></View>}
             
    </View>
}
export default Messengeritem
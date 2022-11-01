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
function Specialistitem(props) {
  let {name,sumdoctor,image,
  }=props.Special
  let opres=props.onPress
  if(sumdoctor==null){
    sumdoctor=0
  }
  return <TouchableOpacity
  onPress={opres}
  style={{
    height: 100,
        paddingLeft: 10,
        paddingTop: 10, 
        flexDirection: 'row'
  }}>

    <Image style={{
      width: 80, height: 80,
    }} source={{uri:image}}></Image>
    <View style={{
            padding:10,
            flex: 1,
            marginRight: 10
        }}> 
        <Text style={{
            color: 'black',
            fontSize: fontSizes.h3,
            fontWeight: 'bold'
        }}>Khoa: {name}</Text>
        <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
          <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    color: 'black',
                    marginTop:20,
                    
                }}>
                </Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>  Gồm có:{sumdoctor} bác sĩ
                </Text>
            </View>
        </View>
  </TouchableOpacity>
}
export default Specialistitem
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
function Clinicitem(props) {
  let {name,street,image,
  }=props.clinic
  let opres=props.onPress
 return <TouchableOpacity
  onPress={opres}
  style={{
    height: 100,
        paddingLeft: 10,
        paddingTop: 20, 
        flexDirection: 'row'
  }}>

    <Image style={{
      width: 90, height: 90,
    }} source={{uri:image}}></Image>
    <View style={{
            padding:10,
            flex: 1,
            marginRight: 10
        }}> 
        <Text style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold'
        }}>{name}</Text>
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
                    fontSize: fontSizes.h6,
                }}>  Dia chi: {street}
                </Text>
            </View>
        </View>
  </TouchableOpacity>
}
export default Clinicitem
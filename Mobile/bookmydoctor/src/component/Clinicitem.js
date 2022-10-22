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
function Clinicitem(props) {
  return <TouchableOpacity style={{
    justifyContent: 'center',
    alignItems: 'center',
    width: 120, height: 120
  }}>

    <Image style={{
      width: 80, height: 80,
      borderRadius: 25, margin: 10
    }} source={require('../img/bannerHand.png')}></Image>
    <Text style={{ fontSize: fontSizes.h6 , justifyContent: 'center',alignItems: 'center',}}>phong kham da khoa sai gon</Text>
  </TouchableOpacity>
}
export default Clinicitem
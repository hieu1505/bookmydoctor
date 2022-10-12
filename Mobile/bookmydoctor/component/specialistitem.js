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
function specialistitem(props) {
  return <TouchableOpacity style={{
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, height: 100
  }}>

    <Image style={{
      width: 50, height: 50,
      resizeMode: 'cover',
      borderRadius: 25, margin: 10
    }} source={require('../img/da-khoa.png')}></Image>
    <Text style={{ fontSize: fontSizes.h6 }}>da lieu</Text>
  </TouchableOpacity>
}
export default specialistitem
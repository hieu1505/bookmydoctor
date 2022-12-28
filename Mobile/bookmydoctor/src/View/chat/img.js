import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,Image
   
} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
function Img({ route, navigation }){
    const { image } = route.params
    return <View>
        <View  style={{
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
        <Icon  name='arrow-left'style={{padding:10}} size={25} color={'black'}  onPress={()=>{navigation.goBack()}}/>
    </View>
    <View style={{
        paddingStart:12,
        paddingTop:150
    }}>
    <Image source={{uri:image}} style={{ width:350, height: 350, }}/>
    </View>
   
    </View>
}
export default Img
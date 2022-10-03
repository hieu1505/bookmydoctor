import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,ScrollView, FlatList

} from 'react-native'
import { fontSizes, images } from "../constants";
import Doctoritem from "./Doctor/DoctorList";
import Icon from 'react-native-vector-icons/FontAwesome'
function Settings(props){
return <View style={{
    flex:1,
}}>
    <View style={{
        height:60,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        paddingEnd:10
    }}>
        <Image style={{
            height:40,
            width:40,
            resizeMode:'cover',
            borderRadius:25,margin:10
        }}source={images.doctorbg}/>
        <View style={{
            flex:1,
            flexDirection:'column',
            marginEnd:30
        }}>
            <Text style={{
            fontSize:fontSizes.h3
            }}>Duong van hieu</Text>
            <Text style={{
                fontSize:fontSizes.h6
            }}>
                thong tin tai khoan ,cai dat
            </Text>
        </View>
        <Icon name="rocket" color="#eee" size={30} />
        <Icon name="rocket" color="#eee" size={30} />
    </View>
    <ScrollView>
        <View style={{
          flexDirection:'row'
        }}>
        <Icon name="rocket" color="#eee" size={20}  style={{marginEnd:2}}/>
        <Text style={{}}>trang chu</Text>
        </View>
    </ScrollView>
</View>
}
export default Settings
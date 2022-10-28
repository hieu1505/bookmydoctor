import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, FlatList

} from 'react-native'
import { fontSizes, } from "../constants";
import Doctoritem from "./Doctoritem";
import Icon from 'react-native-vector-icons/FontAwesome'
import doctorApi from "../Api/doctorapi";
import specialistApi from "../Api/specialistApi";
function TabClinic({navigation},props){
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('UITab')
        }}
        ><Icon name='close'
                size={35} color={'black'}
                style={{
                    top: 10,
                    left: 20
                }}></Icon></TouchableOpacity>
            <View style={{
                height: 50,
                marginHorizontal: 10,
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center'

            }}><Icon name='search'
                size={15} color={'black'}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10
                }}></Icon>
                <TextInput autoCorrect={false}
                    onChangeText={(text) => {
                        setsearchtext(text)
                    }}
                    style={{
                        paddingStart: 30,
                        height: 40,
                        flex: 1,
                        marginEnd: 10,
                        borderRadius: 5,
                        opacity: 0.5
                    }} />
            </View>
            <View style={{
                height: 100
            }}>
                <View style={{ height: 1, backgroundColor: 'black' }}></View>
            </View>
        </View>
    </View>
}
export default TabClinic
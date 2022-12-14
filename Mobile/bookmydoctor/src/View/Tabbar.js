import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Tabbar({navigation},props) {
    return <View style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View style={{
            flex: 10,
            paddingTop: 30,
            alignItems: 'center',
            backgroundColor: '#0066ff'
        }}>
            <Image source={require('../img/logoApp.png')} style={{ width: 180, height: 30 }} />
        </View>
        <View style={{
            flex: 60,
            backgroundColor: "#ffffcc"
        }}>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('UITab')
            }}
                style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                }}><Text style={{
                    color: 'blue',
                    fontSize: 25, paddingEnd: 20
                }}>Trang chủ</Text></TouchableOpacity>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('TabSpecial')
            }}
                style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                

                }}><Text style={{
                    color: 'blue',
                    fontSize: 25,
                }}>Danh sách các khoa</Text></TouchableOpacity>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('TabDoctor')
            }}
                style={{
                    fontWeight: 'bold',
                    fontSize: 30, 
                }}><Text style={{
                    color: 'blue',
                    fontSize: 25,
                }}>Danh sách các bác sỹ</Text></TouchableOpacity>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            
        </View>
        <View style={{
            flex: 10, backgroundColor: "#ffffcc",
            alignItems: 'center',justifyContent:'center'
        }}>
            <TouchableOpacity
            onPress={()=>{
            
                AsyncStorage.removeItem('access_token')
                navigation.navigate('Login')
            }}
                style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    backgroundColor: 'red',
                    borderColor: 'blue',            
                    borderRadius: 15,
                    paddingStart:50,
                    width:'60%'

                }}><Text style={{
                    color: 'blue',
                    fontSize: 25,
                   
                }}>Dăng  Xuất</Text></TouchableOpacity>
        </View>
        <View style={{
            flex: 20, alignItems: 'center', justifyContent: 'center'
        }}>
            <Text style={{
                padding: 20
            }}>60 Ngô Sĩ  Liên, Hòa Minh, Liên Chiểu, Đà Nẵng</Text>
            <Image source={require('../img/dadk.png')} style={{ paddingStart: 30, width: 120, height: 40, }} /></View>


    </View>
}
export default Tabbar
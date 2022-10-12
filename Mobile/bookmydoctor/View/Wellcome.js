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
import Icon2 from 'react-native-vector-icons/FontAwesome'
function Wellcome(props) {


    return <View style={{ flex: 100, backgroundColor: 'white' }}>
        <View style={{
            flex: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingStart: 10,
            paddingEnd: 10
        }}>
            <Icon name='navicon' size={50} color={'black'} />
            <Image source={require('../img/logoApp.png')} style={{ width: 180, height: 30 }} />
            <TouchableOpacity style={{
                fontWeight: 'bold',
                fontSize: 20,
                borderColor: 'blue',
                borderWidth: 2,
                borderRadius: 5
            }}><Text style={{ color: 'blue' }}>Dang Nhap</Text></TouchableOpacity>
        </View>
        <View style={{
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            flex: 8,
        }}>
            <Icon name='search'
                size={25} color={'black'}
                style={{
                    position: 'absolute',
                    alignItems: 'center',
                    left: 10
                }}></Icon>
            <TextInput autoCorrect={false}
                style={{
                    backgroundColor: 'black',
                    paddingStart: 40,
                    height: 40,
                    flex: 1,
                    marginEnd: 10,
                    borderRadius: 5,
                    opacity: 0.5,
                }} />
        </View>
        <View style={{
            flex: 72,
            backgroundColor: 'red',
            paddingTop: 30
        }}>
        </View>
        <View style={{
            flex: 10,
            flexDirection: 'row'
        }}>
            <View style={{
                flexDirection: 'column',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Icon2 name='home' size={30} color={'blue'} />
                <Text>ca nhan</Text></View>
            <View style={{
                flexDirection: 'column',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Icon2 name='bell' size={30} color={'blue'} />
                <Text>thong bao</Text></View>
       
        <View style={{
                flexDirection: 'column',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Icon name='calendar' size={30} color={'blue'} />
                <Text>lich hen</Text></View>
            <View style={{
                flexDirection: 'column',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Icon2 name='comments' size={30} color={'blue'} />
                <Text>cong dong</Text></View>
            <View style={{
                flexDirection: 'column',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Icon2 name='user' size={30} color={'blue'} />
                <Text>ca nhan</Text></View>
        </View>
    </View>
}
export default Wellcome
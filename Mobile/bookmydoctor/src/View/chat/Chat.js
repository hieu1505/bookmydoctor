import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome5";
import UIHeader from "./UIHeader";
import Chatitem from "./Chatitem";
import messageApi from "../../Api/messageApi"
function Chat({ route, navigation }, props) {

    const [users, setusers] = useState([])
    useEffect(() => {
        (async () => {

            try {
                d = await AsyncStorage.getItem('user')
                k = JSON.parse(d)
                token = await AsyncStorage.getItem('access_token')
                const respone = await messageApi.getListUserChat(k.id,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                )
                console.log(respone.users)
                data = respone.users
                user=data.map((course)=>{
                    let s={}
                    s.id=course.id
                    s.name=course.firsname+" "+course.lastname
                    s.img=course.image
                    // s.firstmessage=course.message.text
                    return s
                })
                console.log(user)
                setusers(user)


            }
            catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return <View style={{
        flexDirection: 'column',
    }}>
        <UIHeader title={'Tin nhan'}
            lefIconname={'arrow-left'}
            rightIconname={'search'}
            onpresslefIcon={() => {
                navigation.goBack()
            }}
            onpressrightIcon={() => {
                alert('aaaa')
            }}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginStart: 10
        }}>
           
        </View>

        <FlatList
            data={users}
            renderItem={({ item }) => < Chatitem
                onPress={() => { navigation.navigate('Messenger', { doctor: item }) }}
                user={item} key={item.id}
            />}
        />
    </View>
}

export default Chat
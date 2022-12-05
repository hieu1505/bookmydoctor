import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity, FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UIHeader from "../chat/UIHeader";
import notificationApi from "../../Api/notificationApi";
function Notification({ route, navigation }, props) {
    const [noti, setnoti] = useState([])
    const [token, settoken] = useState('')
    const getnoti = async () => {

        try {
            d = await AsyncStorage.getItem('user')
            k = JSON.parse(d)
            tokens = await AsyncStorage.getItem('access_token')
            settoken(tokens)
            const respone = await notificationApi.getNotification(k.id,
                {
                    headers: {
                        Authorization: tokens
                    }
                }
            )
            const data = respone.message
            const s = data.map((course) => {
                let i = {}
                i.id = course.id
                i.message = course.message
                i.status = course.status
                i.user_id = course.user_id
                return i
            })
            setnoti(s)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getnoti()
    }, [])
    const changeStatus=async (id) => {

        try {
         
            const respone = await notificationApi.changeStatus(id,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            console.log(respone)
           getnoti()
        }
        catch (err) {
            console.log(err)
        }
    }
    return <View style={{
        flexDirection: 'column',
        flex: 1
    }}>
        <UIHeader title={"Thong bao"}
            lefIconname={'arrow-left'}
            rightIconname={'ellipsis-v'}
            onpresslefIcon={() => {
                navigation.goBack()
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
            data={noti}
            renderItem={({ item }) => {
                return <TouchableOpacity
                onPress={()=>{if(item.status==false)
                    {changeStatus(item.id)}
                }}
                    style={{
                        flex: 1,
                        paddingLeft: 10,
                        paddingTop: 10,
                        backgroundColor: '#FFEFD5'
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, padding: 8 }}>{item.message}</Text>
                      {item.status==false&&<Text style={{
                            backgroundColor: 'blue',
                            right:4,
                            position: 'absolute',
                            fontSize: 4,
                            paddingHorizontal: 4,
                            borderRadius: 10
                        }}></Text>}  
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: '#4B0082'
                    }}></View>
                </TouchableOpacity>
            }}
        ></FlatList>
    </View>
}
export default Notification
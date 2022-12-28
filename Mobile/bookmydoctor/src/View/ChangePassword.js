import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import userApi from "../Api/UserApi";
import { fontSizes, images } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
function ChangePassword({navigation },props) {
    const [pass , setpass]=useState('')
    const [newpass,setnewpass]=useState('')
    const [newpass22,setnewpass2]=useState('')
    const apichangepass=async (data)=>{
        try {
            d = await AsyncStorage.getItem('user')
            k = JSON.parse(d)
            token = await AsyncStorage.getItem('access_token')
            const mess=await userApi.changePassword(k.id,data,{
                headers: {
                    'Authorization': token,
                }
            })
               
        } catch (error) {
            alert(error.message)
        }
    }
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false)
        })
    })
    return <View style={{
        flex: 100,
        backgroundColor: 'white',
    }}>
        <View style={{
            height: 200,
            flexDirection: 'column',
            justifyContent: "space-around",
            alignItems: 'center',
            flex: 20
        }}><Text style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            width: "100%"
        }}>  Thay Đổi Mật Khẩu</Text>
        </View>
        <View style={{
            flex: 20
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>Mật khẩu cũ:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setpass(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />

            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>Mật khẩu mới:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setnewpass(text)

                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>Nhập lại mật khẩu  mới:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setnewpass2(text)

                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            </View>
        </View>
        {keyboardIsShow == false && <View style={{
            flex: 20,
            flexDirection:'row',
            justifyContent:'space-around'
        }}>
            <TouchableOpacity
            onPress={()=>{
                data={
                    password:pass,
                    newPassword:newpass
                }
                apichangepass(data)
                
            }}
            style={{
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                color: 'blue',
                width: '30%',
                borderRadius: 14,
                opacity: 0.5,
            }}><Text style={{padding: 10,
                fontSize: fontSizes.h6}}>Lưu thay đổi</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                navigation.goBack()
            }}
            style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                color: 'blue',
                width: '30%',
                borderRadius: 14,
                opacity: 0.5,
            }}><Text style={{padding: 10,
                fontSize: fontSizes.h6}}>Hủy bỏ</Text></TouchableOpacity>
        </View>}
    </View>
}
export default ChangePassword
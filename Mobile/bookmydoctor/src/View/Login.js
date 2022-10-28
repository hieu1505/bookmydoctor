import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import axios from "axios";
import { fontSizes, images } from "../constants";
import { isValidatePassword, ValidateEmail } from '../utilies/Validations'
// import user_login from '../src/Api/UserApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from "../Api/authApi";
function Login({navigation }, props) {
  
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    const [erroremail, seterroremail] = useState('')
    const [errorPassword, seterrorPassword] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false)
        })
    })
    const apilogin=async data=>{
        try {const user =await authApi.login(data)
            AsyncStorage.setItem('access_token',user.token)
            AsyncStorage.setItem('user',JSON.stringify(user.user) )
            // console.log(user)
            navigation.navigate('UITab')
            alert(user)
        } catch (error) {
          alert(error.message)
        }
    }
   
   
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
        }}><Image
            source={require('../img/logoApp.png')} style={{
                width: 220,
                height: 60,
                alignItems: 'center',
            }}>
            </Image>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: "50%"
            }}>  DANG NHAP</Text>
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
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterroremail(ValidateEmail(text) == true ? '' : 'Email not in correct format')
                        setemail(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
                <Text style={{ color: 'red', fontSize: fontSizes.h6 }}>{erroremail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>MAT KHAU:</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterrorPassword(isValidatePassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setpassword(text)
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
                <Text style={{ color: 'red', fontSize: fontSizes.h6 }}>{errorPassword}</Text>
                <TouchableOpacity 
                    onPress={() => { navigation.navigate('Forgotpassword') }}>
                    <Text style={{
                        fontSize: 10,
                        color: "red", alignSelf: 'center',
                    }}> Quên mật khẩu?  </Text>
                </TouchableOpacity>
            </View>
        </View>
        {keyboardIsShow == false && <View style={{
            flex: 20, marginTop: 120
        }}>
            <TouchableOpacity
                onPress={() => {
                    const data = {
                        email: email,
                        password: password
                    }
                    const data1 = {
                        email: "admin@gmail.com",
                        password: "12345678"

                    }
                    apilogin(data1)
                    // if (isValidatePassword(password) && ValidateEmail(email)) {
                    //         // apilogin(data)
                    //         // navigation.navigate('UITab')
                           
                    // }
                    // else {
                    //     // alert('nhapdung tai khoan mat khau')
                    // }
                }}
                style={{
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    color: 'blue',
                    borderRadius: 14,
                    opacity: 0.5,
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h5
                }}>Dang nhap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding: 5
            }}
                onPress={() => { navigation.navigate('Dangky') }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: "gold", alignSelf: 'center',
                }}> Tạo tài khoản mới </Text>
            </TouchableOpacity>
        </View>}
        {keyboardIsShow == false && <View style={{
            flex: 20,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 25,
                marginTop: 30
            }}>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    flex: 1,
                }}>
                </View>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: "black", alignSelf: 'center',
                }}></Text>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    flex: 1
                }}>
                </View>
            </View>
        </View>}
    </View>
}
export default Login
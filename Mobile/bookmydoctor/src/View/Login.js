import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import jwt_decode from "jwt-decode";
import { fontSizes, images } from "../constants";
import { isValidatePassword, ValidateEmail } from '../utilies/Validations'
import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from "../Api/authApi";
function Login({ navigation }, props) {
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
    const apilogin = async data => {
        try {
            const user = await authApi.login(data)
            console.log(jwt_decode(user.token))
            AsyncStorage.setItem('access_token', user.token)
            if (jwt_decode(user.token)?.role_name =='ROLE_DOCTOR') {
                let u = {}
                u.id = user.user.id
                u.firsname = user.user.firsname
                u.lastname = user.user.lastname
                u.image = user.user.image
                u.gender = user.user.gender
                u.phoneNumber = user.user.phoneNumber
                u.birthday = user.user.birthday
                u.address = user.user.address
                u.email = user.user.email
                u.iddoctor=user.user.doctor.id
                AsyncStorage.setItem('user', JSON.stringify(u))
                navigation.navigate('UITabdoctor')
            }
            else if (jwt_decode(user.token)?.role_name =='ROLE_PATIENT') {
                console.log('ROLE_PATIENT')
                AsyncStorage.setItem('user', JSON.stringify(user.user))
                navigation.navigate('UITab')
            }
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
            }}>  ????NG NH???P</Text>
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
                }}>M???T KH???U:</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterrorPassword(isValidatePassword(text) == true ? '' : 'Password must be at least 5 characters')
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
                    }}> Qu??n m???t kh???u?  </Text>
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
                        password: password,
                    }
                    // const data1 = {
                    //     // email: "thanhtoanvteder@gmail.com",
                    //     // email: "nguyentronganh53@gmail.com",
                    //     email: "thanhtoanurus@gmail.com",
                    //     password: "123456"
                    // }
                    // // console.log(data1)
                    // apilogin(data1)
                    if (isValidatePassword(password) && ValidateEmail(email)) {
                            apilogin(data)
                    }
                    else {
                        alert('nh???p ????ng t??i kho???n m???t kh???u ????ng nh???p ')
                    }
                }}
                style={{
                    backgroundColor: '#056edf',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    
                    borderRadius: 14,
                    
                }}>
                <Text style={{
                    padding: 8,
                    color: 'white',
                    fontSize: fontSizes.h5
                }}>????ng Nh???p</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding: 5
            }}
                onPress={() => { navigation.navigate('Dangky') }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: "gold", alignSelf: 'center',
                }}> T???o t??i kho???n m???i </Text>
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
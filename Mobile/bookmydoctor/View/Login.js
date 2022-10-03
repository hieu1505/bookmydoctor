import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import { fontSizes, images } from "../constants";
import{isValidatePassword,ValidateEmail} from '../utilies/Validations'
function Login(props) {
    const[keyboardIsShow,setkeyboardIsShow]=useState(false)
    const[erroremail,seterroremail]=useState('')
    const[errorPassword,seterrorPassword]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow',()=>{
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide',()=>{   
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
            flex: 35
        }}><Image
        source={images.logo} style={{
            width: 254,
            height: 66,
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
            flex: 25
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text)=>{
                       
                        seterroremail(ValidateEmail(text)==true?'':'Email not in correct format')
                        setemail(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder="so dien thoai cua ban"
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width:'100%',marginHorizontal:10,
                    alignSelf:"center",
                    marginBottom:10
                }}/>
                <Text style={{color:'red',fontSize:fontSizes.h6}}>{erroremail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }}
            >
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>MAT KHAU:</Text>
                <TextInput 
                     onChangeText={(text)=>{
                        seterrorPassword(isValidatePassword(text)==true?'':'Password must be at least 3 characters')
                        setpassword(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder="mat khau cua ban"
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width:'100%',marginHorizontal:10,
                    alignSelf:"center",
                    marginBottom:10
                }}/>
                <Text style={{color:'red',fontSize:fontSizes.h6}}>{errorPassword}</Text>
            </View>
        </View>
        {keyboardIsShow== false &&<View style={{
            flex: 20, marginTop: 30
        }}>
            <TouchableOpacity
            onPress={()=>{
                alert(password)
            }}
            style={{
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                alignSelf: 'center',
                borderRadius: 14
            }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h5
                }}>Dang nhap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding: 5
            }}
                onPress={() => { alert('dangki') }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: "gold", alignSelf: 'center',
                }}>Tao tai khoan moi, dang ky</Text>
            </TouchableOpacity>
        </View>}
        {keyboardIsShow== false &&<View style={{
            flex: 20,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems:'center',
                marginHorizontal:25,
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
                }}>ggg</Text>
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
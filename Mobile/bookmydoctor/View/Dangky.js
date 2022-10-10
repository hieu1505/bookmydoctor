import React ,{ useEffect, useState }from "react";
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

function Dangky(props){
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
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: 'center',
            flex: 20,
            marginTop:20
        }}><Text style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            width: "50%"
        }}>  DANG KY</Text>
            <Image
                source={images.dangky} style={{
                    width: 200,
                    height: 180,
                    alignItems: 'center',
                }}>
            </Image></View>
        <View style={{
            flex: 40
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
                    placeholder=""
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
                    placeholder=""
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
            <View style={{
                marginHorizontal: 15
            }}
            >
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>NHAP LAI MAT KHAU:</Text>
                <TextInput 
                     onChangeText={(text)=>{
                        seterrorPassword(isValidatePassword(text)==true?'':'Password must be at least 3 characters')
                        setpassword(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
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
        <View style={{flex:10}}></View>
        {keyboardIsShow== false &&<View style={{
            flex: 10, marginTop:35
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
                    padding: 10,
                    fontSize: fontSizes.h5
                }}>Dang ky</Text>
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
export default Dangky
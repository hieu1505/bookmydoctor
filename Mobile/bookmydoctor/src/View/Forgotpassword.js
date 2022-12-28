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
import authApi from "../Api/authApi";
function Forgotpassword(props) {
    const [email,setemail]=useState('')
    const [erroremail, seterroremail] = useState('')
    const apiResetpass=async data=>{
        try {const mess=await authApi.resetPassword(data)
            alert(mess.message)

            
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
        }}><Text style={{
            color: 'black',
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            width: "100%"
        }}>  Lấy Mật Khẩu </Text>
        </View>
        <View style={{
            flex: 20
        }}><View style={{
            marginHorizontal: 15
        }}><Text style={{
            color: "black",
            fontSize: fontSizes.h5
        }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterroremail(ValidateEmail(text)==true?'': 'Email not in correct format')
                        setemail(text)
                    }}
                    style={{ fontSize: fontSizes.h5 }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <Text style={{ color: 'red', fontSize: fontSizes.h6 }}>{erroremail}</Text>
                <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
            </View>
        </View>
        <View style={{
            flex: 20, marginTop: 60
        }}>
            <TouchableOpacity
                onPress={() => {
                    const data={
                        email:email
                    }
                    apiResetpass(data)
                    // alert('xac thuc')
                      }
                }
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
                }}>Lấy Mật Khẩu</Text>
            </TouchableOpacity>
        </View>
    </View>
}
export default Forgotpassword
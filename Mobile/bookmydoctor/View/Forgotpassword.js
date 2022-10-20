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
function Forgotpassword(props) {
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
        }}>  Quen  mat khau</Text>
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
        <View style={{
            flex: 20, marginTop: 60
        }}>
            <TouchableOpacity
                onPress={() => {
                      }
                }
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
                }}>Xac Thuc</Text>
            </TouchableOpacity>
        </View>
    </View>
}
export default Forgotpassword
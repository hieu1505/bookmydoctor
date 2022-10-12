import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,

} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { fontSizes, images } from "../constants";
import { isValidatePassword, ValidateEmail } from '../utilies/Validations'
import DatePicker from 'react-native-date-picker'



function Dangky(props) {
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    const [erroremail, seterroremail] = useState('')
    const [errorPassword, seterrorPassword] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [gender, setgender] = useState([{
        id: '1',
        label: 'Nam',
        value: 'Nam',
        onPress:()=>console.log('nam')
    
    }, {
        id: '2',
        label: 'Nữ',
        value: 'Nữ',
        onPress:()=>console.log('nu')
    }
    ])
    function onPressRadioButton(radioArray) {
        setgender(radioArray);
    }
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
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: 'center',
            flex: 10,
            marginTop: 10
        }}><Text style={{
            color: 'blue',
            fontSize: fontSizes.h1,
            fontWeight: 'bold',
            width: "50%"
        }}>  Đăng ký </Text>
            <Image
                source={require('../img/logoApp.png')} style={{
                    width: 180,
                    height: 30,
                    alignItems: 'center',
                }}>
            </Image></View>
        <View style={{
            flex: 55
        }}>
            <View style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: 'space-between'

            }}>
                <View style={{
                    flexDirection: 'column',

                }}><Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Họ</Text>
                    <TextInput
                        style={{
                            fontSize: fontSizes.h6,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    ></TextInput>
                    <Text></Text>
                </View>
                <View style={{

                    flexDirection: "row",

                }}>
                    <View style={{
                        flexDirection: 'column',

                    }}><Text style={{
                        color: "black",
                        fontSize: fontSizes.h6
                    }}>Tên</Text>
                        <TextInput
                            style={{
                                fontSize: fontSizes.h6,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 3,
                                padding: 5,
                                width: 170
                            }}
                            placeholder=""
                            placeholderTextColor={'rgba(0,0,0,0.6'}
                        ></TextInput>
                        <Text></Text>
                    </View>
                </View>
            </View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Email</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterroremail(ValidateEmail(text) == true ? '' : 'Email not in correct format')
                        setemail(text)
                    }}
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <Text style={{ color: 'red', fontSize: fontSizes.h6 }}>{erroremail}</Text>
            </View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Số điện thoại</Text>
                <TextInput
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <Text></Text>
            </View>
            <View style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
            <View style={{
                marginHorizontal: 10,
                flexDirection: 'column'
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Giới tính</Text>
                <RadioGroup radioButtons={gender} onPress={onPressRadioButton} containerStyle={{justifyContent:'flex-start',
                flexDirection:'row'}}
                />
                <View style={{

                }}></View>
            </View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Ngày sinh </Text>
                <TouchableOpacity
                onPress={() => setOpen(true)}
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5,
                        height:40,width: 170
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ><Text>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text></TouchableOpacity>
                <Text></Text>
                <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
            </View></View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Mật khẩu</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterrorPassword(isValidatePassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setpassword(text)
                    }}
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3, padding: 5
                    }}
                    placeholder=""
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
                <Text style={{ color: 'red', fontSize: fontSizes.h6 }}>{errorPassword}</Text>
            </View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h6
                }}>Nhập lại mật khẩu</Text>
                <TextInput
                    onChangeText={(text) => {
                        seterrorPassword(isValidatePassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setpassword(text)
                    }}
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5
                    }}
                    placeholder=""
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
            </View>
        </View>
        <View style={{ flex: 5 }}></View>
        {keyboardIsShow == false && <View style={{
            flex: 10, marginTop: 35
        }}>
            <TouchableOpacity
                onPress={() => {
                    alert(password)
                }}
                style={{
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    color:'blue',
                    borderRadius: 14,
                    opacity:0.5
                }}>
                <Text style={{
                    padding: 10,
                    fontSize: fontSizes.h5
                }}>Đăng ký</Text>
            </TouchableOpacity>
        </View>}
        {keyboardIsShow == false && <View style={{
            flex: 10,
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
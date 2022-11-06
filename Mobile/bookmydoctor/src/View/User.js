import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import userApi from "../Api/UserApi";
import RadioGroup from 'react-native-radio-buttons-group';
import { fontSizes, images } from "../constants";
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
function User({ route, navigation }, props) {
    const [user, setuser] = useState([])
    const [token,settoken]=useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] =  useState('')
    const [phones, setphone] =  useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [adress, setadress] =  useState('')
    const [g, setg] = useState('')
    useEffect(() => {
        async function usersd() {
            await getuser();
        }
        usersd()
        console.log('use effect api')
        return () => { }
    }, [])
    const getuser = async () => {
        try {
            d = await AsyncStorage.getItem('user')
            accesstoken=await AsyncStorage.getItem('access_token')
            if(accesstoken==null){
                navigation.navigate('Login')
            }
            settoken(accesstoken)
            k = JSON.parse(d)
            setuser(k)
        } catch (e) {
            console.log(e)
        }
    }
    const APIupdateuser = async (id, data, datas,token) => {
        try {
            const mess = await userApi.updateInfoUser(id, data,token)
            AsyncStorage.setItem('user', JSON.stringify(datas))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        setfirstname(user.firsname)
        setlastname(user.lastname)
        // setDate(new Date(String(user.birthday) ))
        setphone(user.phoneNumber)
        setadress(user.address)
        // console.log()
        console.log(user)
    },[user])

    
    // setDate(user.birthday)
    const [gender, setgender] = useState([{
        id: '1',
        label: 'Nam',
        value: 'Nam',
        onPress: () => setg('1')

    }, {
        id: '2',
        label: 'Nữ',
        value: 'Nữ',
        onPress: () => setg('2')
    }
    ])
    function onPressRadioButton(radioArray) {
        setgender(radioArray);
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
        backgroundColor: 'white'
    }}>
        <View style={{
            flex: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}><Image
            source={{ uri: user.image }} style={{
                width: 120,
                height: 120,
                alignItems: 'center', borderRadius: 50
            }}>
            </Image>
            <Text style={{
                fontSize: 20
            }}> {firstname+" "+ lastname}</Text>
         
        </View>
        <View style={{
            flex: 50,
            paddingTop: 70,

        }}>
            <View style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <View style={{
                }}>
                    <TextInput
                        onChangeText={setfirstname}
                        value={firstname}
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

                </View>
                <View style={{
                    flexDirection: "row",

                }}>
                    <View style={{

                    }}>
                        <TextInput
                            onChangeText={(text) => { setlastname(text) }}
                            value={lastname}
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

                    </View>
                </View>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>
                <TextInput
                    onChangeText={(text) => { setphone(text) }}
                    value={phones}
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
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>
                <TextInput
                    onChangeText={(text) => { setadress(text) }}
                    value={adress}
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
            </View>
            <View style={{
                paddingTop: 20,
                marginHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center', paddingEnd: 25
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h5
                }}>Giới tính</Text>
                <RadioGroup radioButtons={gender} onPress={onPressRadioButton} containerStyle={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}
                />
                <View style={{

                }}></View>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>

                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5,
                        height: 40
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                // 
                ><Text>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text></TouchableOpacity>
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
            </View>
        </View>
        {keyboardIsShow == false && <View style={{
            flex: 20,
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <TouchableOpacity
                onPress={() => {
                    data = {
                        email: k.email,
                        phoneNumber: phones,
                        firsname: firstname,
                        lastname: lastname,
                        gender: g,
                        birthday: date,
                        address: adress
                    }
                    k.phoneNumber = phones
                    k.firsname = firstname
                    k.lastname = lastname
                    k.gender = gender
                    k.birthday = date
                    k.address = adress
                    
                    APIupdateuser(k.id, data, k,token)
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
                }}><Text style={{
                    padding: 10,
                    fontSize: fontSizes.h6
                }}>Luu thay doi</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('ChangePassword') }}
                style={{
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    color: 'blue',
                    width: '40%',
                    borderRadius: 14,
                    opacity: 0.5,
                }}><Text style={{
                    padding: 10,
                    fontSize: fontSizes.h6
                }}>thay doi mat khau</Text></TouchableOpacity>
        </View>}

    </View>

}
export default User
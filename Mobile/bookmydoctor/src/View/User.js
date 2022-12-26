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
import { fontSizes, images } from "../constants";
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';
import strftime from "strftime";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false
    }
}

function User({ route, navigation }, props) {
    const [img, setimg] = useState()
    const opengallery = async () => {
        const result = await launchImageLibrary(options)
        console.log(result);
        setimg(result.assets[0])
        setimguri(result.assets[0].uri)
    }
    const [user, setuser] = useState([])
    const [token, settoken] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [phones, setphone] = useState('')
    const [open, setOpen] = useState(false)
    const [adress, setadress] = useState('')
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
            accesstoken = await AsyncStorage.getItem('access_token')
            if (accesstoken == null) {
                navigation.navigate('Login')
            }
            settoken(accesstoken)
            k = JSON.parse(d)
            setimguri(k.image)
            setuser(k)
        } catch (e) {
            console.log(e)
        }
    }
    const APIupdateuser = async (id, data, datas, token) => {
        try {
            AsyncStorage.setItem('user', JSON.stringify(datas))
            const mess = await userApi.updateInfoUser(id, data, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'form-data'
                }
            })
            console.log(datas)
            
        } catch (error) {
            console.log("sadas"+error)
        }
    }
    const [imguri, setimguri] = useState('')
    useEffect(() => {
        setfirstname(user.firsname)
        setlastname(user.lastname)
        setg(user.gender)
        setphone(user.phoneNumber)
        setadress(user.address)
        console.log(user)
    }, [user])
    if (g !== undefined)
        gender = g.toString();
    const [checked, setChecked] = useState(gender)
    let [date, setDate] = useState(new Date());
    var [confirm, setConfirm] = useState(false)
    const handleConfirm = (date) => {
        setConfirm(true)
        setOpen(false)
        setDate(date)
        console.log(date);
        return date;
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
            flexDirection: 'column',
            backgroundColor: '#87CEEB',
            borderRadius: 15
        }}><TouchableOpacity onPress={() => {
            opengallery()

        }}>
                <Image
                    source={{ uri: (imguri)?imguri:user.image }} style={{
                        width: 120,
                        height: 120,
                        alignItems: 'center', borderRadius: 50
                    }}>
                </Image>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20
            }}> {firstname + " " + lastname}</Text>

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
                <RadioButton
                    value={"1"}
                    status={gender === "1" ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked("1");
                        setg("1");
                        console.log("1");
                    }}
                /><Text>Nam</Text>
                <RadioButton
                    value={"2"}
                    status={gender === "2" ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked("2");
                        setg("2");
                        console.log("2");
                    }}
                /><Text>Nữ</Text>
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
                ><Text>{`  ${confirm == false ? strftime('%d-%m-%Y', new Date(user.birthday)) : strftime('%d-%m-%Y', date)}`}</Text></TouchableOpacity>
                <Text></Text>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode='date'
                    onConfirm={handleConfirm}
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
                    let data = new FormData()
                    data.append('image',(img)? {
                        uri: img.uri,
                        type: img.type,
                        name: img.fileName
                    }:k.imager)
                    data.append('email', k.email)
                    data.append('firsname', firstname)
                    data.append('phoneNumber', phones)
                    data.append('lastname', lastname)
                    data.append('gender', g)
                    data.append('address', adress)
                    data.append('birthday', date)


                    console.log(imguri)
                    k.phoneNumber = phones
                    k.firsname = firstname
                    k.lastname = lastname
                    k.image=(imguri)?imguri:user.image
                    k.gender = g
                    k.birthday = date
                    k.address = adress

                    APIupdateuser(k.id, data, k, token)
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
                }}>Lưu thay đổi</Text></TouchableOpacity>
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
                }}>Thay đổi mật khẩu</Text></TouchableOpacity>
        </View>}

    </View>

}
export default User
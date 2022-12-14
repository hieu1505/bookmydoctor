import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, FlatList
} from 'react-native'
import strftime from "strftime";
import { RadioButton } from 'react-native-paper';
import { fontSizes, } from "../constants";
import scheduleApi from "../Api/scheduleApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import appointmentApi from "../Api/appointmentApi";
function BookAppointment({ route, navigation }, props) {
    const { id } = route.params
    console.log(id)
    const [doctor, setdoctor] = useState([])
    const [user, setuser] = useState([])
    const [token, settoken] = useState('')
    const [g,setg]=useState('')
    useEffect(() => {
        (async () => {
            try {
                d = await AsyncStorage.getItem('user')
                k = JSON.parse(d)
                data = await scheduleApi.getScheduleById(id)
                accesstoken=await AsyncStorage.getItem('access_token')
                settoken(accesstoken)
                console.log(data.message)
                p = data.message
                let doctoritem = {}
                doctoritem.Date = strftime('%d-%m-%YT%H:%M', new Date(p.begin)).split('T')[0]
                doctoritem.cost = p.cost
                doctoritem.name = p.doctor.user.firsname + ' ' + p.doctor.user.lastname
                doctoritem.img = p.doctor.user.image
                doctoritem.h = strftime('%d-%m-%YT%H:%M', new Date(p.begin)).split('T')[1] + "-" + strftime('%d-%m-%YT%H:%M', new Date(p.end)).split('T')[1]
                console.log(doctoritem)
                setdoctor(doctoritem)
                setuser(k)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    useEffect(() => { setg(user.gender)}, [user])
    // console.log(user)
    if (g !== undefined)
        gender = g.toString();
    const [checked, setChecked] = useState(gender)
    
    const [symptom,setsymptom]=useState('')
    const handleSubmit = value => {
        const valueSubmit = {
            schedule_id: id,
            symptom: value
        }
        ;(async () => {
            try {
               d= await appointmentApi.createAppointment(
                    valueSubmit,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                )
                console.log(d)
                navigation.navigate('UITab')
            } catch (err) {
                console.log(err.message) 
            }
        })()
    }
    return <ScrollView style={{
        flex: 100,
        backgroundColor: 'white'
    }}><View style={{
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#9ec723',
        borderRadius: 20,

    }}><Image
        source={{ uri: doctor.img }} style={{
            width: 120,
            height: 120,
            alignItems: 'center', borderRadius: 50,
            margin: 5
        }}>
            </Image>
            <View style={{
                flexDirection: 'column'
            }}>
                <Text style={{
                    fontSize: 20
                }}>?????t l???ch kh??m </Text>
                <Text style={{ fontSize: 15 }}>B??c s???:{doctor.name}</Text>
                <Text>{doctor.h} - {doctor.Date}</Text>
                <Text style={{
                    fontSize: 15
                }}> Gi?? :1000 d</Text>


            </View>
        </View>
        <View style={{
            flex: 60, paddingTop: 50,
        }}>
            <Text style={{
                fontSize: 20, justifyContent: 'center',
                alignItems: 'center', padding: 5
            }}>TH??NG TIN C?? NH??N </Text>
            <View style={{
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <View style={{
                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.firsname}</Text>

                </View>
                <View style={{
                    flexDirection: "row",

                }}>
                    <View style={{

                    }}>
                        <Text
                            style={{
                                fontSize: 16,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 3,
                                padding: 5,
                                width: 170
                            }}
                            placeholder=""
                            placeholderTextColor={'rgba(0,0,0,0.6'}
                        >{user.lastname}</Text>

                    </View>
                </View>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>
                <Text
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                >{user.phoneNumber}</Text>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>
                <Text
                    style={{
                        fontSize: fontSizes.h6,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                >{user.address}</Text>
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
                }}>Gi???i t??nh</Text>
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
                /><Text>N???</Text>
                <View style={{

                }}></View>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}><Text
                style={{
                    fontSize: fontSizes.h6,
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 3,
                    padding: 5
                }}
                placeholder=""
                placeholderTextColor={'rgba(0,0,0,0.6'}
            >{strftime('%d-%m-%Y', new Date(user.birthday))}</Text>
            </View>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>
                <Text style={{ fontSize: 15 }}>L?? do kh??m:</Text>

                <TextInput
                    onChangeText={(text)=>{setsymptom(text)}}
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
        </View>
        <View style={{
            paddingTop:30,
            flex: 20,
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}><TouchableOpacity
        onPress={() => { navigation.goBack()}}
        style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            color: 'blue',
            width: '40%',
            borderRadius: 14,
           
        }}><Text style={{
            padding: 10,
            fontSize: fontSizes.h6
        }}>H???y ?????t l???ch</Text></TouchableOpacity>
         <TouchableOpacity
                onPress={() => {
                    if(symptom!=null){handleSubmit(symptom)}
                    else alert('ly do kham cua ban la gi')
                    
                }}
                style={{
                    backgroundColor: '#28a745',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    color: 'black',
                    width: '30%',
                    borderRadius: 16,
                    
                }}><Text style={{
                    padding: 10,
                    fontSize: fontSizes.h6
                }}>?????t l???ch </Text></TouchableOpacity>
        </View>
    </ScrollView>
}
export default BookAppointment
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
import { fontSizes, } from "../constants";
import doctorApi from "../Api/doctorapi";
import SelectDropdown from 'react-native-select-dropdown'
import scheduleApi from "../Api/scheduleApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
function Doctorbyid({ route, navigation }, props) {
    const { id } = route.params
    console.log(id)
    const [doctor, setdoctor] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const data = await doctorApi.getDetailDoctor(id)
                let d = {}
                d.description = data.message.description
                d.specialty = data.message.specialty.name
                d.img = data.message.user.image
                d.name = data.message.user.firsname + data.message.user.lastname
                d.clinic = data.message.clinic.name
                d.address = data.message.clinic.street + ',' + data.message.clinic.city
                // console.log(d)
                setdoctor(d)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    const [schedules, setschedules] = useState([])
    const t = new Date()
    const t2 = new Date()
    const t3 = new Date()
    t.setDate(t.getDate() + 1)
    t2.setDate(t2.getDate() + 2)
    t3.setDate(t3.getDate() + 3)
   
    const[day,setday]=useState(new Date())
    console.log(t)
    const countries = [strftime('%Y-%m-%d', t), , strftime('%Y-%m-%d', t2), strftime('%Y-%m-%d', t3)]
    // const getappointment = async (date) => {
    //     const valueSubmit = {
    //         startDate: new Date(strftime('%Y-%m-%dT00:00:00', date)).toISOString(),
    //         endDate: new Date(strftime('%Y-%m-%dT23:59:00', date)).toISOString(),
    //         size: 100,
    //         page: 0
    //     }
    //     try {
    //         const respone = await scheduleApi.getSchedule(
    //             2,
    //             {
    //                 params: { ...valueSubmit }
    //             }
    //         )
    //         console.log(respone.schedules)
    //         // setschedules(respone.schedules)
    //     } catch (err) {
    //         console.log(err)
    //     }

    // }
    // getappointment(t)
    // console.log(doctor)
    useEffect(() => {
        // let date = new Date(day)
        const valueSubmit = {
            startDate: new Date(strftime('%Y-%m-%dT00:00:00', day)).toISOString(),
            endDate: new Date(strftime('%Y-%m-%dT23:59:00', day)).toISOString(),
            size: 100,
            page: 0
        }
        console.log(valueSubmit)
        ;(async () => {
            try {
                const respone = await scheduleApi.getSchedule(
                    id,
                    {
                        params: { ...valueSubmit }
                    }
                )
                
                s=respone.schedules
                k=s.map((course)=>{
                    if(course.status==false){
                    let st={}
                    st.begin=course.begin
                    st.end=course.end
                    st.id=course.id
                    st.cost=course.cost
                    st.status=course.status
                    return st}
                })
                setschedules(k)
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()
    }, [day])
    console.log(schedules)
    return <ScrollView style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View style={{
            backgroundColor: '#ffffcc',
            justifyContent: "center",
            alignItems: 'center',
            flex: 15,
            paddingTop: 10,

            flexDirection: "column"
        }}><Image
            source={{ uri: doctor.img }} style={{
                width: 100,
                height: 100,
                alignItems: 'center', borderRadius: 50
            }}>
            </Image>
            <View style={{
                padding: 8,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 20 }}>{doctor.name}</Text>
                <Text style={{

                    fontSize: 15
                }}> {doctor.description}

                </Text>
                <Text style={{
                    paddingEnd: 10,
                    fontSize: 15
                }}>Khoa:{doctor.specialty}</Text>
            </View>
        </View>

        <View style={{
            flex: 5,
        }}>
            <View style={{
                flexDirection: 'row',
                paddingStart: 10
            }}><Text style={{ fontSize: 20 }}>Chon ngay :</Text>
                < SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem)
                        setday(new Date(selectedItem))
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                /></View>
        </View>
        <View style={{
            flex: 65,padding:5
        }}> 
            <Text style={{
                paddingVertical:10
            }}> Ngày {strftime('%d-%m-%Y', day)} có Khung giờ khám:</Text>
            <FlatList horizontal
            style={{
                padding:5
            }}
            data={schedules}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
                return <TouchableOpacity 
                onPress={()=>{
                    
                }}
                style={{
                  justifyContent:'center',
                  marginEnd:10,
                  alignItems:'center',
                    width:120,height:60,
                    backgroundColor:'#8fbc8f',
                    
                    borderRadius:10
                }}>
                    {/* <Text style={{fontSize:fontSizes.h6}}>{item.h}</Text> */}
                    <Text style={{fontSize:fontSizes.h6}}>Giá:{item.cost} đ</Text>
                </TouchableOpacity>
            }}>

            </FlatList>

            
        </View>
        <View style={{
            flex: 10,
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <Text>Dia chi :{doctor.clinic}</Text>
            <Text>{doctor.address}</Text>
        </View>
    </ScrollView>

}
export default Doctorbyid
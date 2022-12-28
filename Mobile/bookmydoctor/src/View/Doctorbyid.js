import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView, FlatList, SafeAreaView
} from 'react-native'
import strftime from "strftime";
import { fontSizes, } from "../constants";
import doctorApi from "../Api/doctorapi";
import SelectDropdown from 'react-native-select-dropdown'
import scheduleApi from "../Api/scheduleApi";
import Icon from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker'
function Doctorbyid({ route, navigation }, props) {
    const { id } = route.params
    const [doctor, setdoctor] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const data = await doctorApi.getDetailDoctor(id)
                console.log(data)
                let d = {}
                d.numberOfReviews=data.message.numberOfReviews
                d.rate=data.message.rate
                d.id = data.message.user_id
                d.description = data.message.description
                d.specialty = data.message.specialty.name
                d.img = data.message.user.image
                d.name = data.message.user.firsname + data.message.user.lastname
                d.clinic = data.message.clinic.name
                d.address = data.message.clinic.street + ',' + data.message.clinic.city
                setdoctor(d)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    const [schedules, setschedules] = useState([])
    let tomorrow =  new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [open, setOpen] = useState(false)
    const [day, setday] = useState(tomorrow)
   
    useEffect(() => {
        // let date = new Date(day)
        const valueSubmit = {
            startDate: new Date(strftime('%Y-%m-%dT00:00:00', day)).toISOString(),
            endDate: new Date(strftime('%Y-%m-%dT23:59:00', day)).toISOString(),
            size: 100,
            page: 0
        }
        console.log(valueSubmit)
            ; (async () => {
                try {
                    const respone = await scheduleApi.getSchedule(
                        id,
                        {
                            params: { ...valueSubmit }
                        }
                    )
                    s = respone.schedules
                    k = s.map((course) => {
                        if (course.status == false) {
                            let st = {}
                            st.begin = course.begin
                            st.end = course.end
                            st.id = course.id
                            st.cost = course.cost
                            st.status = course.status
                            st.h = strftime('%d-%m-%YT%H:%M', new Date(course.begin)).split('T')[1] + '-' + strftime('%d-%m-%YT%H:%M', new Date(course.end)).split('T')[1]
                            return st
                        }
                        else return null
                    })

                    setschedules(k)
                } catch (err) {
                    console.log(err)
                }
            })()
    }, [day])
 
    return <ScrollView
        style={{
            flex: 100,
            backgroundColor: 'white'
        }}>
             <View style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingEnd: 40,
            backgroundColor: 'white', borderRadius:10,height:80,
        }}>
            <TouchableOpacity style={{
                paddingLeft:10
            }} onPress={()=>{
            navigation.goBack()
        }}><Icon name='arrow-back' size={40} color={'black'} /></TouchableOpacity>
           <Image source={require('../img/logoApp.png')} style={{ width: 180, height: 30 }} />
        </View>
        <View style={{
            backgroundColor: 'white',
            flex: 40,
            paddingTop: 10,
            borderRadius: 10,
            flexDirection: "row",
        }}><Image
            source={{ uri: doctor.img }} style={{
                width: 100,
                height: 100,
                alignItems: 'center', borderRadius: 50
            }}>
            </Image>
            <View style={{
                paddingStart: 10,
                paddingEnd: 110,
                alignItems: 'baseline',
                flexDirection: 'column'
            }}>
                <Text style={{ fontSize: 22 ,color:'#056edf' }}>{doctor.name}</Text>
                <Text style={{
                    fontSize: 15
                }}> {doctor.description}
                </Text>
                <Text style={{
                    fontSize: 19
                }}>Khoa:{doctor.specialty}</Text>

            </View>

        </View>
        <View style={{
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
        <View style={{
            flex: 5,
        }}>
            <View style={{
                flexDirection: 'row',
                paddingStart: 10,
                backgroundColor: 'white',
                paddingTop:15
            }}><Icon name="calendar" size={25} color={'blue'} style={{
                paddingStart: 10, paddingEnd:5

            }} />
                <Text style={{ fontSize: 17 ,paddingEnd:5}}>Lịch khám:</Text>
               
                <TouchableOpacity
                        onPress={() => setOpen(true)}
                        style={{
                            fontSize: fontSizes.h6,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5,
                            height: 35, width: 170
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    ><Text>{day.getDate()}/{day.getMonth() + 1}/{day.getFullYear()}</Text></TouchableOpacity>
                    <Text></Text>
                    <DatePicker
                        modal
                        open={open}
                        date={day}
                        minimumDate={tomorrow}
                        mode='date'
                        onConfirm={(day) => {
                            setOpen(false)
                            setday(day)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
        </View>
        <View style={{
            flex: 20, padding: 5,
            borderRadius: 15,
            backgroundColor: 'white'
        }}>
            <Text style={{
                paddingVertical: 10
            }}> Ngày {strftime('%d-%m-%Y', day)} có Khung giờ khám:</Text>
            <FlatList
                horizontal
                data={schedules}
                renderItem={({ item }) => {
                    return item != null ? <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('BookAppointment', { id: item.id })
                        }}
                        style={{
                            justifyContent: 'center',
                            margin: 3,
                            alignItems: 'center',
                            width: 100, height: 50,
                            backgroundColor: '#EEEEEE',
                            borderRadius: 10
                        }}>
                        <Text style={{ fontSize: fontSizes.h6 }}>{item.h}</Text>
                        <Text style={{ fontSize: fontSizes.h6 }}>Giá: {item.cost} đ</Text>
                    </TouchableOpacity> : ''
                }}>

            </FlatList>


        </View>
        <View style={{
            flex: 25,
            justifyContent: "center",

        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 18 }}>Hỏi bác sỹ :</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Messenger', { doctor: doctor }) }}>
                    <Icon name="chatbubble-ellipses" size={30} color={'blue'} style={{
                        paddingLeft: 19, padding: 6

                    }} /></TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'baseline'
            }}>
                <Text>Địa chỉ: {doctor.address}</Text>
                <View style={{
            
                    height: 1, backgroundColor: 'black',
                    width: '100%', marginHorizontal: 10,
                    alignSelf: "center",
                    marginBottom: 10
                }} />
                <Text>{doctor.clinic}</Text>
            </View>
            <View style={{ alignItems:'center',paddingTop:30}}>
                    <Text style={{fontSize:14 ,color:'#056edf'}}>{doctor.rate} trên 5</Text>
                    <Text>{doctor.numberOfReviews} đánh giá</Text>
                <View style={{flexDirection:'row',alignSelf:'center',}}>
                    <FiveStars numberofstart={doctor.rate} />
                </View>
                </View>
        </View>
    </ScrollView>

}
function FiveStars(props){
    const {numberofstart}=props
    // item<=numberofstart-1
    return  [0,1,2,3,4].map((item,index)=><Icon key={index} name="star" style={{marginEnd:5}} size={25} color={
        item<=numberofstart-1?
        'orange':'#B0C4DE'}/>)
}
export default Doctorbyid
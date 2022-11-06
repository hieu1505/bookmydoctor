import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';
import appointmentApi from "../Api/appointmentApi";
import { fontSizes, images } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'
import Appointmentitem from "./Appointmentitem";
function Appointmentbyuser(props) {
    const [appointment, setappointment] = useState([])
    useEffect(() => {
        (async () => {
            try {
                d = await AsyncStorage.getItem('user')
                k = JSON.parse(d)
                id = k.id
                console.log(id)
                token = await AsyncStorage.getItem('access_token')
                console.log(token)
                const data = await appointmentApi.getAllAppointmentOfUser(id, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: token
                    }
                })
                appointments=data.appointment
                // console.log(appointments)
                a=appointments.map((course)=>{
                    let s={}
                    s.id=course.id
                    s.begin=course.schedule.begin
                    s.end=course.schedule.end
                    s.namedoctor=course.schedule.doctor.user.firsname+course.schedule.doctor.user.lastname
                    s.cost=course.schedule.cost
                    s.status=course.status.name
                    return s
                })
              setappointment(a)
                

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])


    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        
        <View style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingEnd: 40,
            backgroundColor: '#00FFFF'
        }}>
            <Text style={{
                fontSize: 20,
                color: 'blue', paddingTop: 10
            }}>Danh sách các cuộc hẹn </Text>
        </View>
        
        <View style={{
            flex: 90
        }}>
            <FlatList
                data={appointment}
                renderItem={({ item }) => <Appointmentitem
                    onPress={() => { }}
                    appointment={item} key={item.id}
                />} />

        </View>
    </View>


}
export default Appointmentbyuser
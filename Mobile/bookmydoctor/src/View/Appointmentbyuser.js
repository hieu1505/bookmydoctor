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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointmentitem from "./Appointmentitem";
function Appointmentbyuser({navigation},props) {
    const [appointment, setappointment] = useState([])
    const [token,settoken]=useState('')
const getAllAppointment=async () => {
    try {
        d = await AsyncStorage.getItem('user')
        k = JSON.parse(d)
        id = k.id
        console.log(id)
        tokens = await AsyncStorage.getItem('access_token')
      settoken(tokens)
        const data = await appointmentApi.getAllAppointmentOfUser(id, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: tokens
            }
        })
        appointments=data.appointment
        // console.log(appointments)
        a=appointments.map((course)=>{
            let s={}
            s.id=course.id
            s.rating=course.rating
            s.begin=course.schedule.begin
            s.end=course.schedule.end
            s.name=' Bác sĩ : '+course.schedule.doctor.user.firsname+course.schedule.doctor.user.lastname
            s.cost=course.schedule.cost
            s.status=course.status.name
            return s
        })
      setappointment(a)
    } catch (err) {
        console.log(err)
    }
}
    useEffect(() => {
        getAllAppointment()
    }, [])
    const cancelappoitnment= async id=>{
        try {
            d=appointmentApi.cancelAppointment(id,{headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token
            }})
            getAllAppointment()
        } catch (error) {
            
        }
    }


    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        
        <View style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingEnd: 40,
            backgroundColor: '#00FFFF', borderRadius:10
        }}>
            <Text style={{
                fontSize: 20,
                color: 'blue', paddingTop: 10,
               
            }}>Danh sách các cuộc hẹn </Text>
        </View>
        
        <View style={{
            flex: 90
        }}>
            <FlatList
                data={appointment}
                renderItem={({ item }) => <Appointmentitem
                    onPress={() => { cancelappoitnment(item.id) }}
                    onPress2={() => { navigation.navigate('FiveStars',{id:item.id})}}
                    appointment={item} key={item.id}
                />} />

        </View>
    </View>


}
export default Appointmentbyuser
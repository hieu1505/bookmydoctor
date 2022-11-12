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
import Appointmentitemnydoctor from "./Appointmentitembydoctor";
function Appointmentbydoctor({navigation},props){
    const [appointment, setappointment] = useState([])
    const [token,settoken]=useState('')
    const getAllAppointment=async () => {
        try {
            d = await AsyncStorage.getItem('user')
            k = JSON.parse(d)
            id = k.id
         
            tokens = await AsyncStorage.getItem('access_token')
            console.log(tokens)
            settoken(tokens)
            const data = await appointmentApi.getAllAppointmentOfUser(id, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: tokens
                }
            })
            appointments=data.appointment
            a=appointments.map((course)=>{
                let s={}
                s.id=course.id
                s.begin=course.schedule.begin
                s.end=course.schedule.end
                s.name=' Bệnh nhân : '+course.patient.user.firsname+course.patient.user.lastname
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
    const confirmAppointment= async id=>{
        try {
            d=appointmentApi.confirmAppointment(id,{headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token
            }})
            getAllAppointment()
        } catch (error) {
            
        }
    }
    const reportAppointment= async id=>{
        try {
            d=appointmentApi.reportAppointment(id,{headers: {
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
        fontSize: 18,
        color: 'blue', paddingTop: 10,
       
    }}>Danh sách các cuộc hẹn </Text>
    <TouchableOpacity onPress={()=>{
            
            AsyncStorage.removeItem('access_token')
            navigation.navigate('Login')
        }}><Text style={{
        fontSize: 18,
        color: 'red', paddingTop: 10,
       
    }}>Đăng xuất</Text></TouchableOpacity>
    
</View>

<View style={{
    flex: 90
}}>
    <FlatList
        data={appointment}
        renderItem={({ item }) => <Appointmentitemnydoctor
            onPress={() => { confirmAppointment(item.id) }}
            onPress2={( )=> { reportAppointment(item.id) }}
            onPress3={( )=> { navigation.navigate('Appointmentinfor',{id:item.id})}}
            appointment={item} key={item.id}
        />} />

</View>
</View>
}
export default Appointmentbydoctor
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList,ActivityIndicator
} from 'react-native';
import appointmentApi from "../Api/appointmentApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointmentitemnydoctor from "./Appointmentitembydoctor";

function Appointmentbydoctor({navigation},props){
    const [appointment, setappointment] = useState([])
    const [token,settoken]=useState('')
    const [page,setpage] = useState(0)
    const [islLoading,setislLoading] = useState(false)
    const [totalpage,settotalpage]=useState('')
    const getAllAppointment=async (page) => {
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
                },
                params: { page:page }
            })
            appointments=data.appointment
           settotalpage(data?.page?.totalPages)
         
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
            if(page==0){
                setappointment(a)
            }
            else{
                console.log('trang tiepr')
                setappointment(appointment.concat(...a))
                
            }
            console.log(appointment)
          
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllAppointment(page)
    }, [page])
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
            AsyncStorage.removeItem('user')
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
        />}
        ListFooterComponent={()=>{
            islLoading?<View style={{
            marginTop:10,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            justifyContent:'space-around',
            padding:10  ,
           
        }}> <ActivityIndicator size='large' color="#0000ff"/></View>:null
        }} 
        onEndReached={()=>{
            setislLoading(true)
            console.log(totalpage)
            if(page<=totalpage){
                console.log('load')
                setpage(page+1) 
            }

            setTimeout(()=>{
                setislLoading(false)
            },10000)
            console.log(islLoading)
        }}
        onEndReachedThreshold={0.1}
        />

</View>
</View>
}
export default Appointmentbydoctor
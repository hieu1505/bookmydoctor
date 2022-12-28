import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,ActivityIndicator
} from 'react-native';
import appointmentApi from "../Api/appointmentApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointmentitem from "./Appointmentitem";
function Appointmentbyuser({ navigation }, props) {
    const [appointment, setappointment] = useState([])
    const [page, setpage] = useState(0)
    const [totalpage, settotalpage] = useState('')
    const [islLoading, setislLoading] = useState(false)
    const [token, settoken] = useState('')
    const getAllAppointment = async (page) => {
        try {
            d = await AsyncStorage.getItem('user')
            k = JSON.parse(d)
            id = k.id
            tokens = await AsyncStorage.getItem('access_token')
            settoken(tokens)
            const data = await appointmentApi.getAllAppointmentOfUser(id, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: tokens
                },
                params: { page: page }
            })
            appointments = data.appointment
            settotalpage(data.page.totalPages)
            a = appointments.map((course) => {
                let s = {}
                s.id = course.id
                s.rating = course.rating
                s.begin = course.schedule.begin
                s.end = course.schedule.end
                s.name = ' Bác sĩ : ' + course.schedule.doctor.user.firsname + course.schedule.doctor.user.lastname
                s.cost = course.schedule.cost
                s.status = course.status.name
                return s
            })
            if(page==0){
            setappointment(a)}
            else{
                console.log('trang tiepr')
                setappointment(appointment.concat(...a))
                
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllAppointment(page)
    }, [page])
    const cancelappoitnment = async id => {
        try {
            d = appointmentApi.cancelAppointment(id, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: token
                }
            })
            getAllAppointment(0)
        } catch (error) {
            console.log(error)
        }
    }


    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingEnd: 40,
            backgroundColor: 'blue'
        }}>
            <Text style={{
                fontSize: 20,
                color: 'white', paddingTop: 10,
            }}>Danh sách các cuộc hẹn </Text>
        </View>

        <View style={{
            flex: 90
        }}>
            <FlatList
                data={appointment}
                renderItem={({ item }) => <Appointmentitem
                    onPress={() => { cancelappoitnment(item.id) }}
                    onPress2={() => { navigation.navigate('FiveStars', { id: item.id }) }}
                    appointment={item}
                    key={item.id}
                />}
                ListFooterComponent={() => {
                    islLoading ? <View style={{
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: 10,

                    }}> <ActivityIndicator size='large' color="#0000ff" /></View> : null
                }}
                onEndReached={() => {
                    setislLoading(true)
                    console.log(totalpage)
                    if (page <= totalpage) {
                        console.log('load')
                        setpage(page + 1)
                    }

                    setTimeout(() => {
                        setislLoading(false)
                    }, 10000)
                    console.log(islLoading)
                }}
                onEndReachedThreshold={0.1} />

        </View>
    </View>


}
export default Appointmentbyuser
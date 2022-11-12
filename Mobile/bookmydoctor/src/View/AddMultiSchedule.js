import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList, SafeAreaView
} from 'react-native'
import strftime from "strftime";
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from "react-native-date-picker";
import { weekdays } from "moment-timezone";
import getDaysOfWeekBetweenDates from "../utilies/getDaysBetweenTwoDates";
function AddMultiSchedule({ route, navigation },props) {
    let [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [open2, setOpen2] = useState(false)
    const [open, setOpen] = useState(false)
    const weekdays = [
        {
            id: 1,
            value: 'Monday',
            status: false
        },
        {
            id: 2,
            value: 'Tuesday',
            status: false
        },
        {
            id: 3,
            value: 'Wednesday',
            status: false
        },
        {
            id: 4,
            value: 'Thursday',
            status: false
        },
        {
            id: 5,
            value: 'Friday',
            status: false
        },
        {
            id: 6,
            value: 'Saturday',
            status: false
        },
        {
            id: 0,
            value: 'Sunday',
            status: false
        }
    ]
    const [weekdaysSubmit, setWeekDaysSubmit] = useState(weekdays
    )
    console.log(weekdaysSubmit)
    const [scheduleSubmit, setScheduleSubmit] = useState(
        [
            {
                id: 1,
                value: '07:00:00-08:00:00',
                status: false
            },
            {
                id: 2,
                value: '08:00:00-09:00:00',
                status: false
            },
            {
                id: 3,
                value: '09:00:00-10:00:00',
                status: false
            },
            {
                id: 4,
                value: '10:00:00-11:00:00',
                status: false
            },
            {
                id: 5,
                value: '11:00:00-12:00:00',
                status: false
            },
            {
                id: 6,
                value: '13:00:00-14:00:00',
                status: false
            },
            {
                id: 7,
                value: '14:00:00-15:00:00',
                status: false
            },
            {
                id: 8,
                value: '15:00:00-16:00:00',
                status: false
            },
            {
                id: 9,
                value: '16:00:00-17:00:00',
                status: false
            },
            {
                id: 10,
                value: '17:00:00-18:00:00',
                status: false
            }
        ]
    )
    const [cost, setCost] = useState('100000')

    useEffect(() => {
        const daysBetweenTwoDates = getDaysOfWeekBetweenDates(date, endDate)
        const weekdaysShow = []
        weekdays.forEach(element => {
            if (daysBetweenTwoDates.find(day => day === element.id) !== undefined)
                weekdaysShow.push(element)
        })
        setWeekDaysSubmit(weekdaysShow)
    }, [date, endDate])
    console.log(cost)
    return <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingEnd: 40,
            backgroundColor: '#00FFFF', borderRadius: 10
        }}>
            <Text style={{
                fontSize: 20,
                color: 'blue', paddingTop: 10,

            }}>Đặt lịch khám  </Text>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}
            ><Text style={{
                fontSize: 18,
                color: 'red', paddingTop: 10,

            }}>Hủy</Text></TouchableOpacity>
            

        </View>
        <View style={{
            flex: 7,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',


        }}>
            <Text>Từ</Text><View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>

                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{
                        fontSize: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5,
                        height: 40
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ><Text>{`  ${strftime('%d-%m-%Y', date)}`}</Text></TouchableOpacity>
                <Text></Text>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode='date'
                    onConfirm={
                        (date) => {
                            setOpen(false)
                            setDate(date)
                        }
                    }
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <Text>Đến</Text>
            <View style={{
                marginHorizontal: 10,
                paddingTop: 20
            }}>

                <TouchableOpacity
                    onPress={() => setOpen2(true)}
                    style={{
                        fontSize: 20,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5,
                        height: 40
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                // 
                ><Text>{`  ${strftime('%d-%m-%Y', endDate)}`}</Text></TouchableOpacity>
                <Text></Text>
                <DatePicker
                    modal
                    open={open2}
                    date={endDate}
                    mode='date'
                    onConfirm={(date) => {
                        setOpen2(false)
                        setEndDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        </View>
        <View style={{ flex: 20 }}>
            <Text> Ngày</Text>
            <FlatList
                numColumns={3}
                style={{
                    padding: 5
                }}
                data={weekdaysSubmit}
                keyExtractor={item=>item.value}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => {
                            let cloneweekday=weekdaysSubmit.map(s=>{
                                if(item.value==s.value){
                                   s.status=!s.status
                                   return s
                                }
                                return s
                            })
                            setWeekDaysSubmit(cloneweekday)
                        }}
                        style={{
                            justifyContent: 'center',
                            margin: 3,
                            alignItems: 'center',
                            width: 110, height: 40,
                            backgroundColor: item.status == true ? 'red' : '#8fbc8f',
                            borderRadius: 10
                        }}>
                        <Text style={{ fontSize: 18 }}>{item.value}</Text>
                    </TouchableOpacity>
                }}>

            </FlatList></View>
        <View style={{ flex: 40 }}>
            <Text> Khung giờ:</Text>
            <FlatList
                numColumns={2}
                style={{
                    padding: 5
                }}
                data={scheduleSubmit}
                keyExtractor={item=>item.value}
                renderItem={({ item }) => {
                    return item != null ? <TouchableOpacity
                        onPress={() => {
                            let cloneschedule=scheduleSubmit.map(s=>{
                                if(item.value==s.value){
                                   s.status=!s.status
                                   return s
                                }
                                return s
                            })
                            setScheduleSubmit(cloneschedule)
                        }}
                        style={{
                            justifyContent: 'center',
                            margin: 3,
                            alignItems: 'center',
                            width: 180, height: 40,
                            backgroundColor: item.status == true ? 'red' : '#8fbc8f',
                            borderRadius: 10
                        }}>
                        <Text style={{ fontSize: 14 }}>{item.value}</Text>
                    </TouchableOpacity> : ''
                }}>
            </FlatList>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text>Giá khám:</Text>
                <TextInput
                   onChangeText={(text) => { setCost(text) }}
                   value={cost}
                    style={{
                        fontSize: 16,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 3,
                        padding: 5, width: 150,
                    }}
                    placeholder=""
                    placeholderTextColor={'rgba(0,0,0,0.6'}
                ></TextInput>
            </View>
            <View style={{ flex: 10 }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        color: 'blue',
                        width: '40%',
                        borderRadius: 14,
                        opacity: 0.5,
                    }}>
                        <Text style={{
                        padding: 10,
                        fontSize: 18
                    }}>Tạo lịch khám </Text></TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
}
export default AddMultiSchedule
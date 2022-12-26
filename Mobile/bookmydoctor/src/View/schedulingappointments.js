import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native'
import strftime from "strftime";
import DatePicker from 'react-native-date-picker'
import scheduleApi from "../Api/scheduleApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
function Schedultments({  navigation },props) {
    const [schedul, setschedul] = useState([])
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const[ id,setid]=useState('')
    const deleteSchedule=async (id) => {
        try {
            tokens = await AsyncStorage.getItem('access_token')
            console.log(tokens)
          
            const d = await scheduleApi.deleteSchedule(id, {
                headers: {
                  
                    Authorization: tokens
                }
            })
            console.log(d)
            

        } catch (err) {
            console.log(err)
        }
    }
    const [reload,setreload]=useState(false)
    
    useEffect(() => {
        // let date = new Date(day)
        const valueSubmit = {
            startDate: new Date(strftime('%Y-%m-%dT00:00:00', date)).toISOString(),
            endDate: new Date(strftime('%Y-%m-%dT23:59:00', date)).toISOString(),
            size: 100,
            page: 0
        }
       
            ; (async () => {
                try {
                    d = await AsyncStorage.getItem('user')
                    m = JSON.parse(d)
                    iddoctor = m.iddoctor
                    setid(iddoctor)
                    const respone = await scheduleApi.getSchedule(
                        iddoctor,
                        {
                            params: { ...valueSubmit }
                        }
                    )
                    s = respone.schedules
                    k = s.map((course) => {

                        let st = {}
                        st.begin = course.begin
                        st.end = course.end
                        st.id = course.id
                        st.cost = course.cost
                        st.status = course.status
                        st.h = strftime('%d-%m-%YT%H:%M', new Date(course.begin)).split('T')[1] + '-' + strftime('%d-%m-%YT%H:%M', new Date(course.end)).split('T')[1]
                        return st

                    })
                    setschedul(k)
                
                } catch (err) {
                    console.log(err)
                }
            })()
         
    }, [date,reload])
    console.log(schedul)
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
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

            }}>Danh sách các lich hẹn </Text>
        </View>

        <View style={{ flex: 5, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <Text></Text>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                    fontSize: 18,
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 3,
                    padding: 5,
                    height: 40, width: 180
                }}
                placeholder=""
                placeholderTextColor={'rgba(0,0,0,0.6'}
            // 
            ><Text>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text></TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <TouchableOpacity
                 onPress={()=>{navigation.navigate('AddMultiSchedule',{id:id})}}
                style={{
                    backgroundColor: '#8fbc8f',
                    borderRadius: 10,
                    justifyContent: 'center',
                    height: 40, width: 150,
                    alignItems: 'center',
                }}>
                <Text>Thêm lịch khám mới</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 85 ,borderColor: 'black',
                borderWidth: 1}}>
        <View
                        onPress={() => {

                        }}
                        style={{
                            flexDirection:'row',
                            margin: 5,
                            borderRadius: 10
                        }}>
                        <Text style={{ fontSize: 14 ,marginEnd:30}}>  Khung giờ</Text>
                        <Text style={{ fontSize: 14,marginEnd:30 }}>  Giá khám</Text>
                        <Text style={{ fontSize: 14,marginEnd:30 }}> Tình Trạng</Text>
                        
                    </View>
            <FlatList
                numColumns={1}
                style={{
                    padding: 5,
                    
                }}
                data={schedul}
                renderItem={({ item }) => {
                    return <View
                        style={{
                            flexDirection:'row',
                            margin: 5,
                            borderRadius: 10,
                            paddingTop:5
                        }}>
                        <Text style={{ fontSize: 14 ,marginEnd:30}}>{item.h}</Text>
                        <Text style={{ fontSize: 14,marginEnd:30 }}>{item.cost} đ</Text>
                        <Text style={{ fontSize: 14,marginEnd:50 }}>{item.status==false?"Trống  ":"Có hẹn"}</Text>
                        {item.status==false?<TouchableOpacity
                    onPress={()=>{
                        setreload(!reload)
                        deleteSchedule(item.id)
                        alert('huy thanh cong')
                        
                    }}
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 15,
                        justifyContent: 'center',
                        height: 35,
                        width:55,
                        alignItems: 'center',
                    }}>
                    <Text>Hủy</Text>
                </TouchableOpacity>:<Text></Text>}
                    </View>
                }}>

            </FlatList>

        </View>
    </View>
}
export default Schedultments

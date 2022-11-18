import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView, FlatList,SafeAreaView
} from 'react-native'
import strftime from "strftime";
import { fontSizes, } from "../constants";
import doctorApi from "../Api/doctorapi";
import SelectDropdown from 'react-native-select-dropdown'
import scheduleApi from "../Api/scheduleApi";
import Icon from 'react-native-vector-icons/Ionicons' 
function Doctorbyid({ route, navigation }, props) {
    const { id } = route.params
    const [doctor, setdoctor] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const data = await doctorApi.getDetailDoctor(id)
                console.log(data)
                let d = {}
                d.id=data.message.user_id
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
    const t = new Date()
    const t2 = new Date()
    const t3 = new Date()
    t.setDate(t.getDate() + 1)
    t2.setDate(t2.getDate() + 2)
    t3.setDate(t3.getDate() + 3)
   
    const[day,setday]=useState(new Date())
    console.log(t)
    const countries = [strftime('%Y-%m-%d', t), , strftime('%Y-%m-%d', t2), strftime('%Y-%m-%d', t3)]
   
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
                    st.h= strftime('%d-%m-%YT%H:%M',new Date(course.begin)).split('T')[1]+'-'+strftime('%d-%m-%YT%H:%M',new Date(course.end)).split('T')[1]
                    return st}
                    else return null
                })
               
                setschedules(k)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [day])
    // console.log(schedules)
    return <SafeAreaView 
    style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View style={{
            backgroundColor: '#ffffcc',
            justifyContent: "center",
            alignItems: 'center',
            flex: 40,
            paddingTop: 10,
            borderRadius:10,
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
           <View  style={{flexDirection:'row'}}> 
            <Text style={{fontSize:18}}>Hỏi bác sỹ :</Text>
           <TouchableOpacity onPress={()=>{navigation.navigate('Messenger',{doctor:doctor})}}><Icon name="chatbubble-ellipses" size={30} color={'blue'} style={{paddingLeft:20,padding:6
        
        }}/></TouchableOpacity>
           </View>
        </View>

        <View style={{
            flex: 5,
        }}>
            <View style={{
                flexDirection: 'row',
                paddingStart: 10
            }}><Text style={{ fontSize: 20 }}>Chọn ngày  :</Text>
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
            flex: 47,padding:5,
            borderRadius:15,
            backgroundColor:'#FFDAB9'
        }}> 
            <Text style={{
                paddingVertical:10
            }}> Ngày {strftime('%d-%m-%Y', day)} có Khung giờ khám:</Text>
            <FlatList 
            numColumns={3}
            style={{
                padding:5
            }}
            data={schedules}
            renderItem={({item})=>{
                return item !=null?<TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('BookAppointment',{id:item.id})
                }}
                style={{
                  justifyContent:'center',
                  margin:3,
                  alignItems:'center',
                    width:110,height:60,
                    backgroundColor:'#8fbc8f',
                    borderRadius:10
                }}>
                    <Text style={{fontSize:fontSizes.h6}}>{item.h}</Text>
                    <Text style={{fontSize:fontSizes.h6}}>Giá: {item.cost} đ</Text>
                </TouchableOpacity>:''
            }}>

            </FlatList>

            
        </View>
        <View style={{
            flex: 8,
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <Text>Dia chi :{doctor.clinic}</Text>
            <Text>{doctor.address}</Text>
        </View>
    </SafeAreaView>

}
function FiveStars(props){
    const {numberofstart}=props
    // item<=numberofstart-1
    return <View style={{
        flexDirection:'row'
    }}>{ [0,1,2,3,4].map(item=><Icon name="star" style={{marginEnd:5}} size={25} color={
        item<=numberofstart-1?
        'orange':'#B0C4DE'}/>)}</View>
}
export default Doctorbyid
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import strftime from "strftime";
import AsyncStorage from '@react-native-async-storage/async-storage';
import appointmentApi from "../Api/appointmentApi";
function Appointmentinfor({ route, navigation },props){
    const { id } = route.params
    const [user,setuser]=useState([])
    useEffect (()=>{
        (async () => {
            try {
                tokens = await AsyncStorage.getItem('access_token')
                console.log(tokens)
                // settoken(tokens)
                const data = await appointmentApi.getAppointment(id, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: tokens
                    }
                })
                datas=data.message
              
                let s={}
                s.iduser=datas.patient.user_id
                s.symptoms=datas.symptoms
                s.name=datas.patient.user.firsname+" "+datas.patient.user.lastname
                s.phoneNumber=datas.patient.user.phoneNumber
                s.birthday=strftime('%d-%m-%Y', new Date(datas.patient.user.birthday))
                s.image=datas.patient.user.image
                s.address=datas.patient.user.address
                s.email=datas.patient.user.email
                if(datas.patient.user.gender=="2"){
                    s.gender='NAM'
                }
                else{
                    s.gender='NỮ'
                }
                s.date= strftime('%d-%m-%YT%H:%M:%S', new Date(datas.schedule.begin)).split('T')[0]
                s.cost=datas.schedule.cost
                s.time= strftime('%d-%m-%YT%H:%M', new Date(datas.schedule.begin)).split('T')[1]+"-"+ strftime('%d-%m-%YT%H:%M', new Date(datas.schedule.end)).split('T')[1]
               setuser(s)
            } catch (err) {
                console.log(err)
            }
        })()
    },[])
    console.log(user)
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
       
    }}>Thông tin cuộc hẹn  </Text>
    <Text>Da chap nhan</Text>
</View>
<View style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor:'#87CEEB',
          
        }}><Image
            source={{ uri: user.image}} style={{
                width: 120,
                height: 120,
                alignItems: 'center', borderRadius: 50
            }}>
            </Image>         
        </View>
<View style={{flex:55 ,justifyContent:'space-around'}}>
    <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
        <View style={{flexDirection:'column'}}>
            <Text>Họ tên</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.name}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <Text>Số điện thoại</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.phoneNumber}</Text>
        </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
        <View style={{flexDirection:'column'}}>
            <Text>Email</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.email}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <Text>Địa chỉ</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.address}</Text>
        </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
        <View style={{flexDirection:'column'}}>
            <Text>Ngày sinh</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.birthday}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <Text>Giới tính</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.gender}</Text>
        </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
        <View style={{flexDirection:'column'}}>
            <Text>Ngày khám</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.date}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <Text>Thời gian</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 170,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.time}</Text>
        </View>
    </View>
    <View style={{flexDirection:'column', marginStart:20}}>
            <Text>Giá khám</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 350,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.cost}</Text>
        </View>                    
        <View style={{flexDirection:'column', marginStart:20}}>
            <Text>Triệu chứng</Text>
            <Text
                        style={{
                            fontSize: 16,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 5, width: 350,
                        }}
                        placeholder=""
                        placeholderTextColor={'rgba(0,0,0,0.6'}
                    >{user.symptoms}</Text>
        </View>                                 
</View>
<View style={{flex:15, marginTop:20}}>
    <TouchableOpacity 
    onPress={()=> navigation.goBack()}
    style={{ 
               backgroundColor: '#00ced1',
               justifyContent: 'center',
               alignItems: 'center',
               width: '40%',
               alignSelf: 'center',
               color: 'blue',
               borderRadius: 14,  
                }}>
        <Text style={{fontSize:20}}>Trở về</Text>
    </TouchableOpacity>
</View>
</View>

}
export default Appointmentinfor
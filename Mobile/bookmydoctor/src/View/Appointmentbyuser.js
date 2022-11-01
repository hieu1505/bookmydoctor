import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,FlatList
} from 'react-native';
import userApi from "../Api/UserApi";
import RadioGroup from 'react-native-radio-buttons-group';
import { fontSizes, images } from "../constants";
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'
import Appointmentitem from "./Appointmentitem";
function Appointmentbyuser(props){
 const [appointment,setappointment]=useState([{
    id:1,
    name:"Thị Hoài Ana",
    img:"https://res.cloudinary.com/drotiisfy/image/upload/v1666169735/profiles/i0bfkk0omdzzzofzhdfp.jpg",
    begin:"2022-10-27T13:42:43.000Z",
    end: "2022-10-31T19:45:00.000Z",
    cost: 100000,
 },
 {
    id:2,
    name:"Thị Hoài An",
    img:"https://res.cloudinary.com/drotiisfy/image/upload/v1666169735/profiles/i0bfkk0omdzzzofzhdfp.jpg",
    begin:"2022-10-27T13:42:43.000Z",
    end: "2022-10-31T19:45:00.000Z",
    cost: 100000,
 },
 {
    id:3,
    name:"Thị Hoàai An",
    img:"https://res.cloudinary.com/drotiisfy/image/upload/v1666169735/profiles/i0bfkk0omdzzzofzhdfp.jpg",
    begin:"2022-10-27T13:42:43.000Z",
    end: "2022-10-31T19:45:00.000Z",
    cost: 100000,
 }
])
   

return <View style={{ flex: 1, backgroundColor: 'white' }}>

<View style={{

        flex:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingEnd: 40,
        backgroundColor:'#00FFFF'

    }}>
        <Text style={{
            fontSize: 20,
            color: 'blue', paddingTop: 10
        }}>Danh sach cac cuoc hen </Text>
    </View>
    <View style={{
        flex:90
    }}>
        <FlatList 
           data={appointment}
           renderItem={({item})=><Appointmentitem 
           onPress={()=>{ }}
           appointment={item} key={item.id}
           />} />
    
    </View>
    </View>
    

}
export default Appointmentbyuser
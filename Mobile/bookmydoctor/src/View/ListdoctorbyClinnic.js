import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, FlatList
} from 'react-native'
import { fontSizes } from '../constants'
import Doctoritem from "./Doctoritem";
import Icon from 'react-native-vector-icons/FontAwesome'
import clinicApi from "../Api/clinicApi";

function ListdoctorbyClinnic({ route, navigation }, props){
    const { id } = route.params
    const [doctors, setdoctors] = useState([])
    const [name,setname]=useState('')
    
    useEffect(() => {
        (async () => {
            try {
                const data = await clinicApi.getDetailClinic(id)
                setname(data.message.name)
                doctor = data.message.doctors
                l = doctor.map((course) => {
                    let s = {}
                    s.id = course.id
                //     s.clinic = course.clinic.name
                //     s.name = course.user.firsname + course.user.lastname
                //     s.image = course.user.image
                //     s.specialty = course.specialty.name
                    return s
                })
                setdoctors(l)
            } catch (err) {
                alert(err)
            }
        })()
    }, [])
    console.log(doctors)
    const [searchtext,setsearchtext]=useState('')
    // 
// return <View style={{ flex: 1, backgroundColor: 'white' }}>
// <View>
// <View style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingEnd: 40,

//     }}><TouchableOpacity
//         onPress={() => {
//             navigation.navigate('UITab')
//         }}
//     ><Icon name='close'
//         size={35} color={'black'}
//         style={{
//             top: 10,
//             left: 20
//         }}></Icon></TouchableOpacity>

//         <Text style={{
//             fontSize: 18,
//             color: 'blue', paddingTop: 10,
//             paddingStart:30
//         }}>Cac bac sy Khoa: {name}</Text>
//     </View>
//     <View style={{
//         height: 50,
//         marginHorizontal: 10,
//         marginTop: 20,
//         flexDirection: 'row',
//         alignItems: 'center'

//     }}><Icon name='search'
//         size={20} color={'black'}
//         style={{
//             position: 'absolute',
//             top: 10,
//             left: 10
//         }}></Icon>
//         <TextInput autoCorrect={false}
//             onChangeText={(text) => {
//                 setsearchtext(text)
//             }}
//             style={{
//                 paddingStart: 30,
//                 height: 40,
//                 flex: 1,
//                 marginEnd: 10,
//                 borderRadius: 5,
//                 opacity: 0.5
//             }} />
//     </View>
//     <View style={{ height: 1, backgroundColor: 'black' }}></View>
// </View>
// {filltereddoctor().length > 0 ? <FlatList
//     data={filltereddoctor()}
//     renderItem={({ item }) => <Doctoritem
//         onPress={() => { navigation.navigate('Doctorbyid',{id:item.id})  }}
//         doctor={item} key={item.id}
//     />}
// /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
//     <Text style={{ color: 'black', fontSize: fontSizes.h3 }}>no doctor found</Text>
// </View>}
// </View>

}

export default ListdoctorbyClinnic
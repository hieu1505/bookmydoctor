import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, FlatList
} from 'react-native'
import { fontSizes, } from "../constants";
import Doctoritem from "./Doctoritem";
import Icon from 'react-native-vector-icons/FontAwesome'
import doctorApi from "../Api/doctorapi";
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Doctorbyid({ route, navigation }, props) {
    const { id } = route.params
    console.log(id)
    const [doctor,setdoctor]=useState({})
    useEffect(() => {
        (async () => {
            try { 
               
                const data = await doctorApi.getDetailDoctor(id)
              
                let d={}
                d.description=data.message.description
                d.specialty=data.message.specialty.name
                d.img=data.message.user.image
                d.name=data.message.user.firsname+data.message.user.lastname
                d.clinic=data.message.clinic.name
                d.address=data.message.clinic.street+','+data.message.clinic.city
                // console.log(d)
                setdoctor(d)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    const t= new Date()
    const t2= new Date()
    const t3= new Date()
    t.setDate(t.getDate()+1)
    t2.setDate(t2.getDate()+2)
    t3.setDate(t3.getDate()+3)
    console.log(t)
    const countries = [t.toLocaleDateString('fr-CA'), t2.toLocaleDateString('fr-CA'), t3.toLocaleDateString('fr-CA')]
    console.log(doctor)
    return <ScrollView style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View style={{
            backgroundColor:'#ffffcc',
            justifyContent: "center",
            alignItems: 'center',
            flex: 15,
            paddingTop: 10,
            
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
                <Text style={{fontSize:20}}>{doctor.name}</Text>
                <Text style={{
                    
                    fontSize: 15
                }}> {doctor.description}
                    
                </Text>
                <Text style={{
                    paddingEnd: 10,
                    fontSize: 15
                }}>Khoa:{doctor.specialty}</Text>
            </View>
        </View>
        
        <View style={{flex:5,
        }}>
            <View style={{
                flexDirection:'row',
                paddingStart:10
            }}><Text style={{fontSize:20}}>Chon ngay :</Text>
            < SelectDropdown 
     data={countries}
     onSelect={(selectedItem, index) => {
         console.log(selectedItem, index)
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
            flex:65
        }}></View>
        <View style={{
            flex: 10,
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <Text>Dia chi :{doctor.clinic}</Text>
            <Text>{doctor.address}</Text>
        </View>
    </ScrollView>

}
export default Doctorbyid
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    
    TouchableOpacity,
    TextInput,FlatList
} from "react-native";
import { fontSizes } from '../constants'
// import DoctorList from "./DoctorList";
import Icon from 'react-native-vector-icons/EvilIcons'
import Doctoritem from "./Doctoritem";
import doctorApi from "../Api/doctorapi";
import specialistApi from "../Api/specialistApi";
function Home({navigation},props) {
    const [chuyenkhoa , setchuyenkhoa] = useState([])
    const [doctors, setdoctors] = useState([])
    const [idck,setidck]=useState(null)
     useEffect(() => {
        (async () => {
            try {
                const data = await specialistApi.getAllSpecialist()
                Specia=data.message
                let d={
                    id:0,
                    name:'Tat ca',
                    img:'asdads',
                }
                s=Specia.map((course)=>{
                    let k={}
                    k.id=course.id
                    k.name=course.name
                    k.img=course.image
                    return k
                })
                
                setchuyenkhoa(s)
            } catch (err) {
                alert(err)
            }
        })()
        
        
    }, [])
     useEffect(() => {
        
        (async () => {
            try {
            
                if(idck==null){const data = await doctorApi.getAllDoctor()
                    doctor=data.doctor
                    l=doctor.map((course)=>{
                        let s={}
                        s.id=course.id
                        s.clinic=course.clinic.name
                        s.name=course.user.firsname+course.user.lastname
                        s.image=course.user.image
                        s.specialty=course.specialty.name
                        return s
                    })}
                    else{
                        const data = await specialistApi.getDetailSpecialist(idck)
                        doctor = data.message.doctors  
                        l = doctor.map((course) => {
                            let s = {}
                            s.id = course.id
                            s.clinic = course.clinic.name
                            s.name = course.user.firsname + course.user.lastname
                            s.image = course.user.image
                            s.specialty = course.specialty.name
                            return s  
                        })
                    }

                setdoctors(l)
               
            } catch (err) {
                console.log(err)
            }
        })()
       
    }, [idck,doctors])
    
    const [searchtext,setsearchtext]=useState('')
    const filltereddoctor=()=>doctors.filter(doctor=>doctor.name.toLowerCase()
    .includes(searchtext.toLowerCase()))

    return <View style={{ flex: 100, backgroundColor: 'white' }}>
        <View style={{
            flex: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingStart: 10,
            paddingEnd: 10
        }}><TouchableOpacity onPress={()=>{
            navigation.navigate('Tabbar')
        }}><Icon name='navicon' size={50} color={'black'} /></TouchableOpacity>
            
            <Image source={require('../img/logoApp.png')} style={{ width: 180, height: 30 }} />
            
        </View>
        
        <View style={{
            flex: 80,
        }}>
           <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <View style={{
                height:50,
                marginHorizontal:10,
                marginTop:10,
                flexDirection:'row',
                alignItems:'center'

            }}>
                <Icon name='search'
                size={25} color={'black'}
                style={{
                    position:'absolute',
                    top:10,
                    left:5
                }}></Icon>
                <TextInput autoCorrect={false}
                onChangeText={(text)=>{
                    setsearchtext(text)
                }}
                style={{
                   paddingStart:30,
                    height:40,
                    flex:1,
                    marginEnd:10,
                    borderRadius:5,
                    opacity:0.5
                }} />
            </View>
            <View style={{
                height:100
            }}>
            <View style={{height:1,backgroundColor:'black'}}></View>
           <FlatList 
           horizontal
           data={chuyenkhoa}
           keyExtractor={item=>item.name}
           renderItem={({item})=>{
            return <TouchableOpacity 
            onPress={()=>{
                setidck(item.id)
            }}
            style={{
              justifyContent:'center',
              alignItems:'center',
                width:100,height:100
            }}>
                <Image style={{
                    width:30,height:30,
                    resizeMode:'cover',
                    margin:10
                }} source={{uri:item.img}}></Image>
                <Text style={{fontSize:fontSizes.h6}}>{item.name}</Text>
            </TouchableOpacity>
           }}
           ></FlatList>
            <View style={{height:1,backgroundColor:'black'}}></View>
            </View>
            </View>
            {filltereddoctor().length>0?<FlatList 
           data={filltereddoctor()}
           renderItem={({item})=><Doctoritem 
           onPress={()=>{ navigation.navigate('Doctorbyid',{id:item.id})}}
           doctor={item} key={item.id}
           />}
           /> :<View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
            <Text style={{color:'black',fontSize:fontSizes.h3}}>no doctor found</Text>
           </View> }
    </View>
        </View>
    </View>
}
export default Home
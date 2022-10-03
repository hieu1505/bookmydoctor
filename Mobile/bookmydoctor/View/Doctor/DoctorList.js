import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,ScrollView, FlatList

} from 'react-native'
import { fontSizes, images } from "../../constants";
import Doctoritem from "./Doctoritem";
import Icon from 'react-native-vector-icons/FontAwesome'

function DoctorList(props) {
    const [chuyenkhoa , setchuyenkhoa] = useState([
        {
            name:'tim mach',
            img:images.doctorbg 
        },
        {
            name:'ham mat',
            img:images.doctorbg 
        },
        {
            name:'noi tiet',
            img:images.doctorbg 
        },
        {
            name:'dinh duong',
            img:images.doctorbg 
        },
        {
            name:'mat',
            img:images.doctorbg 
        }
    ])

    const [doctors, setdoctors] = useState([
        {
            name: 'hieu', clinic: 'phong kham bach khoa',
            specialty: "ngoai",
            image: images.doctorbg
        },
        {
            name: 'hieu', clinic: 'phong kham bach khoa',
            specialty: "ngoai",
            image: images.doctorbg
        },
        {
            name: 'nga', clinic: 'phong kham bach khoa',
            specialty: "ngoai",
            image: images.doctorbg
        },
        {
            name: 'toan', clinic: 'phong kham bach khoa',
            specialty: "ngoai",
            image: images.doctorbg
        },
        {
            name: 'hai', clinic: 'phong kham ung thu',
            specialty: "ngoai",
            image: images.doctorbg
        },
        {
            name: 'hieu', clinic: 'phong kham bach khoa',
            specialty: "ngoai",
            image: images.doctorbg
        }
    ])
    const [searchtext,setsearchtext]=useState('')
    const filltereddoctor=()=>doctors.filter(doctor=>doctor.name.toLowerCase()
    .includes(searchtext.toLowerCase()))
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <View style={{
                height:50,
                marginHorizontal:10,
                marginTop:10,
                flexDirection:'row',
                alignItems:'center'
               
            }}>
                <Icon name='search'
                size={15} color={'black'}
                style={{
                    position:'absolute',
                    top:10,
                    left:10
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
            <Icon name="rocket" color="#eee" size={30} />
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
            return <TouchableOpacity style={{
              justifyContent:'center',
              alignItems:'center',
                width:100,height:100
            }}>
                <Image style={{
                    width:50,height:50,
                    resizeMode:'cover',
                    borderRadius:25,margin:10
                }} source={item.img}></Image>
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
           onPress={()=>{alert('doctor name : ${doctor.name}') 
           console.log(item.name)}}
           doctor={item} key={item.name}
           />}
           /> :<View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
            <Text style={{color:'black',fontSize:fontSizes.h3}}>no doctor found</Text>
           </View> }
    </View>
}
export default DoctorList
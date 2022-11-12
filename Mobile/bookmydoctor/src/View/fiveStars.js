import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';
import appointmentApi from "../Api/appointmentApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointmentitem from "./Appointmentitem";
function FiveStars({ route, navigation },props){
    const { id } = route.params
    console.log(id)
    const [rating,setrating]=useState(2)
    const [maxrating,setmaxrating]=useState([1,2,3,4,5])
    const starImg='https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    const starImgcolor='https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const CustomRatingBAr=()=>{
        return(
            <View style={{justifyContent:'center',
            flexDirection:'row',
            marginTop:30}}>
               {maxrating.map((item,key)=>{
                    return(
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={()=>setrating(item)}
                        
                        
                        >
                            <Image style={{width:40,
                            height:40,
                        resizeMode:'cover'}}
                            source={item<=rating?{uri:starImgcolor}:{uri:starImg}}/>
                        </TouchableOpacity>
                    )
                })} 
            </View>
        )
    }
return <View style={{flex:1,
padding:10,justifyContent:'center'}}><Text style={{textAlign:'center',fontSize:23,marginTop:20}}>Đánh giá bác sỹ</Text>
<CustomRatingBAr></CustomRatingBAr>
<Text style={{textAlign:'center',fontSize:23,marginTop:20}}>{rating+' / '+maxrating.length}</Text>
<TouchableOpacity activeOpacity={0.7}
style={{justifyContent:'center',
alignItems:'center',marginTop:30,
padding:15,
backgroundColor:'green'}}
onPress={()=>alert(rating)}>

<Text>Danh gia</Text>
</TouchableOpacity>
</View>
}

export default FiveStars
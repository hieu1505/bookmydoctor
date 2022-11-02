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
function Appointmentitem(props) {
    let {namedoctor,begin,end,cost,status
    }=props.appointment
    let opres = props.onPress
    let date=strftime('%d-%m-%YT%H:%M:%S',new Date(begin)).split('T')[0]
    let h= strftime('%d-%m-%YT%H:%M:%S',new Date(begin)).split('T')[1]+'-'+strftime('%d-%m-%YT%H:%M:%S',new Date(end)).split('T')[1]
   console.log(h)
    return <View
        style={{
            flex: 1,
            height: 80,
            paddingLeft: 10,
            flexDirection: 'row',
            borderRadius:5,
            backgroundColor:"F0FFF"
        }}>

        <View style={{
            //  padding:10,
            paddingStart: 5,
            flex: 70,
            marginRight: 10
        }}>
            <Text style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold'
            }}> Bác sĩ : {namedoctor}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <View style={{
                flexDirection:'row',
                paddingEnd:10
            }}>

                <Text style={{
                    fontSize: 12,
                    color: 'black',paddingEnd:15
                }}>
                    Ngày khám :{date}
                </Text>
                <Text style={{
                    fontSize: 12,
                    color: 'black'
                }}>
                    giờ:{h}
                </Text></View>
                <View style={{
                flexDirection:'row',
                paddingEnd:10
            }}>

                <Text style={{
                    fontSize: 12,
                    color: 'black',paddingEnd:15
                }}>
                    Giá tiền: {cost} đ
                </Text>
                <Text style={{
                    fontSize: 12,
                    color: 'black'
                }}>
                    Trang thái :{status}
                </Text></View>


        </View>
        <TouchableOpacity style={{
            backgroundColor:'red',
            borderRadius:15,
            justifyContent: 'center',
            height: 45,
            
            alignItems: 'center',
            flex: 20
        }}>
            <Text> huy</Text>
        </TouchableOpacity>

    </View>
}
export default Appointmentitem
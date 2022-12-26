import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
   
} from 'react-native'
import strftime from "strftime";
import Icon from 'react-native-vector-icons/FontAwesome' 
function Appointmentitem(props) {
    let { name, begin, end, cost, status,rating
    } = props.appointment
    let opres = props.onPress
    let opres2 = props.onPress2
    let date = strftime('%d-%m-%YT%H:%M:%S', new Date(begin)).split('T')[0]
    let h = strftime('%d-%m-%YT%H:%M:%S', new Date(begin)).split('T')[1] + '-' + strftime('%d-%m-%YT%H:%M:%S', new Date(end)).split('T')[1]

    return <View
        style={{
            flex: 1,
            height: 120,
            paddingLeft: 10,
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: "F0FFF"
        }}>
        <View style={{
            //  padding:10,
            paddingStart: 5,
            flex: 70,
            marginRight: 10
        }}>
            <Text style={{
                color: '#BDB76B',
                fontSize: 16,
                fontWeight: 'bold'
            }}> {name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <View style={{
                paddingEnd: 10
            }}>
                <Text style={{
                    fontSize: 12,
                    color: 'black', paddingEnd: 15
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
                flexDirection: 'row',
                paddingEnd: 10 
            }}>
                <Text style={{
                    fontSize: 12,
                    color: 'black', paddingEnd: 15
                }}>
                    Giá tiền: {cost} đ
                </Text>
                <Text style={{
                    fontSize: 12,
                    color: 'black'
                }}>
                    Trang thái :{status}
                </Text></View>
                {status=='DONE'&&rating!=null?<View style={{width:30,flexDirection:'row'}}>
                    <FiveStars numberofstart={rating} />
                </View>:<View></View>}
        </View>
        <View style={{
            flex: 20, padding: 5,
            marginend: 5, justifyContent: 'space-evenly'
        }}>
            {status == 'NEW' ?
                <TouchableOpacity
                    onPress={opres}
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 15,
                        justifyContent: 'center',
                        height: 30,
                        alignItems: 'center',
                    }}>
                    <Text> huy</Text>
                </TouchableOpacity>
                : <Text></Text>}
{status == 'DONE'&&rating==null ?
                <TouchableOpacity
                    onPress={opres2}
                    style={{
                        backgroundColor: '#FFDAB9',
                        borderRadius: 15,
                        justifyContent: 'center',
                        height: 30,
                        alignItems: 'center',
                    }}>
                    <Text>Danh gia</Text>
                </TouchableOpacity>
                : <Text></Text>}
        </View>
    </View>
}
function FiveStars(props){
    const {numberofstart}=props
    // item<=numberofstart-1
    return  [0,1,2,3,4].map((item,index)=><Icon key={index} name="star" style={{marginEnd:5}} size={25} color={
        item<=numberofstart-1?
        'orange':'#B0C4DE'}/>)
}
export default Appointmentitem

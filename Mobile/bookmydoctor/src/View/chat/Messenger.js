import React, { useEffect, useState, useContext } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, FlatList
} from 'react-native';
import { SocketContext } from '../../a';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome5";
import UIHeader from "./UIHeader";
import Messengeritem from "./Messengeritem";
import messageApi from "../../Api/messageApi"
function Messenger({ route, navigation },props){
    const socket = useContext(SocketContext)
    const {id,img,name}=route.params.doctor
    const[iduser,setiduser]=useState('')
     const [chathistory,setchathistory]=useState([])
    useEffect(() => {(async () => {  
        try {
            d = await AsyncStorage.getItem('user')
            k = JSON.parse(d)
            setiduser(k.id)
            const respone = await messageApi.getMessage({
                from_user: id,
                to_user: k.id,
                page: 0
            })
          data=respone.messages
          t=data.map((course)=>{
            let message={}
            message.messenger=course.text
            if(course.from_user==id){
                message.isSender=true
                message.url=img
            }
            else{
                message.isSender=false
                message.url=k.image
            }
            return message

          })
          console.log(t)
          setchathistory(respone.messages)
        }
        catch (err) {
            console.log(err)
        }
    })()},[])
    const[mess,setmess]=useState('')
    const handleSendMess = (mess) => {
        if (mess === '') return
        const valueSubmit = {
            from_user: iduser,
            to_user: id,
            text: mess,
            image: ''
        }
        const formData = new FormData()
        for (let key in valueSubmit) {
            formData.append(key, valueSubmit[key])
        }
        (async () => {
            try {
                token = await AsyncStorage.getItem('access_token')
                const respone = await messageApi.addMessage(formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: token
                    }
                })
                setmess('')
                const valueSocket = {
                    to_user: respone.message.to_user,
                    text: respone.message.text,
                    from_user: respone.message.from_user,
                    date: respone.message.date,
                    image:  respone.message.image
                }
                // handleDeleteImg()
                socket.emit('addMessage', valueSocket)
                // setMessage('')
                if (chathistory.length > 19) {
                    const arrTemp = [...chathistory, respone.message]
                    arrTemp.splice(0, 1)
                    setchathistory(arrTemp)
                }
                else {
                    setchathistory([...chathistory, respone.message])
                }
                // if (!listUserChat.find (user => user.id === userReceive.id))
                //     getListUserChat()
            }
            catch (err) {
                return err.message
            }
        })()
    }
    useEffect(() => {
        socket.on('addMessageToClient', msg => {
            const userReceiveId = id
            console.log('msg', msg)
            if (msg.from_user === userReceiveId) {
                console.log('chathistory arr', chathistory)
                if (chathistory.length > 19) {
                    
                    const arrTemp = [...chathistory, msg]
                    arrTemp.splice(0, 1)
                    setchathistory(arrTemp)
                }
                else {
                    setchathistory([...chathistory, msg])
                }
            }
        })

        return () => socket.off('addMessageToClient')
    }, [socket])
    // console.log('chat', chathistory)
   return <View style={{
    flexDirection:'column',
    flex:1
   }}>
    <UIHeader title={name}
    lefIconname={'arrow-left'}
    rightIconname={'ellipsis-v'}
    onpresslefIcon={()=>{
        navigation.goBack()
    }}
    onpressrightIcon={()=>{   
    }}
    />
 
    <FlatList 
           data={chathistory.sort((item, item1) => item.id - item1.id)}
           renderItem={({item})=>< Messengeritem
           id={id}
           user={item} key={item.id}
           />}
           />
           <View style={{
                height:50,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
            <TextInput
            onChangeText={(text)=>
            setmess(text)}
            value={mess}
            style={{ fontSize: 20,
                color:'black',
            paddingStart:20,
            backgroundColor:'#C0C0C0',
            borderRadius:10,
        width:340}}
            placeholder="hihi"
            placeholderTextColor={'rgba(0,0,0,0.6'}
        ></TextInput>
        <TouchableOpacity onPress={
        ()=>{ if(mess!=''){
            handleSendMess(mess)
            } 
        }}><Icon name="paper-plane" size={23} color={'red'} style={{padding:10}}/></TouchableOpacity>
        </View>
    </View>
}

export default Messenger
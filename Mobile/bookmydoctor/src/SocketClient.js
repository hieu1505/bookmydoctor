import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SocketContext } from './a';
function SocketClient() {
    const socket = useContext(SocketContext)
    useEffect(() => {
        const getuser = async () => {
            try {
                d = await AsyncStorage.getItem('user')
                accesstoken=await AsyncStorage.getItem('access_token')
                user = JSON.parse(d)
                const userSubmit = { _id: user.id }
                socket.emit('joinUser', userSubmit)
                socket.on('getUsers', users => console.log(users))
            } catch (e) {
                console.log(e)
            }
        }
        getuser()
    }, [])
    return <></>
}

export default SocketClient

import { createContext, React, useEffect, useMemo } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import { io } from 'socket.io-client'
// import SocketClient from 'SocketClient'
import AppTab from './navigation/App'
import SocketClient from './SocketClient'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SocketContext = createContext()
function App() {
    // const token = localStorage.getItem('access_token')
    // const { user } = useSelector(state => state)
    // const dispatch = useDispatch()
    const token = AsyncStorage.getItem('access_token')
    const socket = useMemo(() => io('https://bookmydoctor.onrender.com', { transports: ['websocket'],forceNew: true}), [])
    return (
        <SocketContext.Provider value={socket}>
            <AppTab/>
        </SocketContext.Provider>

    )
}

export default App
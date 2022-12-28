import React from "react";
import { Login, Dangky, User,Doctorbyid, ChangePassword,Forgotpassword 
     ,Tabbar,TabDoctor,TabSpecial,BookAppointment,
     Listdoctorbyspecial,ListdoctorbyClinnic,Appointmentinfor,
     AddMultiSchedule,
     Messenger,
    FiveStars,Img} from "../View"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UITab from "./UITab";
import UITabdoctor from "./UITabdoctor";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
function AppTab(props) {
 
// let token = await AsyncStorage.getItem("token");

    return (
        // <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Dangky" component={Dangky} />
                    <Stack.Screen name="UITab" component={UITab} />
                    <Stack.Screen name="UITabdoctor" component={UITabdoctor} />
                    <Stack.Screen name="User" component={User} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
                    <Stack.Screen name="Tabbar" component={Tabbar} />
                    <Stack.Screen name="TabDoctor" component={TabDoctor} />
                    <Stack.Screen name="TabSpecial" component={TabSpecial} />
                    <Stack.Screen name="Doctorbyid" component={Doctorbyid} />
                    <Stack.Screen name="ListdoctorbyClinnic" component={ListdoctorbyClinnic} />
                    <Stack.Screen name="Listdoctorbyspecial" component={Listdoctorbyspecial} />
                    <Stack.Screen name="BookAppointment" component={BookAppointment} />
                    <Stack.Screen name="Appointmentinfor" component={Appointmentinfor} />
                    <Stack.Screen name="FiveStars" component={FiveStars} />
                    <Stack.Screen name="AddMultiSchedule" component={AddMultiSchedule} />
                    <Stack.Screen name="Messenger" component={Messenger} />
                    <Stack.Screen name="Img" component={Img} />
                </Stack.Navigator>
            </NavigationContainer>
        // </Provider>
    )
}
export default AppTab

import React from "react";
import { Login, Dangky, User, Wellcome, Home, ChangePassword, Appointmentbyuser,Schedultments,Appointmentbydoctor } from "../View"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppTab from "./App";
import Icon2 from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOption = ({ route }) => ({


    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name;
        let iconName
       
        if (screenName == "Thông Báo") {
            iconName = "bell"
        }
        if (screenName == "Lịch Kham") {
            iconName = "list-alt"
        }
        if (screenName == "lên lịch hẹn") {
            iconName = "wpforms"
        }
        if (screenName == "Cá Nhân") {
            iconName = "user"
        }
        return <Icon2
            name={iconName}
            size={23}
            color={focused ? 'blue' : 'black'}
        />
    }
})
function UI() {
}
function UITabdoctor(props) {
    return (
        <Tab.Navigator screenOptions={screenOption} >
            <Tab.Screen name="Lịch Kham" component={Appointmentbydoctor} options={{unmountOnBlur: true} }/>
            <Tab.Screen name="Thông Báo" component={Home} />
            <Tab.Screen name="lên lịch hẹn" component={Schedultments} options={{unmountOnBlur: true} }/>
            <Tab.Screen name="Cá Nhân" component={User} options={{unmountOnBlur: true} }/>
        </Tab.Navigator>
    )
}
export default UITabdoctor
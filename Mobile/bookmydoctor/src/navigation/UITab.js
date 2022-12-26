import React from "react";
import {  User, Home, Appointmentbyuser, Chat,Notification } from "../View"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocketClient from "../SocketClient";
import Icon2 from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();
const screenOption = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name;
    let iconName
    if (screenName == "Trang Chủ") {
      iconName = "home"
    }
    if (screenName == "Thông Báo") {
      iconName = "bell"
    }
    if (screenName == "Lịch Hẹn") {
      iconName = "list-alt"
    }
    if (screenName == "Cộng Đồng") {
      iconName = "comments"
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
function UITab(props) {
  return (<>
    <SocketClient />
    <Tab.Navigator screenOptions={screenOption} >
      <Tab.Screen name="Trang Chủ" component={Home} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Thông Báo" component={Notification} options={{unmountOnBlur: true} } />
      <Tab.Screen name="Lịch Hẹn" component={Appointmentbyuser} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Cộng Đồng" component={Chat} options={{ unmountOnBlur: true }}/>
      <Tab.Screen name="Cá Nhân" component={User} options={{ unmountOnBlur: true }} />
    </Tab.Navigator>
  </>
  )
}
export default UITab
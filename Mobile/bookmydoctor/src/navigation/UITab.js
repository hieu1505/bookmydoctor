import React from "react";
import {Login,Dangky,User,Wellcome,Home,ChangePassword}from "../View"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppTab from "./App";
import Icon2 from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOption =({route})=>({
 

  headerShown:false,
  tabBarIcon:({focused,color,size})=>{
    let screenName=route.name;
    let iconName
    if(screenName=="Trang Chủ"){
      iconName="home"
    }
    if(screenName=="Thông Báo"){
      iconName="bell"
    }
    if(screenName=="Lịch Hẹn"){
      iconName="list-alt"
    }
    if(screenName=="Cộng Đồng"){
      iconName="comments"
    }
    if(screenName=="Cá Nhân"){
      iconName="user"
    }
    return <Icon2
    name={iconName}
    size={23}
    color={focused?'blue':'black'}
    />
  }
})
function UI(){
}
function UITab(props){
return  (
      <Tab.Navigator  screenOptions={screenOption} > 
        <Tab.Screen name="Trang Chủ" component={Home} />
        <Tab.Screen name="Thông Báo" component={Home} />
        <Tab.Screen name="Lịch Hẹn" component={Home} />
       <Tab.Screen name="Cộng Đồng" component={Home} />
        <Tab.Screen name="Cá Nhân" component={User} />
      </Tab.Navigator>
)
}
export default UITab
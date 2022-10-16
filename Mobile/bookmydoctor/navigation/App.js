import React from "react";
import {Login,Dangky,User,Wellcome}from "../View"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UITab from "./UITab";
const Stack = createNativeStackNavigator();
function AppTab(props){
return (
<NavigationContainer  independent={true}>
<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>  
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Dangky" component={Dangky} />
<Stack.Screen name="UITab" component={UITab} />
</Stack.Navigator>
</NavigationContainer>
)}
export default AppTab
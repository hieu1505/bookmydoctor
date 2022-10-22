import React from "react";
import { Login, Dangky, User, Wellcome, ChangePassword,Forgotpassword } from "../View"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Provider } from "react-redux";
// import store from '../redux/Store'
import UITab from "./UITab";
const Stack = createNativeStackNavigator();
function AppTab(props) {
    return (
        // <Provider store={store}>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Dangky" component={Dangky} />
                    <Stack.Screen name="UITab" component={UITab} />
                    <Stack.Screen name="User" component={User} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
                </Stack.Navigator>
            </NavigationContainer>
        // </Provider>
    )
}
export default AppTab
///qmk
//tasbar
//doctor
//mat hien mk
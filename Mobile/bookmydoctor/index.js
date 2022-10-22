/**
 * @format
 */
 import {AppRegistry} from 'react-native';
 import {Login,Dangky,Wellcome,User,ChangePassword,Forgotpassword,Home,DoctorList} from './src/View'
//  import UITab from './navigation/UITab';
 import {name as appName} from './app.json'; 
//  import Clinicitem from './src/component/Clinicitem'
import AppTab from './src/navigation/App'
 AppRegistry.registerComponent(appName, ()=>() =><AppTab/>)


 
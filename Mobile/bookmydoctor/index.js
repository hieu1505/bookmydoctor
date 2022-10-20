/**
 * @format
 */
 import {AppRegistry} from 'react-native';
 import {Login,Dangky,Wellcome,User,ChangePassword,Forgotpassword,Home,DoctorList} from './View'
//  import UITab from './navigation/UITab';
 import {name as appName} from './app.json'; 
 import Clinicitem from './component/Clinicitem'
import AppTab from './navigation/App'
 AppRegistry.registerComponent(appName, ()=>() =><AppTab/>)


 
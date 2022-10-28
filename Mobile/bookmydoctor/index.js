/**
 * @format
 */
 import {AppRegistry} from 'react-native';
 import {Login,Dangky,Wellcome,User,ChangePassword,Forgotpassword,Home,DoctorList,Tabbar,TabSpecial,TabDoctor} from './src/View'
//  import UITab from './navigation/UITab';
 import {name as appName} from './app.json'; 
//  import Clinicitem from './src/component/Clinicitem'
import Doctoritem from './src/component/Doctoritem';
import Specialistitem from './src/component/specialistitem';
import AppTab from './src/navigation/App'
 AppRegistry.registerComponent(appName, ()=>() =><AppTab/>)


 